(() => {
  'use strict';

  let langData = null;
  let currentLang = localStorage.getItem('lang') || 'zh';

  function getNested(obj, key) {
    return key.split('.').reduce((acc, part) => acc?.[part], obj);
  }

  function getRootPath() {
    const scripts = document.getElementsByTagName('script');
    for (const s of scripts) {
      const src = s.getAttribute('src') || '';
      if (src.includes('assets/js/i18n.js')) {
        return src.replace('assets/js/i18n.js', '');
      }
    }
    return '';
  }

  const rootPath = getRootPath();

  function t(key) {
    return getNested(langData, key) ?? key;
  }

  function applyTranslation(el, key, val) {
    if (!val || val === key) return;
    if (el instanceof HTMLImageElement) {
      el.setAttribute('alt', val);
      return;
    }
    el.innerHTML = val;
  }

  function applyAll() {
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      applyTranslation(el, key, t(key));
    });

    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
      langBtn.textContent = currentLang === 'zh' ? '中文' : 'English';
    }

    document.title = t('page.title') || document.title;
  }

  async function loadLang(lang) {
    const url = `${rootPath}lang/${lang}.json?v=20270702`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      langData = await res.json();
      applyAll();

      // Update skill badges
      document.querySelectorAll('.skill-badges[data-i18n-target]').forEach(el => {
        const key = el.getAttribute('data-i18n-target');
        const items = getNested(langData, key);
        if (Array.isArray(items)) {
          el.innerHTML = items.map(item => `<span>${item}</span>`).join('');
        }
      });
    } catch (err) {
      console.error('[i18n] Failed to load:', url, err);
    }
  }

  window.i18n = {
    get: t,
    changeLang: (lang) => {
      if (currentLang === lang) return;
      currentLang = lang;
      localStorage.setItem('lang', lang);
      loadLang(lang);
    },
    currentLang: () => currentLang,
  };

  loadLang(currentLang);
})();
