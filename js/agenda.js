/* ================================================================
   OLIVIA UVIPLAIS — AGENDA & GALERIA
   Eventos futuros/passados, abas, galeria com fotos aleatórias,
   layout bento por evento e lightbox da galeria.
   ================================================================ */

'use strict';

let AGENDA = [];
window.AGENDA = AGENDA;

let GALERIA = [];
window.GALERIA = GALERIA;

let galeriaModoAtivo = 'todas'; // 'todas' | 'eventos'
let galeriaEventoFiltroAtivo = null;
let galeriaFotosFiltradas = [];
let galeriaLightboxIndex = 0;
let galeriaTouchStartX = 0;
let galeriaTouchEndX = 0;

/* ================================================================
   AGENDA DE EVENTOS
   ================================================================ */
async function buildAgenda() {
  const list = document.getElementById('agenda-list');
  const empty = document.getElementById('agenda-empty');
  const countBadge = document.getElementById('agenda-subnav-eventos-count');
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
      if (countBadge) countBadge.textContent = '0';
      return;
    }

    list.hidden = false;
    if (empty) empty.hidden = true;

    const getStatus = window.getAgendaStatus || (() => ({ label: null, classe: '' }));
    const getEventDate = window.getAgendaEventDate || (() => new Date());

    const eventosComData = AGENDA
      .map((eventItem) => ({ eventItem, eventDate: getEventDate(eventItem) }))
      .sort((a, b) => {
        const aPassado = getStatus(a.eventDate).classe === 'passado';
        const bPassado = getStatus(b.eventDate).classe === 'passado';
        if (aPassado !== bPassado) return aPassado ? 1 : -1;
        return a.eventDate - b.eventDate;
      });

    if (countBadge) {
      countBadge.textContent = String(eventosComData.length);
    }

    const proximoIndex = eventosComData.findIndex(({ eventDate }) => getStatus(eventDate).classe !== 'passado');

    list.replaceChildren(...eventosComData.map(({ eventItem, eventDate }, index) => {
      const tipoInfoMap = window.AGENDA_TIPO_INFO || {};
      const info = tipoInfoMap[eventItem.tipo] || { cor: 'azul', icon: '' };
      const status = getStatus(eventDate);
      const isOnline = /online/i.test(eventItem.local);
      const isProximo = index === proximoIndex;

      const item = document.createElement('li');
      item.className = `agenda-item agenda-tipo-${info.cor}${status.classe ? ` is-${status.classe}` : ''}`;

      const acaoLocal = isOnline
        ? `<a class="agenda-acao agenda-acao-outline" href="https://www.instagram.com/autoraoliviauviplais/" target="_blank" rel="noopener noreferrer">${window.AGENDA_ICON_INSTA || ''} Ver no Instagram</a>`
        : `<a class="agenda-acao agenda-acao-outline" href="${window.buildAgendaMapsLink ? window.buildAgendaMapsLink(eventItem.local) : '#'}" target="_blank" rel="noopener noreferrer">${window.AGENDA_ICON_PIN || ''} Ver no mapa</a>`;

      const acaoGaleria = eventItem.galeriaTag
        ? `<button type="button" class="agenda-acao agenda-acao-galeria" data-galeria-tag="${window.escapeHTML(eventItem.galeriaTag)}" title="Ver fotos deste evento na galeria">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            ${window.escapeHTML(eventItem.galeriaLabel || 'Ver fotos do evento')}
           </button>`
        : '';

      const horario = eventItem.horaInicio && eventItem.horaFim
        ? `<p class="agenda-horario">${window.AGENDA_ICON_CLOCK || ''}das ${window.escapeHTML(eventItem.horaInicio)} às ${window.escapeHTML(eventItem.horaFim)}</p>`
        : '';

      const acoesHtml = status.classe !== 'passado'
        ? `
        <div class="agenda-acoes">
          <a class="agenda-acao agenda-acao-primaria" href="${window.buildAgendaCalendarLink ? window.buildAgendaCalendarLink(eventItem, eventDate) : '#'}" target="_blank" rel="noopener noreferrer">${window.AGENDA_ICON_CALENDAR || ''} Adicionar à agenda</a>
          ${acaoLocal}
          ${acaoGaleria}
        </div>`
        : (acaoGaleria ? `<div class="agenda-acoes">${acaoGaleria}</div>` : '');

      const mesIdxMap = window.AGENDA_MES_INDEX || {};
      const mesNum = (mesIdxMap[eventItem.mes] ?? 0) + 1;

      item.innerHTML = `
        ${isProximo ? '<p class="agenda-destaque-tag">Próximo evento</p>' : ''}
        <time class="agenda-date" datetime="${eventItem.ano}-${String(mesNum).padStart(2, '0')}-${window.escapeHTML(eventItem.dia)}">
          <strong>${window.escapeHTML(eventItem.dia)}</strong>
          <small>${window.escapeHTML(eventItem.mes)} · ${window.escapeHTML(eventItem.ano)}</small>
        </time>
        <article class="agenda-info">
          <div class="agenda-info-topo">
            <p class="agenda-tipo">${info.icon}${window.escapeHTML(eventItem.tipo)}</p>
            ${status.label ? `<p class="agenda-status">${window.escapeHTML(status.label)}</p>` : ''}
          </div>
          <h3>${window.escapeHTML(eventItem.titulo)}</h3>
          <p class="agenda-desc">${window.escapeHTML(eventItem.desc)}</p>
          <div class="agenda-info-meta">
            ${horario}
            <address>${window.AGENDA_ICON_PIN || ''}${window.escapeHTML(eventItem.local)}</address>
          </div>
          ${acoesHtml}
        </article>
      `;

      // Event listener para link direto à galeria
      const btnGaleria = item.querySelector('.agenda-acao-galeria');
      if (btnGaleria) {
        btnGaleria.addEventListener('click', (e) => {
          e.preventDefault();
          const tag = btnGaleria.dataset.galeriaTag;
          if (tag) {
            switchAgendaTab('galeria', true);
            switchGaleriaModo('eventos');
            filtrarEventoGaleria(tag);
          }
        });
      }

      return item;
    }));
  } catch (error) {
    console.error('Erro ao carregar agenda do JSON:', error);
  }
}
window.buildAgenda = buildAgenda;

