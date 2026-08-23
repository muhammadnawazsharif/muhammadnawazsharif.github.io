/**
 * Lorentz Force & Magnetic Deflection Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class LorentzSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.bField = 0.8;         // Tesla
    this.particleSpeed = 10;   // x10^5 m/s
    this.chargeSign = 1;       // +1 (Proton) or -1 (Electron)

    this.isPlaying = true;
    this.angle = 0;
    this.trail = [];
  }

  setParams(params) {
    if (params.bField !== undefined) this.bField = Number(params.bField);
    if (params.particleSpeed !== undefined) this.particleSpeed = Number(params.particleSpeed);
    if (params.chargeSign !== undefined) this.chargeSign = Number(params.chargeSign);
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
    // r = (m * v) / (q * B)
    const massProton = 1.67e-27;
    const qUnit = 1.6e-19;
    const vReal = this.particleSpeed * 1e5;
    const rMeters = (massProton * vReal) / (qUnit * this.bField);
    const rCm = rMeters * 100;
    
    // Cyclotron frequency f_c = (q * B) / (2 * pi * m)
    const fMHz = (qUnit * this.bField) / (2 * Math.PI * massProton * 1e6);
    const dir = this.chargeSign > 0 ? "Counter-Clockwise (Left-Hand Rule)" : "Clockwise (Negative Charge)";

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        gyroRadius: `${rCm.toFixed(1)} cm`,
        cyclotronFreq: `${fMHz.toFixed(1)} MHz`,
        deflectionDir: dir
      });
    }

    return { rCm, fMHz };
  }

  step() {
    if (this.isPlaying) {
      const angularSpeed = (0.05 * this.bField * this.particleSpeed) / 5;
      this.angle += angularSpeed * this.chargeSign;
    }
    this.calculateMetrics();
    this.render();
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const centerY = h / 2;

    // Magnetic Field B symbols: "x" (into the screen)
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.15)';
    ctx.lineWidth = 1;
    const spacing = 45;
    for (let x = 30; x < w; x += spacing) {
      for (let y = 30; y < h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(x - 4, y - 4);
        ctx.lineTo(x + 4, y + 4);
        ctx.moveTo(x + 4, y - 4);
        ctx.lineTo(x - 4, y + 4);
        ctx.stroke();
      }
    }

    // Scale orbit radius to screen
    const orbitRadius = Math.min(w, h) * 0.32 * (this.particleSpeed / 20) * (1 / Math.max(this.bField, 0.4));
    const safeRadius = Math.max(30, Math.min(orbitRadius, Math.min(w, h) * 0.42));

    // Circular Orbit Path (dashed)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, safeRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Particle Position
    const px = centerX + safeRadius * Math.cos(this.angle);
    const py = centerY + safeRadius * Math.sin(this.angle);

    this.trail.push({ x: px, y: py });
    if (this.trail.length > 50) this.trail.shift();

    if (this.trail.length > 1) {
      ctx.strokeStyle = this.chargeSign > 0 ? '#10b981' : '#f43f5e';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < this.trail.length; i++) {
        if (i === 0) ctx.moveTo(this.trail[i].x, this.trail[i].y);
        else ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.stroke();
    }

    // Magnetic Lorentz Force Vector (F_B towards center)
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px - 35 * Math.cos(this.angle), py - 35 * Math.sin(this.angle));
    ctx.stroke();

    // Particle Body
    ctx.fillStyle = this.chargeSign > 0 ? '#10b981' : '#f43f5e';
    ctx.shadowColor = this.chargeSign > 0 ? '#10b981' : '#f43f5e';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(px, py, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Charge symbol inside particle
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.chargeSign > 0 ? '+' : '–', px, py);

    // Velocity Vector (tangent)
    const vDir = this.chargeSign > 0 ? Math.PI / 2 : -Math.PI / 2;
    const vx = 35 * Math.cos(this.angle + vDir);
    const vy = 35 * Math.sin(this.angle + vDir);

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px + vx, py + vy);
    ctx.stroke();
  }
}
