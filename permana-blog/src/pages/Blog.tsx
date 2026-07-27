import BlogHighlight from "../components/Highlight/BlogHighlight";
import BlogList from "../components/List/BlogList";

function Blog() {
  return (
    <div className="blog">
      <BlogHighlight/>
      <BlogList />
    </div>
  );
}

export default Blog;
