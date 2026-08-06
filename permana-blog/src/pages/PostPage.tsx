import { useParams } from "react-router-dom";
import { getPostBySlug } from "../utils/api";
import { useEffect, useState } from "react";
import { type PostFull } from "../utils/types";
import Article from "../components/Post/Article";

function PostPage() {
  const [post, setPost] = useState<PostFull | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <Article post={post} />;
}

export default PostPage;
