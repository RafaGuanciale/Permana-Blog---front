import type { BlogFilter, PostPreview } from "./types";
export const postsFakes: PostPreview[] = [
  {
    id: 1,
    category: "guias",
    reading_time: 3,
    title: "Titulo teste 1",
    preview: "preview teste 1",
    author: "Autor 1",
    published_at: "2026-07-15T12:00:00.000Z",
    slug: "slug 1",
    tags: [],
    image: "string",
    alt_image: "string",
  },
  {
    id: 2,
    category: "cultura",
    reading_time: 3,
    title: "Titulo teste 2",
    preview: "preview teste 2",
    author: "Autor 2",
    published_at: "2026-07-15T12:00:00.000Z",
    slug: "slug 2",
    tags: [],
    image: "string",
    alt_image: "string",
  },
  {
    id: 3,
    category: "permana",
    reading_time: 3,
    title: "Titulo teste 3",
    preview: "preview teste 3",
    author: "Autor 3",
    published_at: "2026-07-15T12:00:00.000Z",
    slug: "slug 3",
    tags: [],
    image: "string",
    alt_image: "string",
  },
];


export function formatData(iso: string): string {
  if (!iso) return "Data indisponível";

  const date = new Date(iso);
  if (isNaN(date.getTime())) return "Data indisponível";

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getPostListFiltered(
  postList: PostPreview[],
  filterActive: BlogFilter,
) {
  const postListFiltered = postList.filter((post) => {
    if (filterActive === "tudo") return true;
    return post.category === filterActive;
  });
  return postListFiltered;
}
