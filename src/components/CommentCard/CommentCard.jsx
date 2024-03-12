import { useContext } from "react"
import { CurrUserContext } from "../../contexts/CurrUser"
import './CommentCard.css'
import { formatDate } from "../../utils/utils"

export const CommentCard = ({ comment }) => {
  const { currUser } = useContext(CurrUserContext)
  return (
    <div className="comment-card">
      <p id="comment-card-author">Author: {comment.author}</p>
      <p id="comment-card-body">{comment.body}</p>
      <div id="comment-card-votes">
        <p>Votes: {comment.votes}</p>
        <button>Up Vote</button>
        <button>Down Vote</button>
      </div>
      <p id="comment-card-created">Posted: {formatDate(comment.created_at)}</p>
      {currUser.username === comment.author ? (
        <div>
        <button id="comment-card-delete">Delete Comment</button>
        </div>
      ) : null}
    </div>
  )
}
