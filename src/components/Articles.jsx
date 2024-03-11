import { useEffect, useState } from "react"
import { ArticlesList } from "./ArticlesList"
import { getArticles } from "../utils/api"

export const Articles = () => {
  const [articlesList, setArticlesList] = useState([])
  const [articlesCount, setArticlesCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then((data) => {
      setArticlesCount(data.total_count)
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  },[])

  return (
    <section id="articles-section">
      <h2>Articles</h2>
      {console.log(articlesList)}
      {isLoading ?  null : (
      <ArticlesList articlesList={articlesList} articlesCount={articlesCount}/>
      ) }
    </section>
  )
}
