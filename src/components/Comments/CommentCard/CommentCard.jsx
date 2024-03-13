import { useContext, useState } from 'react'
import { CurrUserContext } from '../../../contexts/CurrUser'
import './CommentCard.css'
import { formatDate } from '../../../utils/utils'
import { deleteCommentById } from '../../../utils/api'

export const CommentCard = ({ comment }) => {
  const { currUser } = useContext(CurrUserContext)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isCommentDeleted, setIsCommentDeleted] = useState(false)

  function handleDeleteClick() {
    setIsDeleting(true)
    deleteCommentById(comment.comment_id).then((res) => {
      setIsDeleting(false)
      setIsCommentDeleted(true)
    })
  }

  return (
    <div className="comment-card">
      {isCommentDeleted ? (
        <p id="comment-card-body">Comment Deleted</p>
      ) : (
        <>
          <p id="comment-card-author">Author: {comment.author}</p>
          <p id="comment-card-body">{comment.body}</p>
          <div id="comment-card-votes">
            <p>Votes: {comment.votes}</p>
            <button>Up Vote</button>
            <button>Down Vote</button>
          </div>
          <p id="comment-card-created">
            Posted: {formatDate(comment.created_at)}
          </p>
          {currUser.username === comment.author ? (
            <div>
              {isDeleting ? (
                <p>Deleting comment...</p>
              ) : (
                <button
                  id="comment-card-delete"
                  onClick={() => {
                    handleDeleteClick()
                  }}
                >
                  Delete Comment
                </button>
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}
