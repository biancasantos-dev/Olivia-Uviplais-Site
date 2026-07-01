/* ================================================================
   OLIVIA UVIPLAIS — SITE OFICIAL
   JavaScript puro, organizado por responsabilidade.
   ================================================================ */

'use strict';

const BOOKS = [
  { id: 'jogos-de-poder', titulo: 'Jogos de Poder', serie: 'Série Jogos da Máfia · Livro 1', capa: 'CAPAS/1. Jogos de Poder - Livro 1 da Série Jogos da Máfia.jpg', lancamento: '07/07/2020', idioma: 'Português', paginas: 243, ebook: 'https://a.co/d/0dEQYiMH', sinopse: 'Serena Greco tentou ao máximo fugir do fato de ser filha da família que comanda a máfia em Chicago. Mas numa armadilha do próprio pai, ela se torna o elo entre a Outfit e a Cosa Nostra.', tropes: ['Máfia Romance', 'Famílias Rivais', 'Casamento por Conveniência'], categoria: 'pt' },
  { id: 'jogos-de-ruina', titulo: 'Jogos de Ruína', serie: 'Série Jogos da Máfia · Livro 2', capa: 'CAPAS/2. Jogos de Ruína - Livro 2 da Série Jogos da Máfia.jpg', lancamento: '2021', idioma: 'Português', paginas: 233, ebook: 'https://a.co/d/0iLdRCc4', sinopse: 'O segundo capítulo da saga Jogos da Máfia. Quando as peças do tabuleiro mudam, as regras do jogo também mudam.', tropes: ['Máfia Romance', 'Dark Romance', 'Famílias Rivais'], categoria: 'pt' },
  { id: 'jogos-de-vitoria', titulo: 'Jogos de Vitória', serie: 'Série Jogos da Máfia · Livro 3', capa: 'CAPAS/3. Jogos de Vitória  - Livro 3 da Série Jogos da Máfia.jpg', lancamento: '2022', idioma: 'Português', paginas: 237, ebook: 'https://a.co/d/026x6vcf', sinopse: 'O capítulo final da Série Jogos da Máfia. A batalha entre as famílias chega ao fim, mas nenhuma vitória vem sem um preço.', tropes: ['Máfia Romance', 'Dark Romance', 'Forced Proximity'], categoria: 'pt' },
  { id: 'faca-um-pedido', titulo: 'Faça Um Pedido', serie: null, capa: 'CAPAS/4. Faça Um Pedido.jpg', lancamento: '2021', idioma: 'Português', paginas: 287, ebook: 'https://a.co/d/0bBaRj3e', sinopse: 'Um pedido feito sem pensar. Uma promessa que não deveria ser cumprida. E dois corações que insistem em sentir o que não deveriam.', tropes: ['Enemies to Lovers', 'Forced Proximity', 'Slow Burn'], categoria: 'pt' },
  { id: 'eu-pediria-por-voce', titulo: 'Eu Pediria Por Você', serie: 'Spin-Off de Faça Um Pedido', capa: 'CAPAS/5. Eu Pediria Por Você - Spin-Off de Faça Um Pedido.jpg', lancamento: '2022', idioma: 'Português', paginas: 149, ebook: 'https://a.co/d/0av7zL2g', sinopse: 'Theo Jones amou Maeve Carter em todas as linhas temporais. O que aconteceria se Theo viajasse no tempo e encontrasse uma Maeve que nunca o conheceu?', tropes: ['Second Chance', 'Enemies to Lovers', 'Secret'], categoria: 'pt' },
  { id: 'contrato-em-las-vegas', titulo: 'Contrato em Las Vegas', serie: null, capa: 'CAPAS/6. Contrato em Las Vegas.jpg', lancamento: '2022', idioma: 'Português', paginas: 345, ebook: 'https://a.co/d/0dwm1Qzr', sinopse: 'Uma noite em Las Vegas, um contrato e duas pessoas que deveriam saber melhor do que misturar negócios com sentimentos.', tropes: ['Casamento por Conveniência', 'Forced Proximity', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'contos-de-contrato', titulo: 'Contos de Contrato em Las Vegas', serie: 'Universo Las Vegas', capa: 'CAPAS/7. Contos de Contrato em Las Vegas.jpg', lancamento: '2022', idioma: 'Português', paginas: 47, ebook: 'https://a.co/d/07S3VASl', sinopse: 'Histórias extras do universo Las Vegas. Contos que expandem os casais favoritos.', tropes: ['Casamento por Conveniência', 'Slow Burn', 'Short Story'], categoria: 'pt' },
  { id: 'os-padrinhos', titulo: 'Os Padrinhos', serie: null, capa: 'CAPAS/8. Os Padrinhos.jpg', lancamento: '2020', idioma: 'Português', paginas: 287, ebook: 'https://a.co/d/06epa6a3', sinopse: 'Duas pessoas que se odeiam mais do que tudo precisam organizar um casamento juntos. 30 semanas no Top 100 da Amazon.', tropes: ['Enemies to Lovers', 'Forced Proximity', 'Wedding'], categoria: 'pt' },
  { id: 'o-pedido', titulo: 'O Pedido', serie: 'Conto — Universo Os Padrinhos', capa: 'CAPAS/9. O Pedido Um conto de Os Padrinhos.jpg', lancamento: '2021', idioma: 'Português', paginas: 75, ebook: 'https://a.co/d/06eyhLiv', sinopse: 'O que acontece quando o par favorito tem mais história para contar? Harry surpreenderá Amy.', tropes: ['Enemies to Lovers', 'Short Story'], categoria: 'pt' },
  { id: 'lance-proibido', titulo: 'Lance Proibido', serie: null, capa: 'CAPAS/10. Lance Proibido.jpg', lancamento: '2021', idioma: 'Português', paginas: 192, ebook: 'https://a.co/d/0f719EkQ', sinopse: 'Quando o amor é proibido, a única saída é ir contra tudo e todos.', tropes: ['Forbidden Romance', 'Enemies to Lovers', 'Slow Burn'], categoria: 'pt' },
  { id: 'os-socios', titulo: 'Os Sócios', serie: null, capa: 'CAPAS/11. Os Sócios.jpg', lancamento: '2022', idioma: 'Português', paginas: 289, ebook: 'https://a.co/d/09wczkWK', sinopse: 'Uma sociedade que deveria ser só de negócios. Dois corações que decidiram ignorar o memorando.', tropes: ['Office Romance', 'Enemies to Lovers', 'Fake Dating'], categoria: 'pt' },
  { id: 'alianca-perfeita', titulo: 'Aliança Perfeita', serie: null, capa: 'CAPAS/12. Aliança Perfeita.jpg', lancamento: '2022', idioma: 'Português', paginas: 411, ebook: 'https://a.co/d/0axA1E4e', sinopse: 'Uma aliança arranjada, um casamento de conveniência e dois estranhos descobrindo que o perfeito pode surpreender.', tropes: ['Casamento por Conveniência', 'Grumpy x Sunshine', 'Slow Burn'], categoria: 'pt' },
  { id: 'meu-detestavel-chefe', titulo: 'Meu Detestável Chefe', serie: null, capa: 'CAPAS/13. Meu Detestável Chefe.jpg', lancamento: '2022', idioma: 'Português', paginas: 275, ebook: 'https://a.co/d/03YMmUu0', sinopse: 'Ele é arrogante, exigente e impossível de ignorar. Ela jurou não misturar trabalho com sentimentos.', tropes: ['Office Romance', 'Boss/Employee', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'protegida-guarda-costas', titulo: 'Protegida Pelo Guarda-Costas', serie: null, capa: 'CAPAS/14. Protegida Pelo Guarda-Costas.jpg', lancamento: '2023', idioma: 'Português', paginas: 397, ebook: 'https://a.co/d/09nLYUpN', sinopse: 'Quando a pessoa encarregada de protegê-la se torna o maior perigo para o seu coração.', tropes: ['Bodyguard Romance', 'Forced Proximity', 'Grumpy x Sunshine'], categoria: 'pt' },
  { id: 'manual-conquista', titulo: 'Manual da Conquista Imperfeita', serie: null, capa: 'CAPAS/15. Manual da Conquista Imperfeita.jpg', lancamento: '2023', idioma: 'Português', paginas: 427, ebook: 'https://a.co/d/08EM88dU', sinopse: 'Nenhum manual prepara para o amor real, especialmente quando o objeto é exatamente quem você não deveria querer.', tropes: ['Enemies to Lovers', 'Fake Dating', 'Small Town'], categoria: 'pt' },
  { id: 'um-comeco-imperfeito', titulo: 'Um Começo Imperfeito', serie: null, capa: 'CAPAS/16. Um Começo Imperfeito a bebê secreta do magnata.jpg', lancamento: '2023', idioma: 'Português', paginas: 305, ebook: 'https://a.co/d/00su91QD', sinopse: 'Uma bebê secreta, um magnata que não estava nos planos e um começo que é tudo menos perfeito.', tropes: ['Secret Baby', 'Single Parent', 'Second Chance'], categoria: 'pt' },
  { id: 'o-principio-do-amor', titulo: 'O Princípio do Amor', serie: null, capa: 'CAPAS/17. O Principio do Amor.jpg', lancamento: '2023', idioma: 'Português', paginas: 361, ebook: 'https://a.co/d/0dmxxJgJ', sinopse: 'No princípio era a amizade. Depois vieram os olhares e a percepção inevitável de que algo havia mudado.', tropes: ['Friends to Lovers', 'Slow Burn', 'Coming of Age'], categoria: 'pt' },
  { id: 'temporada-de-farsa', titulo: 'Temporada de Farsa & Gelo', serie: null, capa: 'CAPAS/18. Temporada de Farsa & Gelo.jpg', lancamento: '2023', idioma: 'Português', paginas: 555, ebook: 'https://a.co/d/016kh07K', sinopse: 'Uma farsa para salvar a temporada, um jogador de gelo que é tudo menos frio.', tropes: ['Fake Dating', 'Sports Romance', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'amor-por-acidente', titulo: 'Amor Por Acidente', serie: 'Irmãos Callahan · Livro 1', capa: 'CAPAS/19. Amor Por Acidente (Irmãos Callahan Livro 1).jpg', lancamento: '2023', idioma: 'Português', paginas: 709, ebook: 'https://a.co/d/01F0vaPu', sinopse: 'Uma gravidez acidental, um homem que ela mal conhece e a descoberta de que acidentes podem ser a melhor coisa.', tropes: ['Enemies to Lovers', 'Gravidez Acidental', 'Forced Proximity'], categoria: 'pt' },
  { id: 'chefe-quase-perfeito', titulo: 'Um Chefe (Quase) Perfeito', serie: 'Irmãos Callahan · Livro 2', capa: 'CAPAS/20. Um Chefe (Quase) Perfeito (Irmãos Callahan Livro 2).jpg', lancamento: '2024', idioma: 'Português', paginas: 597, ebook: 'https://a.co/d/04Y02MC0', sinopse: 'Ele é quase perfeito, exceto pelo temperamento impossível e pela tendência de cruzar linhas.', tropes: ['Office Romance', 'Boss/Employee', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'como-salvar-mafioso', titulo: 'Como Salvar Um Mafioso', serie: null, capa: 'CAPAS/21. Como Salvar Um Mafioso.jpg', lancamento: '2024', idioma: 'Português', paginas: 412, ebook: 'https://a.co/d/09mpKRyN', sinopse: 'Um manual que ninguém pediu para quando o coração decide se apaixonar pela pessoa mais perigosa.', tropes: ['Máfia Romance', 'Enemies to Lovers', 'Dark Romance'], categoria: 'pt' },
  { id: 'improvisado', titulo: 'Improvisado', serie: 'O Clube dos Pais Solteiros do Hóquei', capa: 'CAPAS/22. Improvisado O Clube dos Pais Solteiros do Hóquei.jpg', lancamento: '2024', idioma: 'Português', paginas: 551, ebook: 'https://a.co/d/0g4GXayq', sinopse: 'Pais solteiros, filhos caóticos e um grupo de jogadores de hóquei que aprendem que improvisar pode funcionar.', tropes: ['Sports Romance', 'Single Parent', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'maid-for-each-other', titulo: 'Maid For Each Other', serie: null, capa: 'CAPAS/23. Maid For Each Other.jpg', lancamento: '2024', idioma: 'Inglês', paginas: 261, ebook: 'https://a.co/d/0dJxigmz', sinopse: "An enemies-to-lovers story that proves being thrown together in the most inconvenient way possible is sometimes the universe's best plan.", tropes: ['Enemies to Lovers', 'Fake Dating', 'Forced Proximity'], categoria: 'idiomas' },
  { id: 'seduction-effect', titulo: 'The Seduction Effect', serie: null, capa: 'CAPAS/24. The Seduction Effect.jpg', lancamento: '2024', idioma: 'Inglês', paginas: 374, ebook: 'https://a.co/d/06NyVjFi', sinopse: 'A slow-burn office romance where the rules are clear, the attraction is undeniable.', tropes: ['Office Romance', 'Enemies to Lovers', 'Slow Burn'], categoria: 'idiomas' },
  { id: 'les-temoins', titulo: 'Les Témoins de Mariage', serie: null, capa: 'CAPAS/25. Les Témoins de Mariage.jpg', lancamento: '2024', idioma: 'Francês', paginas: 290, ebook: 'https://a.co/d/0frkqZzR', sinopse: "Deux témoins de mariage qui se détestent, un mariage à organiser et une évidence qui refuse d'être ignorée.", tropes: ['Enemies to Lovers', 'Wedding', 'Forced Proximity'], categoria: 'idiomas' },
  { id: 'doces-rivais', titulo: 'Doces Rivais', serie: null, capa: 'CAPAS/26. Doces Rivais.jpg', lancamento: '2024', idioma: 'Português', paginas: 310, ebook: 'https://a.co/d/04k3otwX', sinopse: 'Uma rivalidade açucarada, uma pequena cidade e dois corações que insistem em bater mais rápido.', tropes: ['Enemies to Lovers', 'Small Town', 'Grumpy x Sunshine'], categoria: 'tradicionais' }
];

const TIMELINE = [
  { ano: '1999', titulo: 'Origens em Minas', desc: 'Nascimento no interior de Minas Gerais, imersa no ato de contar histórias.' },
  { ano: 'Adolescência', titulo: 'O primeiro fanfic', desc: '"Second Chance": uma versão revisitada de Lua Nova, mais dramática.' },
  { ano: 'Wattpad', titulo: 'Adorável Babá', desc: 'Um ano de atualizações semanais. Um milhão de leitores. A prova de que histórias encontram seu caminho.' },
  { ano: '2017', titulo: 'Top 17 Kindle', desc: 'Lançamento na Amazon. Top 17 de mais vendidos e R$ 1.700 faturados no primeiro mês.' },
  { ano: 'Pandemia', titulo: 'Os Padrinhos', desc: '30 semanas no Top 100 da Amazon, das quais 9 no Top 10. Divisor de águas.' },
  { ano: 'Hoje', titulo: 'Best-Seller Amazon', desc: 'A adolescente que escrevia por amor agora vive profissionalmente do que sempre sonhou.' }
];

const AGENDA = [
  { dia: '15', mes: 'Ago', ano: '2026', tipo: 'Feira', titulo: 'Bienal do Livro SP', local: 'São Paulo, SP', desc: 'Mesa de debates sobre comédias românticas brasileiras contemporâneas.' },
  { dia: '20', mes: 'Set', ano: '2026', tipo: 'Lançamento', titulo: 'Live de Lançamento', local: 'Online · Instagram', desc: 'Live com a autora, revelação de novo livro e Q&A ao vivo com leitoras.' },
  { dia: '12', mes: 'Out', ano: '2026', tipo: 'Evento', titulo: 'Encontro com Leitoras', local: 'Belo Horizonte, MG', desc: 'Sessão de autógrafos e bate-papo exclusivo no maior evento literário de MG.' }
];

const selectors = {
  header: '#site-header',
  navToggle: '#nav-toggle',
  navLinks: '#nav-links',
  page: '.page',
  pageLink: '[data-page]',
  modalOverlay: '#modal-overlay',
  modalBox: '#modal-box'
};

document.addEventListener('DOMContentLoaded', initSite);

function initSite() {
  initRouter();
  initMenu();
  buildTimeline();
  buildBookshelf();
  buildAgenda();
  initForms();
  initBioToggle();
  initModal();
}

function initRouter() {
  const links = document.querySelectorAll(selectors.pageLink);
  const initialPage = getPageFromHash();

  document.addEventListener('click', (event) => {
    const link = event.target.closest(selectors.pageLink);
    if (!link) return;

    event.preventDefault();
    showPage(link.dataset.page || 'home');
  });

  window.addEventListener('hashchange', () => showPage(getPageFromHash(), false));
  window.addEventListener('scroll', updateHeaderMode, { passive: true });

  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === initialPage);
  });
  showPage(initialPage, false);
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return document.getElementById(page) ? page : 'home';
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

  closeMenu();
  updateHeaderMode();
  window.scrollTo({ top: 0, behavior: 'auto' });

  if (updateHash && window.location.hash !== `#${target.id}`) {
    history.pushState(null, '', `#${target.id}`);
  }
}

window.showPage = showPage;

function updateHeaderMode() {
  const header = document.querySelector(selectors.header);
  if (!header) return;

  const pageId = getPageFromHash();
  const isHero = pageId === 'home' && window.scrollY <= 80;
  header.classList.toggle('hero-mode', isHero);
  header.classList.toggle('solid-mode', !isHero);
}

function initMenu() {
  const toggle = document.querySelector(selectors.navToggle);
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = document.querySelector(selectors.navLinks)?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    toggle.textContent = isOpen ? '×' : '☰';
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
    tradicionais: document.getElementById('bookshelf-tradicionais')
  };

  if (!filterNav || !shelves.pt || !shelves.idiomas || !shelves.tradicionais) return;

  filterNav.replaceChildren(createTropeButton('Todos', 'all', true));
  getAllTropes().forEach((trope) => filterNav.appendChild(createTropeButton(trope, trope)));

  BOOKS.forEach((book) => {
    shelves[book.categoria].appendChild(createBookElement(book));
  });

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
  button.dataset.tropes = JSON.stringify(book.tropes);
  button.setAttribute('aria-label', `Abrir detalhes de ${book.titulo}`);
  button.innerHTML = `
    <figure class="book-cover">
      <img src="${book.capa}" alt="Capa do livro ${escapeHTML(book.titulo)}" width="300" height="450" loading="lazy">
      <figcaption class="book-overlay"><span>Detalhes</span></figcaption>
    </figure>
    <section class="book-meta">
      <h3>${escapeHTML(book.titulo)}</h3>
      <p>${escapeHTML(book.serie || book.idioma)}</p>
      <ul class="book-tropes" role="list">
        ${book.tropes.map((trope, index) => `<li><b class="badge ${getBadgeColor(index)}">${escapeHTML(trope)}</b></li>`).join('')}
      </ul>
    </section>
  `;

  button.addEventListener('click', () => playBookTransition(book));
  item.appendChild(button);
  return item;
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

function playBookTransition(book) {
  const stage = document.getElementById('transicao-cenica-estante');
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    openModal(book);
    return;
  }

  stage.innerHTML = `<figure><img src="${book.capa}" alt=""><var></var></figure>`;
  stage.classList.add('executando-voo');

  window.setTimeout(() => openModal(book), 520);
  window.setTimeout(() => {
    stage.classList.remove('executando-voo');
    stage.replaceChildren();
  }, 950);
}

function initModal() {
  const overlay = document.querySelector(selectors.modalOverlay);
  const closeButton = document.getElementById('modal-close');

  closeButton?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function openModal(book) {
  const overlay = document.querySelector(selectors.modalOverlay);
  const modal = document.querySelector(selectors.modalBox);
  if (!overlay || !modal) return;

  modal.querySelector('.modal-cover img').src = book.capa;
  modal.querySelector('.modal-cover img').alt = `Capa do livro ${book.titulo}`;
  modal.querySelector('.modal-serie').textContent = book.serie || 'Romance · Olivia Uviplais';
  modal.querySelector('.modal-title').textContent = book.titulo;
  modal.querySelector('.modal-sinopse').textContent = book.sinopse;
  modal.querySelector('.modal-meta').innerHTML = `
    <article class="info-livro"><small>Lançamento</small><strong>${escapeHTML(book.lancamento)}</strong></article>
    <article class="info-livro"><small>Formato</small><strong>${book.paginas} páginas · ${escapeHTML(book.idioma)}</strong></article>
  `;
  modal.querySelector('.modal-tropes').innerHTML = book.tropes
    .map((trope) => `<li><b class="trope-clicavel">${escapeHTML(trope)}</b></li>`)
    .join('');
  modal.querySelector('.modal-actions').innerHTML = `
    <a href="${book.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Comprar eBook</a>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('modal-close')?.focus();
}

function closeModal() {
  const overlay = document.querySelector(selectors.modalOverlay);
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

window.closeModal = closeModal;

function buildTimeline() {
  const row = document.getElementById('timeline-row');
  const track = document.getElementById('timeline-track');
  if (!row || !track) return;

  row.replaceChildren(...TIMELINE.map((item) => {
    const element = document.createElement('li');
    element.className = 'tl-item';
    element.innerHTML = `
      <i class="tl-connector" aria-hidden="true"></i>
      <article class="tl-card">
        <time>${escapeHTML(item.ano)}</time>
        <h3>${escapeHTML(item.titulo)}</h3>
        <p>${escapeHTML(item.desc)}</p>
      </article>
    `;
    return element;
  }));

  initHorizontalDrag(track);
}

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

function buildAgenda() {
  const list = document.getElementById('agenda-list');
  if (!list) return;

  list.replaceChildren(...AGENDA.map((eventItem) => {
    const item = document.createElement('li');
    item.className = 'agenda-item';
    item.innerHTML = `
      <time class="agenda-date" datetime="${eventItem.ano}">
        <strong>${escapeHTML(eventItem.dia)}</strong>
        <small>${escapeHTML(eventItem.mes)} ${escapeHTML(eventItem.ano)}</small>
      </time>
      <article class="agenda-info">
        <p class="agenda-tipo">${escapeHTML(eventItem.tipo)}</p>
        <h3>${escapeHTML(eventItem.titulo)}</h3>
        <p>${escapeHTML(eventItem.desc)}</p>
        <address>${escapeHTML(eventItem.local)}</address>
      </article>
    `;
    return item;
  }));
}

function initForms() {
  const forms = [
    { id: 'form-nl-page', message: 'Inscrição registrada. Bem-vinda ao Oliviverso!' },
    { id: 'form-contato', message: 'Mensagem enviada para a assessoria!' }
  ];

  forms.forEach(({ id, message }) => {
    const form = document.getElementById(id);
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      toast(message);
      form.reset();
    });
  });
}

function initBioToggle() {
  const button = document.getElementById('bio-toggle');
  const expandable = document.getElementById('bio-expandable');
  if (!button || !expandable) return;

  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'bio-expandable');

  button.addEventListener('click', () => {
    const open = expandable.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Recolher história ↑' : 'Ler história completa ↓';
  });
}

function toast(message) {
  document.querySelectorAll('.toast').forEach((item) => item.remove());

  const element = document.createElement('output');
  element.className = 'toast';
  element.textContent = message;
  element.setAttribute('role', 'status');

  document.body.appendChild(element);
  window.setTimeout(() => element.remove(), 3800);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
