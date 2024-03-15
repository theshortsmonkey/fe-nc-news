import { useEffect, useState } from 'react'
import './TopicSelection.css'
import { getTopics } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'
import { LoadingDiv } from '../../LoadingDiv'
import { captiliseFirstLetter } from '../../../utils/utils'

export const TopicSelection = ({ setCurrentTopic }) => {
  const [topicsList, setTopicsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    getTopics().then((data) => {
      setTopicsList(data.topics)
      setIsLoading(false)
    })
  }, [])

  function handleClick(e, topic) {
    e.preventDefault()
    if (setCurrentTopic) setCurrentTopic(topic)
    navigate(`/topics/${topic.slug}`)
  }
  return (
    <form id="topic-selection">
      <h2>Click a topic to view articles</h2>
      <LoadingDiv isLoading={isLoading} dataType='topics' >
        <div className="topics-list">
          {topicsList.map((topic) => {
            return (
              <button key={topic.slug} onClick={(e) => handleClick(e, topic)}>
                {captiliseFirstLetter(topic.slug)}
              </button>
            )
          })}
        </div>
      </LoadingDiv>
    </form>
  )
}
