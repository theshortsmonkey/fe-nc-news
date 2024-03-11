import { Link } from 'react-router-dom'
import './ArticleCard.css'
import { useContext } from 'react'
import { CurrUserContext } from '../../contexts/CurrUser'

export const ArticleCard = ({ size, article }) => {
  const { currUser } = useContext(CurrUserContext)
  const cardClass = `article-card article-card-${size}`
  return (
    <div className={cardClass}>
      <p id="card-title">
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </p>
      <p id="card-topic">Topic: {article.topic}</p>
      <p id="card-author">Author: {article.author}</p>
      {size === 'small' ? null : <p id="card-body">{article.body}</p>}
      <p id="card-created">Created at: {article.created_at}</p>
      <div id="card-votes">
        <p>Total Votes: {article.votes}</p>
        {size === 'small' ? null : (
          <>
            <button>Up Vote</button>
            <button>Down Vote</button>
          </>
        )}
      </div>
      {currUser.username === article.author ? (
        <button id="card-delete">Delete Article</button>
      ) : null}
      <p id="card-comments">Comments: {article.comment_count}</p>
    </div>
  )
}
