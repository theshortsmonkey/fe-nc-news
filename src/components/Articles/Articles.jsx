import { useContext, useEffect, useState } from 'react'
import { ArticlesList } from './ArticlesList/ArticlesList'
import { getArticles } from '../../utils/api'
import { Loading } from '../Loading'
import { ArticlesListingOptions } from './ArticlesListingOptions/ArticlesListingOptions'
import { useSearchParams } from 'react-router-dom'
import { CurrUserContext } from '../../contexts/CurrUser'
import { PostArticle } from './PostArticle/PostArticle'
import { LoadingDiv } from '../LoadingDiv'

export const Articles = () => {
  const { currUser } = useContext(CurrUserContext)
  const [articlesList, setArticlesList] = useState([])
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [showAddArticleForm, setShowAddArticleForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {}
    if (sortBy) queryObj.sort_by = sortBy
    if (sortOrder) queryObj.order = sortOrder
    getArticles({ topic: '', ...queryObj }).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
    setSearchParams(queryObj)
  }, [sortBy, sortOrder])

  function handleClick () {
    setShowAddArticleForm(true)
  }

  return (
    <section id="articles-section">
      {showAddArticleForm ? (
        <PostArticle setShowAddArticleForm={setShowAddArticleForm}/>
        ) : (
          <>
          {currUser.username ? <button onClick={handleClick}>Post Article</button> : null}
          <ArticlesListingOptions
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
          <LoadingDiv isLoading={isLoading} dataType='articles'>
            <ArticlesList articlesList={articlesList} topic="All" />
          </LoadingDiv>
        </>
      )}
    </section>
  )
}
