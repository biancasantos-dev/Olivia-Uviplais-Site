/* ================================================================
   OLIVIA UVIPLAIS — SITE OFICIAL
   ================================================================ */

'use strict';

let BOOKS = [];
window.BOOKS = BOOKS;


let TIMELINE = [];
window.TIMELINE = TIMELINE;

let AGENDA = [];
window.AGENDA = AGENDA;

const AGENDA_MES_INDEX = { Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5, Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11 };

const AGENDA_TIPO_INFO = {
  'Feira':      { cor: 'azul',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>' },
  'Lançamento': { cor: 'vermelho', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg>' },
  'Evento':     { cor: 'rosa',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>' }
};

const AGENDA_ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const AGENDA_ICON_CALENDAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>';
const AGENDA_ICON_INSTA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>';
const AGENDA_ICON_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';

function getAgendaEventDate(eventItem) {
  const mesIndex = AGENDA_MES_INDEX[eventItem.mes] ?? 0;
  return new Date(Number(eventItem.ano), mesIndex, Number(eventItem.dia));
}

function getAgendaStatus(eventDate) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const diffDias = Math.round((eventDate - hoje) / 86400000);

  if (diffDias < 0) return { label: 'Realizado', classe: 'passado' };
  if (diffDias === 0) return { label: 'É hoje!', classe: 'hoje' };
  if (diffDias === 1) return { label: 'Amanhã', classe: 'em-breve' };
  if (diffDias <= 30) return { label: `Em ${diffDias} dias`, classe: 'em-breve' };
  return { label: null, classe: '' };
}

function buildAgendaCalendarLink(eventItem, eventDate) {
  const pad = (n) => String(n).padStart(2, '0');
  let datesParam;

  if (eventItem.horaInicio && eventItem.horaFim) {
    const [hI, mI] = eventItem.horaInicio.split(':');
    const [hF, mF] = eventItem.horaFim.split(':');
    const dataBase = `${eventItem.ano}${pad(AGENDA_MES_INDEX[eventItem.mes] + 1)}${pad(eventItem.dia)}`;
    datesParam = `${dataBase}T${pad(hI)}${pad(mI)}00/${dataBase}T${pad(hF)}${pad(mF)}00`;
  } else {
    const inicio = new Date(eventDate);
    const fim = new Date(eventDate);
    fim.setDate(fim.getDate() + 1);
    const formatar = (d) => d.toISOString().slice(0, 10).replace(/-/g, '');
    datesParam = `${formatar(inicio)}/${formatar(fim)}`;
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${eventItem.tipo}: ${eventItem.titulo}`,
    dates: datesParam,
    details: eventItem.desc,
    location: eventItem.local,
    ...(eventItem.horaInicio && eventItem.horaFim ? { ctz: 'America/Sao_Paulo' } : {})
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildAgendaMapsLink(local) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`;
}

/* ================================================================
   BLOG — CONTENTFUL INTEGRATION (UPDATED)
   ================================================================ */
const CONTENTFUL_CONFIG = window.CONTENTFUL_CONFIG || {
  spaceId: 'bikxsvvhd2dh',
  accessToken: '3kCZ2e_GBDPxbpLqpXRmGaKgk_0AZCHSt7awwJrzGes',
  environment: 'master',
  contentType: 'blogPost'
};

let BLOG_POSTS = [];

const BLOG_CATEGORIA_COR = {
  'Lançamento': 'vermelho',
  'Bastidores': 'azul',
  'Agenda': 'ciano',
  'Comunidade': 'rosa'
};

/* ================================================================
   NOTÍCIAS NA MÍDIA & CLIPPING (NA-MIDIA)
   Dados carregados dinamicamente de DADOS/na-midia.json
   ================================================================ */
let NOTICIAS_MIDIA = [];
window.NOTICIAS_MIDIA = NOTICIAS_MIDIA;


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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}

function parseDateBR(value) {
  if (!value || value === 'N/A') return new Date(0);
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function getBooksByRecency() {
  return [...BOOKS].sort((a, b) => parseDateBR(b.lancamento) - parseDateBR(a.lancamento));
}

function buildDestaque() {
  const latest = getBooksByRecency()[0];
  if (!latest) return;

  const titulo = document.getElementById('destaque-titulo');
  const serie = document.getElementById('destaque-serie');
  const sinopse = document.getElementById('destaque-sinopse');
  const ctas = document.getElementById('destaque-ctas');
  const capaImg = document.getElementById('destaque-capa-img');
  if (!titulo || !serie || !sinopse || !ctas || !capaImg) return;

  titulo.textContent = latest.titulo;
  serie.textContent = latest.serie || `${latest.paginas} páginas · ${latest.idioma}`;
  sinopse.textContent = latest.sinopse.split(/\n\n/)[0].replace(/^[“"]|[”"]$/g, '');
  ctas.innerHTML = latest.ebook
    ? `<a href="${latest.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Comprar agora</a>`
    : '';
  capaImg.src = latest.capa;
  capaImg.alt = latest.titulo;
}

function buildFooterDestaques() {
  const list = document.getElementById('footer-destaques');
  if (!list) return;

  const top3 = getBooksByRecency().slice(0, 3);
  list.replaceChildren(...top3.map((book) => {
    const item = document.createElement('li');
    item.innerHTML = `<a href="#livros" data-page="livros">${escapeHTML(book.titulo)}</a>`;
    return item;
  }));
}

async function loadBooks() {
  try {
    const response = await fetch('DADOS/livros.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar livros.json: ' + response.status + ' ' + response.statusText);
    }
    BOOKS = await response.json();
    window.BOOKS = BOOKS;

    buildBookshelf();
    buildDestaque();
    buildFooterDestaques();
  } catch (error) {
    console.error('Erro ao carregar livros do JSON:', error);
  }
}

window.loadBooks = loadBooks;

function initSite() {
  const steps = [
    ['initRouter', initRouter],
    ['initMenu', initMenu],
    ['buildTimeline', buildTimeline],
    ['loadBooks', loadBooks],
    ['initTropeReveal', initTropeReveal],
    ['buildNaMidia', buildNaMidia],
    ['buildAgenda', buildAgenda],
    ['buildBlog', buildBlog],
    ['initBlogPaginacao', initBlogPaginacao],
    ['initModal', initModal],
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

function handleRouteChange() {
  const hash = window.location.hash.replace('#', '');
  const postMatch = hash.match(/^post-(.+)$/);

  if (postMatch) {
    const post = BLOG_POSTS.find((item) => item.slug === postMatch[1]);
    if (post) {
      renderPost(post);
      showPage('post', false);
      document.querySelectorAll(selectors.pageLink).forEach((link) => {
        link.classList.toggle('active', link.dataset.page === 'blog');
      });
      return;
    }
  }

  showPage(getPageFromHash(), false);
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return document.getElementById(page) ? page : 'home';
}

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
    title: 'Agenda — Olivia Uviplais',
    description: 'Confira a agenda de eventos, lives e encontros com Olivia Uviplais.'
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

function buildBookshelf() {
  const filterNav = document.getElementById('trope-filter-nav');
  const shelves = {
    pt: document.getElementById('bookshelf-pt'),
    idiomas: document.getElementById('bookshelf-idiomas'),
    tradicionais: document.getElementById('bookshelf-tradicionais'),
    audiobooks: document.getElementById('bookshelf-audiobooks')
  };

  if (!filterNav || !shelves.pt || !shelves.idiomas || !shelves.tradicionais || !shelves.audiobooks) return;

  filterNav.replaceChildren(createTropeButton('TODAS', 'all', true));

  getAllTropes().forEach((trope) => {
    const button = createTropeButton(trope, trope);
    button.hidden = true;
    filterNav.appendChild(button);
  });

  filterNav.appendChild(createTropeMoreToggle(filterNav));

  shelves.pt.replaceChildren();
  shelves.idiomas.replaceChildren();
  shelves.tradicionais.replaceChildren();
  shelves.audiobooks.replaceChildren();

  getBooksByRecency().forEach((book) => {
    shelves[book.categoria]?.appendChild(createBookElement(book));
  });

  if (typeof window.initShelfDragScroll === 'function') {
    window.initShelfDragScroll();
  }

  if (!filterNav.dataset.listenerAttached) {
    filterNav.dataset.listenerAttached = 'true';
    filterNav.addEventListener('click', (event) => {
      const button = event.target.closest('.trope-btn');
      if (!button) return;

      filterNav.querySelectorAll('.trope-btn').forEach((item) => {
        item.classList.toggle('is-active', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      });

      filterBooks(button.dataset.trope);
    });
  }
}

function createTropeMoreToggle(filterNav) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'trope-more-toggle';
  button.textContent = 'Ver mais';
  button.setAttribute('aria-expanded', 'false');

  button.addEventListener('click', () => {
    const expand = button.getAttribute('aria-expanded') === 'false';

    filterNav.querySelectorAll('.trope-btn').forEach((item) => {
      if (item.dataset.trope !== 'all') item.hidden = !expand;
    });

    button.textContent = expand ? 'Ver menos' : 'Ver mais';
    button.setAttribute('aria-expanded', String(expand));
  });

  return button;
}

function getAllTropes() {
  return [...new Set(BOOKS.flatMap((book) => book.tropes))].sort((a, b) => a.localeCompare(b));
}

function createTropeButton(label, trope, active = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `trope-btn${active ? ' is-active' : ''}`;
  button.dataset.trope = trope;
  button.textContent = label;
  button.setAttribute('aria-pressed', String(active));
  return button;
}

function createBookElement(book) {
  const item = document.createElement('li');
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'book-item';
  button.dataset.bookId = book.id;
  button.dataset.tropes = JSON.stringify(book.tropes);
  button.setAttribute('aria-label', `Abrir detalhes de ${book.titulo}`);
  button.innerHTML = `
    <figure class="book-cover">
      <img src="${book.capa}" alt="Capa do livro ${escapeHTML(book.titulo)}" width="300" height="450" loading="lazy">
      <figcaption class="book-overlay">
        <span class="book-overlay-titulo">${escapeHTML(book.titulo)}</span>
        <span class="book-overlay-serie">${escapeHTML(book.serie || 'Ver detalhes')}</span>
      </figcaption>
    </figure>
    <ul class="book-tropes" role="list">
      ${book.tropes.map((trope, index) => `<li><b class="badge ${getBadgeColor(index)}">${escapeHTML(trope)}</b></li>`).join('')}
    </ul>
  `;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (typeof window.playBookTransition === 'function') {
      window.playBookTransition(book);
    } else {
      openModal(book);
    }
  });
  item.appendChild(button);
  return item;
}

function initTropeReveal() {
  const button = document.getElementById('trope-reveal-btn');
  const wrap = document.getElementById('organizador-estantes-realistas');
  if (!button || !wrap) return;

  button.addEventListener('click', () => {
    const revealed = wrap.classList.toggle('tropes-visiveis');
    button.setAttribute('aria-pressed', String(revealed));
    button.textContent = revealed ? 'Ocultar as tropes' : 'Revelar as tropes';
  });
}

function getBadgeColor(index) {
  return ['badge-rosa', 'badge-azul', 'badge-ciano'][index % 3];
}

function filterBooks(trope) {
  document.querySelectorAll('.book-item').forEach((bookButton) => {
    const tropes = JSON.parse(bookButton.dataset.tropes || '[]');
    const visible = trope === 'all' || tropes.includes(trope);
    bookButton.parentElement.hidden = !visible;
  });

  document.querySelectorAll('.estante-categoria').forEach((category) => {
    const hasVisibleBooks = [...category.querySelectorAll('li')].some((item) => !item.hidden);
    category.hidden = !hasVisibleBooks;
  });
}

function initModal() {
  const overlay = document.querySelector(selectors.modalOverlay);
  const closeButton = document.getElementById('modal-close');

  closeButton?.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal();
  });

  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) {
      event.preventDefault();
      closeModal();
    }
  });

  // Failsafe global para garantir fechamento ao clicar no X ou fora
  document.addEventListener('click', (event) => {
    if (event.target.closest('#modal-close') || event.target.closest('.modal-close')) {
      event.preventDefault();
      closeModal();
      return;
    }
    const currentOverlay = document.querySelector(selectors.modalOverlay);
    if (currentOverlay?.classList.contains('open') && event.target === currentOverlay) {
      event.preventDefault();
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
      closeModal();
    }
  });

  document.querySelectorAll('.modal-tab-btn').forEach((tabButton) => {
    tabButton.addEventListener('click', () => switchModalTab(tabButton.dataset.tab));
  });

  document.querySelector('.modal-galeria-ilustracoes')?.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (img) openLightbox(img.src, img.alt);
  });

  initLightbox();
}

function initLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const closeButton = document.getElementById('lightbox-close');

  closeButton?.addEventListener('click', closeLightbox);
  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });
}

function openLightbox(src, alt) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  if (!overlay || !img) return;

  img.src = src;
  img.alt = alt || '';
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab-btn').forEach((tabButton) => {
    const active = tabButton.dataset.tab === tab;
    tabButton.classList.toggle('is-active', active);
    tabButton.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.modal-tab-panel').forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tab;
  });
}

function openModal(book) {
  const overlay = document.querySelector(selectors.modalOverlay);
  const modal = document.querySelector(selectors.modalBox);
  if (!overlay || !modal) return;

  const cover = modal.querySelector('.modal-cover');
  const coverImage = modal.querySelector('.modal-cover img');

  cover.style.setProperty('--modal-cover-bg', `url("${book.capa}")`);
  coverImage.src = book.capa;
  coverImage.alt = `Capa do livro ${book.titulo}`;
  modal.querySelector('.modal-serie').textContent = book.serie || 'Romance · Olivia Uviplais';
  modal.querySelector('.modal-title').textContent = book.titulo;
  modal.querySelector('.modal-sinopse').textContent = book.sinopse;
  modal.querySelector('.modal-meta').innerHTML = `
    <article class="info-livro"><small>Lançamento</small><strong>${escapeHTML(book.lancamento)}</strong></article>
    <article class="info-livro"><small>Formato</small><strong>${book.formatoLabel ? escapeHTML(book.formatoLabel) : `${book.paginas} páginas · ${escapeHTML(book.idioma)}`}</strong></article>
  `;
  modal.querySelector('.modal-tropes').innerHTML = book.tropes
    .map((trope) => `<li><b class="trope-clicavel">${escapeHTML(trope)}</b></li>`)
    .join('');
  modal.querySelector('.modal-actions').innerHTML = Array.isArray(book.compras) && book.compras.length
    ? book.compras
        .map((compra, index) => `<a href="${compra.url}" target="_blank" rel="noopener noreferrer" class="btn ${index === 0 ? 'btn-primary' : 'btn-outline-dark'}">${escapeHTML(compra.label)}</a>`)
        .join('')
    : `<a href="${book.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${book.ctaLabel ? escapeHTML(book.ctaLabel) : 'Comprar eBook'}</a>`;

  const selo = modal.querySelector('.modal-selo-top1');
  if (selo) selo.hidden = !book.topAmazon;

  const hasIlustracoes = Array.isArray(book.ilustracoes) && book.ilustracoes.length > 0;
  const tabIlustracoes = modal.querySelector('.modal-tab-btn[data-tab="ilustracoes"]');
  if (tabIlustracoes) tabIlustracoes.hidden = !hasIlustracoes;

  const galeria = modal.querySelector('.modal-galeria-ilustracoes');
  if (galeria) {
    galeria.innerHTML = hasIlustracoes
      ? book.ilustracoes
          .map((src, index) => `<figure><img src="${src}" alt="Ilustração ${index + 1} de ${escapeHTML(book.titulo)}" loading="lazy"></figure>`)
          .join('')
      : '';
  }

  switchModalTab('sinopse');

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('modal-close')?.focus();
}

