/* ================================================================
   OLIVIA UVIPLAIS — GLOBAL & ROTEADOR SPA
   Gerenciamento de navegação hash, menu mobile, header dinâmico,
   meta tags, scroll reveal e inicialização orquestrada do site.
   ================================================================ */

'use strict';

const selectors = {
  header: '#site-header',
  navToggle: '#nav-toggle',
  navLinks: '#nav-links',
  page: '.page',
  pageLink: '[data-page]',
  modalOverlay: '#modal-overlay',
  modalBox: '#modal-box',
  blogGrid: '#blog-grid'
};
window.selectors = selectors;

const PAGE_META = {
  home: {
    title: 'Olivia Uviplais — Escritora de Comédias Românticas',
    description: 'Olivia Uviplais — Escritora de comédias românticas. Best-Seller Amazon. Autora de Jogos de Poder, Os Padrinhos e muito mais.'
  },
  sobre: {
    title: 'Sobre Olivia Uviplais — Escritora de Romances',
    description: 'Conheça a trajetória de Olivia Uviplais, escritora best-seller Amazon de comédias românticas.'
  },
  livros: {
    title: 'Livros — Olivia Uviplais',
    description: 'Explore todos os livros de Olivia Uviplais: eBooks, publicações por editoras, audiobooks e edições internacionais.'
  },
  'na-midia': {
    title: 'Na Mídia — Olivia Uviplais',
    description: 'Confira matérias, reportagens, entrevistas e recortes de jornais e portais sobre Olivia Uviplais e suas obras literárias.'
  },
  blog: {
    title: 'Blog da Uvinha — Olivia Uviplais',
    description: 'Bastidores da escrita, novidades e conteúdos exclusivos no blog de Olivia Uviplais.'
  },
  agenda: {
    title: 'Agenda & Galeria — Olivia Uviplais',
    description: 'Confira a agenda de eventos, feiras literárias e a galeria de fotos dos encontros com Olivia Uviplais.'
  },
  contato: {
    title: 'Contato — Olivia Uviplais',
    description: 'Contato para imprensa, agenciamento e mídia kit de Olivia Uviplais.'
  }
};

function updatePageMeta(pageId) {
  const meta = PAGE_META[pageId] || PAGE_META.home;
  document.title = meta.title;

  let descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', meta.description);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);
}

function showPage(pageId = 'home', updateHash = true) {
  const pages = document.querySelectorAll(selectors.page);
  const links = document.querySelectorAll(selectors.pageLink);
  const target = document.getElementById(pageId) || document.getElementById('home');

  pages.forEach((page) => {
    const isActive = page === target;
    page.classList.toggle('active', isActive);
    page.toggleAttribute('aria-hidden', !isActive);
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === target.id);
  });

  updatePageMeta(target.id);
  closeMenu();
  updateHeaderMode();
  window.scrollTo({ top: 0, behavior: 'auto' });
  triggerVisibleReveals(target);

  if (updateHash && window.location.hash !== `#${target.id}`) {
    history.pushState(null, '', `#${target.id}`);
  }
}
window.showPage = showPage;

function updateHeaderMode() {
  const header = document.querySelector(selectors.header);
  if (!header) return;

  const activePageId = document.querySelector('.page.active')?.id;
  const isHero = activePageId === 'home' && window.scrollY <= 80;
  const navLogoImg = document.querySelector('#nav-logo-img');

  header.classList.toggle('hero-mode', isHero);
  header.classList.toggle('solid-mode', !isHero);

  if (navLogoImg) {
    navLogoImg.src = isHero ? 'ID/LOGO-CLARA.png' : 'ID/PRINCIPAL.png';
  }
}

function initMenu() {
  const toggle = document.querySelector(selectors.navToggle);
  const nav = document.querySelector(selectors.navLinks);
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

function closeMenu() {
  const nav = document.querySelector(selectors.navLinks);
  const toggle = document.querySelector(selectors.navToggle);
  if (!nav || !toggle) return;

  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return document.getElementById(page) ? page : 'home';
}

function handleRouteChange() {
  const hash = window.location.hash.replace('#', '');
  const postMatch = hash.match(/^post-(.+)$/);

  if (postMatch) {
    const posts = window.BLOG_POSTS || [];
    const post = posts.find((item) => item.slug === postMatch[1]);
    if (post) {
      if (typeof window.renderPost === 'function') window.renderPost(post);
      showPage('post', false);
      document.querySelectorAll(selectors.pageLink).forEach((link) => {
        link.classList.toggle('active', link.dataset.page === 'blog');
      });
      return;
    }
  }

  showPage(getPageFromHash(), false);
}

function initRouter() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest(selectors.pageLink);
    if (!link) return;

    event.preventDefault();
    showPage(link.dataset.page || 'home');
  });

  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('scroll', updateHeaderMode, { passive: true });

  handleRouteChange();
}

function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.minibio, .section-timeline, .destaque-banner'
  );

  targets.forEach((el) => el.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  targets.forEach((el) => observer.observe(el));
}

function triggerVisibleReveals(container) {
  if (!container) return;
  window.requestAnimationFrame(() => {
    container.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add('is-revealed');
      }
    });
  });
}

function initSite() {
  const steps = [
    ['initRouter', initRouter],
    ['initMenu', initMenu],
    ['buildTimeline', window.buildTimeline],
    ['loadBooks', window.loadBooks],
    ['initTropeReveal', window.initTropeReveal],
    ['buildNaMidia', window.buildNaMidia],
    ['buildAgenda', window.buildAgenda],
    ['buildGaleria', window.buildGaleria],
    ['buildBlog', window.buildBlog],
    ['initBlogPaginacao', window.initBlogPaginacao],
    ['initModal', window.initModal],
    ['initScrollReveal', initScrollReveal]
  ];

  for (const [name, fn] of steps) {
    try {
      if (typeof fn === 'function') fn();
    } catch (err) {
      console.error(`Erro ao inicializar ${name}:`, err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
