/* ================================================================
   OLIVIA UVIPLAIS — ANIMAÇÕES E TRANSIÇÕES CENOGRÁFICAS
   Arquivo dedicado exclusivamente a efeitos visuais, transição 3D
   de abertura realista de livros e arrasto de estantes.
   ================================================================ */

'use strict';

window.isBookTransitioning = false;

function escapeStr(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/**
 * Animação 3D cinematográfica realista de abertura de livro da estante.
 * O livro sobe suave e reto ao centro da tela, a capa articulada se abre em 3D
 * revelando a folha de guarda e a página de título interna com marcador.
 * Aos 550ms, o modal de detalhes do livro se abre suavemente.
 *
 * @param {Object} book Objeto do livro clicado
 */
function playBookTransition(book) {
  if (window.isBookTransitioning) return;

  const stage = document.getElementById('transicao-cenica-estante');
  if (!stage) {
    if (typeof window.openModal === 'function') {
      window.openModal(book);
    }
    return;
  }

  window.isBookTransitioning = true;

  // Pré-carrega a imagem da capa para garantir renderização perfeita na GPU
  const preload = new Image();
  preload.src = book.capa;

  const safeCapa = escapeStr(book.capa);
  const safeTitulo = escapeStr(book.titulo);
  const safeSerie = escapeStr(book.serie || 'Romance · Olivia Uviplais');

  stage.innerHTML = `
    <div class="livro-3d-cenario">
      <div class="livro-3d-objeto">
        <!-- Corpo das páginas internas do livro -->
        <div class="livro-bloco-folhas">
          <div class="folha-conteudo-interna">
            <span class="folha-selo-autora">Olivia Uviplais</span>
            <strong class="folha-titulo-livro">${safeTitulo}</strong>
            <small class="folha-subtitulo">${safeSerie}</small>
            <div class="folha-decoracao">
              <span class="folha-linha"></span>
              <span class="folha-linha curta"></span>
            </div>
            <div class="folha-fita-cetim"></div>
          </div>
        </div>
        <!-- Capa articulada em 3D em torno da lombada (frente com a arte, verso com guarda de luxo) -->
        <div class="livro-folha-capa">
          <div class="capa-lado capa-frente">
            <img src="${safeCapa}" alt="${safeTitulo}">
            <div class="capa-efeito-luz"></div>
          </div>
          <div class="capa-lado capa-verso">
            <div class="verso-guardas">
              <span class="ex-libris-texto">Da estante de Olivia Uviplais</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  stage.classList.add('executando-voo');

  stage.onclick = () => {
    if (typeof window.openModal === 'function') {
      window.openModal(book);
    }
    closeBookTransition();
  };

  const transitionId = Date.now();
  window.currentBookTransitionId = transitionId;

  // Dá tempo para o usuário apreciar a capa centralizada fechada (0.45s),
  // e acompanhar o movimento que começa mais lento e acelera (abertura completa aos ~1.35s)
  window.setTimeout(() => {
    if (window.currentBookTransitionId === transitionId && window.isBookTransitioning) {
      if (typeof window.openModal === 'function') {
        window.openModal(book);
      }
    }
  }, 1360);

  // Reseta o palco de transição assim que o modal estiver aberto e estável
  window.setTimeout(() => {
    if (window.currentBookTransitionId === transitionId) {
      closeBookTransition();
    }
  }, 1680);
}

/**
 * Encerra imediatamente qualquer transição cenográfica ativa (ex: ao fechar o modal ou teclar ESC).
 */
function closeBookTransition() {
  const stage = document.getElementById('transicao-cenica-estante');
  if (stage) {
    stage.classList.remove('executando-voo');
    stage.onclick = null;
    stage.replaceChildren();
  }
  window.isBookTransitioning = false;
  window.currentBookTransitionId = null;
}

/**
 * Arrasto horizontal com o mouse nas prateleiras físicas (drag-to-scroll).
 */
function initShelfDragScroll() {
  document.querySelectorAll('.suporte-fisico-prateleira').forEach((shelf) => {
    let isDown = false;
    let didDrag = false;
    let startX = 0;
    let startScroll = 0;

    shelf.addEventListener('mousedown', (event) => {
      if (event.button !== 0) return;
      isDown = true;
      didDrag = false;
      startX = event.pageX;
      startScroll = shelf.scrollLeft;
    });

    window.addEventListener('mousemove', (event) => {
      if (!isDown) return;
      const walk = event.pageX - startX;
      if (Math.abs(walk) > 8) {
        didDrag = true;
        shelf.classList.add('is-dragging');
        shelf.scrollLeft = startScroll - walk;
      }
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      setTimeout(() => {
        shelf.classList.remove('is-dragging');
        didDrag = false;
      }, 50);
    });

    shelf.addEventListener('click', (event) => {
      if (didDrag) {
        event.stopPropagation();
        event.preventDefault();
      }
    });
  });
}

// Expõe globalmente
window.playBookTransition = playBookTransition;
window.closeBookTransition = closeBookTransition;
window.initShelfDragScroll = initShelfDragScroll;
