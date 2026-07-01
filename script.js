/* ================================================================
   OLIVIA UVIPLAIS — SITE OFICIAL
   js/script.js
   ================================================================ */

'use strict';

const BOOKS = [
  { id: 'jogos-de-poder', titulo: 'Jogos de Poder', serie: 'Série Jogos da Máfia · Livro 1', capa: 'CAPAS/1. Jogos de Poder - Livro 1 da Série Jogos da Máfia.jpg', lancamento: '07/07/2020', idioma: 'Português', paginas: 243, ebook: 'https://a.co/d/0dEQYiMH', sinopse: 'Serena Greco tentou ao máximo fugir do fato de ser filha da família que comanda a máfia em Chicago. Mas numa armadilha do próprio pai, ela se torna o elo entre a Outfit e a Cosa Nostra.', tropes: ['Máfia Romance', 'Famílias Rivais', 'Casamento por Conveniência'], categoria: 'pt' },
  { id: 'jogos-de-ruina', titulo: 'Jogos de Ruína', serie: 'Série Jogos da Máfia · Livro 2', capa: 'CAPAS/2. Jogos de Ruína - Livro 2 da Série Jogos da Máfia.jpg', lancamento: '2021', idioma: 'Português', paginas: 233, ebook: 'https://a.co/d/0iLdRCc4', sinopse: 'O segundo capítulo da saga Jogos da Máfia. Quando as peças do tabuleiro mudam, as regras do jogo também mudam.', tropes: ['Máfia Romance', 'Dark Romance', 'Famílias Rivais'], categoria: 'pt' },
  { id: 'jogos-de-vitoria', titulo: 'Jogos de Vitória', serie: 'Série Jogos da Máfia · Livro 3', capa: 'CAPAS/3. Jogos de Vitória  - Livro 3 da Série Jogos da Máfia.jpg', lancamento: '2022', idioma: 'Português', paginas: 237, ebook: 'https://a.co/d/026x6vcf', sinopse: 'O capítulo final da Série Jogos da Máfia. A batalha entre as famílias chega ao fim — mas nenhuma vitória vem sem um preço.', tropes: ['Máfia Romance', 'Dark Romance', 'Forced Proximity'], categoria: 'pt' },
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
  { id: 'manual-conquista', titulo: 'Manual da Conquista Imperfeita', serie: null, capa: 'CAPAS/15. Manual da Conquista Imperfeita.jpg', lancamento: '2023', idioma: 'Português', paginas: 427, ebook: 'https://a.co/d/08EM88dU', sinopse: 'Nenhum manual prepara para o amor real — especialmente quando o objeto é exatamente quem você não deveria querer.', tropes: ['Enemies to Lovers', 'Fake Dating', 'Small Town'], categoria: 'pt' },
  { id: 'um-comeco-imperfeito', titulo: 'Um Começo Imperfeito', serie: null, capa: 'CAPAS/16. Um Começo Imperfeito a bebê secreta do magnata.jpg', lancamento: '2023', idioma: 'Português', paginas: 305, ebook: 'https://a.co/d/00su91QD', sinopse: 'Uma bebê secreta, um magnata que não estava nos planos e um começo que é tudo menos perfeito.', tropes: ['Secret Baby', 'Single Parent', 'Second Chance'], categoria: 'pt' },
  { id: 'o-principio-do-amor', titulo: 'O Princípio do Amor', serie: null, capa: 'CAPAS/17. O Princípio do Amor.jpg', lancamento: '2023', idioma: 'Português', paginas: 361, ebook: 'https://a.co/d/0dmxxJgJ', sinopse: 'No princípio era a amizade. Depois vieram os olhares e a percepção inevitável de que algo havia mudado.', tropes: ['Friends to Lovers', 'Slow Burn', 'Coming of Age'], categoria: 'pt' },
  { id: 'temporada-de-farsa', titulo: 'Temporada de Farsa & Gelo', serie: null, capa: 'CAPAS/18. Temporada de Farsa & Gelo.jpg', lancamento: '2023', idioma: 'Português', paginas: 555, ebook: 'https://a.co/d/016kh07K', sinopse: 'Uma farsa para salvar a temporada, um jogador de gelo que é tudo menos frio.', tropes: ['Fake Dating', 'Sports Romance', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'amor-por-acidente', titulo: 'Amor Por Acidente', serie: 'Irmãos Callahan · Livro 1', capa: 'CAPAS/19. Amor Por Acidente (Irmãos Callahan Livro 1).jpg', lancamento: '2023', idioma: 'Português', paginas: 709, ebook: 'https://a.co/d/01F0vaPu', sinopse: 'Uma gravidez acidental, um homem que ela mal conhece e a descoberta de que acidentes podem ser a melhor coisa.', tropes: ['Enemies to Lovers', 'Gravidez Acidental', 'Forced Proximity'], categoria: 'pt' },
  { id: 'chefe-quase-perfeito', titulo: 'Um Chefe (Quase) Perfeito', serie: 'Irmãos Callahan · Livro 2', capa: 'CAPAS/20. Um Chefe (Quase) Perfeito (Irmãos Callahan Livro 2).jpg', lancamento: '2024', idioma: 'Português', paginas: 597, ebook: 'https://a.co/d/04Y02MC0', sinopse: 'Ele é (quase) perfeito — exceto pelo temperamento impossível e pela tendência de cruzar linhas.', tropes: ['Office Romance', 'Boss/Employee', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'como-salvar-mafioso', titulo: 'Como Salvar Um Mafioso', serie: null, capa: 'CAPAS/21. Como Salvar Um Mafioso.jpg', lancamento: '2024', idioma: 'Português', paginas: 412, ebook: 'https://a.co/d/09mpKRyN', sinopse: 'Um manual que ninguém pediu para quando o coração decide se apaixonar pela pessoa mais perigosa.', tropes: ['Máfia Romance', 'Enemies to Lovers', 'Dark Romance'], categoria: 'pt' },
  { id: 'improvisado', titulo: 'Improvisado', serie: 'O Clube dos Pais Solteiros do Hóquei', capa: 'CAPAS/22. Improvisado O Clube dos Pais Solteiros do Hóquei.jpg', lancamento: '2024', idioma: 'Português', paginas: 551, ebook: 'https://a.co/d/0g4GXayq', sinopse: 'Pais solteiros, filhos caóticos e um grupo de jogadores de hóquei que aprendem que improvisar pode funcionar.', tropes: ['Sports Romance', 'Single Parent', 'Enemies to Lovers'], categoria: 'pt' },
  { id: 'maid-for-each-other', titulo: 'Maid For Each Other', serie: null, capa: 'CAPAS/23. Maid For Each Other.jpg', lancamento: '2024', idioma: 'Inglês', paginas: 261, ebook: 'https://a.co/d/0dJxigmz', sinopse: 'An enemies-to-lovers story that proves being thrown together in the most inconvenient way possible is sometimes the universe\'s best plan.', tropes: ['Enemies to Lovers', 'Fake Dating', 'Forced Proximity'], categoria: 'idiomas' },
  { id: 'seduction-effect', titulo: 'The Seduction Effect', serie: null, capa: 'CAPAS/24. The Seduction Effect.jpg', lancamento: '2024', idioma: 'Inglês', paginas: 374, ebook: 'https://a.co/d/06NyVjFi', sinopse: 'A slow-burn office romance where the rules are clear, the attraction is undeniable.', tropes: ['Office Romance', 'Enemies to Lovers', 'Slow Burn'], categoria: 'idiomas' },
  { id: 'les-temoins', titulo: 'Les Témoins de Mariage', serie: null, capa: 'CAPAS/25. Les Témoins de Mariage.jpg', lancamento: '2024', idioma: 'Francês', paginas: 290, ebook: 'https://a.co/d/0frkqZzR', sinopse: "Deux témoins de mariage qui se détestent, un mariage à organiser et une évidence qui refuse d'être ignorée.", tropes: ['Enemies to Lovers', 'Wedding', 'Forced Proximity'], categoria: 'idiomas' },
  { id: 'doces-rivais', titulo: 'Doces Rivais', serie: null, capa: 'CAPAS/26. Doces Rivais.jpg', lancamento: '2024', idioma: 'Português', paginas: 310, ebook: 'https://a.co/d/04k3otwX', sinopse: 'Uma rivalidade açucarada, uma pequena cidade e dois corações que insistem em bater mais rápido.', tropes: ['Enemies to Lovers', 'Small Town', 'Grumpy x Sunshine'], categoria: 'tradicionais' }
];

const TIMELINE = [
  { ano: '1999', titulo: 'Origens em Minas', desc: 'Nascimento no interior de Minas Gerais, imersa no ato de contar histórias.' },
  { ano: 'Adolescência', titulo: 'O primeiro fanfic', desc: '"Second Chance" — uma versão revisitada de Lua Nova, mais dramática.' },
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

/* ================================================================
   ROTEAMENTO E LÓGICA GERAL
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  const $header      = document.getElementById('site-header');
  const $toggle      = document.getElementById('nav-toggle');
  const $navLinks    = document.getElementById('nav-links');
  const $pages       = document.querySelectorAll('.page');
  const $navAnchors  = document.querySelectorAll('[data-page]');

  // ROUTER SPA
  window.showPage = function(id) {
    if (!id) id = 'home';
    $pages.forEach(p => { p.classList.remove('active'); p.setAttribute('aria-hidden', 'true'); });
    $navAnchors.forEach(a => { a.classList.toggle('active', a.dataset.page === id); });
    const target = document.getElementById(id);
    if (target) { target.classList.add('active'); target.removeAttribute('aria-hidden'); }
    
    if ($header) {
      if (id === 'home' && window.scrollY <= 80) {
        $header.classList.add('hero-mode'); $header.classList.remove('solid-mode');
      } else {
        $header.classList.remove('hero-mode'); $header.classList.add('solid-mode');
      }
    }
    
    if($navLinks) $navLinks.classList.remove('open');
    if($toggle) $toggle.setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
    window.location.hash = id;
  };

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-page]');
    if (a) { e.preventDefault(); window.showPage(a.dataset.page); }
  });

  window.addEventListener('scroll', () => {
    const hash = (window.location.hash || '#home').replace('#', '');
    if (hash === 'home' && $header) {
      if (window.scrollY > 80) { $header.classList.remove('hero-mode'); $header.classList.add('solid-mode'); } 
      else { $header.classList.add('hero-mode'); $header.classList.remove('solid-mode'); }
    }
  }, { passive: true });

  if($toggle) {
    $toggle.addEventListener('click', () => {
      const open = $navLinks.classList.toggle('open');
      $toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // PRATELEIRAS
  function buildBookshelf() {
    const filterNav = document.getElementById('trope-filter-nav');
    const shelfPt   = document.getElementById('bookshelf-pt');
    const shelfId   = document.getElementById('bookshelf-idiomas');
    const shelfTrad = document.getElementById('bookshelf-tradicionais');

    if (!filterNav || !shelfPt) return;

    filterNav.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.className = 'trope-btn all is-active'; allBtn.textContent = 'Todos'; allBtn.dataset.trope = 'all';
    filterNav.appendChild(allBtn);

    const ALL_TROPES = [...new Set(BOOKS.flatMap(b => b.tropes))].sort();
    ALL_TROPES.forEach(trope => {
      const btn = document.createElement('button'); btn.className = 'trope-btn'; btn.textContent = trope; btn.dataset.trope = trope;
      filterNav.appendChild(btn);
    });

    filterNav.addEventListener('click', e => {
      const btn = e.target.closest('.trope-btn'); if (!btn) return;
      filterNav.querySelectorAll('.trope-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const trope = btn.dataset.trope;
      
      document.querySelectorAll('.suporte-fisico-prateleira li').forEach(li => {
        const itemBtn = li.querySelector('.book-item');
        if(!itemBtn) return;
        const tropes = JSON.parse(itemBtn.dataset.tropes);
        li.style.display = (trope === 'all' || tropes.includes(trope)) ? 'block' : 'none';
      });

      document.querySelectorAll('.estante-categoria').forEach(estante => {
          const visiveis = estante.querySelectorAll('.suporte-fisico-prateleira li:not([style*="display: none"])');
          estante.style.display = visiveis.length === 0 ? 'none' : 'flex';
      });
    });

    const BADGE_COLORS = ['badge-rosa', 'badge-azul', 'badge-ciano'];

    BOOKS.forEach(book => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'book-item';
      btn.dataset.tropes = JSON.stringify(book.tropes);
      btn.innerHTML = `
        <figure class="book-cover">
          <img src="${book.capa}" alt="Capa: ${book.titulo}" width="300" height="450" loading="lazy">
          <figcaption class="book-overlay"><p>Ver detalhes →</p></figcaption>
        </figure>
        <section class="book-meta">
          <h3>${book.titulo}</h3>
          <ul class="book-tropes" role="list">
            ${book.tropes.map((t, i) => `<li><b class="badge ${BADGE_COLORS[i % BADGE_COLORS.length]}">${t}</b></li>`).join('')}
          </ul>
        </section>
      `;

      // CROSSFADE 3D PARA MODAL
      btn.addEventListener('click', () => {
        const containerCenico = document.getElementById('transicao-cenica-estante');
        if (containerCenico) {
            containerCenico.innerHTML = `<figure><img src="${book.capa}" alt="${book.titulo}"><var></var></figure>`;
            containerCenico.style.opacity = '1';
            containerCenico.classList.add('executando-voo');

            // Inicia o fade do modal EXATAMENTE quando a capa termina de abrir no 3D (600ms)
            setTimeout(() => { openModal(book); }, 600);

            // Remove o voo 3D de trás da tela apenas DEPOIS que o modal branco preencheu a visão
            setTimeout(() => {
                containerCenico.classList.remove('executando-voo');
                containerCenico.style.opacity = '0';
                setTimeout(() => { containerCenico.innerHTML = ''; }, 300);
            }, 1000);
        } else {
            openModal(book);
        }
      });

      li.appendChild(btn);
      
      if (book.categoria === 'idiomas') shelfId.appendChild(li);
      else if (book.categoria === 'tradicionais') shelfTrad.appendChild(li);
      else shelfPt.appendChild(li);
    });
  }

  const $modalOverlay = document.getElementById('modal-overlay');
  const $modalBox     = document.getElementById('modal-box');

  function openModal(book) {
    if (!$modalOverlay || !$modalBox) return;

    $modalBox.querySelector('.modal-cover img').src = book.capa;
    $modalBox.querySelector('.modal-serie').textContent  = book.serie || 'Romance · Olivia Uviplais';
    $modalBox.querySelector('.modal-title').textContent  = book.titulo;
    $modalBox.querySelector('.modal-sinopse').textContent = book.sinopse;
    $modalBox.querySelector('.modal-meta').innerHTML = `
      <article class="info-livro"><small>Lançamento</small><strong>${book.lancamento}</strong></article>
      <article class="info-livro"><small>Páginas</small><strong>${book.paginas > 0 ? book.paginas : 'N/A'} · ${book.idioma}</strong></article>
    `;
    $modalBox.querySelector('.modal-tropes').innerHTML = book.tropes.map(t => `<li><b class="trope-clicavel">${t}</b></li>`).join('');
    
    const isReal = book.ebook && book.ebook !== '#';
    $modalBox.querySelector('.modal-actions').innerHTML = `
      <a href="${book.ebook}" ${isReal ? 'target="_blank" rel="noopener"' : ''} class="btn btn-primary">
        📱 ${isReal ? 'Comprar eBook' : 'Ver na Amazon'}
      </a>
    `;

    $modalOverlay.classList.add('open');
    $modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  window.closeModal = function() {
    if($modalOverlay) {
      $modalOverlay.classList.remove('open');
      $modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // TIMELINE E AGENDA
  function buildTimeline() {
    const row = document.getElementById('timeline-row');
    if (!row) return;
    row.innerHTML = '';
    TIMELINE.forEach(item => {
      const li = document.createElement('li'); li.className = 'tl-item';
      li.innerHTML = `<i class="tl-connector" aria-hidden="true"></i><article class="tl-card"><time>${item.ano}</time><h3>${item.titulo}</h3><p>${item.desc}</p></article>`;
      row.appendChild(li);
    });

    const track = document.getElementById('timeline-track');
    if(!track) return;
    let down = false, startX = 0, scrollL = 0;
    track.addEventListener('mousedown', e => { down = true; track.classList.add('dragging'); startX = e.pageX - track.offsetLeft; scrollL = track.scrollLeft; });
    track.addEventListener('mouseleave', () => { down = false; track.classList.remove('dragging'); });
    track.addEventListener('mouseup', () => { down = false; track.classList.remove('dragging'); });
    track.addEventListener('mousemove', e => { if (!down) return; e.preventDefault(); track.scrollLeft = scrollL - ((e.pageX - track.offsetLeft) - startX) * 1.8; });
  }

  function buildAgenda() {
    const list = document.getElementById('agenda-list');
    if (!list) return;
    list.innerHTML = '';
    AGENDA.forEach(ev => {
      const li = document.createElement('li'); li.className = 'agenda-item';
      li.innerHTML = `<time class="agenda-date"><strong>${ev.dia}</strong><small>${ev.mes} ${ev.ano}</small></time><article class="agenda-info"><p class="agenda-tipo">${ev.tipo}</p><h3>${ev.titulo}</h3><p>${ev.desc}</p><address>${ev.local}</address></article>`;
      list.appendChild(li);
    });
  }

  function setupForms() {
    const formHome = document.getElementById('form-nl-home');
    if (formHome) formHome.addEventListener('submit', e => { e.preventDefault(); toast('✉️ Inscrição registrada!'); formHome.reset(); });
    const formNl = document.getElementById('form-nl-page');
    if (formNl) formNl.addEventListener('submit', e => { e.preventDefault(); toast('💌 Bem-vinda ao Oliviverso.'); formNl.reset(); });
    const formContato = document.getElementById('form-contato');
    if (formContato) formContato.addEventListener('submit', e => { e.preventDefault(); toast('💌 Mensagem enviada para a assessoria!'); formContato.reset(); });
  }

  function setupBio() {
    const toggle = document.getElementById('bio-toggle');
    const expandable = document.getElementById('bio-expandable');
    if (!toggle || !expandable) return;
    toggle.addEventListener('click', () => {
      const open = expandable.classList.toggle('open');
      toggle.textContent = open ? 'Recolher ↑' : 'Ler história completa ↓';
    });
  }

  function toast(msg) {
    document.querySelectorAll('.toast').forEach(t => t.remove());
    const el = document.createElement('output'); el.className = 'toast'; el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }

  // INIT GLOBAL
  const initialPage = (window.location.hash || '#home').replace('#', '');
  window.showPage(initialPage);
  buildTimeline();
  buildBookshelf();
  buildAgenda();
  setupForms();
  setupBio();

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', window.closeModal);
  if ($modalOverlay) $modalOverlay.addEventListener('click', e => { if (e.target === $modalOverlay) window.closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeModal(); });
});