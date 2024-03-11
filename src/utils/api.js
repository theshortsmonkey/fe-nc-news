import axios from 'axios'

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-gyvj.onrender.com/api/'
})

export const getArticles =  () => {
  return ncNewsApi.get('articles').then((res) => res.data)
}