import { usePosts } from "../../contexts/PostContext";
import { formatData } from "../../utils/utils";
import { CategoriesBackgrounds } from "../../utils/consts";

function BlogHighlight() {
  const { posts } = usePosts();
  const highlight = posts[0];

  if (!highlight) {
    return (
      <section className="blog__highlight blog__highlight--empty">
        <div className="blog__highlight__empty">
          <p className="blog__highlight__empty-eyebrow">Em destaque</p>
          <h1 className="blog__highlight__empty-title">
            Nenhum post em destaque ainda
          </h1>
          <p className="blog__highlight__empty-text">
            As publicações mais relevantes aparecerão aqui conforme o blog for
            sendo atualizado.
          </p>
        </div>
      </section>
    );
  }

  const categoria = highlight.category

  return (
    <section className="blog__highlight">
      <div className="blog__highlight__media">
        <img
          className="blog__highlight__img"
          src={CategoriesBackgrounds[categoria]}
          alt={categoria}
        />
      </div>

      <div className="blog__highlight__body">
        <p className="blog__highlight__eyebrow">
          Em destaque · {highlight.category} · {highlight.reading_time} min
        </p>
        <h1 className="blog__highlight__title">{highlight.title}</h1>
        <p className="blog__highlight__excerpt">{highlight.preview}</p>
        <div className="blog__highlight__meta">
          <span className="blog__highlight__meta-author">
            Por {highlight.author}
          </span>
          <i className="blog__highlight__meta-sep">·</i>
          <span className="blog__highlight__meta-date">
            {formatData(highlight.published_at)}
          </span>
        </div>
        <button className="blog__highlight__btn-primary" type="button">
          Ler o artigo
        </button>
      </div>
    </section>
  );
}

export default BlogHighlight;
