# Permana Blog — Frontend

## Sobre o projeto

**Permana Blog** é o blog editorial da plataforma Permana, um espaço para
conteúdos sobre perfumaria, cultura olfativa e bastidores do projeto. Foi
construído como uma aplicação **full-stack em TypeScript**, com o objetivo de
demonstrar tipagem de ponta a ponta: do banco de dados até a interface.

Este repositório contém o **frontend** em React + TypeScript, que consome uma
**API própria** (em repositório separado) construída em Node.js + Express +
PostgreSQL. O escopo de conteúdo é enxuto de propósito, pois o foco do projeto está
na arquitetura, na tipagem e na integração entre serviços.

---

## Links

- **Frontend (Vercel):** https://permana-blog-front.vercel.app/
- **API (Render):** https://permana-blog-back.onrender.com
- **Repositório do backend:** https://github.com/RafaGuanciale/Permana-Blog---Back

---

## Funcionalidades

- **Listagem de posts** — todas as notas publicadas, ordenadas pela API do mais recente ao mais antigo
- **Post em destaque** — a nota mais recente ganha posição de destaque no topo, com fundo visual por categoria
- **Filtro por categoria** — navegação entre as categorias do blog (Guias, Lançamentos, Cultura, Permana)
- **Estados de vazio** — telas dedicadas para quando não há posts publicados
- **Fundo por categoria** — cada post exibe uma imagem de capa associada à sua categoria

---

## Tipagem de ponta a ponta

O diferencial do projeto é o uso de **TypeScript nas duas pontas**. No frontend,
isso se traduz em:

- **Tipos derivados de constantes** — as categorias do blog são declaradas uma
  única vez com `as const`, e o tipo `Category` é derivado do próprio array
  (`typeof CATEGORIES[number]`), evitando duplicação entre valor e tipo.
- **Contrato de dados tipado** — as interfaces `PostPreview` e `PostFull`
  descrevem o formato dos posts; `PostFull` estende `PostPreview`, garantindo
  uma única fonte de verdade entre a lista e o detalhe.
- **Fronteira da API tipada** — as funções de requisição declaram o tipo de
  retorno, propagando o contrato até os componentes.

---

## Estado global (Context API tipada)

O acesso aos posts é centralizado em um **contexto tipado** (`PostsContext`):

- O `PostsProvider` busca os posts na API ao montar (`useEffect`) e os
  distribui via contexto.
- Um **hook de acesso próprio** (`usePosts`) encapsula o `useContext` e lança
  um erro explícito caso seja usado fora do Provider, permitindo ao
  TypeScript estreitar o tipo (`narrowing`) e eliminar o caso nulo.

---

## Tecnologias e técnicas utilizadas

- **React** — interface com componentes funcionais e hooks
- **TypeScript** — tipagem estática em toda a aplicação
- **React Router DOM** — navegação entre páginas
- **Vite** — bundler e servidor de desenvolvimento
- **CSS / BEM** — estilização modular, um arquivo de estilo por componente
- **Context API** — estado global tipado para os posts
- **Fetch API** — requisições assíncronas à API própria, sem bibliotecas externas

### Estrutura e boas práticas

- Componentes organizados por função (páginas, componentes, contextos, utilitários)
- Requisições de API isoladas em arquivo próprio (`utils/api.ts`)
- Tipos e constantes em arquivos dedicados (`utils/types.ts`, `utils/consts.ts`)
- Lógica de formatação isolada em utilitário (`utils/utils.ts`)
- HTML semântico e classes nomeadas segundo a especificação BEM
- Estados de vazio tratados na interface

---

## Melhorias futuras

- **Página de post individual** — consumo do endpoint de detalhe por slug (já disponível na API)
- **Validação de dados na fronteira** — validação em runtime da resposta da API (ex.: Zod), substituindo a tipagem por afirmação
- **Filtro conectado à listagem** — aplicar o estado de filtro sobre os posts renderizados

---

## Autor

Rafael Guanciale Nacarato