window.openModal = openModal;

function closeModal() {
  if (typeof window.closeBookTransition === 'function') {
    window.closeBookTransition();
  }

  const overlay = document.querySelector(selectors.modalOverlay);
  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}

window.closeModal = closeModal;

const BLOG_PAGE_SIZE = 9;
let blogPaginaAtual = 1;

async function buildBlog() {
  const grid = document.querySelector(selectors.blogGrid);
  const paginacao = document.getElementById('blog-paginacao');
  if (!grid) return;

  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_CONFIG.spaceId}/environments/${CONTENTFUL_CONFIG.environment}/entries?content_type=${CONTENTFUL_CONFIG.contentType}&access_token=${CONTENTFUL_CONFIG.accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao buscar posts do Contentful');
    
    const data = await response.json();
    
    const assetsMap = new Map(
      data.includes?.Asset?.map(asset => [asset.sys.id, 'https:' + asset.fields.file.url]) || []
    );

    BLOG_POSTS = data.items.map(item => {
      const c = item.fields;
      const capaAssetId = c.capa?.sys?.id;
      
      let dataFormatada = 'Sem data';
      if (c.data) {
        const [ano, mes, dia] = c.data.split('-');
        if (dia && mes && ano) {
          dataFormatada = `${dia.slice(0,2)}/${mes}/${ano}`;
        } else {
          dataFormatada = new Date(c.data).toLocaleDateString('pt-BR');
        }
      }
      
      return {
        id: item.sys.id,
        slug: c.slug || item.sys.id,
        titulo: c.titulo || 'Sem título',
        categoria: c.categoria || 'Geral',
        data: dataFormatada,
        resumo: c.resumo || '',
        corpo: c.corpo || '',
        capa: assetsMap.get(capaAssetId) || 'OLIVIA-FOTOS/OLIVIA_UVIPLAIS_4.jpg'
      };
    });

    if (BLOG_POSTS.length === 0) {
      grid.innerHTML = '<p>Nenhum post encontrado.</p>';
      return;
    }

    BLOG_POSTS.sort((a, b) => parseDateBR(b.data) - parseDateBR(a.data));

    renderBlogPage(1);

    // Recheck hash router in case a direct link to post was hit before fetch finished
    const hash = window.location.hash.replace('#', '');
    const postMatch = hash.match(/^post-(.+)$/);
    if (postMatch) {
      const post = BLOG_POSTS.find((item) => item.slug === postMatch[1]);
      if (post) {
        renderPost(post);
        showPage('post', false);
      }
    }

  } catch (error) {
    console.error('Erro na integração com Contentful:', error);
    grid.innerHTML = '<p>Erro ao carregar os posts do blog. Tente novamente mais tarde.</p>';
  }
}

