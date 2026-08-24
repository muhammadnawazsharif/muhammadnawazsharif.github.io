/**
 * Contact Form Controller & Toast Feedback
 * Muhammad Nawaz Sharif - Academic Portfolio
 */

export class ContactFormHandler {
  constructor() {
    this.form = document.getElementById('academic-contact-form');
    this.toastContainer = document.getElementById('toast-container');
    this.bindEvents();
  }

  bindEvents() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const honeypot = document.getElementById('contact-hp');

    // Honeypot spam check
    if (honeypot && honeypot.value.trim() !== '') {
      return;
    }

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      this.showToast("Please fill in all required fields (Name, Email, Message).", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showToast("Please enter a valid email address.", "error");
      return;
    }

    // Format message for WhatsApp delivery
    const formattedText = `*Academic Inquiry for Lecturer Muhammad Nawaz Sharif*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      (subject ? `*Subject:* ${subject}\n` : '') +
      `*Message:*\n${message}\n\n` +
      `_Sent via muhammadnawazsharif.github.io_`;

    const whatsappUrl = `https://wa.me/923475882592?text=${encodeURIComponent(formattedText)}`;

    // Submit button state
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        <span>Redirecting to WhatsApp...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      this.form.reset();
      this.showToast("Opening WhatsApp to send your inquiry to Lecturer Muhammad Nawaz Sharif...", "success");
      
      // Open WhatsApp in new tab or current window
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  }

  showToast(message, type = "info") {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    const icon = type === "success" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
}
