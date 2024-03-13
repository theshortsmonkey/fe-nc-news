import { useContext, useEffect, useState } from "react"
import { ArticlesList } from "../Articles/ArticlesList/ArticlesList"
import { ArticlesListingOptions } from "../Articles/ArticlesListingOptions/ArticlesListingOptions"
import { getArticles } from "../../utils/api"
import { Loading } from "../Loading"
import { CurrUserContext } from "../../contexts/CurrUser"

export const UserArticles = () => {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  const {currUser} = useContext(CurrUserContext)

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {author:currUser.username}
    if (sortBy) queryObj.sort_by = sortBy
    if (sortOrder) queryObj.order = sortOrder
    getArticles({topic: '',...queryObj}).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  },[sortBy,sortOrder])
  return (
    <div id='user-articles'>
      <h3>Your Articles</h3>
      <ArticlesListingOptions setSortBy={setSortBy} setSortOrder={setSortOrder}/>
      {isLoading ?  <Loading/> : (
      <ArticlesList articlesList={articlesList} topic='All'/>
      ) }
    </div>
  )
}
