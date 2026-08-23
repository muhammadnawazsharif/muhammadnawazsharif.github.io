/**
 * Animations & Visual Effects
 * Interactive Hero Physics Particle Background & Scroll Reveals
 */

export class AnimationEffects {
  constructor() {
    this.canvas = document.getElementById('hero-particle-canvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.symbols = ['E = mc²', 'F = ma', 'λ = h/p', '∑', 'π', 'Δ', '∇ × B', 'PV = NkT', 'ω = 2πf', '∫', 'ℏ', 'G', 'c'];
      this.mouse = { x: null, y: null, radius: 120 };
      this.initHeroCanvas();
      this.initParticles();
      this.startParticleLoop();
    }

    this.initScrollReveal();
    this.initCounters();
  }

  initHeroCanvas() {
    const resize = () => {
      if (!this.canvas) return;
      this.canvas.width = this.canvas.offsetWidth || window.innerWidth;
      this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  initParticles() {
    this.particles = [];
    const count = Math.min(Math.floor((this.canvas.width * this.canvas.height) / 24000), 45);
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        symbol: this.symbols[Math.floor(Math.random() * this.symbols.length)],
        size: Math.random() * 5 + 11,
        opacity: Math.random() * 0.4 + 0.15,
        color: Math.random() > 0.4 ? '#38bdf8' : '#818cf8'
      });
    }
  }

  startParticleLoop() {
    const loop = () => {
      const ctx = this.ctx;
      const w = this.canvas.width;
      const h = this.canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw subtle particle symbols & node connections
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Mouse interaction (subtle repel)
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.mouse.radius) {
            const force = (this.mouse.radius - dist) / this.mouse.radius;
            p.x += (dx / dist) * force * 2;
            p.y += (dy / dist) * force * 2;
          }
        }

        // Draw symbol
        ctx.font = `600 ${p.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.symbol, p.x, p.y);

        // Draw connections between close particles
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.strokeStyle = '#00d2ff';
            ctx.globalAlpha = (1 - dist / 110) * 0.12;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  initCounters() {
    const counters = document.querySelectorAll('.counter-num');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = Number(counter.getAttribute('data-target')) || 0;
          const duration = 1500;
          const startTime = performance.now();

          const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeProgress * target);
            counter.textContent = currentVal.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = target.toLocaleString();
            }
          };

          requestAnimationFrame(update);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
  }
}
