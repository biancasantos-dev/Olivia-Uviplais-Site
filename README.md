<div align="center">

# Olivia Uviplais — Website Oficial

**Website oficial no ar:** [oliviauviplais.com.br](https://oliviauviplais.com.br)

[![Status: Online](https://img.shields.io/badge/Status-Online%20em%20Produ%C3%A7%C3%A3o-2ea44f?style=for-the-badge)](https://oliviauviplais.com.br)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Contentful CMS](https://img.shields.io/badge/Contentful-2478CC?style=for-the-badge&logo=contentful&logoColor=white)](https://www.contentful.com/)
[![Responsive](https://img.shields.io/badge/Mobile--First-Responsive-success?style=for-the-badge&logo=responsive&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[Acessar Website em Produção](https://oliviauviplais.com.br) • [Funcionalidades](#funcionalidades-e-destaques-tecnicos) • [Tecnologias](#tecnologias-utilizadas) • [Execução Local](#como-executar-o-projeto)

---

</div>

## Sobre o Projeto

Este projeto é a plataforma web oficial da escritora brasileira **Olivia Uviplais**, autora best-seller da Amazon, com publicações consagradas pelos selos **AMORE** (VR Editora) e **NEON** (Plataforma 21), acumulando milhões de leituras na Amazon.

Desenvolvido sob o paradigma **Vanilla-First**, o projeto alia sofisticação visual, tipografia editorial refinada e animações tridimensionais fluidas a uma performance ultrarrápida, sem a necessidade de frameworks pesados.

---

## Funcionalidades e Destaques Técnicos

### Estante de Livros Interativa em 3D

- **Abertura Tridimensional Realista**: Ao selecionar um livro na estante física, o livro ascende suavemente ao centro da tela fechado, revelando a arte da capa, antes de articular sua capa em 3D (`perspective: 1600px`, `transform-style: preserve-3d`), exibindo as páginas internas de corte, a guarda de luxo (_Ex-Líbris_) e uma fita marcadora de cetim.
- **Transição Cenográfica para Modal**: O modal de detalhes do livro abre em sincronia perfeita no ápice da animação, com suporte a atalhos de acessibilidade (`ESC`), fechamento por clique fora e clique para pular instantâneo.

### Navegação Híbrida Touch e Drag

- **Desktop (Mouse)**: Sistema nativo de arrasto horizontal (_Drag-to-Scroll_) com inércia para percorrer as prateleiras da estante e a linha do tempo biográfica.
- **Mobile e Tablet**: Rolagem tátil otimizada via hardware com `touch-action: pan-x pan-y`, `-webkit-overflow-scrolling: touch` e `overscroll-behavior-x: contain`, garantindo deslizamento suave sem travar o scroll vertical da página.

### Filtro Reativo por Tropes Literárias

- Mecanismo em JavaScript para filtrar o catálogo em tempo real com base em tropos românticos (_Fake Dating_, _Haters to Lovers_, _Friends to Lovers_, _Found Family_, _Grumpy & Sunshine_, _Sports Romance_), atualizando dinamicamente as prateleiras sem recarregar a página.

### Seção "Na Mídia" com Lightbox Acessível

- Galeria de recortes e matérias em veículos de imprensa de circulação nacional (_PublishNews_, _Gazeta do Estado_, _Radar Digital Brasília_, _Tribuna do Agreste_).
- **Alinhamento Editorial no Desktop**: Títulos e autores alinhados na mesma linha de base horizontal nas colunas.
- **Adaptação Natural no Mobile**: Cada notícia ajusta automaticamente sua altura (`height: auto`), eliminando vãos vazios.
- **Visualizador Lightbox Integrado**: Ampliação em alta resolução com navegação por teclado (`Tab`, `Enter`, `Escape`) e foco gerenciado.

### Blog Dinâmico via Headless CMS (Contentful)

- Consumo direto da **Contentful Delivery API (CDA)** em tempo real.
- Renderização assíncrona de artigos com paginação nativa no client-side, formatação de datas em português e tratamento gracioso de falhas/fallback offline.

### Agenda de Eventos e Lançamentos com Integração de Calendário

- Listagem de datas comemorativas, tardes de autógrafo e ativações na Bienal do Livro.
- Botões para adição instantânea com 1 clique no **Google Calendar**, **Apple Calendar** e **Outlook**.

### Trilha Sonora Oficial

- Player embutido do Spotify no rodapé da página com a playlist curada pela autora para acompanhar a leitura dos romances.

### Otimização para Motores de Busca (SEO Técnico) e Performance

- **Zero Framework Bloatware**: Construído exclusivamente com tecnologias web padrão (HTML5 semântico, CSS puro com variáveis de design tokens e JavaScript ES6+ modular), garantindo tempo de carregamento instantâneo.
- **Dados Estruturados (Schema.org / JSON-LD)**: Grafo de entidades estruturado com `Person` (perfil oficial da autora, prêmios e redes sociais), `WebSite`, `BreadcrumbList` e catálogo de livros (`Book` com editoras e gêneros literários), otimizado para Rich Snippets e Google Knowledge Graph.
- **Sitemap XML com Extensão Google Imagens**: Mapeamento completo no padrão `sitemap-image/1.1` com títulos e legendas para capas de livros e fotos da autora, impulsionando a indexação no Google Imagens.
- **Resource Hints e Core Web Vitals**: Diretivas de `preconnect` e `dns-prefetch` para Google Fonts e Contentful CDN (`cdn.contentful.com` e `images.ctfassets.net`), acelerando métricas de LCP e FCP.
- **Open Graph e Twitter Cards**: Metadados completos com imagens em alta resolução (1200x1500), descrições persuasivas e pré-visualizações ricas para compartilhamento em redes sociais.
- **Hierarquia Semântica Rigorosa**: Estruturação acessível com H1 estratégico no banner principal e subtítulos H2 semânticos.

---

## Tecnologias Utilizadas

| Tecnologia               | Finalidade                                                                      |
| :----------------------- | :------------------------------------------------------------------------------ |
| **HTML5 Semântico**      | Arquitetura de conteúdo, acessibilidade (ARIA) e hierarquia semântica           |
| **CSS3 Puro (Vanilla)**  | Design tokens HSL, CSS Grid, Flexbox, transformações 3D e responsividade fluida |
| **JavaScript (ES6+)**    | Roteamento SPA por hash, manipulação de DOM, filtros e gerenciamento de estado  |
| **Schema.org / JSON-LD** | Marcação de dados estruturados para motores de busca e Google Knowledge Graph   |
| **Contentful CMS**       | Gerenciamento de conteúdo headless e API pública de entrega (CDA)               |
| **Spotify Web Embed**    | Player interativo da trilha sonora oficial                                      |

---

## Estrutura do Repositório

```text
Olivia-Uviplais-Site/
├── .github/                 # Workflows e configurações do repositório
├── CAPAS/                   # Capas dos livros em alta resolução
├── ID/                      # Identidade visual, logos, selos e ilustrações da Olivinha
├── ILUSTRAÇÕES/             # Ilustrações originais dos livros para a galeria do modal
├── NA-MIDIA/                # Recortes e prints das reportagens de imprensa
├── OLIVIA-FOTOS/            # Fotos oficiais de divulgação da autora
├── SELOS/                   # Selos editoriais (AMORE e NEON)
├── .gitignore               # Proteção de credenciais, logs e arquivos de sistema
├── .gitattributes           # Configuração de quebras de linha e atributos git
├── animations.js            # Módulo de transição 3D e drag-to-scroll
├── index.html               # Estrutura principal semântica da aplicação
├── robots.txt               # Diretrizes para rastreadores e indexação de busca
├── script.js                # Lógica de dados, Contentful, modais, filtros e rotas
├── sitemap.xml              # Mapa de URLs para indexação nos motores de busca
├── style.css                # Sistema completo de design tokens, layouts e responsividade
└── README.md                # Documentação técnica do projeto
```

---

## Como Executar o Projeto

Como o projeto é construído exclusivamente com tecnologias web nativas, você não precisa de `npm install` nem de ferramentas de build complexas.

### Pré-requisitos

- Um navegador web moderno (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge ou Opera).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/biancasantos-dev/Olivia-Uviplais-Site.git
   cd Olivia-Uviplais-Site
   ```

2. **Inicie um servidor local:**
   - **Opção A (Extensão VS Code):**
     Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

   - **Opção B (Node.js):**

     ```bash
     npx serve .
     ```

   - **Opção C (Python):**
     ```bash
     python -m http.server 8080
     ```

3. **Acesse no navegador:**
   Abra `http://localhost:8080` (ou a porta informada pelo servidor).

---

## Segurança e Boas Práticas

- **Segurança de Credenciais**: O arquivo `.gitignore` foi rigorosamente configurado para impedir a inclusão de variáveis locais (`.env`), certificados (`.pem`, `.key`), caches e arquivos de configuração de IDEs.
- **Contentful Content Delivery API (CDA)**: A chave utilizada no cliente (`CONTENTFUL_CONFIG.accessToken`) é um token de leitura estritamente pública (_Delivery Token_), desenhado para requisições em páginas estáticas que possuem permissão apenas para ler registros publicados, sem qualquer acesso a dados privados ou permissões de escrita/gerenciamento. O sistema também permite sobrecarga via `window.CONTENTFUL_CONFIG`.

---

## Identidade e Créditos

- **Autora**: [Olivia Uviplais](https://www.instagram.com/autoraoliviauviplais/)
- **Design e Desenvolvimento**: [Bianca Santos](https://github.com/biancasantos-dev) / [Estúdio Moonse](https://www.instagram.com/estudiomoonse)
- **Editoras Parceiras**: [Selo AMORE (VR Editora)](https://vreditora.com.br/) e [Selo NEON (Plataforma 21)](https://plataforma21.com.br/)

---

## Licença

Este projeto é protegido sob a licença [MIT](LICENSE). Conteúdos textuais, ilustrações e capas pertencem a Olivia Uviplais e às suas respectivas editoras.

<div align="center">
  <sub>Desenvolvido por Bianca Santos</sub>
</div>
