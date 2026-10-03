/* ================================================================
   OLIVIA UVIPLAIS — HOME
   Destaque principal da home e links de destaque no rodapé.
   ================================================================ */

'use strict';

function buildDestaque() {
  const getRecents = window.getBooksByRecency || (() => window.BOOKS || []);
  const latest = getRecents()[0];
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

window.buildDestaque = buildDestaque;

function buildFooterDestaques() {
  const list = document.getElementById('footer-destaques');
  if (!list) return;

  const getRecents = window.getBooksByRecency || (() => window.BOOKS || []);
  const top3 = getRecents().slice(0, 3);
  list.replaceChildren(...top3.map((book) => {
    const item = document.createElement('li');
    item.innerHTML = `<a href="#livros" data-page="livros">${window.escapeHTML(book.titulo)}</a>`;
    return item;
  }));
}

window.buildFooterDestaques = buildFooterDestaques;
