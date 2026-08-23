/**
 * Kinetic Theory of Gases Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class GasSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.temperature = 300;     // Kelvin
    this.numParticles = 50;     // molecule count

    this.isPlaying = true;
    this.particles = [];
    this.wallCollisions = 0;
    this.collisionTimer = 0;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    const w = this.canvas.width || 600;
    const h = this.canvas.height || 400;
    const padding = 20;

    const baseSpeed = Math.sqrt(this.temperature / 300) * 3;

    for (let i = 0; i < this.numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.7 + Math.random() * 0.6) * baseSpeed;
      this.particles.push({
        x: padding + Math.random() * (w - 2 * padding),
        y: padding + Math.random() * (h - 2 * padding),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 4.5,
        color: this.getParticleColor(speed)
      });
    }
  }

  getParticleColor(speed) {
    // Thermal color coding: faster particles are reddish/gold, slower are cyan/blue
    const norm = Math.min(speed / 6, 1);
    if (norm > 0.65) return '#f43f5e';
    if (norm > 0.4) return '#fbbf24';
    return '#00d2ff';
  }

  setParams(params) {
    if (params.temperature !== undefined) {
      this.temperature = Number(params.temperature);
      // Rescale particle velocities
      const scale = Math.sqrt(this.temperature / 300) * 3;
      this.particles.forEach(p => {
        const angle = Math.atan2(p.vy, p.vx);
        const speed = (0.7 + Math.random() * 0.6) * scale;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.color = this.getParticleColor(speed);
      });
    }
    if (params.numParticles !== undefined) {
      this.numParticles = Number(params.numParticles);
      this.initParticles();
    }
    this.calculateMetrics();
  }

  reset() {
    this.initParticles();
    this.wallCollisions = 0;
    this.calculateMetrics();
  }

  play() { this.isPlaying = true; }
  pause() { this.isPlaying = false; }

  calculateMetrics() {
    // PV = N k_B T => P = N * k_B * T / V
    const kB = 1.38e-23;
    const vRms = Math.sqrt((3 * 8.314 * this.temperature) / 0.028); // for N2 gas (approx)
    const pressureKPa = ((this.numParticles * this.temperature) / 120).toFixed(1);

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        pressure: `${pressureKPa} kPa`,
        vRms: `${vRms.toFixed(0)} m/s`,
        collisions: `${this.wallCollisions} / s`
      });
    }
  }

  step() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const pad = 15;

    if (this.isPlaying) {
      this.collisionTimer++;
      if (this.collisionTimer > 30) {
        this.collisionTimer = 0;
        this.wallCollisions = 0;
      }

      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Container boundary reflection
        if (p.x - p.radius <= pad) {
          p.x = pad + p.radius;
          p.vx *= -1;
          this.wallCollisions++;
        } else if (p.x + p.radius >= w - pad) {
          p.x = w - pad - p.radius;
          p.vx *= -1;
          this.wallCollisions++;
        }

        if (p.y - p.radius <= pad) {
          p.y = pad + p.radius;
          p.vy *= -1;
          this.wallCollisions++;
        } else if (p.y + p.radius >= h - pad) {
          p.y = h - pad - p.radius;
          p.vy *= -1;
          this.wallCollisions++;
        }
      });
    }

    this.calculateMetrics();
    this.render();
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const pad = 15;

    ctx.clearRect(0, 0, w, h);

    // Sealed Container Wall
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 3;
    ctx.strokeRect(pad, pad, w - 2 * pad, h - 2 * pad);

    // Inner chamber shading
    ctx.fillStyle = 'rgba(12, 18, 34, 0.6)';
    ctx.fillRect(pad, pad, w - 2 * pad, h - 2 * pad);

    // Render Gas Particles
    this.particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Small velocity trace
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - p.vx * 2, p.y - p.vy * 2);
      ctx.stroke();
    });
  }
}
