import type { PostPreview } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getPosts = (): Promise<PostPreview[]> => {
  return fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`),
  );
};
