import { Link } from "react-router-dom";
import type { PostFull } from "../../utils/types";
import { formatData } from "../../utils/utils";

interface articleHeaderProps {
  post: PostFull;
}

function ArticleHeader({ post }: articleHeaderProps) {
  return (
    <header className="article__header">
      <nav className="article__crumbs">
        <Link to={"/"}>Blog</Link>
        <span className="article__crumbs-sep">›</span>
        <Link to={"/"}>{post.category}</Link>
      </nav>
      <p className="article__eyebrow">
        {post.category} · {`${post.reading_time} min de leitura`}
      </p>
      <h1 className="article__title">{post.title}</h1>
      <p className="article__dek">{post.preview}</p>
      <div className="article__byline">
        <span className="article__avatar">P</span>
        <span className="article__byline-txt">
          <span className="article__byline-name">Por {post.author}</span>
          <br />
          <span className="article__byline-sub">{formatData(post.published_at)}</span>
        </span>
      </div>
      <div className="article__rule" />
    </header>
  );
}

export default ArticleHeader;
