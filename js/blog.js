/* ================================================================
   OLIVIA UVIPLAIS — BLOG
   Integração Contentful, paginação, listagem e leitura de posts.
   ================================================================ */

'use strict';

let CONTENTFUL_CONFIG = window.CONTENTFUL_CONFIG || null;
let BLOG_POSTS = [];
window.BLOG_POSTS = BLOG_POSTS;

const BLOG_CATEGORIA_COR = {
  'Lançamento': 'vermelho',
  'Bastidores': 'azul',
  'Agenda': 'ciano',
  'Comunidade': 'rosa'
};
window.BLOG_CATEGORIA_COR = BLOG_CATEGORIA_COR;

const BLOG_PAGE_SIZE = 9;
let blogPaginaAtual = 1;

async function buildBlog() {
  const grid = document.getElementById('blog-grid');
  const paginacao = document.getElementById('blog-paginacao');
  if (!grid) return;

  if (!CONTENTFUL_CONFIG) {
    try {
      const configRes = await fetch('DADOS/config.json');
      if (configRes.ok) {
        const configData = await configRes.json();
        CONTENTFUL_CONFIG = configData.contentful;
      }
    } catch (err) {
      console.warn('Não foi possível carregar DADOS/config.json, usando fallback.', err);
    }
  }

  const activeConfig = CONTENTFUL_CONFIG || {
    spaceId: 'bikxsvvhd2dh',
    accessToken: '3kCZ2e_GBDPxbpLqpXRmGaKgk_0AZCHSt7awwJrzGes',
    environment: 'master',
    contentType: 'blogPost'
  };

  const url = `https://cdn.contentful.com/spaces/${activeConfig.spaceId}/environments/${activeConfig.environment}/entries?content_type=${activeConfig.contentType}&access_token=${activeConfig.accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao buscar posts do Contentful');
    
    const data = await response.json();
    
    const assetsMap = new Map(
      data.includes?.Asset?.map(asset => [asset.sys.id, 'https:' + asset.fields.file.url]) || []
    );

    const parse = window.parseDateBR || ((v) => new Date(v));

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
    window.BLOG_POSTS = BLOG_POSTS;

    if (BLOG_POSTS.length === 0) {
      grid.innerHTML = '<p>Nenhum post encontrado.</p>';
      return;
    }

    BLOG_POSTS.sort((a, b) => parse(b.data) - parse(a.data));

    renderBlogPage(1);
    initBlogPaginacao();

    // Recheck hash router in case a direct link to post was hit before fetch finished
    const hash = window.location.hash.replace('#', '');
    const postMatch = hash.match(/^post-(.+)$/);
    if (postMatch) {
      const post = BLOG_POSTS.find((item) => item.slug === postMatch[1]);
      if (post) {
        renderPost(post);
        if (typeof window.showPage === 'function') {
          window.showPage('post', false);
        }
      }
    }

  } catch (error) {
    console.error('Erro na integração com Contentful:', error);
    grid.innerHTML = '<p>Erro ao carregar os posts do blog. Tente novamente mais tarde.</p>';
  }
}
window.buildBlog = buildBlog;

function renderBlogPage(pagina) {
  const grid = document.getElementById('blog-grid');
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
window.renderBlogPage = renderBlogPage;

function initBlogPaginacao() {
  const paginacao = document.getElementById('blog-paginacao');
  if (!paginacao || paginacao.dataset.listenerAttached) return;
  paginacao.dataset.listenerAttached = 'true';

  paginacao.addEventListener('click', (event) => {
    const button = event.target.closest('.blog-pag-btn');
    if (!button || button.disabled) return;
    renderBlogPage(Number(button.dataset.pagina));
    document.getElementById('blog')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}
window.initBlogPaginacao = initBlogPaginacao;

function createBlogCategoriaBadge(categoria) {
  const cor = BLOG_CATEGORIA_COR[categoria] || 'vermelho';
  return `<span class="blog-badge blog-badge-${cor}">${window.escapeHTML(categoria)}</span>`;
}
window.createBlogCategoriaBadge = createBlogCategoriaBadge;

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
      <p class="blog-card-meta">${createBlogCategoriaBadge(post.categoria)} <span>${window.escapeHTML(post.data)}</span></p>
      <h3>${window.escapeHTML(post.titulo)}</h3>
      <p class="blog-card-resumo">${window.escapeHTML(post.resumo)}</p>
      <span class="blog-card-link">Ler post completo →</span>
    </section>
  `;
  return card;
}
window.createBlogCard = createBlogCard;

function renderPost(post) {
  const metaEl = document.getElementById('post-meta');
  const tituloEl = document.getElementById('post-titulo');
  const capaEl = document.getElementById('post-capa-img');
  const corpoEl = document.getElementById('post-corpo');
  const relacionadosEl = document.getElementById('post-relacionados-grid');
  if (!metaEl || !tituloEl || !capaEl || !corpoEl || !relacionadosEl) return;

  metaEl.innerHTML = `${createBlogCategoriaBadge(post.categoria)} <span>${window.escapeHTML(post.data)}</span>`;
  tituloEl.textContent = post.titulo;
  capaEl.src = post.capa;
  capaEl.alt = post.titulo;

  const parse = window.parseDateBR || ((v) => new Date(v));

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

      return img;
    }

    p.textContent = paragrafo;
    return p;
  }));

  const relacionados = BLOG_POSTS
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => parse(b.data) - parse(a.data))
    .slice(0, 3);

  relacionadosEl.replaceChildren(...relacionados.map((item) => createBlogCard(item)));
}
window.renderPost = renderPost;
