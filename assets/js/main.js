(() => {
  'use strict';

  /* ============================
     Theme Toggle
     ============================ */
  function initThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    if (!btn) return;

    btn.addEventListener('click', () => {
      const cur = html.getAttribute('data-theme');
      const next = cur === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ============================
     Language Toggle
     ============================ */
  function initLangToggle() {
    const btn = document.querySelector('.lang-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      if (!window.i18n) return;
      const cur = window.i18n.currentLang();
      const next = cur === 'en' ? 'zh' : 'en';
      window.i18n.changeLang(next);
    });
  }

  /* ============================
     Skill Badge Rendering
     ============================ */
  function initSkillBadges() {
    document.querySelectorAll('.skill-badges[data-i18n-target]').forEach(el => {
      const key = el.getAttribute('data-i18n-target');
      const items = window.i18n?.get(key) || [];
      if (Array.isArray(items)) {
        el.innerHTML = items.map(item => `<span>${item}</span>`).join('');
      }
    });
  }

  /* ============================
     Smooth Scroll
     ============================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ============================
     Active Nav Link on Scroll
     ============================ */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ============================
     Scroll Reveal
     ============================ */
  function initReveal() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const targets = document.querySelectorAll(
      '.focus-card, .project-card, .skill-group, .about-content > *'
    );
    if (!targets.length) return;

    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${(i % 4) * 80}ms`);
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

    targets.forEach(el => observer.observe(el));
  }

  /* ============================
     Bootstrap
     ============================ */
  function boot() {
    initThemeToggle();
    initLangToggle();
    initSmoothScroll();
    initNavHighlight();
    initSkillBadges();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
