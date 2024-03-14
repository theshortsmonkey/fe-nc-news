import axios from 'axios'

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-gyvj.onrender.com/api/'
})

export const getArticles =  (params) => {
  const queryObj = {params}
  return ncNewsApi.get(`articles`,queryObj).then((res) => res.data)
}

export const postArticle = (body) => {
  return ncNewsApi.post('articles',body).then((res) => res.data)
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

export const deleteArticleById = (articleId) => {
  return ncNewsApi.delete(`articles/${articleId}`).then((res) => res.status)
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

export const postTopic = (body) => {
  return ncNewsApi.post('topics',body).then((res) => res.data)
}

export const getUsers = () => {
  return ncNewsApi.get('users').then((res) => res.data)
}