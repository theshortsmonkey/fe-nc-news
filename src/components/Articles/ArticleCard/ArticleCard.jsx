import { Link } from 'react-router-dom'
import './ArticleCard.css'
import { useContext } from 'react'
import { CurrUserContext } from '../../../contexts/CurrUser'
import { ArticleVoteButtons } from './ArticleVoteButtons'
import { formatDate, singleOrPluralView } from '../../../utils/utils'
import { DeleteButton } from './DeleteButton'

export const ArticleCard = ({ size, article, setArticle,isArticleDeleted, setIsArticleDeleted }) => {
  const { currUser } = useContext(CurrUserContext)
  const cardClass = `article-card article-card-${size}`
  return (
    <div className={cardClass}>
      {isArticleDeleted ? (
        <p id="comment-card-body">Article Deleted</p>
      ) : (
        <>
          <div id="card-title">
            {size === 'small' ? (
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            ) : (
              <p id="title">{article.title}</p>
            )}
          </div>
          <p id="card-topic"><Link to={`/topics/${article.topic}`}>#{article.topic}</Link></p>
          <p id="card-author">By: {article.author}</p>
          {size === 'small' ? null : <p id="card-body">{article.body}</p>}
          <p id="card-created">Created: {formatDate(article.created_at,size)}</p>
          <div id="card-votes">
            <p>{singleOrPluralView(article.votes,'vote')}</p>
            {size === 'small' ? null : (
              <ArticleVoteButtons
                article_id={article.article_id}
                setArticle={setArticle}
              />
            )}
          </div>
          {size === 'small' ? null : (
            <img
              id="card-img"
              src={article.article_img_url}
              alt="article image"
            />
          )}
          {currUser.username === article.author && size !== 'small' ? (
            <DeleteButton
              article_id={article.article_id}
              setIsArticleDeleted={setIsArticleDeleted}
            />
          ) : null}
          {size === 'small' ? <p id="card-comments">{singleOrPluralView(article.comment_count,'comment')}</p> : null}
        </>
      )}
    </div>
  )
}
