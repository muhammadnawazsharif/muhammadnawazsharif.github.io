/**
 * Simulation Manager
 * Coordinates the Physics Visual Lab UI, controls, active simulation, and animation loop
 */

import { simulationsData } from '../../data/simulationsData.js';
import { ProjectileSimulation } from './projectile.js';
import { PendulumSimulation } from './pendulum-shm.js';
import { WaveSimulation } from './wave-interference.js';
import { OrbitSimulation } from './orbital-mechanics.js';
import { LorentzSimulation } from './lorentz-field.js';
import { GasSimulation } from './kinetic-gas.js';

export class SimulationManager {
  constructor() {
    this.canvas = document.getElementById('physics-lab-canvas');
    if (!this.canvas) return;

    this.activeSimId = 'projectile';
    this.simInstance = null;
    this.isPlaying = true;
    this.animFrameId = null;

    this.hudContainer = document.getElementById('lab-canvas-hud');
    this.controlsContainer = document.getElementById('lab-sliders-container');
    this.equationContainer = document.getElementById('lab-equation-container');
    this.playBtn = document.getElementById('sim-play-pause-btn');
    this.resetBtn = document.getElementById('sim-reset-btn');

    this.initCanvasSize();
    this.bindEvents();
    this.loadSimulation(this.activeSimId);
    this.startLoop();
  }

  initCanvasSize() {
    const container = this.canvas.parentElement;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const width = Math.floor(rect.width) || 680;
    const height = Math.floor(rect.height) || 440;

    this.canvas.width = width;
    this.canvas.height = height;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.initCanvasSize();
      if (this.simInstance && this.simInstance.reset) {
        this.simInstance.reset();
      }
    });

    // Lab Tab Switchers
    const tabButtons = document.querySelectorAll('.lab-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const simId = btn.getAttribute('data-sim-id');
        this.loadSimulation(simId);
      });
    });

    // Play/Pause
    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
          if (this.simInstance && this.simInstance.play) this.simInstance.play();
          this.playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg><span>Pause</span>`;
        } else {
          if (this.simInstance && this.simInstance.pause) this.simInstance.pause();
          this.playBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Play</span>`;
        }
      });
    }

    // Reset
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => {
        if (this.simInstance && this.simInstance.reset) {
          this.simInstance.reset();
        }
      });
    }
  }

  loadSimulation(simId) {
    this.activeSimId = simId;
    const simConfig = simulationsData.find(s => s.id === simId);
    if (!simConfig) return;

    this.initCanvasSize();

    // Instantiate simulation
    const onMetricsUpdate = (metrics) => this.renderHUD(metrics);

    switch (simId) {
      case 'projectile':
        this.simInstance = new ProjectileSimulation(this.canvas, onMetricsUpdate);
        break;
      case 'pendulum':
        this.simInstance = new PendulumSimulation(this.canvas, onMetricsUpdate);
        break;
      case 'wave':
        this.simInstance = new WaveSimulation(this.canvas, onMetricsUpdate);
        break;
      case 'orbit':
        this.simInstance = new OrbitSimulation(this.canvas, onMetricsUpdate);
        break;
      case 'lorentz':
        this.simInstance = new LorentzSimulation(this.canvas, onMetricsUpdate);
        break;
      case 'gas':
        this.simInstance = new GasSimulation(this.canvas, onMetricsUpdate);
        break;
      default:
        this.simInstance = new ProjectileSimulation(this.canvas, onMetricsUpdate);
    }

    this.renderControls(simConfig);
    this.renderEquation(simConfig);

    if (this.isPlaying && this.simInstance.play) this.simInstance.play();
    else if (!this.isPlaying && this.simInstance.pause) this.simInstance.pause();
  }

  renderControls(simConfig) {
    if (!this.controlsContainer) return;

    this.controlsContainer.innerHTML = `
      <div class="lab-panel-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>
        <span>Parameters</span>
      </div>
    `;

    simConfig.parameters.forEach(param => {
      const group = document.createElement('div');
      group.className = 'slider-group';
      group.innerHTML = `
        <div class="slider-header">
          <span>${param.label}</span>
          <span class="slider-value" id="val-${param.id}">${param.default} ${param.unit}</span>
        </div>
        <input 
          type="range" 
          class="sim-slider" 
          id="slider-${param.id}"
          min="${param.min}" 
          max="${param.max}" 
          step="${param.step}" 
          value="${param.default}"
        />
      `;

      const slider = group.querySelector('input');
      slider.addEventListener('input', (e) => {
        const val = e.target.value;
        const valDisplay = group.querySelector(`#val-${param.id}`);
        if (valDisplay) valDisplay.textContent = `${val} ${param.unit}`;
        
        if (this.simInstance && this.simInstance.setParams) {
          this.simInstance.setParams({ [param.id]: val });
        }
      });

      this.controlsContainer.appendChild(group);
    });
  }

  renderEquation(simConfig) {
    if (!this.equationContainer) return;

    const lines = simConfig.formulaLines || [];
    const linesHTML = lines.map(line =>
      `<div class="equation-calculated" style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary); padding: 3px 0; border-bottom: 1px solid var(--border-subtle);">${line}</div>`
    ).join('');

    this.equationContainer.innerHTML = `
      <div class="equation-card">
        <div class="lab-panel-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
          <span>Governing Equation</span>
        </div>
        <div class="equation-formula">${simConfig.formulaPrimary}</div>
        ${linesHTML ? `<div style="display: flex; flex-direction: column; gap: 2px; margin-top: 4px;">${linesHTML}</div>` : ''}
        <p style="font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5; margin: 6px 0 0;">${simConfig.description}</p>
      </div>
    `;
  }

  renderHUD(metrics) {
    if (!this.hudContainer) return;
    this.hudContainer.innerHTML = '';

    Object.entries(metrics).forEach(([key, val]) => {
      const metricBadge = document.createElement('div');
      metricBadge.className = 'hud-metric';
      metricBadge.innerHTML = `<span>${key}:</span><strong>${val}</strong>`;
      this.hudContainer.appendChild(metricBadge);
    });
  }

  startLoop() {
    const loop = () => {
      if (this.simInstance && this.simInstance.step) {
        this.simInstance.step();
      }
      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }
}
