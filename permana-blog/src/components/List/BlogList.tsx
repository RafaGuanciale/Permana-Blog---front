import { useState } from "react";
import { CATEGORIES, type Category } from "../../utils/consts";
import { usePosts } from "../../contexts/PostContext";
type BlogFilter = Category | "tudo";

function BlogList() {
  const [filterActive, setFilterActive] = useState<BlogFilter>("tudo");
  const { posts } = usePosts();

  return (
    <section className="blog__list">
      <div className="blog__list__bar">
        <h2 className="blog__list__bar-title">Mais notas</h2>
        <div className="blog__list__filters">
          <button
            type="button"
            className={`blog__list__filter ${filterActive === "tudo" ? "blog__list__filter--active" : ""}`}
            onClick={() => setFilterActive("tudo")}
          >
            Tudo
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`blog__list__filter ${filterActive === category ? "blog__list__filter--active" : ""}`}
              onClick={() => setFilterActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="blog__list__items">
          {/* map dos posts aqui — repita o bloco .blog__list__item abaixo */}
          <article className="blog__list__item">
            <p className="blog__list__item-category">Guias</p>
            <div className="blog__list__item-media">
              {/* <img className="blog__list__item-img" src={...} alt={...} /> */}
              <span className="blog__list__item-media-ph">frasco âmbar</span>
            </div>
            <div className="blog__list__item-body">
              <h3 className="blog__list__item-title">
                <a className="blog__list__item-link" href="#">
                  Sillage, projeção e fixação
                </a>
              </h3>
              <p className="blog__list__item-excerpt">
                Três palavras que todo mundo usa e quase ninguém define igual.
                Colocamos ordem na conversa.
              </p>
            </div>
            <div className="blog__list__item-meta">
              <span className="blog__list__item-author">Equipe Permana</span>
              <span className="blog__list__item-date">15 jul · 9 min</span>
            </div>
          </article>
        </div>
      ) : (
        <div className="blog__list__empty">
          <p className="blog__list__empty-title">Nada por aqui ainda</p>
          <p className="blog__list__empty-text">
            Nenhuma nota publicada nesta seção. Volte em breve.
          </p>
        </div>
      )}
    </section>
  );
}

export default BlogList;
