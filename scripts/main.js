/**
 * Main Application Orchestrator
 * Muhammad Nawaz Sharif - Academic Portfolio Website
 */

import { profileData } from '../data/profileData.js';
import { physicsTopics } from '../data/physicsTopics.js';
import { handwrittenNotes } from '../data/handwrittenNotes.js';
import { resourcesData } from '../data/resourcesData.js';
import { articlesData } from '../data/articlesData.js';
import { galleryData } from '../data/galleryData.js';
import { studentPortalData } from '../data/studentPortalData.js';

import { ModalManager } from './modal.js';
import { GlobalSearch } from './search.js';
import { SimulationManager } from './simulations/simulation-manager.js';
import { AnimationEffects } from './animations.js';
import { ContactFormHandler } from './contact.js';

class App {
  constructor() {
    this.initTheme();
    this.initHeaderScroll();
    this.initMobileMenu();

    // Global Modal instance
    window.appModal = new ModalManager();

    // Render Data Components
    this.renderPhilosophy();
    this.renderTopics();
    this.renderHandwrittenNotes();
    this.renderResources();
    this.renderStudentPortal();
    this.renderArticles();
    this.renderGallery();

    // Initialize Systems
    this.search = new GlobalSearch();
    this.simulations = new SimulationManager();
    this.animations = new AnimationEffects();
    this.contact = new ContactFormHandler();

    this.initSmoothScrollSpy();
  }

