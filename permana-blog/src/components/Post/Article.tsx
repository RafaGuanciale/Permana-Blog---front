import ArticleHeader from "./ArticleHeader.js"
import ArticleBody from "./ArticleBody.js";
import ArticleCTA from "./ArticleCTA.js";

function Article() {
  return (
    <article className="article">
      <ArticleHeader />
      <ArticleBody />
      <ArticleCTA />
    </article>
  );
}

export default Article;
