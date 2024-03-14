import './AddTopic.css'
import { useContext, useState } from 'react'
import { CurrUserContext } from '../../../contexts/CurrUser'
import { postTopic } from '../../../utils/api'
import { useNavigate } from 'react-router-dom'

export const AddTopic = () => {
  const { currUser } = useContext(CurrUserContext)
  const [topicName, setTopicName] = useState('')
  const [topicDesc, setTopicDesc] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(true)
  
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    setIsFormVisible(false)
    const body = {
      slug: topicName,
      description: topicDesc
    }
    postTopic(body).then((data) => {
      setTopicName('')
      setTopicDesc('')
      setIsFormVisible(true)
      navigate(`/topics/${body.slug}`)
    })
  }

  return isFormVisible ? ( 
    currUser.username ? (
    <form id="add-topic-form" onSubmit={handleSubmit}>
      <h2>Create a new topic:</h2>
      <label>
        Topic Name
        <input
          className="topic-input"
          required
          placeholder="enter topic name"
          value={topicName}
          onChange={(e) => {
            setTopicName(e.target.value)
          }}
        ></input>
      </label>
      <label>
        Topic Description
        <input
          className="topic-input"
          required
          placeholder="enter topic description"
          value={topicDesc}
          onChange={(e) => {
            setTopicDesc(e.target.value)
          }}
        ></input>
      </label>
      <input
        id="submit-topic-button"
        type="submit"
        value="Create Topic"
      ></input>
    </form>
  ) : null
  ) : <p>Creating Topic, wait to be redirected...</p>
}
