import { useEffect, useState } from 'react'
import { TopicSelection } from './TopicSelection/TopicSelection'
import { useParams, useSearchParams } from 'react-router-dom'
import { getArticles } from '../../utils/api'
import { ArticlesList } from '../Articles/ArticlesList/ArticlesList'
import { ArticlesListingOptions } from '../Articles/ArticlesListingOptions/ArticlesListingOptions'
import { ErrorComponent } from '../ErrorComponent'
import { AddTopic } from './AddTopic/AddTopic'
import { LoadingDiv } from '../LoadingDiv'

export const Topics = () => {
  const { topic_slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [currTopic, setCurrentTopic] = useState({
    slug: topic_slug,
    description: '',
  })
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setCurrentTopic({ slug: topic_slug, description: '' })
  }, [topic_slug])

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {}
    if (sortBy) queryObj.sort_by = sortBy
    if (sortOrder) queryObj.order = sortOrder
    getArticles({ topic: currTopic.slug, ...queryObj })
      .then((data) => {
        setArticlesList(data.articles)
        setIsLoading(false)
      })
      .catch((err) => setError(err.response))
    setSearchParams(queryObj)
  }, [currTopic, sortOrder, sortBy])

  return (
    <ErrorComponent error={error}>
      <section id="topics-section">
        {currTopic.slug ? (
          <>
            <ArticlesListingOptions
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
            />
            <LoadingDiv isLoading={isLoading} dataType="articles">
              <ArticlesList
                articlesList={articlesList}
                topic={currTopic.slug}
              />
            </LoadingDiv>
          </>
        ) : (
          <>
            <TopicSelection setCurrentTopic={setCurrentTopic} />
            <AddTopic />
          </>
        )}
      </section>
    </ErrorComponent>
  )
}
