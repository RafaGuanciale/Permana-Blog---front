import { usePosts } from "../../contexts/PostContext";

function BlogHighlight() {
  const { posts } = usePosts();

  return posts.length > 0 ? (
    <section className="blog__highlight">
      <div className="blog__highlight__media">
        {/* <img className="blog__highlight__img" src={...} alt={...} /> */}
        <span className="blog__highlight__media-ph">
          capa · natureza-morta com frascos
        </span>
      </div>

      <div className="blog__highlight__body">
        <p className="blog__highlight__eyebrow">Em destaque · Guias · 12 min</p>
        <h1 className="blog__highlight__title">
          Famílias olfativas: um mapa para se orientar
        </h1>
        <p className="blog__highlight__excerpt">
          Âmbar, chipre, fougère — os nomes intimidam, mas o território é
          simples. Um guia para ler qualquer perfume pela família, antes mesmo
          do primeiro borrifo.
        </p>
        <div className="blog__highlight__meta">
          <span className="blog__highlight__meta-author">
            Por Equipe Permana
          </span>
          <i className="blog__highlight__meta-sep">·</i>
          <span className="blog__highlight__meta-date">14 jul 2026</span>
        </div>
        <button className="blog__highlight__btn-primary" type="button">
          Ler o artigo
        </button>
      </div>
    </section>
  ) : (
    <section className="blog__highlight blog__highlight--empty">
      <div className="blog__highlight__empty">
        <p className="blog__highlight__empty-eyebrow">Em destaque</p>
        <h1 className="blog__highlight__empty-title">
          Nenhum post em destaque ainda
        </h1>
        <p className="blog__highlight__empty-text">
          As publicações mais relevantes aparecerão aqui conforme o blog for sendo atualizado.
        </p>
      </div>
    </section>
  );
}

export default BlogHighlight;
