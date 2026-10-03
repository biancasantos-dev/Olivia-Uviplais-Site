/* ================================================================
   OLIVIA UVIPLAIS — SOBRE
   Timeline de carreira interativa e arrasto horizontal.
   ================================================================ */

'use strict';

let TIMELINE = [];
window.TIMELINE = TIMELINE;

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
          <time>${window.escapeHTML(item.ano)}</time>
          <h3>${window.escapeHTML(item.titulo)}</h3>
          <p>${window.escapeHTML(item.desc)}</p>
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
