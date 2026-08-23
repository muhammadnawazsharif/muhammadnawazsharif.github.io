/**
 * Satellite Orbit & Gravitation Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class OrbitSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.altitude = 1200; // km
    this.massScale = 1.0; // scale factor of Earth Mass

    this.isPlaying = true;
    this.angle = 0;
    this.trail = [];
  }

  setParams(params) {
    if (params.altitude !== undefined) this.altitude = Number(params.altitude);
    if (params.massScale !== undefined) this.massScale = Number(params.massScale);
    this.trail = [];
    this.calculateMetrics();
  }

  reset() {
    this.angle = 0;
    this.trail = [];
    this.calculateMetrics();
  }

  play() { this.isPlaying = true; }
  pause() { this.isPlaying = false; }

  calculateMetrics() {
    const G = 6.674e-11;
    const MEarth = 5.972e24 * this.massScale;
    const REarth = 6.371e6; // 6371 km in meters
    const r = REarth + this.altitude * 1e3; // total radius in meters

    const orbitalSpeedMs = Math.sqrt((G * MEarth) / r);
    const orbitalSpeedKms = orbitalSpeedMs / 1000;
    const periodSeconds = (2 * Math.PI * r) / orbitalSpeedMs;
    const periodMinutes = periodSeconds / 60;
    const escapeSpeedKms = Math.sqrt((2 * G * MEarth) / REarth) / 1000;

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        orbitalSpeed: `${orbitalSpeedKms.toFixed(2)} km/s`,
        orbitalPeriod: `${periodMinutes.toFixed(1)} min`,
        escapeSpeed: `${escapeSpeedKms.toFixed(2)} km/s`
      });
    }

    return { orbitalSpeedKms, periodMinutes, r };
  }

  step() {
    const { orbitalSpeedKms, r } = this.calculateMetrics();

    if (this.isPlaying) {
      // Angular velocity omega = v / r
      const omega = (orbitalSpeedKms * 1e3) / r;
      this.angle += omega * 280; // visual speed multiplier
    }

    this.render();
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2;

    // Earth Base
    const earthRadius = 55;

    // Orbit Radius in pixels
    const maxAlt = 36000;
    const orbitRadiusPx = earthRadius + 25 + (this.altitude / maxAlt) * (Math.min(w, h) * 0.35);

    // Orbit Track (Dashed Cyan)
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, orbitRadiusPx, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Central Planet: Earth Visual
    const grad = ctx.createRadialGradient(centerX - 15, centerY - 15, 10, centerX, centerY, earthRadius);
    grad.addColorStop(0, '#38bdf8');
    grad.addColorStop(0.5, '#0284c7');
    grad.addColorStop(1, '#0f172a');

    ctx.fillStyle = grad;
    ctx.shadowColor = '#0284c7';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.arc(centerX, centerY, earthRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Atmospheric Glow
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Satellite Position
    const satX = centerX + orbitRadiusPx * Math.cos(this.angle);
    const satY = centerY + orbitRadiusPx * Math.sin(this.angle);

    // Satellite Trail
    this.trail.push({ x: satX, y: satY });
    if (this.trail.length > 25) this.trail.shift();

    if (this.trail.length > 1) {
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < this.trail.length; i++) {
        if (i === 0) ctx.moveTo(this.trail[i].x, this.trail[i].y);
        else ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.stroke();
    }

    // Gravitational Force Vector (Pointing towards Earth)
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(satX, satY);
    ctx.lineTo(satX - 30 * Math.cos(this.angle), satY - 30 * Math.sin(this.angle));
    ctx.stroke();

    // Satellite Body
    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(satX, satY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Solar panels
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(satX - 10, satY - 2, 5, 4);
    ctx.fillRect(satX + 5, satY - 2, 5, 4);

    // Velocity Vector (Tangent to orbit)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    const vx = -35 * Math.sin(this.angle);
    const vy = 35 * Math.cos(this.angle);
    ctx.beginPath();
    ctx.moveTo(satX, satY);
    ctx.lineTo(satX + vx, satY + vy);
    ctx.stroke();
  }
}
