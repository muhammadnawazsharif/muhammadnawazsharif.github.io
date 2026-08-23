/**
 * Projectile Motion Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class ProjectileSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.velocity = 45; // m/s
    this.angle = 45;    // deg
    this.gravity = 9.8; // m/s^2

    this.isPlaying = true;
    this.time = 0;
    this.dt = 0.035;
    this.trail = [];
    this.isLanded = false;
  }

  setParams(params) {
    if (params.velocity !== undefined) this.velocity = Number(params.velocity);
    if (params.angle !== undefined) this.angle = Number(params.angle);
    if (params.gravity !== undefined) this.gravity = Number(params.gravity);
    this.reset();
  }

  reset() {
    this.time = 0;
    this.trail = [];
    this.isLanded = false;
    this.calculateMetrics();
  }

  play() {
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  calculateMetrics() {
    const rad = (this.angle * Math.PI) / 180;
    const v0x = this.velocity * Math.cos(rad);
    const v0y = this.velocity * Math.sin(rad);

    const flightTime = (2 * v0y) / this.gravity;
    const maxHeight = (v0y * v0y) / (2 * this.gravity);
    const range = v0x * flightTime;

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        maxHeight: `${maxHeight.toFixed(1)} m`,
        range: `${range.toFixed(1)} m`,
        flightTime: `${flightTime.toFixed(2)} s`
      });
    }

    return { flightTime, maxHeight, range, v0x, v0y };
  }

  step() {
    const { flightTime, v0x, v0y } = this.calculateMetrics();

    if (this.isPlaying && !this.isLanded) {
      this.time += this.dt;
      if (this.time >= flightTime) {
        this.time = flightTime;
        this.isLanded = true;
      }
    }

    const rad = (this.angle * Math.PI) / 180;
    const currentX = v0x * this.time;
    const currentY = v0y * this.time - 0.5 * this.gravity * this.time * this.time;
    const currentVy = v0y - this.gravity * this.time;

    this.trail.push({ x: currentX, y: currentY });
    if (this.trail.length > 500) this.trail.shift();

    this.render(currentX, currentY, v0x, currentVy);
  }

  render(currentX, currentY, vx, vy) {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Ground Plane
    const groundY = h - 50;
    const startX = 60;

    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(w, groundY);
    ctx.stroke();

    // Scale calculation
    const maxFlightRange = (this.velocity * this.velocity) / this.gravity;
    const scale = Math.min((w - 120) / Math.max(maxFlightRange, 50), (h - 100) / 60);

    // Theoretical Trajectory Curve
    const rad = (this.angle * Math.PI) / 180;
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    for (let px = 0; px <= w - 100; px += 2) {
      const realX = px / scale;
      const realY = realX * Math.tan(rad) - (this.gravity * realX * realX) / (2 * this.velocity * this.velocity * Math.cos(rad) * Math.cos(rad));
      if (realY < 0) break;
      const screenX = startX + realX * scale;
      const screenY = groundY - realY * scale;
      if (px === 0) ctx.moveTo(screenX, screenY);
      else ctx.lineTo(screenX, screenY);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Actual Motion Trail
    if (this.trail.length > 1) {
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < this.trail.length; i++) {
        const sx = startX + this.trail[i].x * scale;
        const sy = groundY - this.trail[i].y * scale;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    // Launch Cannon Platform
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#0066ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(startX, groundY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cannon Barrel
    const barrelLen = 28;
    const bx = startX + Math.cos(rad) * barrelLen;
    const by = groundY - Math.sin(rad) * barrelLen;
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(startX, groundY);
    ctx.lineTo(bx, by);
    ctx.stroke();

    // Projectile Ball
    const screenX = startX + currentX * scale;
    const screenY = groundY - currentY * scale;

    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(screenX, screenY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Velocity Vector Arrow
    if (!this.isLanded) {
      const vScale = 0.5;
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(screenX, screenY);
      ctx.lineTo(screenX + vx * vScale, screenY - vy * vScale);
      ctx.stroke();

      // Arrowhead
      const vAngle = Math.atan2(-vy, vx);
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.moveTo(screenX + vx * vScale, screenY - vy * vScale);
      ctx.lineTo(
        screenX + vx * vScale - 8 * Math.cos(vAngle - Math.PI / 6),
        screenY - vy * vScale - 8 * Math.sin(vAngle - Math.PI / 6)
      );
      ctx.lineTo(
        screenX + vx * vScale - 8 * Math.cos(vAngle + Math.PI / 6),
        screenY - vy * vScale - 8 * Math.sin(vAngle + Math.PI / 6)
      );
      ctx.fill();
    }
  }
}
