import type { PostPreview } from "./types";

const BASE_URL = "http://localhost:3000";

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
