import axios from 'axios'

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-gyvj.onrender.com/api/'
})

export const getArticles =  (topic) => {
  if (topic === "All") topic = "";
  const query = topic ? `?topic=${topic}` : "";
  return ncNewsApi.get(`articles${query}`).then((res) => res.data)
}

export const getArticleById = (articleId) => {
  return ncNewsApi.get(`articles/${articleId}`).then((res) => res.data)
}

export const getCommentsByArticleId = (articleId) => {
  return ncNewsApi.get(`articles/${articleId}/comments`).then((res) => res.data)
}

export const patchArticlesById = (articleId,body) => {
  return ncNewsApi.patch(`articles/${articleId}`,body).then((res) => res.data)
}

export const postCommentByArticleId = (articleId,body) => {
  return ncNewsApi.post(`articles/${articleId}/comments`,body).then((res) => res.data)
}

export const deleteCommentById = (commentId) => {
  return ncNewsApi.delete(`comments/${commentId}`).then((res) => res)
}

export const getTopics = () => {
  return ncNewsApi.get('topics').then((res) => res.data)
}