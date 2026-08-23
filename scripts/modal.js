/**
 * Universal Accessible Modal & Lightbox Manager
 * Muhammad Nawaz Sharif - Academic Portfolio
 */

export class ModalManager {
  constructor() {
    this.backdrop = document.getElementById('global-modal-backdrop');
    this.container = document.getElementById('global-modal-container');
    this.header = document.getElementById('global-modal-header');
    this.title = document.getElementById('global-modal-title');
    this.body = document.getElementById('global-modal-body');
    this.footer = document.getElementById('global-modal-footer');
    this.closeBtn = document.getElementById('global-modal-close-btn');

    this.zoomLevel = 1.0;
    this.bindEvents();
  }

  bindEvents() {
    if (!this.backdrop) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.backdrop.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(titleText, bodyHTML, footerHTML = null) {
    if (!this.backdrop) return;

    this.title.textContent = titleText;
    this.body.innerHTML = bodyHTML;

    if (footerHTML) {
      this.footer.style.display = 'flex';
      this.footer.innerHTML = footerHTML;
    } else {
      this.footer.style.display = 'none';
      this.footer.innerHTML = '';
    }

    this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.backdrop) return;
    this.backdrop.classList.remove('active');
    document.body.style.overflow = '';
    this.zoomLevel = 1.0;
  }

  openNoteLightbox(note) {
    const title = `${note.title} • ${note.classLevel}`;
    const bodyHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <p style="margin: 0; color: var(--text-muted); font-size: 0.875rem;">${note.subtitle}</p>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <button class="btn btn-icon btn-sm" id="btn-zoom-in" title="Zoom In">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </button>
            <button class="btn btn-icon btn-sm" id="btn-zoom-out" title="Zoom Out">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </button>
            <button class="btn btn-icon btn-sm" id="btn-zoom-reset" title="Reset Zoom">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
          </div>
        </div>

        <div class="lightbox-image-wrapper">
          <img src="${note.image}" alt="${note.title}" id="lightbox-zoom-target" style="transform-origin: center center; transition: transform 0.2s ease;" />
        </div>

        <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 0.9375rem; color: var(--accent-cyan); margin-bottom: 0.5rem;">Core Summary & Key Insights:</h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">${note.summary}</p>
        </div>
      </div>
    `;

    const footerHTML = `
      <a href="${note.downloadPdf}" download="Physics_Notes_${note.id}.pdf" class="btn btn-primary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        <span>Download Complete Notes PDF</span>
      </a>
      <button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>
    `;

    this.open(title, bodyHTML, footerHTML);

    // Bind zoom controls
    this.zoomLevel = 1.0;
    const img = document.getElementById('lightbox-zoom-target');
    const zoomIn = document.getElementById('btn-zoom-in');
    const zoomOut = document.getElementById('btn-zoom-out');
    const zoomReset = document.getElementById('btn-zoom-reset');

    if (zoomIn && img) {
      zoomIn.onclick = () => {
        this.zoomLevel = Math.min(this.zoomLevel + 0.25, 2.5);
        img.style.transform = `scale(${this.zoomLevel})`;
      };
    }
    if (zoomOut && img) {
      zoomOut.onclick = () => {
        this.zoomLevel = Math.max(this.zoomLevel - 0.25, 0.75);
        img.style.transform = `scale(${this.zoomLevel})`;
      };
    }
    if (zoomReset && img) {
      zoomReset.onclick = () => {
        this.zoomLevel = 1.0;
        img.style.transform = 'scale(1.0)';
      };
    }
  }

  openTopicModal(topic) {
    const title = `${topic.title} • ${topic.category}`;
    const conceptsList = topic.keyConcepts.map(c => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--accent-cyan);">▸</span><span>${c}</span></li>`).join('');
    const slosList = topic.slos.map(s => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--accent-emerald);">✓</span><span>${s}</span></li>`).join('');

    const bodyHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="background: var(--bg-card); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.35rem;">Primary Governing Equation</span>
          <div style="font-family: var(--font-mono); font-size: 1.25rem; color: #38bdf8; font-weight: 700;">${topic.formula}</div>
        </div>

        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.7;">${topic.description}</p>

        <div>
          <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Key Physics Concepts
          </h4>
          <ul style="padding-left: 0.5rem;">${conceptsList}</ul>
        </div>

        <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="font-size: 0.9375rem; color: var(--accent-emerald); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Student Learning Outcomes (SLOs)
          </h4>
          <ul style="padding-left: 0.5rem; margin: 0;">${slosList}</ul>
        </div>
      </div>
    `;

    const footerHTML = `
      <a href="#notes-section" onclick="window.appModal.close()" class="btn btn-primary btn-sm">View Handwritten Notes</a>
      <button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>
    `;

    this.open(title, bodyHTML, footerHTML);
  }

  openArticleModal(article) {
    const title = article.title;
    const bodyHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
          <span class="section-badge" style="margin: 0;">${article.category}</span>
          <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">${article.date} • ${article.readTime}</span>
        </div>
        <div class="article-body-content" style="line-height: 1.8; color: var(--text-secondary);">
          ${article.content}
        </div>
      </div>
    `;

    this.open(title, bodyHTML, `<button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>`);
  }

  openFormulaModal(formulaSheet) {
    const title = "Essential Physics Formula Reference Sheet";
    const sectionsHTML = formulaSheet.map(sec => `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1rem; color: var(--accent-cyan); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.4rem; margin-bottom: 0.75rem;">${sec.category}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
          ${sec.items.map(item => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem;">
              <div style="font-size: 0.8125rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">${item.name}</div>
              <div style="font-family: var(--font-mono); font-size: 0.875rem; color: #38bdf8; margin-bottom: 0.25rem;">${item.formula}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${item.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    this.open(title, `<div>${sectionsHTML}</div>`, `<button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>`);
  }
}
