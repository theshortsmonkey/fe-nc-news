import { useContext, useState } from 'react'
import { CurrUserContext } from '../../../contexts/CurrUser'
import './CommentCard.css'
import { formatDate, singleOrPluralView } from '../../../utils/utils'
import { deleteCommentById } from '../../../utils/api'
import { CommentVoteButtons } from './CommentVoteButtons'

export const CommentCard = ({ comment }) => {
  const { currUser } = useContext(CurrUserContext)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isCommentDeleted, setIsCommentDeleted] = useState(false)
  const [currComment,setCurrComment] = useState(comment)

  function handleDeleteClick() {
    setIsDeleting(true)
    deleteCommentById(currComment.comment_id).then((res) => {
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
          <p id="comment-card-author">By: {currComment.author}</p>
          <p id="comment-card-body">{currComment.body}</p>
          <div id="comment-card-votes">
            <p>{singleOrPluralView(currComment.votes,'vote')}</p>
            <CommentVoteButtons comment_id={currComment.comment_id} setCurrComment={setCurrComment} />
          </div>
          <p id="comment-card-created">
            Posted: {formatDate(currComment.created_at)}
          </p>
          {currUser.username === currComment.author ? (
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