/* ================================================================
   GALERIA DE FOTOS — CARREGAMENTO, FILTRAGEM, PRÉVIA & MASONRY
   ================================================================ */
async function buildGaleria() {
  const grid = document.getElementById('galeria-grid');
  if (!grid) return;

  try {
    const response = await fetch('DADOS/galeria.json');
    if (!response.ok) {
      throw new Error('Falha ao carregar galeria.json: ' + response.status + ' ' + response.statusText);
    }
    GALERIA = await response.json();
    window.GALERIA = GALERIA;

    atualizarContadoresGaleria();
    renderGaleriaPrevia();
    switchGaleriaModo('todas');

    // Inicializa botões do alternador principal (Ver todas as fotos / Ver por eventos)
    document.querySelectorAll('.galeria-modo-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const modo = btn.dataset.modo || 'todas';
        switchGaleriaModo(modo);
      });
    });

    // Inicializa botões do filtro secundário de eventos
    document.querySelectorAll('.galeria-evento-filtro-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const filtro = btn.dataset.eventoFiltro;
        if (filtro) filtrarEventoGaleria(filtro);
      });
    });

    initAgendaSubnavTabs();
    initGaleriaLightbox();
  } catch (error) {
    console.error('Erro ao carregar fotos da galeria:', error);
  }
}
window.buildGaleria = buildGaleria;

