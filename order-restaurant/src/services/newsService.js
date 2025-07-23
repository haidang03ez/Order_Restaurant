import api from "../api/axiosClients";

export const fetchNewsList = async (params) => {
  return api.get("/posts", { params });
};

export const fetchNewsTagList = async () => {
  return api.get("/posts/tag-list");
};

export const fetchNewsByATag = async ({ tag, params }) => {
  return api.get(`/posts/tag/${tag}`, { params });
};