function renderBlogPage(pagina) {
  const grid = document.querySelector(selectors.blogGrid);
  const paginacao = document.getElementById('blog-paginacao');
  if (!grid) return;

  const totalPaginas = Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_PAGE_SIZE));
  blogPaginaAtual = Math.min(Math.max(1, pagina), totalPaginas);

  const inicio = (blogPaginaAtual - 1) * BLOG_PAGE_SIZE;
  const postsDaPagina = BLOG_POSTS.slice(inicio, inicio + BLOG_PAGE_SIZE);

  grid.replaceChildren(...postsDaPagina.map((post) => createBlogCard(post)));

  if (paginacao) {
    if (totalPaginas <= 1) {
      paginacao.replaceChildren();
    } else {
      const botoes = [];
      botoes.push(`<button type="button" class="blog-pag-btn blog-pag-nav" data-pagina="${blogPaginaAtual - 1}" ${blogPaginaAtual === 1 ? 'disabled' : ''} aria-label="Página anterior">←</button>`);
      for (let i = 1; i <= totalPaginas; i += 1) {
        botoes.push(`<button type="button" class="blog-pag-btn${i === blogPaginaAtual ? ' is-active' : ''}" data-pagina="${i}" aria-current="${i === blogPaginaAtual ? 'page' : 'false'}">${i}</button>`);
      }
      botoes.push(`<button type="button" class="blog-pag-btn blog-pag-nav" data-pagina="${blogPaginaAtual + 1}" ${blogPaginaAtual === totalPaginas ? 'disabled' : ''} aria-label="Próxima página">→</button>`);
      paginacao.innerHTML = botoes.join('');
    }
  }
}

