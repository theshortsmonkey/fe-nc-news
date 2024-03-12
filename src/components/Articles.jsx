import { useEffect, useState } from "react"
import { ArticlesList } from "./ArticlesList/ArticlesList"
import { getArticles } from "../utils/api"
import { Loading } from "./Loading"
import { ArticlesListingOptions } from "./ArticlesListingOptions/ArticlesListingOptions"

export const Articles = () => {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getArticles('All',sortBy,sortOrder).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  },[sortBy,sortOrder])

  return (
    <section id="articles-section">
    <ArticlesListingOptions setSortBy={setSortBy} setSortOrder={setSortOrder}/>
      {isLoading ?  <Loading/> : (
      <ArticlesList articlesList={articlesList} topic='All'/>
      ) }
    </section>
  )
}
