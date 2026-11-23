# Drip Store

Projeto de uma loja virtual desenvolvido com **React**, com foco na
construção de interfaces, reutilização de componentes e navegação entre
páginas.

Este projeto foi desenvolvido como **trabalho final de Front-End do
curso FullStack Online da Geração Tech 4.0**.

## Sobre o projeto

A Drip Store é uma aplicação de e-commerce demonstrativa. O projeto
reúne páginas e componentes comuns em uma loja virtual, como cabeçalho,
rodapé, busca, listagem e visualização de produtos, filtros e opções de
compra.

A aplicação foi construída com uma estrutura organizada em componentes
reutilizáveis e páginas conectadas por rotas.

## Tecnologias utilizadas

-   **React** --- construção da interface com componentes.
-   **Vite** --- ambiente de desenvolvimento e ferramenta de build.
-   **JavaScript** --- lógica e interatividade da aplicação.
-   **React Router DOM** --- gerenciamento da navegação e das rotas.
-   **Styled Components** --- estilização dos componentes.
-   **HTML5 e CSS3** --- estrutura e apresentação da interface.
-   **Vercel** --- hospedagem e publicação do projeto.

## Funcionalidades

-   Página inicial com galeria de imagens, coleções em destaque e
    produtos em alta.
-   Campo de busca que direciona para a listagem de produtos com o termo
    pesquisado.
-   Listagem de produtos.
-   Filtros e ordenação de produtos.
-   Página de visualização de produto com galeria de imagens.
-   Seleção de opções de produto, como tamanho e cor.
-   Área de compra com informações e preço do produto.
-   Seção de produtos recomendados.
-   Página 404 para endereços que não correspondem a uma rota existente.
-   Cabeçalho e rodapé compartilhados entre as páginas.

## Rotas da aplicação

  -----------------------------------------------------------------------
  Rota                    Página                  Descrição
  ----------------------- ----------------------- -----------------------
  `/`                     HomePage                Página inicial da loja.

  `/produtos`             ProductListingPage      Exibe a listagem de
                                                  produtos, filtros e
                                                  ordenação.

  `/product/:id`          ProductViewPage         Exibe os detalhes de um
                                                  produto identificado
                                                  pelo parâmetro `id`.

  `*`                     NotFoundPage            Exibe a página 404 para
                                                  rotas não encontradas.
  -----------------------------------------------------------------------

A rota de produtos também aceita a query string `filter` para receber
termos de busca. Exemplo:

``` text
/produtos?filter=tenis
```

## Organização do projeto

Estrutura principal da aplicação:

``` text
src/
├── assets/              # Logos, ícones e arquivos visuais
├── components/          # Componentes reutilizáveis
│   ├── BuyBox/
│   ├── Footer/
│   ├── Galery/           # Galeria de imagens
│   ├── Header/
│   ├── Logo/
│   ├── ProductCard/
│   ├── ProductListing/
│   ├── ProductOptions/
│   └── Section/
├── layouts/             # Estrutura compartilhada das páginas
│   └── PageLayout.jsx
├── pages/               # Páginas da aplicação
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── ProductListingPage.jsx
│   └── ProductViewPage.jsx
├── routes/              # Configuração das rotas
│   └── DripStoreRoutes.jsx
├── App.jsx
└── main.jsx
```

Os nomes e a disposição de arquivos podem variar conforme a organização
final do projeto.

## Como executar localmente

### Pré-requisitos

-   Node.js instalado.
-   npm instalado.
-   Git instalado (opcional, para clonar o repositório).

### 1. Clonar o repositório

``` bash
git clone https://github.com/AlmirNeto87/Projeto-FrontEnd-Final-GT4.git
```

### 2. Acessar a pasta do projeto

``` bash
cd Projeto-FrontEnd-Final-GT4
```

### 3. Instalar as dependências

``` bash
npm install
```

### 4. Iniciar o servidor de desenvolvimento

``` bash
npm run dev
```

Abra no navegador o endereço local informado pelo Vite no terminal
(normalmente `http://localhost:5173`).

## Build de produção

Para gerar a versão otimizada da aplicação:

``` bash
npm run build
```

Para testar localmente a versão gerada:

``` bash
npm run preview
```

## Publicação na Vercel

O projeto está preparado para publicação na Vercel.

O arquivo `vercel.json`, localizado na raiz do projeto, configura o
redirecionamento das rotas da aplicação para `index.html`. Essa
configuração permite que rotas do React Router, como `/product/1`,
funcionem quando acessadas diretamente ou após atualizar a página.

## Identidade visual

A interface utiliza a paleta de cores definida para o projeto:

  Cor              Código
  ---------------- -----------
  Primária         `#C92071`
  Secundária       `#B5B6F2`
  Terciária        `#991956`
  Erro             `#EE4266`
  Sucesso          `#52CA76`
  Aviso            `#F6AA1C`
  Cinza escuro     `#1F1F1F`
  Cinza escuro 2   `#474747`
  Cinza escuro 3   `#666666`
  Cinza claro      `#8F8F8F`
  Cinza claro 2    `#CCCCCC`
  Cinza claro 3    `#F5F5F5`
  Branco           `#FFFFFF`

## Objetivo acadêmico

Este trabalho foi desenvolvido como projeto final de Front-End do curso
**FullStack Online da Geração Tech 4.0**, com o objetivo de aplicar na
prática os conhecimentos de desenvolvimento de interfaces com React,
componentização, estilização, navegação e organização de uma aplicação
web.

------------------------------------------------------------------------

Desenvolvido como projeto educacional --- **Drip Store**.
