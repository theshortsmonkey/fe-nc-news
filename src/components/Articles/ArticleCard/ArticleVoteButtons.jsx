import './ArticleVoteButtons.css'
import { useState } from 'react'
import { patchArticlesById } from '../../../utils/api'

export const ArticleVoteButtons = ({ article_id, setArticle }) => {
  const [isVoteSubmitted, setIsVoteSubmitted] = useState(false)
  const [voteResponse, setVoteResponse] = useState('')

  function handleButtonClick(voteInc) {
    const body = { inc_votes: voteInc }
    setArticle((curr) => {
      const copyArticle = { ...curr }
      copyArticle.votes += voteInc
      return copyArticle
    })
    setIsVoteSubmitted(true)
    if (voteInc > 0) setVoteResponse(<p>&#128578; Article up voted</p>)
    else setVoteResponse(<p>Article down voted</p>)
    patchArticlesById(article_id, body).catch(() => {
      setArticle((curr) => {
        const copyArticle = { ...curr }
        copyArticle.votes += -voteInc
        return copyArticle
      })
      setIsVoteSubmitted(false)
    })
  }
  return (
    isVoteSubmitted ? voteResponse :
    (
    <div id="article-vote-buttons">
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
  )
}
