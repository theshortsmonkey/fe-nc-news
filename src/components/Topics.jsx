import { useEffect, useState } from 'react'
import { TopicSelection } from './TopicSelection/TopicSelection'
import { useParams, useSearchParams } from 'react-router-dom'
import { getArticles } from '../utils/api'
import { ArticlesList } from './ArticlesList/ArticlesList'
import { Loading } from './Loading'
import { ArticlesListingOptions } from './ArticlesListingOptions/ArticlesListingOptions'

export const Topics = () => {
  const { topic_slug } = useParams()
  const [searchParams,setSearchParams] = useSearchParams()
  const [currTopic, setCurrentTopic] = useState({
    slug: topic_slug,
    description: '',
  })
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  useEffect(() => {
    setCurrentTopic({ slug: topic_slug, description: '' })
  }, [topic_slug])

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {}
    if (sortBy) queryObj.sort_by = sortBy
    if (sortOrder) queryObj.sort_order = sortOrder
    getArticles({topic: currTopic.slug,...queryObj}).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
    setSearchParams(queryObj)
  }, [currTopic, sortOrder, sortBy])

  function loadArticlesList() {
    let content = (
      <ArticlesList articlesList={articlesList} topic={currTopic.slug} />
    )
    if (isLoading) content = <Loading />
    return (
      <>
        <ArticlesListingOptions
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
        />
        {content}
      </>
    )
  }

  return (
    <section id="topics-section">
      {currTopic.slug ? (
        loadArticlesList()
      ) : (
        <TopicSelection setCurrentTopic={setCurrentTopic} />
      )}
    </section>
  )
}
