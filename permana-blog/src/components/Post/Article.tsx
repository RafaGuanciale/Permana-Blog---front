import ArticleHeader from "./ArticleHeader.js"
// import ArticleBody from "./ArticleBody.js";
// import ArticleCTA from "./ArticleCTA.js";
import type { PostFull } from "../../utils/types.js";

interface articleProps {
  post: PostFull
}

function Article({post}: articleProps) {
  return (
    <article className="article">
      <ArticleHeader post={post}/>
      {/* <ArticleBody post={post}/> */}
      {/* <ArticleCTA post={post}/> */}
    </article>
  );
}

export default Article;