  /* ==========================================================================
     Theme Switcher (Dark / Light Mode)
     ========================================================================== */
  initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('mns_theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('mns_theme', newTheme);
        this.updateThemeIcon(newTheme);
      });
    }
  }

  updateThemeIcon(theme) {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (!themeToggleBtn) return;
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }

  /* ==========================================================================
     Header & ScrollSpy
     ========================================================================== */
  initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const drawer = document.getElementById('mobile-menu-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          drawer.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }

  initSmoothScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.scrollY + 160;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  /* ==========================================================================
     Render Section Data
     ========================================================================== */
  renderPhilosophy() {
    const container = document.getElementById('philosophy-cards-container');
    if (!container) return;

    container.innerHTML = profileData.philosophy.map(item => `
      <div class="card reveal-on-scroll">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(0, 210, 255, 0.1); border: 1px solid var(--border-glass); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center;">
            ${item.icon}
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; color: var(--accent-cyan); letter-spacing: 0.1em;">${item.tag}</span>
        </div>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">${item.title}</h3>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.65; margin: 0;">${item.description}</p>
      </div>
    `).join('');
  }

  renderTopics() {
    const container = document.getElementById('physics-topics-container');
    if (!container) return;

    container.innerHTML = physicsTopics.map(topic => `
      <div class="card reveal-on-scroll topic-card" data-topic-id="${topic.id}">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(0, 102, 255, 0.15); border: 1px solid var(--border-glass); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center;">
            ${topic.icon}
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted); background: var(--bg-tertiary); padding: 3px 8px; border-radius: var(--radius-sm);">${topic.category}</span>
        </div>
        
        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">${topic.title}</h3>
        
        <div style="background: rgba(0, 0, 0, 0.25); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 6px 10px; margin-bottom: 0.75rem; font-family: var(--font-mono); font-size: 0.8125rem; color: #38bdf8;">
          ${topic.formula}
        </div>

        <p style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">${topic.description}</p>

        <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="window.app.openTopicDetails('${topic.id}')">
          <span>Explore Topic</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `).join('');
  }

  openTopicDetails(topicId) {
    const topic = physicsTopics.find(t => t.id === topicId);
    if (topic && window.appModal) {
      window.appModal.openTopicModal(topic);
    }
  }

  renderHandwrittenNotes() {
    const container = document.getElementById('handwritten-notes-container');
    if (!container) return;

    container.innerHTML = handwrittenNotes.map(note => `
      <div class="card reveal-on-scroll note-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div style="position: relative; height: 210px; overflow: hidden; background: #070b16; cursor: pointer;" onclick="window.app.openNoteLightbox('${note.id}')">
          <img src="${note.image}" alt="${note.alt || (note.title + ' - Author: Muhammad Nawaz Sharif - Lecturer')}" style="width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform 0.4s ease;" loading="lazy" />
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(7, 11, 22, 0.9) 100%);"></div>
          <span style="position: absolute; top: 12px; left: 12px; background: rgba(0, 102, 255, 0.85); backdrop-filter: blur(8px); color: #ffffff; padding: 3px 8px; border-radius: var(--radius-sm); font-size: 0.6875rem; font-family: var(--font-mono); font-weight: 600;">${note.classLevel}</span>
          <span style="position: absolute; top: 12px; right: 12px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); color: var(--accent-gold); border: 1px solid rgba(245, 158, 11, 0.4); padding: 3px 8px; border-radius: var(--radius-sm); font-size: 0.6875rem; font-family: var(--font-mono);">Lecturer Nawaz Sharif</span>
        </div>

        <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1;">
          <div style="font-size: 0.6875rem; font-family: var(--font-mono); color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.25rem;">${note.chapter} • Muhammad Nawaz Sharif - Lecturer</div>
          <h3 style="font-size: 1.0625rem; margin-bottom: 0.35rem; color: var(--text-primary); cursor: pointer;" onclick="window.app.openNoteLightbox('${note.id}')">${note.title}</h3>
          <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5; flex: 1;">${note.subtitle}</p>

          <div style="display: flex; gap: 0.5rem; margin-top: auto;">
            <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="window.app.openNoteLightbox('${note.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>View Notes</span>
            </button>
            <a href="${note.downloadPdf}" download="Physics_Notes_${note.id}.pdf" class="btn btn-primary btn-sm" style="padding: 0.45rem 0.75rem;" title="Download PDF Handout">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  openNoteLightbox(noteId) {
    const note = handwrittenNotes.find(n => n.id === noteId);
    if (note && window.appModal) {
      window.appModal.openNoteLightbox(note);
    }
  }

  renderResources(filterCategory = 'All') {
    const container = document.getElementById('resources-grid-container');
    const filterTabsContainer = document.getElementById('resource-filter-tabs');
    if (!container) return;

    // Filter Buttons
    if (filterTabsContainer && filterTabsContainer.children.length === 0) {
      const categories = ['All', 'Lecture Notes', 'Derivations', 'Numerical Problems', 'Conceptual Questions', 'MCQs', 'Exam Preparation', 'SLO-Based Learning'];
      filterTabsContainer.innerHTML = categories.map(cat => `
        <button class="btn btn-sm ${cat === 'All' ? 'btn-primary' : 'btn-secondary'} filter-btn" data-category="${cat}">
          ${cat}
        </button>
      `).join('');

      filterTabsContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          filterTabsContainer.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('btn-primary');
            b.classList.add('btn-secondary');
          });
          btn.classList.remove('btn-secondary');
          btn.classList.add('btn-primary');
          this.renderResources(btn.getAttribute('data-category'));
        });
      });
    }

    const filtered = filterCategory === 'All' 
      ? resourcesData 
      : resourcesData.filter(r => r.category === filterCategory);

    container.innerHTML = filtered.map(res => `
      <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent-cyan); background: rgba(0, 210, 255, 0.1); border: 1px solid var(--border-glass); padding: 3px 8px; border-radius: var(--radius-sm);">${res.category}</span>
            <span style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted);">${res.fileSize}</span>
          </div>

          <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary);">${res.title}</h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">${res.description}</p>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
          <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${res.format}</span>
          <a href="${res.downloadUrl}" download="${res.title}.pdf" class="btn btn-primary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  renderStudentPortal() {
    const container = document.getElementById('student-quick-cards-container');
    if (!container) return;

    container.innerHTML = studentPortalData.quickCards.map(item => `
      <div class="card reveal-on-scroll student-card" style="cursor: pointer;" onclick="window.app.handleStudentAction('${item.id}')">
        <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(0, 210, 255, 0.1); border: 1px solid var(--border-glass); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          ${item.icon}
        </div>
        <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--text-primary);">${item.title}</h3>
        <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">${item.description}</p>
        <span style="color: var(--accent-cyan); font-family: var(--font-heading); font-size: 0.8125rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
          ${item.actionText} →
        </span>
      </div>
    `).join('');
  }

  handleStudentAction(actionId) {
    if (actionId === 'stud-formulas') {
      window.appModal.openFormulaModal(studentPortalData.formulaSheet);
    } else if (actionId === 'stud-examtips') {
      window.appModal.open("Annual Board Exam Preparation Strategy", `
        <div style="line-height: 1.8; color: var(--text-secondary);">
          <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">1. Master the Core Derivations First</h4>
          <p>Intermediate physics examinations consistently test key derivations (Newton's universal gravitation, mass of Earth, variation of g, projectile motion, and terminal velocity). Practice drawing clear, well-labeled diagrams with sharp pencils alongside each mathematical proof.</p>
          <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">2. Systematic Numerical Presentation</h4>
          <p>Always structure your numerical responses in 4 explicit steps: <strong>Given Data</strong> (with SI units), <strong>Required</strong>, <strong>Formula Applied</strong>, and <strong>Step-by-Step Calculation with Final Units Boxed</strong>.</p>
          <h4 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">3. Time Allocation in Board Exams</h4>
          <p>Allocate 20 minutes for Section A (MCQs), 60 minutes for Section B (Short Conceptual Questions), and 80 minutes for Section C (Long Derivations & Numericals), leaving 20 minutes for thorough paper review.</p>
        </div>
      `, `<button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>`);
    } else if (actionId === 'stud-notes') {
      const el = document.getElementById('notes-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('resources-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  renderArticles() {
    const container = document.getElementById('articles-cards-container');
    if (!container) return;

    container.innerHTML = articlesData.map(art => `
      <div class="card reveal-on-scroll" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <span class="section-badge" style="margin: 0; padding: 2px 8px; font-size: 0.6875rem;">${art.category}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${art.readTime}</span>
          </div>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--text-primary);">${art.title}</h3>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">${art.summary}</p>
        </div>

        <button class="btn btn-secondary btn-sm" onclick="window.app.openArticle('${art.id}')">
          <span>Read Article</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `).join('');
  }

  openArticle(articleId) {
    const art = articlesData.find(a => a.id === articleId);
    if (art && window.appModal) {
      window.appModal.openArticleModal(art);
    }
  }

  renderGallery() {
    const container = document.getElementById('media-gallery-container');
    if (!container) return;

    container.innerHTML = galleryData.map(item => `
      <div class="card reveal-on-scroll" style="padding: 0; overflow: hidden; cursor: pointer;" onclick="window.app.openGalleryLightbox('${item.id}')">
        <div style="height: 190px; overflow: hidden; background: #070b16; position: relative;">
          <img src="${item.src}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(7, 11, 22, 0.8) 100%);"></div>
          <span style="position: absolute; top: 10px; left: 10px; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(6px); color: var(--accent-cyan); padding: 3px 8px; border-radius: var(--radius-sm); font-size: 0.6875rem; font-family: var(--font-mono);">${item.category}</span>
        </div>
        <div style="padding: 1rem;">
          <h4 style="font-size: 0.9375rem; color: var(--text-primary); margin-bottom: 0.25rem;">${item.title}</h4>
          <p style="font-size: 0.8125rem; color: var(--text-muted); margin: 0;">${item.caption}</p>
        </div>
      </div>
    `).join('');
  }

  openGalleryLightbox(itemId) {
    const item = galleryData.find(g => g.id === itemId);
    if (!item || !window.appModal) return;

    const bodyHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="lightbox-image-wrapper">
          <img src="${item.src}" alt="${item.title}" style="max-height: 60vh; object-fit: contain;" />
        </div>
        <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">${item.caption}</p>
      </div>
    `;

    window.appModal.open(item.title, bodyHTML, `<button class="btn btn-secondary btn-sm" onclick="window.appModal.close()">Close</button>`);
  }
}

// Bootstrap Application
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
