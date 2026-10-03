/* ================================================================
   OLIVIA UVIPLAIS — LIVROS
   Estantes, prateleiras, filtros por trope, modal do livro
   e lightbox de ilustrações.
   ================================================================ */

'use strict';

let BOOKS = [];
window.BOOKS = BOOKS;

let currentBookIlustracoes = [];
let currentBookIlustracaoIndex = 0;
let bookLightboxTouchStartX = 0;
let bookLightboxTouchEndX = 0;

function getBooksByRecency() {
  const parse = window.parseDateBR || ((v) => new Date(v));
  return [...BOOKS].sort((a, b) => parse(b.lancamento) - parse(a.lancamento));
}
window.getBooksByRecency = getBooksByRecency;

async function loadBooks() {
  try {
    const response = await fetch('DADOS/livros.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar livros.json: ' + response.status + ' ' + response.statusText);
    }
    BOOKS = await response.json();
    window.BOOKS = BOOKS;

    buildBookshelf();
    if (typeof window.buildDestaque === 'function') window.buildDestaque();
    if (typeof window.buildFooterDestaques === 'function') window.buildFooterDestaques();
  } catch (error) {
    console.error('Erro ao carregar livros do JSON:', error);
  }
}
window.loadBooks = loadBooks;

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
window.buildBookshelf = buildBookshelf;

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
      <img src="${book.capa}" alt="Capa do livro ${window.escapeHTML(book.titulo)}" width="300" height="450" loading="lazy">
      <figcaption class="book-overlay">
        <span class="book-overlay-titulo">${window.escapeHTML(book.titulo)}</span>
        <span class="book-overlay-serie">${window.escapeHTML(book.serie || 'Ver detalhes')}</span>
      </figcaption>
    </figure>
    <ul class="book-tropes" role="list">
      ${book.tropes.map((trope, index) => `<li><b class="badge ${getBadgeColor(index)}">${window.escapeHTML(trope)}</b></li>`).join('')}
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
window.initTropeReveal = initTropeReveal;

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

/* ============================================================
   MODAL DO LIVRO
   ============================================================ */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
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
    const currentOverlay = document.getElementById('modal-overlay');
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

  const galeriaIlustracoes = document.querySelector('.modal-galeria-ilustracoes');
  galeriaIlustracoes?.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (!img) return;
    const allFigures = [...galeriaIlustracoes.querySelectorAll('figure')];
    const figure = img.closest('figure');
    const index = figure ? allFigures.indexOf(figure) : 0;
    openBookIlustracaoLightbox(index >= 0 ? index : 0);
  });

  initLightbox();
}
window.initModal = initModal;

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
window.switchModalTab = switchModalTab;

