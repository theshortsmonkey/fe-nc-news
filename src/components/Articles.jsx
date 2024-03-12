import { useEffect, useState } from "react"
import { ArticlesList } from "./ArticlesList/ArticlesList"
import { getArticles } from "../utils/api"
import { Loading } from "./Loading"
import { ArticlesListingOptions } from "./ArticlesListingOptions/ArticlesListingOptions"
import { useSearchParams } from "react-router-dom"

export const Articles = () => {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {}
    if (sortBy) queryObj.sort_by = sortBy
    if (sortOrder) queryObj.sort_order = sortOrder
    getArticles({topic: 'All',...queryObj}).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
    setSearchParams(queryObj)
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