function initBlogPaginacao() {
  const paginacao = document.getElementById('blog-paginacao');
  paginacao?.addEventListener('click', (event) => {
    const button = event.target.closest('.blog-pag-btn');
    if (!button || button.disabled) return;
    renderBlogPage(Number(button.dataset.pagina));
    document.getElementById('blog')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

function createBlogCategoriaBadge(categoria) {
  const cor = BLOG_CATEGORIA_COR[categoria] || 'vermelho';
  return `<span class="blog-badge blog-badge-${cor}">${escapeHTML(categoria)}</span>`;
}

function createBlogCard(post) {
  const card = document.createElement('a');
  card.href = `#post-${post.slug}`;
  card.className = 'blog-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Ler o post: ${post.titulo}`);
  card.innerHTML = `
    <figure class="blog-card-capa">
      <img src="${post.capa}" alt="" loading="lazy">
    </figure>
    <section class="blog-card-corpo">
      <p class="blog-card-meta">${createBlogCategoriaBadge(post.categoria)} <span>${escapeHTML(post.data)}</span></p>
      <h3>${escapeHTML(post.titulo)}</h3>
      <p class="blog-card-resumo">${escapeHTML(post.resumo)}</p>
      <span class="blog-card-link">Ler post completo →</span>
    </section>
  `;
  return card;
}

function renderPost(post) {
  const metaEl = document.getElementById('post-meta');
  const tituloEl = document.getElementById('post-titulo');
  const capaEl = document.getElementById('post-capa-img');
  const corpoEl = document.getElementById('post-corpo');
  const relacionadosEl = document.getElementById('post-relacionados-grid');
  if (!metaEl || !tituloEl || !capaEl || !corpoEl || !relacionadosEl) return;

  metaEl.innerHTML = `${createBlogCategoriaBadge(post.categoria)} <span>${escapeHTML(post.data)}</span>`;
  tituloEl.textContent = post.titulo;
  capaEl.src = post.capa;
  capaEl.alt = post.titulo;

  // PROCESSA PARÁGRAFOS E IMAGENS DO MARKDOWN
  corpoEl.replaceChildren(...post.corpo.split(/\n\n/).map((paragrafo) => {
    const p = document.createElement('p');
    
    // Expressão regular para identificar ![texto](url)
    const markdownImageRegex = /!\[(.*?)\]\((.*?)\)/;
    const match = paragrafo.match(markdownImageRegex);

    if (match) {
      const altText = match[1];
      let imgUrl = match[2].trim();
      
      // Garante o protocolo https: se a URL do Contentful vier com //
      if (imgUrl.startsWith('//')) {
        imgUrl = 'https:' + imgUrl;
      }

      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = altText || post.titulo;
      img.style.maxWidth = '100%';
      img.style.borderRadius = 'var(--radius)';
      img.style.margin = '1.5rem 0';

      return img; // Retorna a imagem renderizada como elemento HTML real
    }

    p.textContent = paragrafo;
    return p;
  }));

  const relacionados = BLOG_POSTS
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => parseDateBR(b.data) - parseDateBR(a.data))
    .slice(0, 3);

  relacionadosEl.replaceChildren(...relacionados.map((item) => createBlogCard(item)));
}

async function buildTimeline() {
  const row = document.getElementById('timeline-row');
  const track = document.getElementById('timeline-track');
  if (!row || !track) return;

  try {
    const response = await fetch('DADOS/timeline.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar timeline.json: ' + response.status + ' ' + response.statusText);
    }
    TIMELINE = await response.json();
    window.TIMELINE = TIMELINE;

    const linha = document.createElement('div');
    linha.className = 'tl-line';
    linha.setAttribute('aria-hidden', 'true');
    linha.style.gridColumn = `1 / span ${TIMELINE.length}`;

    const itens = TIMELINE.map((item, index) => {
      const coluna = index + 1;
      const posicao = index % 2 === 0 ? 'top' : 'bottom';

      const element = document.createElement('li');
      element.className = 'tl-item';
      element.innerHTML = `
        <article class="tl-card tl-card--${posicao}" style="grid-column:${coluna}; grid-row:${posicao === 'top' ? 1 : 3};">
          <time>${escapeHTML(item.ano)}</time>
          <h3>${escapeHTML(item.titulo)}</h3>
          <p>${escapeHTML(item.desc)}</p>
        </article>
        <i class="tl-dot" style="grid-column:${coluna};" aria-hidden="true"></i>
      `;
      return element;
    });

    row.replaceChildren(linha, ...itens);
    initHorizontalDrag(track);
  } catch (error) {
    console.error('Erro ao carregar timeline do JSON:', error);
  }
}

window.buildTimeline = buildTimeline;

function initHorizontalDrag(track) {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  track.addEventListener('pointerdown', (event) => {
    dragging = true;
    startX = event.clientX;
    startScroll = track.scrollLeft;
    track.classList.add('dragging');
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    track.scrollLeft = startScroll - (event.clientX - startX) * 1.4;
  });

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  function endDrag() {
    dragging = false;
    track.classList.remove('dragging');
  }
}

async function buildAgenda() {
  const list = document.getElementById('agenda-list');
  const empty = document.getElementById('agenda-empty');
  if (!list) return;

  try {
    const response = await fetch('DADOS/agenda.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar agenda.json: ' + response.status + ' ' + response.statusText);
    }
    AGENDA = await response.json();
    window.AGENDA = AGENDA;

    if (!AGENDA.length) {
      list.hidden = true;
      if (empty) empty.hidden = false;
      return;
    }

    list.hidden = false;
    if (empty) empty.hidden = true;

    const eventosComData = AGENDA
      .map((eventItem) => ({ eventItem, eventDate: getAgendaEventDate(eventItem) }))
      .sort((a, b) => {
        const aPassado = getAgendaStatus(a.eventDate).classe === 'passado';
        const bPassado = getAgendaStatus(b.eventDate).classe === 'passado';
        if (aPassado !== bPassado) return aPassado ? 1 : -1;
        return a.eventDate - b.eventDate;
      });

    const proximoIndex = eventosComData.findIndex(({ eventDate }) => getAgendaStatus(eventDate).classe !== 'passado');

    list.replaceChildren(...eventosComData.map(({ eventItem, eventDate }, index) => {
      const info = AGENDA_TIPO_INFO[eventItem.tipo] || { cor: 'azul', icon: '' };
      const status = getAgendaStatus(eventDate);
      const isOnline = /online/i.test(eventItem.local);
      const isProximo = index === proximoIndex;

      const item = document.createElement('li');
      item.className = `agenda-item agenda-tipo-${info.cor}${status.classe ? ` is-${status.classe}` : ''}`;

      const acaoLocal = isOnline
        ? `<a class="agenda-acao agenda-acao-outline" href="https://www.instagram.com/autoraoliviauviplais/" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_INSTA} Ver no Instagram</a>`
        : `<a class="agenda-acao agenda-acao-outline" href="${buildAgendaMapsLink(eventItem.local)}" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_PIN} Ver no mapa</a>`;

      const horario = eventItem.horaInicio && eventItem.horaFim
        ? `<p class="agenda-horario">${AGENDA_ICON_CLOCK}das ${escapeHTML(eventItem.horaInicio)} às ${escapeHTML(eventItem.horaFim)}</p>`
        : '';

      item.innerHTML = `
        ${isProximo ? '<p class="agenda-destaque-tag">Próximo evento</p>' : ''}
        <time class="agenda-date" datetime="${eventItem.ano}-${String(AGENDA_MES_INDEX[eventItem.mes] + 1).padStart(2, '0')}-${escapeHTML(eventItem.dia)}">
          <strong>${escapeHTML(eventItem.dia)}</strong>
          <small>${escapeHTML(eventItem.mes)} · ${escapeHTML(eventItem.ano)}</small>
        </time>
        <article class="agenda-info">
          <div class="agenda-info-topo">
            <p class="agenda-tipo">${info.icon}${escapeHTML(eventItem.tipo)}</p>
            ${status.label ? `<p class="agenda-status">${escapeHTML(status.label)}</p>` : ''}
          </div>
          <h3>${escapeHTML(eventItem.titulo)}</h3>
          <p class="agenda-desc">${escapeHTML(eventItem.desc)}</p>
          <div class="agenda-info-meta">
            ${horario}
            <address>${AGENDA_ICON_PIN}${escapeHTML(eventItem.local)}</address>
          </div>
          ${status.classe !== 'passado' ? `
          <div class="agenda-acoes">
            <a class="agenda-acao agenda-acao-primaria" href="${buildAgendaCalendarLink(eventItem, eventDate)}" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_CALENDAR} Adicionar à agenda</a>
            ${acaoLocal}
          </div>` : ''}
        </article>
      `;
      return item;
    }));
  } catch (error) {
    console.error('Erro ao carregar agenda do JSON:', error);
  }
}

