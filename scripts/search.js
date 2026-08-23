/**
 * Global Search Palette (Ctrl+K / ⌘K)
 * Muhammad Nawaz Sharif - Academic Portfolio
 */

import { physicsTopics } from '../data/physicsTopics.js';
import { handwrittenNotes } from '../data/handwrittenNotes.js';
import { resourcesData } from '../data/resourcesData.js';
import { articlesData } from '../data/articlesData.js';
import { studentPortalData } from '../data/studentPortalData.js';

export class GlobalSearch {
  constructor() {
    this.palette = document.getElementById('search-palette');
    this.input = document.getElementById('search-input');
    this.resultsContainer = document.getElementById('search-results');
    this.openBtn = document.getElementById('btn-open-search');
    this.closeBtn = document.getElementById('search-close-btn');

    this.searchIndex = this.buildIndex();
    this.bindEvents();
  }

  buildIndex() {
    const items = [];

    // Physics Topics
    physicsTopics.forEach(t => {
      items.push({
        type: 'Physics Topic',
        title: t.title,
        subtitle: `${t.category} • ${t.formula}`,
        action: () => {
          this.close();
          if (window.appModal) window.appModal.openTopicModal(t);
        }
      });
    });

    // Handwritten Notes
    handwrittenNotes.forEach(n => {
      items.push({
        type: 'Handwritten Notes',
        title: n.title,
        subtitle: `${n.classLevel} • ${n.subtitle}`,
        action: () => {
          this.close();
          if (window.appModal) window.appModal.openNoteLightbox(n);
        }
      });
    });

    // Resources
    resourcesData.forEach(r => {
      items.push({
        type: 'Learning Resource',
        title: r.title,
        subtitle: `${r.category} • ${r.format}`,
        action: () => {
          this.close();
          const targetEl = document.getElementById('resources-section');
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Articles
    articlesData.forEach(a => {
      items.push({
        type: 'Academic Article',
        title: a.title,
        subtitle: `${a.category} • ${a.readTime}`,
        action: () => {
          this.close();
          if (window.appModal) window.appModal.openArticleModal(a);
        }
      });
    });

    // Formulas
    studentPortalData.formulaSheet.forEach(cat => {
      cat.items.forEach(item => {
        items.push({
          type: 'Formula',
          title: item.name,
          subtitle: `${cat.category} • ${item.formula}`,
          action: () => {
            this.close();
            if (window.appModal) window.appModal.openFormulaModal(studentPortalData.formulaSheet);
          }
        });
      });
    });

    return items;
  }

  bindEvents() {
    // Keyboard shortcut Ctrl+K or Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      }
      if (e.key === 'Escape' && this.palette && this.palette.classList.contains('active')) {
        this.close();
      }
    });

    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.input) {
      this.input.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }
  }

  toggle() {
    if (this.palette && this.palette.classList.contains('active')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.palette) return;
    this.palette.classList.add('active');
    if (this.input) {
      this.input.value = '';
      this.input.focus();
    }
    this.renderResults(this.searchIndex.slice(0, 6));
  }

  close() {
    if (!this.palette) return;
    this.palette.classList.remove('active');
  }

  handleSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      this.renderResults(this.searchIndex.slice(0, 6));
      return;
    }

    const filtered = this.searchIndex.filter(item => {
      return item.title.toLowerCase().includes(q) ||
             item.subtitle.toLowerCase().includes(q) ||
             item.type.toLowerCase().includes(q);
    });

    this.renderResults(filtered);
  }

  renderResults(results) {
    if (!this.resultsContainer) return;
    this.resultsContainer.innerHTML = '';

    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
          No matching physics topics, notes, or formulas found.
        </div>
      `;
      return;
    }

    results.forEach((res, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'search-result-item';
      if (idx === 0) itemEl.classList.add('highlighted');

      itemEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <div style="font-size: 0.875rem; font-weight: 600;">${res.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${res.subtitle}</div>
        </div>
        <span class="search-result-meta">${res.type}</span>
      `;

      itemEl.addEventListener('click', () => res.action());
      this.resultsContainer.appendChild(itemEl);
    });
  }
}
