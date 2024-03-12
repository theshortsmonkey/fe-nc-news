import { Link } from 'react-router-dom'
import './ArticleCard.css'
import { useContext } from 'react'
import { CurrUserContext } from '../../contexts/CurrUser'
import { ArticleVoteButtons } from '../ArticleVoteButtons/ArticleVoteButtons'
import { formatDate } from '../../utils/utils'

export const ArticleCard = ({ size, article,setArticle }) => {
  const { currUser } = useContext(CurrUserContext)
  const cardClass = `article-card article-card-${size}`
  return (
    <div className={cardClass}>
      <div id="card-title">
      {size === 'small' ? <Link to={`/articles/${article.article_id}`}>{article.title}</Link> : <p id='title'>Title: {article.title}</p> }
      </div>
      <p id="card-topic">Topic: {article.topic}</p>
      <p id="card-author">Author: {article.author}</p>
      {size === 'small' ? null : <p id="card-body">{article.body}</p>}
      <p id="card-created">Created: {formatDate(article.created_at)}</p>
      <div id="card-votes">
        <p>Total Votes: {article.votes}</p>
        {size === 'small' ? null : (<ArticleVoteButtons article_id={article.article_id} setArticle={setArticle}/>
        )}
      </div>
      {size === 'small' ? null : (
        <img id="card-img" src={article.article_img_url} alt="article image" />
      )}
      {(currUser.username === article.author && size !== 'small') ? (
        <div>
          <button id="card-delete">Delete Article</button>
        </div>
      ) : null}
      <p id="card-comments">Comments: {article.comment_count}</p>
    </div>
  )
}
