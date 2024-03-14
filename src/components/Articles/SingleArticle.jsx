import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../utils/api'
import { ArticleCard } from './ArticleCard/ArticleCard'
import { Loading } from '../Loading'
import { CommentsList } from '../Comments/CommentsList'
import { PostComment } from '../Comments/PostComment/PostComment'
import { ErrorComponent } from '../ErrorComponent'
import { LoadingDiv } from '../LoadingDiv'

export const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({})
  const [commentsList, setCommentsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isArticleDeleted, setIsArticleDeleted] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getArticleById(article_id)
      .then((data) => {
        setArticle(data.article)
        setIsLoading(false)
      })
      .catch((err) => setError(err.response))
  }, [])
  return (
    <ErrorComponent error={error}>
      <LoadingDiv isLoading={isLoading} dataType='article'>
        <article>
          <ArticleCard size="large" article={article} setArticle={setArticle} isArticleDeleted={isArticleDeleted} setIsArticleDeleted={setIsArticleDeleted} />
          
      {!isArticleDeleted ? (
        <>
          <PostComment
            article_id={article_id}
            setCommentsList={setCommentsList}
          />
          {commentsList  ? (
          <CommentsList
            commentsList={commentsList}
            setCommentsList={setCommentsList}
            article_id={article_id}
          />
          ) : <p>No comments to display</p>}
          </> ) :null }
        </article>
      </LoadingDiv>
    </ErrorComponent>
  )
}
