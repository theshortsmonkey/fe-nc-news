import './CommentVoteButtons.css'
import { useState } from 'react'
import { patchCommentById } from '../../../utils/api'

export const CommentVoteButtons = ({ comment_id, setCurrComment }) => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false)

  function handleButtonClick(voteInc) {
    const body = { inc_votes: voteInc }
    setCurrComment((curr) => {
      const copyComment = { ...curr }
      copyComment.votes += voteInc
      return copyComment
    })
    setIsVoteSubmitted(true)
    patchCommentById(comment_id, body).catch(() => {
      setCurrComment((curr) => {
        const copyComment = { ...curr }
        copyComment.votes += -voteInc
        return copyComment
      })
      setIsVoteSubmitted(false)
    })
  }
  return (
    isVoteSubmitted ? <p>Vote Submitted</p> :
    (
    <div id="comment-vote-buttons">
      <button
        onClick={() => {
          handleButtonClick(1)
        }}
      >
        Up Vote
      </button>
      <button
        onClick={() => {
          handleButtonClick(-1)
        }}
      >
        Down Vote
      </button>
    </div> 
    )
  )
}
