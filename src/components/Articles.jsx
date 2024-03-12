import { useEffect, useState } from "react"
import { ArticlesList } from "./ArticlesList"
import { getArticles } from "../utils/api"
import { Loading } from "./Loading"

export const Articles = () => {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getArticles('All').then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  },[])

  return (
    <section id="articles-section">
      <h2>Articles</h2>
      {isLoading ?  <Loading/> : (
      <ArticlesList articlesList={articlesList} topic='All'/>
      ) }
    </section>
  )
}
