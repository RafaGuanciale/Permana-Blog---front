# Permana Blog — Frontend

## Sobre o projeto

**Permana Blog** é o blog editorial da plataforma Permana, um espaço para conteúdos sobre perfumaria, cultura olfativa e bastidores do projeto. Foi construído como uma aplicação **full-stack em TypeScript**, com o objetivo de demonstrar tipagem de ponta a ponta: do banco de dados até a interface.

Este repositório contém o **frontend** em React + TypeScript, que consome uma **API própria** (em repositório separado) construída em Node.js + Express + PostgreSQL. O escopo de conteúdo é enxuto de propósito; o foco do projeto está na arquitetura, na tipagem e na integração entre serviços.

---

## Links

- **Frontend (Vercel):** https://permana-blog-front.vercel.app/
- **API (Render):** https://permana-blog-back.onrender.com
- **Repositório do backend:** _[link do repo do back]_

---

## Funcionalidades

- **Listagem de posts**, todas as notas publicadas, ordenadas pela API do mais recente ao mais antigo
- **Post em destaque**, a nota mais recente ganha posição de destaque no topo, com fundo visual por categoria
- **Filtro por categoria**, navegação entre as categorias do blog (Guias, Lançamentos, Cultura, Permana)
- **Página de post individual**, acessada por slug na URL, com conteúdo renderizado a partir de Markdown
- **Estados de vazio distintos**, um para quando não há posts publicados e outro para quando o filtro não retorna resultados
- **Formatação de datas**, datas ISO da API convertidas para o formato brasileiro na exibição
- **Fundo por categoria**, cada post exibe uma imagem de capa associada à sua categoria

---

## Roteamento

A navegação usa o React Router, com duas rotas principais:

- `/`, a home do blog (destaque + listagem)
- `/post/:slug`, a página de um post individual

A página de post lê o `slug` da URL com `useParams` e busca o conteúdo completo na API pelo endpoint de detalhe. Como o estado vive na URL, o post pode ser recarregado ou compartilhado por link direto.

---

## Tipagem de ponta a ponta

O diferencial do projeto é o uso de **TypeScript nas duas pontas**. No frontend, isso se traduz em:

- **Tipos derivados de constantes**, as categorias do blog são declaradas uma única vez com `as const`, e o tipo `Category` é derivado do próprio array (`typeof CATEGORIES[number]`), evitando duplicação entre valor e tipo.
- **Contrato de dados tipado**, as interfaces `PostPreview` e `PostFull` descrevem o formato dos posts; `PostFull` estende `PostPreview`, garantindo uma única fonte de verdade entre a lista (resumo) e o detalhe (com o corpo do texto).
- **Fronteira da API tipada**, as funções de requisição declaram o tipo de retorno, propagando o contrato até os componentes.

---

## Estado global (Context API tipada)

O acesso à lista de posts é centralizado em um **contexto tipado** (`PostsContext`):

- O `PostsProvider` busca os posts na API ao montar (`useEffect`) e os distribui via contexto.
- Um **hook de acesso próprio** (`usePosts`) encapsula o `useContext` e lança um erro explícito caso seja usado fora do Provider, o que também permite ao TypeScript estreitar o tipo (narrowing) e eliminar o caso nulo.

A página de post individual não usa o contexto: ela busca o próprio conteúdo pelo slug da URL, mantendo o estado onde ele pertence.

---

## Renderização de conteúdo (Markdown)

O corpo dos posts é armazenado em **Markdown** no banco e renderizado com a biblioteca `react-markdown`. Isso permite títulos, ênfases, links e listas sem campos rígidos de estrutura, e sem os riscos de injetar HTML bruto. A estilização é aplicada por elemento dentro do container do artigo (o Markdown gera HTML sem classes).

---

## Tecnologias e técnicas utilizadas

- **React**, interface com componentes funcionais e hooks
- **TypeScript**, tipagem estática em toda a aplicação
- **React Router**, navegação entre páginas e leitura de parâmetros de rota
- **Vite**, bundler e servidor de desenvolvimento
- **react-markdown**, renderização do conteúdo dos posts
- **CSS / BEM**, estilização modular centralizada, com tokens de cor definidos em `:root`
- **Context API**, estado global tipado para os posts
- **Fetch API**, requisições assíncronas à API própria, sem bibliotecas externas
- **ESLint**, padronização de código

### Estrutura e boas práticas

- Componentes organizados por função (páginas, componentes, contextos, utilitários)
- Requisições de API isoladas em arquivo próprio (`utils/api.ts`)
- Tipos e constantes em arquivos dedicados (`utils/types.ts`, `utils/consts.ts`)
- Lógica de formatação isolada em utilitário
- Props tipadas em todos os componentes
- HTML semântico e classes nomeadas segundo a especificação BEM
- Estados de carregamento e de vazio tratados na interface

---

## Como rodar localmente

```
npm install
npm run dev
```

O frontend espera uma API rodando. A URL base da API é definida no arquivo de requisições (`utils/api.ts`).

Scripts disponíveis:

- `npm run dev`, servidor de desenvolvimento
- `npm run build`, checagem de tipos e build de produção
- `npm run preview`, pré-visualização do build

---

## Melhorias futuras

- **Validação de dados na fronteira**, validação em runtime da resposta da API (ex.: Zod), substituindo a tipagem por afirmação
- **Testes automatizados**, testes unitários da lógica e de componentes
- **Componente de estado vazio reutilizável**, extraindo a repetição entre os dois vazios

---

## Autor

Rafael Guanciale Nacarato