function switchAgendaTab(tabName, shouldScroll = false) {
  const btnAgenda = document.getElementById('tab-btn-agenda');
  const btnGaleria = document.getElementById('tab-btn-galeria');
  const painelAgenda = document.getElementById('painel-agenda');
  const painelGaleria = document.getElementById('painel-galeria');

  if (tabName === 'galeria') {
    btnGaleria?.classList.add('is-active');
    btnGaleria?.setAttribute('aria-selected', 'true');
    btnAgenda?.classList.remove('is-active');
    btnAgenda?.setAttribute('aria-selected', 'false');

    if (painelGaleria) {
      painelGaleria.hidden = false;
      painelGaleria.classList.add('is-active');
    }
    if (painelAgenda) {
      painelAgenda.hidden = true;
      painelAgenda.classList.remove('is-active');
    }

    if (shouldScroll) {
      const target = document.getElementById('agenda-secao-galeria') || document.getElementById('agenda');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    btnAgenda?.classList.add('is-active');
    btnAgenda?.setAttribute('aria-selected', 'true');
    btnGaleria?.classList.remove('is-active');
    btnGaleria?.setAttribute('aria-selected', 'false');

    if (painelAgenda) {
      painelAgenda.hidden = false;
      painelAgenda.classList.add('is-active');
    }
    if (painelGaleria) {
      painelGaleria.hidden = true;
      painelGaleria.classList.remove('is-active');
    }

    if (shouldScroll) {
      const target = document.getElementById('agenda-secao-eventos') || document.getElementById('agenda');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
window.switchAgendaTab = switchAgendaTab;

function initAgendaSubnavTabs() {
  const btnAgenda = document.getElementById('tab-btn-agenda');
  const btnGaleria = document.getElementById('tab-btn-galeria');
  const btnVerTodas = document.getElementById('btn-ver-todas-fotos');

  btnAgenda?.addEventListener('click', () => {
    switchAgendaTab('agenda', false);
  });

  btnGaleria?.addEventListener('click', () => {
    switchAgendaTab('galeria', false);
  });

  btnVerTodas?.addEventListener('click', () => {
    switchAgendaTab('galeria', true);
    switchGaleriaModo('todas');
  });
}
window.initAgendaSubnavTabs = initAgendaSubnavTabs;

function getEventosAgrupados() {
  const eventosMap = new Map();

  GALERIA.forEach((item) => {
    const key = item.categoria || 'geral';
    if (!eventosMap.has(key)) {
      eventosMap.set(key, {
        id: key,
        categoria: key,
        categoriaLabel: item.categoriaLabel || key,
        colecao: item.colecao || item.categoriaLabel || 'Evento Especial',
        titulo: item.titulo || 'Evento com Leitores',
        fotos: []
      });
    }
    eventosMap.get(key).fotos.push(item);
  });

  return Array.from(eventosMap.values());
}
window.getEventosAgrupados = getEventosAgrupados;

function atualizarContadoresGaleria() {
  const total = GALERIA.length;
  const countBuzz = GALERIA.filter((i) => i.categoria === 'buzz').length;
  const countPortal = GALERIA.filter((i) => i.categoria === 'portal').length;
  const countUnicorn = GALERIA.filter((i) => i.categoria === 'unicorn').length;
  const countAmore = GALERIA.filter((i) => i.categoria === 'amore').length;
  const eventos = getEventosAgrupados();

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val);
  };

  setTxt('agenda-subnav-galeria-count', total);
  setTxt('galeria-count-todas', total);
  setTxt('galeria-count-eventos', eventos.length);
  setTxt('galeria-subcount-buzz', countBuzz);
  setTxt('galeria-subcount-portal', countPortal);
  setTxt('galeria-subcount-unicorn', countUnicorn);
  setTxt('galeria-subcount-amore', countAmore);

  document.querySelectorAll('.galeria-total-count').forEach((el) => {
    el.textContent = String(total);
  });
}
window.atualizarContadoresGaleria = atualizarContadoresGaleria;

function desmarcarFiltrosEventos() {
  galeriaEventoFiltroAtivo = null;
  document.querySelectorAll('.galeria-evento-filtro-btn').forEach((btn) => {
    btn.classList.remove('is-active');
    btn.setAttribute('aria-selected', 'false');
  });
}

function switchGaleriaModo(modo, shouldScroll = false) {
  galeriaModoAtivo = modo;

  const btnTodas = document.getElementById('modo-btn-todas');
  const btnEventos = document.getElementById('modo-btn-eventos');
  const filtroEventos = document.getElementById('galeria-eventos-filtro');

  if (modo === 'eventos') {
    btnEventos?.classList.add('is-active');
    btnEventos?.setAttribute('aria-selected', 'true');
    btnTodas?.classList.remove('is-active');
    btnTodas?.setAttribute('aria-selected', 'false');

    if (filtroEventos) filtroEventos.hidden = false;

    if (galeriaEventoFiltroAtivo) {
      filtrarEventoGaleria(galeriaEventoFiltroAtivo);
    } else {
      desmarcarFiltrosEventos();
      galeriaFotosFiltradas = [...GALERIA];
      renderGaleriaCards(galeriaFotosFiltradas);
    }
  } else {
    btnTodas?.classList.add('is-active');
    btnTodas?.setAttribute('aria-selected', 'true');
    btnEventos?.classList.remove('is-active');
    btnEventos?.setAttribute('aria-selected', 'false');

    if (filtroEventos) filtroEventos.hidden = true;
    desmarcarFiltrosEventos();

    galeriaFotosFiltradas = [...GALERIA];
    renderGaleriaCards(galeriaFotosFiltradas);
  }

  if (shouldScroll) {
    const target = document.getElementById('agenda-secao-galeria');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
window.switchGaleriaModo = switchGaleriaModo;

function filtrarEventoGaleria(categoria) {
  if (galeriaEventoFiltroAtivo === categoria) {
    desmarcarFiltrosEventos();
    galeriaFotosFiltradas = [...GALERIA];
    renderGaleriaCards(galeriaFotosFiltradas);
    return;
  }

  galeriaEventoFiltroAtivo = categoria;

  document.querySelectorAll('.galeria-evento-filtro-btn').forEach((btn) => {
    const isActive = btn.dataset.eventoFiltro === categoria;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  galeriaFotosFiltradas = GALERIA.filter((item) => item.categoria === categoria);
  renderGaleriaCards(galeriaFotosFiltradas);
}
window.filtrarEventoGaleria = filtrarEventoGaleria;

function createGaleriaCard(item, index, list) {
  const card = document.createElement('article');
  const orientacao = item.orientacao || 'portrait';
  card.className = `galeria-card galeria-card-${orientacao}`;
  card.dataset.orientacao = orientacao;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Ampliar foto: ${item.titulo}`);

  card.innerHTML = `
    <div class="galeria-card-img-wrap">
      <img src="${window.escapeHTML(item.arquivo)}" alt="${window.escapeHTML(item.titulo)} — Olivia Uviplais" loading="lazy" decoding="async">
      <div class="galeria-card-overlay">
        <span class="galeria-zoom-hint" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </span>
      </div>
    </div>
  `;

  const openThis = () => openGalleryLightbox(index, list);
  card.addEventListener('click', openThis);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openThis();
    }
  });

  return card;
}

function renderGaleriaPrevia() {
  const previaGrid = document.getElementById('galeria-previa-grid');
  if (!previaGrid || !GALERIA.length) return;

  const totalDestaques = 6;
  const previaFotos = [];
  const categorias = [...new Set(GALERIA.map((item) => item.categoria))];
  const copiaGaleria = [...GALERIA];

  categorias.forEach((cat) => {
    const doEvento = copiaGaleria.filter((item) => item.categoria === cat);
    if (doEvento.length) {
      const escolhido = doEvento[Math.floor(Math.random() * doEvento.length)];
      previaFotos.push(escolhido);
      const idx = copiaGaleria.findIndex((item) => item.id === escolhido.id);
      if (idx !== -1) copiaGaleria.splice(idx, 1);
    }
  });

  while (previaFotos.length < totalDestaques && copiaGaleria.length > 0) {
    const rIdx = Math.floor(Math.random() * copiaGaleria.length);
    previaFotos.push(copiaGaleria.splice(rIdx, 1)[0]);
  }

  for (let i = previaFotos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [previaFotos[i], previaFotos[j]] = [previaFotos[j], previaFotos[i]];
  }

  previaGrid.replaceChildren(...previaFotos.map((item, index) => {
    return createGaleriaCard(item, index, previaFotos);
  }));
}
window.renderGaleriaPrevia = renderGaleriaPrevia;

function renderGaleriaCards(items) {
  const grid = document.getElementById('galeria-grid');
  const empty = document.getElementById('galeria-empty');
  if (!grid) return;

  const isIndividual = galeriaModoAtivo === 'eventos' && Boolean(galeriaEventoFiltroAtivo);
  grid.classList.toggle('is-evento-filtrado', isIndividual);

  const hasLandscape = isIndividual && items.some((item) => item.orientacao === 'landscape');
  grid.classList.toggle('has-landscape', hasLandscape);

  if (!items.length) {
    grid.replaceChildren();
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;

  grid.replaceChildren(...items.map((item, index) => {
    return createGaleriaCard(item, index, items);
  }));
}
window.renderGaleriaCards = renderGaleriaCards;

/* ============================================================
   LIGHTBOX DA GALERIA DE ENCONTROS
   ============================================================ */
function initGaleriaLightbox() {
  const overlay = document.getElementById('galeria-lightbox-overlay');
  const closeButton = document.getElementById('galeria-lightbox-close');
  const prevButton = document.getElementById('galeria-lightbox-prev');
  const nextButton = document.getElementById('galeria-lightbox-next');

  closeButton?.addEventListener('click', (e) => {
    e.preventDefault();
    closeGaleriaLightbox();
  });

  prevButton?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigateGalleryLightbox(-1);
  });

  nextButton?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigateGalleryLightbox(1);
  });

  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.id === 'galeria-lightbox-figure') {
      closeGaleriaLightbox();
    }
  });

  overlay?.addEventListener('touchstart', (e) => {
    if (e.changedTouches?.[0]) {
      galeriaTouchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  overlay?.addEventListener('touchend', (e) => {
    if (e.changedTouches?.[0]) {
      galeriaTouchEndX = e.changedTouches[0].screenX;
      const deltaX = galeriaTouchEndX - galeriaTouchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          navigateGalleryLightbox(1);
        } else {
          navigateGalleryLightbox(-1);
        }
      }
    }
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (!overlay?.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeGaleriaLightbox();
    } else if (event.key === 'ArrowLeft') {
      navigateGalleryLightbox(-1);
    } else if (event.key === 'ArrowRight') {
      navigateGalleryLightbox(1);
    }
  });
}
window.initGaleriaLightbox = initGaleriaLightbox;

function openGalleryLightbox(index, photosList = galeriaFotosFiltradas) {
  const overlay = document.getElementById('galeria-lightbox-overlay');
  const img = document.getElementById('galeria-lightbox-img');
  const prevButton = document.getElementById('galeria-lightbox-prev');
  const nextButton = document.getElementById('galeria-lightbox-next');
  if (!overlay || !img || !photosList.length) return;

  galeriaFotosFiltradas = photosList;
  galeriaLightboxIndex = (index + photosList.length) % photosList.length;

  updateGalleryLightboxContent();

  if (prevButton) prevButton.hidden = photosList.length <= 1;
  if (nextButton) nextButton.hidden = photosList.length <= 1;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
}
window.openGalleryLightbox = openGalleryLightbox;

function updateGalleryLightboxContent() {
  const item = galeriaFotosFiltradas[galeriaLightboxIndex];
  if (!item) return;

  const img = document.getElementById('galeria-lightbox-img');
  const title = document.getElementById('galeria-lightbox-title');
  const creditoBox = document.getElementById('galeria-lightbox-credito');

  if (img) {
    img.style.opacity = '0.4';
    img.src = item.arquivo;
    img.alt = `${item.titulo} — Olivia Uviplais`;
    img.onload = () => { img.style.opacity = '1'; };
  }

  if (title) {
    title.textContent = item.titulo || 'Momento com Leitores';
  }

  if (creditoBox) {
    const extractCredit = window.extractCreditFromPath || (() => null);
    const credito = item.credito || extractCredit(item.arquivo);
    if (credito) {
      creditoBox.textContent = `Foto: ${credito}`;
      creditoBox.hidden = false;
    } else {
      creditoBox.hidden = true;
    }
  }
}

function navigateGalleryLightbox(direction) {
  if (!galeriaFotosFiltradas.length) return;
  galeriaLightboxIndex = (galeriaLightboxIndex + direction + galeriaFotosFiltradas.length) % galeriaFotosFiltradas.length;
  updateGalleryLightboxContent();
}
window.navigateGalleryLightbox = navigateGalleryLightbox;

function closeGaleriaLightbox() {
  const overlay = document.getElementById('galeria-lightbox-overlay');
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}
window.closeGaleriaLightbox = closeGaleriaLightbox;
