import { useEffect, useState } from 'react'
import { TopicSelection } from './TopicSelection/TopicSelection'
import { useParams } from 'react-router-dom'

export const Topics = () => {
  const { topic_slug } = useParams()
  const [currTopic, setCurrentTopic] = useState({slug: topic_slug,description:''})

  useEffect(() => {
    setCurrentTopic({slug: topic_slug,description:''})
  },[topic_slug])

  return (
    <section id="topics-section">
      {currTopic.slug ? <p>All articles for the {currTopic.slug} topic</p> : <TopicSelection setCurrentTopic={setCurrentTopic} />}
    </section>
  )
}
