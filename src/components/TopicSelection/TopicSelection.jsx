import { useEffect, useState } from 'react'
import './TopicSelection.css'
import { getTopics } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export const TopicSelection = ({setCurrentTopic}) => {
  const [topicsList, setTopicsList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getTopics().then((data) => {
      setTopicsList(data.topics)
    })
  }, [])

  function handleClick (e,topic) {
    e.preventDefault()
    setCurrentTopic(topic)
    navigate(`/topics/${topic.slug}`)
  }
  return (
    <form id="topic-selection">
      <h2>Click topic to view articles</h2>
      {topicsList.map((topic) => {
        return <button key={topic.slug} onClick={(e) => handleClick(e,topic)}>{topic.slug}</button>
      })}
    </form>
  )
}
