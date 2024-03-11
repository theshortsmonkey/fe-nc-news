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