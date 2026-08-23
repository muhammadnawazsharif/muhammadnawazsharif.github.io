/**
 * Simple Pendulum & SHM Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class PendulumSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.length = 2.0;    // m
    this.amplitude = 25;  // deg
    this.damping = 0.005; // damping coeff
    this.gravity = 9.8;   // m/s^2

    this.isPlaying = true;
    this.theta = (this.amplitude * Math.PI) / 180;
    this.omega = 0;
    this.dt = 0.03;
    this.trail = [];
  }

  setParams(params) {
    if (params.length !== undefined) this.length = Number(params.length);
    if (params.amplitude !== undefined) {
      this.amplitude = Number(params.amplitude);
      this.theta = (this.amplitude * Math.PI) / 180;
      this.omega = 0;
    }
    if (params.damping !== undefined) this.damping = Number(params.damping);
    this.trail = [];
    this.calculateMetrics();
  }

  reset() {
    this.theta = (this.amplitude * Math.PI) / 180;
    this.omega = 0;
    this.trail = [];
    this.calculateMetrics();
  }

  play() { this.isPlaying = true; }
  pause() { this.isPlaying = false; }

  calculateMetrics() {
    const period = 2 * Math.PI * Math.sqrt(this.length / this.gravity);
    const frequency = 1 / period;
    
    // Approximate Total Energy for mass = 1kg
    const mass = 1.0;
    const h = this.length * (1 - Math.cos(this.theta));
    const v = this.length * this.omega;
    const pe = mass * this.gravity * h;
    const ke = 0.5 * mass * v * v;
    const totalEnergy = pe + ke;

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        period: `${period.toFixed(2)} s`,
        frequency: `${frequency.toFixed(2)} Hz`,
        totalEnergy: `${totalEnergy.toFixed(2)} J`
      });
    }

    return { period, frequency, pe, ke };
  }

  step() {
    if (this.isPlaying) {
      // Angular acceleration: alpha = -(g/L)*sin(theta) - damping*omega
      const alpha = -(this.gravity / this.length) * Math.sin(this.theta) - this.damping * this.omega;
      this.omega += alpha * this.dt;
      this.theta += this.omega * this.dt;
    }

    this.calculateMetrics();
    this.render();
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    const pivotX = w / 2;
    const pivotY = 50;

    // Scale string length to canvas
    const pixelLength = (this.length / 5.0) * (h - 140) + 80;
    const bobX = pivotX + pixelLength * Math.sin(this.theta);
    const bobY = pivotY + pixelLength * Math.cos(this.theta);

    // Trail
    this.trail.push({ x: bobX, y: bobY });
    if (this.trail.length > 40) this.trail.shift();

    if (this.trail.length > 1) {
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < this.trail.length; i++) {
        if (i === 0) ctx.moveTo(this.trail[i].x, this.trail[i].y);
        else ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.stroke();
    }

    // Pivot mount
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 2;
    ctx.fillRect(pivotX - 30, pivotY - 10, 60, 10);
    ctx.strokeRect(pivotX - 30, pivotY - 10, 60, 10);

    // String
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(bobX, bobY);
    ctx.stroke();

    // Center Reference Line (dashed)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(pivotX, pivotY + pixelLength + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // Bob
    ctx.fillStyle = '#0066ff';
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00d2ff';
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(bobX, bobY, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Velocity Vector
    const velMagnitude = this.omega * pixelLength * 0.15;
    const velAngle = this.theta + (this.omega >= 0 ? Math.PI / 2 : -Math.PI / 2);
    const vx = velMagnitude * Math.cos(velAngle);
    const vy = velMagnitude * Math.sin(velAngle);

    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bobX, bobY);
    ctx.lineTo(bobX + vx, bobY + vy);
    ctx.stroke();
  }
}
