import type { CATEGORIES } from "./consts"

export type Category = typeof CATEGORIES[number]

export interface PostPreview {
  category: Category;
  reading_time: number;
  title: string;
  preview: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
  image: string;
  alt_image: string;
}

export interface PostFull extends PostPreview {
  text: string;
}