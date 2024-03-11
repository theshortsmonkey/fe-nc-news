import axios from 'axios'

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-gyvj.onrender.com/api/'
})

export const getArticles =  () => {
  return ncNewsApi.get('articles').then((res) => res.data)
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