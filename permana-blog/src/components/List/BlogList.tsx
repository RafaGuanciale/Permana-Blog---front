import { useState } from "react";
import { CATEGORIES } from "../../utils/consts";
import type { Category } from "../../utils/types";
import { usePosts } from "../../contexts/PostContext";
import { formatData } from "../../utils/utils";
import { CategoriesBackgroundsSmall } from "../../utils/consts";
import { Link } from "react-router-dom";
type BlogFilter = Category | "tudo";

function BlogList() {
  const [filterActive, setFilterActive] = useState<BlogFilter>("tudo");
  const { posts } = usePosts();
  const postList = posts.slice(1);

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
          {postList.map((post) => (
            <article key={post.id} className="blog__list__item">
              <p className="blog__list__item-category">{post.category}</p>
              <div className="blog__list__item-media">
                <img
                  className="blog__list__item-img"
                  src={CategoriesBackgroundsSmall[post.category]}
                  alt={post.category}
                />
              </div>
              <div className="blog__list__item-body">
                <h3 className="blog__list__item-title">
                  <Link
                    className="blog__list__item-link"
                    to={`/post/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="blog__list__item-excerpt">{post.preview}</p>
              </div>
              <div className="blog__list__item-meta">
                <span className="blog__list__item-author">{post.author}</span>
                <span className="blog__list__item-date">
                  {formatData(post.published_at)} · {post.reading_time} min
                </span>
              </div>
            </article>
          ))}
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