function openModal(book) {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal-box');
  if (!overlay || !modal) return;

  const cover = modal.querySelector('.modal-cover');
  const coverImage = modal.querySelector('.modal-cover img');

  const capaUrl = new URL(book.capa, window.location.href).href;
  cover.style.setProperty('--modal-cover-bg', `url("${capaUrl}")`);
  coverImage.src = book.capa;
  coverImage.alt = `Capa do livro ${book.titulo}`;
  modal.querySelector('.modal-serie').textContent = book.serie || 'Romance · Olivia Uviplais';
  modal.querySelector('.modal-title').textContent = book.titulo;
  modal.querySelector('.modal-sinopse').textContent = book.sinopse;
  modal.querySelector('.modal-meta').innerHTML = `
    <article class="info-livro"><small>Lançamento</small><strong>${window.escapeHTML(book.lancamento)}</strong></article>
    <article class="info-livro"><small>Formato</small><strong>${book.formatoLabel ? window.escapeHTML(book.formatoLabel) : `${book.paginas} páginas · ${window.escapeHTML(book.idioma)}`}</strong></article>
  `;
  modal.querySelector('.modal-tropes').innerHTML = book.tropes
    .map((trope) => `<li><b class="trope-clicavel">${window.escapeHTML(trope)}</b></li>`)
    .join('');
  modal.querySelector('.modal-actions').innerHTML = Array.isArray(book.compras) && book.compras.length
    ? book.compras
        .map((compra, index) => `<a href="${compra.url}" target="_blank" rel="noopener noreferrer" class="btn ${index === 0 ? 'btn-primary' : 'btn-outline-dark'}">${window.escapeHTML(compra.label)}</a>`)
        .join('')
    : `<a href="${book.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${book.ctaLabel ? window.escapeHTML(book.ctaLabel) : 'Comprar eBook'}</a>`;

  const selo = modal.querySelector('.modal-selo-top1');
  if (selo) selo.hidden = !book.topAmazon;

  const hasIlustracoes = Array.isArray(book.ilustracoes) && book.ilustracoes.length > 0;
  currentBookIlustracoes = hasIlustracoes ? [...book.ilustracoes] : [];
  currentBookIlustracaoIndex = 0;
  const tabIlustracoes = modal.querySelector('.modal-tab-btn[data-tab="ilustracoes"]');
  if (tabIlustracoes) tabIlustracoes.hidden = !hasIlustracoes;

  const galeria = modal.querySelector('.modal-galeria-ilustracoes');
  if (galeria) {
    galeria.innerHTML = hasIlustracoes
      ? book.ilustracoes
          .map((src, index) => `<figure><img src="${src}" alt="Ilustração ${index + 1} de ${window.escapeHTML(book.titulo)}" loading="lazy"></figure>`)
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

  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}
window.closeModal = closeModal;

/* ============================================================
   LIGHTBOX DE ILUSTRAÇÕES DOS LIVROS (LIMPO, NAVEGÁVEL)
   ============================================================ */
function initLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const closeButton = document.getElementById('lightbox-close');
  const prevButton = document.getElementById('lightbox-prev');
  const nextButton = document.getElementById('lightbox-next');

  closeButton?.addEventListener('click', (e) => {
    e.preventDefault();
    closeLightbox();
  });

  prevButton?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigateBookIlustracao(-1);
  });

  nextButton?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigateBookIlustracao(1);
  });

  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  // Gesto touch para deslizar entre ilustrações no celular
  overlay?.addEventListener('touchstart', (e) => {
    if (e.changedTouches?.[0]) {
      bookLightboxTouchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  overlay?.addEventListener('touchend', (e) => {
    if (e.changedTouches?.[0]) {
      bookLightboxTouchEndX = e.changedTouches[0].screenX;
      const deltaX = bookLightboxTouchEndX - bookLightboxTouchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          navigateBookIlustracao(1);
        } else {
          navigateBookIlustracao(-1);
        }
      }
    }
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (!overlay?.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      navigateBookIlustracao(-1);
    } else if (event.key === 'ArrowRight') {
      navigateBookIlustracao(1);
    }
  });
}
window.initLightbox = initLightbox;

function openBookIlustracaoLightbox(index = 0) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const prevButton = document.getElementById('lightbox-prev');
  const nextButton = document.getElementById('lightbox-next');
  if (!overlay || !img) return;

  if (!currentBookIlustracoes.length && img.src) {
    currentBookIlustracoes = [img.src];
  }

  currentBookIlustracaoIndex = (index + currentBookIlustracoes.length) % (currentBookIlustracoes.length || 1);
  const src = currentBookIlustracoes[currentBookIlustracaoIndex] || img.src;

  img.src = src;
  img.alt = `Ilustração ${currentBookIlustracaoIndex + 1}`;

  const hasMultiple = currentBookIlustracoes.length > 1;
  if (prevButton) prevButton.hidden = !hasMultiple;
  if (nextButton) nextButton.hidden = !hasMultiple;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
}
window.openBookIlustracaoLightbox = openBookIlustracaoLightbox;

function navigateBookIlustracao(direction) {
  if (currentBookIlustracoes.length <= 1) return;
  currentBookIlustracaoIndex = (currentBookIlustracaoIndex + direction + currentBookIlustracoes.length) % currentBookIlustracoes.length;

  const img = document.getElementById('lightbox-img');
  if (img) {
    img.style.opacity = '0.35';
    img.src = currentBookIlustracoes[currentBookIlustracaoIndex];
    img.alt = `Ilustração ${currentBookIlustracaoIndex + 1}`;
    img.onload = () => { img.style.opacity = '1'; };
  }
}
window.navigateBookIlustracao = navigateBookIlustracao;

function openLightbox(src, alt) {
  if (currentBookIlustracoes.length) {
    const foundIndex = currentBookIlustracoes.findIndex((s) => s === src || src.endsWith(s));
    if (foundIndex >= 0) {
      openBookIlustracaoLightbox(foundIndex);
      return;
    }
  }
  currentBookIlustracoes = [src];
  openBookIlustracaoLightbox(0);
}
window.openLightbox = openLightbox;

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}
window.closeLightbox = closeLightbox;
