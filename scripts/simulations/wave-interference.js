/**
 * Wave Propagation & Interference Simulation
 * Muhammad Nawaz Sharif - Physics Lab
 */

export class WaveSimulation {
  constructor(canvas, onMetricsUpdate) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onMetricsUpdate = onMetricsUpdate;

    this.frequency = 1.0;   // Hz
    this.amplitude = 35;    // px
    this.phaseShift = 0;    // deg

    this.isPlaying = true;
    this.time = 0;
    this.dt = 0.04;
  }

  setParams(params) {
    if (params.frequency !== undefined) this.frequency = Number(params.frequency);
    if (params.amplitude !== undefined) this.amplitude = Number(params.amplitude);
    if (params.phaseShift !== undefined) this.phaseShift = Number(params.phaseShift);
    this.calculateMetrics();
  }

  reset() {
    this.time = 0;
    this.calculateMetrics();
  }

  play() { this.isPlaying = true; }
  pause() { this.isPlaying = false; }

  calculateMetrics() {
    const wavelength = 120; // px
    const waveSpeed = this.frequency * wavelength;
    
    // Check interference state
    const normalizedPhase = ((this.phaseShift % 360) + 360) % 360;
    let state = "Partial Superposition";
    if (normalizedPhase < 15 || normalizedPhase > 345) state = "Constructive (Max)";
    else if (Math.abs(normalizedPhase - 180) < 15) state = "Destructive (Node)";

    if (this.onMetricsUpdate) {
      this.onMetricsUpdate({
        wavelength: `${(wavelength / 40).toFixed(1)} m`,
        waveSpeed: `${(waveSpeed / 40).toFixed(1)} m/s`,
        state: state
      });
    }
  }

  step() {
    if (this.isPlaying) {
      this.time += this.dt;
    }
    this.calculateMetrics();
    this.render();
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    const k = (2 * Math.PI) / 120; // wave number
    const omega = 2 * Math.PI * this.frequency;
    const phi = (this.phaseShift * Math.PI) / 180;

    const centerY1 = h * 0.25;
    const centerY2 = h * 0.50;
    const centerResult = h * 0.80;

    // Zero axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    [centerY1, centerY2, centerResult].forEach(y => {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    });

    // Wave 1 (Electric Blue)
    ctx.strokeStyle = '#0066ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < w; x += 3) {
      const y = centerY1 - (this.amplitude * 0.5) * Math.sin(k * x - omega * this.time);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Wave 2 (Gold Accent)
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < w; x += 3) {
      const y = centerY2 - (this.amplitude * 0.5) * Math.sin(k * x - omega * this.time + phi);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Resultant Superposition Wave (Cyan Glow)
    ctx.strokeStyle = '#00d2ff';
    ctx.lineWidth = 3.5;
    ctx.shadowColor = '#00d2ff';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    for (let x = 0; x < w; x += 3) {
      const y1 = (this.amplitude * 0.5) * Math.sin(k * x - omega * this.time);
      const y2 = (this.amplitude * 0.5) * Math.sin(k * x - omega * this.time + phi);
      const yTotal = centerResult - (y1 + y2);
      if (x === 0) ctx.moveTo(x, yTotal);
      else ctx.lineTo(x, yTotal);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Labels
    ctx.font = '11px JetBrains Mono';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Wave 1: y₁(x,t) = A sin(kx - ωt)', 16, centerY1 - 25);
    ctx.fillText('Wave 2: y₂(x,t) = A sin(kx - ωt + φ)', 16, centerY2 - 25);
    ctx.fillStyle = '#00d2ff';
    ctx.fillText('Superposition: y_total = y₁ + y₂', 16, centerResult - 35);
  }
}
