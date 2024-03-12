import { useEffect, useState } from 'react'
import { TopicSelection } from './TopicSelection/TopicSelection'
import { useParams } from 'react-router-dom'
import { getArticles } from '../utils/api'
import { ArticlesList } from './ArticlesList/ArticlesList'
import { Loading } from './Loading'

export const Topics = () => {
  const { topic_slug } = useParams()
  const [currTopic, setCurrentTopic] = useState({
    slug: topic_slug,
    description: '',
  })
  const [articlesList, setArticlesList] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setCurrentTopic({ slug: topic_slug, description: '' })
  }, [topic_slug])

  useEffect(() => {
    setIsLoading(true)
    getArticles(currTopic.slug).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  }, [currTopic])

  return (
    <section id="topics-section">
      {currTopic.slug ? (
        isLoading ? (
          <Loading />
        ) : (
          <ArticlesList articlesList={articlesList} topic={currTopic.slug} />
        )
      ) : (
        <TopicSelection setCurrentTopic={setCurrentTopic} />
      )}
    </section>
  )
}
