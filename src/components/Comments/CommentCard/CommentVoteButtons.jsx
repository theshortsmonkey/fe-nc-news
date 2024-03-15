import './CommentVoteButtons.css'
import { useState } from 'react'
import { patchCommentById } from '../../../utils/api'

export const CommentVoteButtons = ({ comment_id, setCurrComment }) => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false)
  const [voteResponse, setVoteResponse] = useState('')

  function handleButtonClick(voteInc) {
    const body = { inc_votes: voteInc }
    setCurrComment((curr) => {
      const copyComment = { ...curr }
      copyComment.votes += voteInc
      return copyComment
    })
    setIsVoteSubmitted(true)
    if (voteInc > 0) setVoteResponse(<p>&#128578; Comment up voted</p>)
    else setVoteResponse(<p>Comment down voted</p>)
    patchCommentById(comment_id, body).catch(() => {
      setCurrComment((curr) => {
        const copyComment = { ...curr }
        copyComment.votes += -voteInc
        return copyComment
      })
      setIsVoteSubmitted(false)
    })
  }
  return isVoteSubmitted ? (
    voteResponse
  ) : (
    <div id="comment-vote-buttons">
      <button
        onClick={() => {
          handleButtonClick(1)
        }}
      >
        &#x1F44D;
      </button>
      <button
        onClick={() => {
          handleButtonClick(-1)
        }}
      >
        &#128078;
      </button>
    </div>
  )
}
