import { useState } from 'react'
import './PostComment.css'
import { postCommentByArticleId } from '../../utils/api'
import { useContext } from 'react'
import { CurrUserContext } from '../../contexts/CurrUser'
import { formatDate } from '../../utils/utils'

export const PostComment = ({article_id,setCommentsList}) => {
  const [commentBody, setCommentBody] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(true)
  const { currUser } = useContext(CurrUserContext)

  function handleSubmit (e) {
    e.preventDefault()
    const body = {
      username: currUser.username,
      body: commentBody
    }
    setIsFormVisible(false)
    postCommentByArticleId(article_id,body).then((data) => {
      setCommentsList((curr) => {
        const postedComment =data.postedComment
        postedComment.created_at = formatDate(postedComment.created_at)
        const copyList = [postedComment,...curr]
        return copyList
      })
      setIsFormVisible(true)
    })
  }

  return isFormVisible ? (
    <form id="post-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment-input" id="comment-input-label">
        Your Comment
      </label>
      <textarea
        id="comment-input"
        placeholder="Write your comment here"
        required
        rows="4"
        value={commentBody}
        onChange={(e)=>{setCommentBody(e.target.value)}}
      ></textarea>
      <input
        id="submit-comment-button"
        type="submit"
        value="Post Comment"
      ></input>
    </form>
  ) : <p>Posting Comment...</p>
}
