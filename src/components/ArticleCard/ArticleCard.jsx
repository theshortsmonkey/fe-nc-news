import './ArticleCard.css'

export const ArticleCard = ({ size, article }) => {
  let cardClass = ''
  if (size === 'small') cardClass = 'article-card-small'
  return (
    <div className={cardClass}>
      <p id="card-title">{article.title}</p>
      <p id="card-topic">Topic: {article.topic}</p>
      <p id="card-author">Author: {article.author}</p>
      {size === 'small' ? null : <p id="card-body">{article.body}</p>}
      <p id="card-created">Created at: {article.created_at}</p>
      <div id="card-votes">
        <p>{article.votes}</p>
        <button>Up Vote</button>
        <button>Down Vote</button>
      </div>
      <p id="card-comments">Comments: {article.comment_count}</p>
    </div>
  )
}
