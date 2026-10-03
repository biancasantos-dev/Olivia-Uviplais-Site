/* ================================================================
   OLIVIA UVIPLAIS — NA MÍDIA
   Notícias, clipping, citações da imprensa e publicações.
   ================================================================ */

'use strict';

let NOTICIAS_MIDIA = [];
window.NOTICIAS_MIDIA = NOTICIAS_MIDIA;

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
      <figure class="midia-frame midia-frame-citacao" tabindex="0" role="button" aria-label="Ampliar recorte com citação: ${window.escapeHTML(item.titulo)}">
        <img class="midia-preview-img midia-citacao-img" src="${citacaoImg.src}" alt="${window.escapeHTML(citacaoImg.alt)}" loading="lazy">
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
        <span class="midia-badge midia-badge-${item.veiculoBadge}">${window.escapeHTML(item.veiculo)}</span>
      </div>
      <time class="midia-card-data" datetime="${item.data.split('/').reverse().join('-')}">${window.escapeHTML(item.dataFormatada)}</time>
    </header>

    <div class="midia-preview-wrap">
      <figure class="midia-frame midia-frame-capa" tabindex="0" role="button" aria-label="Ampliar print da matéria: ${window.escapeHTML(item.titulo)}">
        <img class="midia-preview-img" src="${primeiraImg.src}" alt="${window.escapeHTML(primeiraImg.alt)}" loading="lazy">
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
        <h3 class="midia-card-titulo">${window.escapeHTML(item.titulo)}</h3>
        ${item.autor ? `<p class="midia-card-autor">Por <strong>${window.escapeHTML(item.autor)}</strong></p>` : ''}
      </div>
      ${ctaLinkHtml}
    </div>
  `;

  const openBox = window.openLightbox || ((src, alt) => {});

  const frameCapa = card.querySelector('.midia-frame-capa');
  if (frameCapa) {
    const openCapa = () => openBox(primeiraImg.src, `${item.veiculo} — ${item.titulo}`);
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
    const openCitacao = () => openBox(citacaoImg.src, `${item.veiculo} (Citação) — ${item.titulo}`);
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
      openBox(primeiraImg.src, `${item.veiculo} — ${item.titulo}`);
    });
  }

  return card;
}
