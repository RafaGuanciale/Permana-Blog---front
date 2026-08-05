import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../utils/api";
import { useEffect, useState } from "react";
import { type PostFull } from "../../utils/types";

function PostPage() {
  const [post, setPost] = useState<PostFull | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return;

  return (
    <>
      <h1>{post.title}</h1>
      <h3>{post.preview}</h3>
    </>
  );
}

export default PostPage;
