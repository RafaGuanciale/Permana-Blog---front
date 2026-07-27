import { createContext, useContext, useState, type ReactNode } from "react";
import { type PostPreview } from "../utils/types";

interface PostsContextValue {
  posts: PostPreview[];
}

const PostContext = createContext<PostsContextValue | null>(null);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostPreview[]>([]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export function usePosts(): PostsContextValue {
  const contexto = useContext(PostContext);
  if (!contexto) {
    throw new Error("usePosts precisa estar dentro de PostsProvider");
  }
  return contexto;
}
