import { useEffect, useState } from 'react'
import './PostArticle.css'
import { useContext } from 'react'
import { CurrUserContext } from '../../../contexts/CurrUser'
import { captiliseFirstLetter } from '../../../utils/utils'
import { getTopics, postArticle } from '../../../utils/api'
import { ErrorComponent } from '../../ErrorComponent'

const blankArticle = {
  title: '',
  topic: '',
  body: '',
  article_img_url: '',
}

export const PostArticle = ({ setShowAddArticleForm }) => {
  const { currUser } = useContext(CurrUserContext)
  const [currArticle, setCurrArticle] = useState(blankArticle)
  const [isFormVisible, setIsFormVisible] = useState(true)
  const [topicsList, setTopicsList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getTopics().then((data) => {
      setTopicsList(data.topics)
    })
  }, [])

  function handleChange(e, key) {
    setCurrArticle((curr) => {
      const copy = { ...curr }
      copy[key] = e.target.value
      return copy
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    currArticle.author = currUser.username
    setIsFormVisible(false)
    postArticle(currArticle)
      .then((data) => {
        setCurrArticle(blankArticle)
        setIsFormVisible(true)
        setShowAddArticleForm(false)
      })
      .catch((err) => setError(err.response))
  }

  return (
    <ErrorComponent error={error}>
      {isFormVisible ? (
        <form id="post-article-form" onSubmit={handleSubmit}>
          <h2>Your Article info:</h2>
          <label>
            Title:
            <input
              className="article-input"
              required
              placeholder="Enter article title"
              value={currArticle.title}
              onChange={(e) => handleChange(e, 'title')}
            ></input>
          </label>
          <label>
            Topic:
            <select
              className="article-input"
              id='topic-select'
              required
              value={currArticle.topic}
              onChange={(e) => handleChange(e, 'topic')}
            >
              <option value="">Select a topic</option>
              {topicsList.map((topic) => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {captiliseFirstLetter(topic.slug)}
                  </option>
                )
              })}
            </select>
          </label>
          <label>
            Image URL: <span>e.g http(s)://example.com</span>
            <input
              type="url"
              placeholder="http://example.com"
              pattern="http.*://.*"
              className="article-input"
              required
              value={currArticle.article_img_url}
              onChange={(e) => handleChange(e, 'article_img_url')}
            ></input>
          </label>
          <label>
            Content
            <textarea
              className="article-input"
              placeholder="Enter your article content here"
              required
              rows="4"
              value={currArticle.body}
              onChange={(e) => handleChange(e, 'body')}
            ></textarea>
          </label>
          <input
            id="submit-article-button"
            type="submit"
            value={
              currUser.username ? 'Post Article' : 'Login to post an article'
            }
            disabled={!currUser.username}
          ></input>
        </form>
      ) : (
        <p>Posting Article...</p>
      )}
    </ErrorComponent>
  )
}
