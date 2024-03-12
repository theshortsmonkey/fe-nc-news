import { useEffect, useState } from 'react'
import { TopicSelection } from './TopicSelection/TopicSelection'
import { useParams } from 'react-router-dom'

export const Topics = () => {
  const { topic_id } = useParams()
  const [currTopic, setCurrentTopic] = useState({slug: '',description:''})

  return (
    <section id="topics-section">
      <h2>Topics</h2>
      {currTopic.slug ? <p>All articles for the {currTopic.slug} topic</p> : <TopicSelection setCurrentTopic={setCurrentTopic} />}
    </section>
  )
}