window.buildAgenda = buildAgenda;

/* ================================================================
   NA MÍDIA — RENDERIZAÇÃO, FILTROS & LIGHTBOX
   ================================================================ */
async function buildNaMidia() {
  const grid = document.getElementById('midia-grid');
  if (!grid) return;

  try {
    const response = await fetch('DADOS/na-midia.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar na-midia.json: ' + response.status + ' ' + response.statusText);
    }
    NOTICIAS_MIDIA = await response.json();
    window.NOTICIAS_MIDIA = NOTICIAS_MIDIA;
    grid.replaceChildren(...NOTICIAS_MIDIA.map((item) => createMidiaCard(item)));
  } catch (error) {
    console.error('Erro ao carregar notícias na mídia do JSON:', error);
  }
}

window.buildNaMidia = buildNaMidia;

function createMidiaCard(item) {
  const card = document.createElement('article');
  card.className = 'midia-card';
  card.setAttribute('role', 'listitem');
  card.dataset.id = item.id;
  card.dataset.tipo = item.tipo;
  card.dataset.categoria = item.categoria;

  const primeiraImg = item.imagens[0];
  const citacaoImg = item.imagens.length > 1 ? item.imagens[1] : null;

  const citacaoHtml = citacaoImg
    ? `
    <div class="midia-citacao-secao">
      <div class="midia-citacao-barra">
        <span class="midia-citacao-tag">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Recorte / Citação na matéria
        </span>
      </div>
      <figure class="midia-frame midia-frame-citacao" tabindex="0" role="button" aria-label="Ampliar recorte com citação: ${escapeHTML(item.titulo)}">
        <img class="midia-preview-img midia-citacao-img" src="${citacaoImg.src}" alt="${escapeHTML(citacaoImg.alt)}" loading="lazy">
        <div class="midia-frame-overlay">
          <span class="midia-zoom-hint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Clique para ampliar citação
          </span>
        </div>
      </figure>
    </div>`
    : '';

  const ctaLinkHtml = item.linkOriginal
    ? `<footer class="midia-card-acoes">
         <a href="${item.linkOriginal}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark midia-btn-link" title="Acessar publicação no veículo original">
           Ler matéria original ↗
         </a>
       </footer>`
    : `<footer class="midia-card-acoes midia-card-acoes-impresso">
         <button type="button" class="btn btn-outline-dark midia-btn-link midia-btn-impresso" title="Visualizar página impressa do jornal">
           Ver página ↗
         </button>
       </footer>`;

  card.innerHTML = `
    <header class="midia-card-topo">
      <div class="midia-card-meta">
        <span class="midia-badge midia-badge-${item.veiculoBadge}">${escapeHTML(item.veiculo)}</span>
      </div>
      <time class="midia-card-data" datetime="${item.data.split('/').reverse().join('-')}">${escapeHTML(item.dataFormatada)}</time>
    </header>

    <div class="midia-preview-wrap">
      <figure class="midia-frame midia-frame-capa" tabindex="0" role="button" aria-label="Ampliar print da matéria: ${escapeHTML(item.titulo)}">
        <img class="midia-preview-img" src="${primeiraImg.src}" alt="${escapeHTML(primeiraImg.alt)}" loading="lazy">
        <div class="midia-frame-overlay">
          <span class="midia-zoom-hint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Clique para ampliar
          </span>
        </div>
      </figure>
      ${citacaoHtml}
    </div>

    <div class="midia-card-corpo">
      <div class="midia-card-info">
        <h3 class="midia-card-titulo">${escapeHTML(item.titulo)}</h3>
        ${item.autor ? `<p class="midia-card-autor">Por <strong>${escapeHTML(item.autor)}</strong></p>` : ''}
      </div>
      ${ctaLinkHtml}
    </div>
  `;

  const frameCapa = card.querySelector('.midia-frame-capa');
  if (frameCapa) {
    const openCapa = () => openLightbox(primeiraImg.src, `${item.veiculo} — ${item.titulo}`);
    frameCapa.addEventListener('click', openCapa);
    frameCapa.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCapa();
      }
    });
  }

  const frameCitacao = card.querySelector('.midia-frame-citacao');
  if (frameCitacao && citacaoImg) {
    const openCitacao = () => openLightbox(citacaoImg.src, `${item.veiculo} (Citação) — ${item.titulo}`);
    frameCitacao.addEventListener('click', openCitacao);
    frameCitacao.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCitacao();
      }
    });
  }

  const btnImpresso = card.querySelector('.midia-btn-impresso');
  if (btnImpresso && primeiraImg) {
    btnImpresso.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(primeiraImg.src, `${item.veiculo} — ${item.titulo}`);
    });
  }

  return card;
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

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}