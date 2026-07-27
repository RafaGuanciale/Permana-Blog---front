import type { CATEGORIES } from "./consts"

export type Category = typeof CATEGORIES[number]

export interface PostPreview {
  id: number;
  category: Category;
  reading_time: number;
  title: string;
  preview: string;
  author: string;
  published_at: string;
  slug: string;
  tags: string[];
  image: string;
  alt_image: string;
}

export interface PostFull extends PostPreview {
  text: string;
}