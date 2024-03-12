import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api'
import { ArticleCard } from './ArticleCard/ArticleCard'
import { Loading } from './Loading'
import { CommentsList } from './CommentsList'
import { PostComment } from './PostComment/PostComment'

export const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({})
  const [commentsList, setCommentsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getArticleById(article_id).then((data) => {
      setArticle(data.article)
      setIsLoading(false)
    })
  }, [])
  return (
    <article>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ArticleCard size="large" article={article} setArticle={setArticle} />
          <PostComment article_id={article_id} setCommentsList={setCommentsList}/>
          <CommentsList commentsList={commentsList} setCommentsList={setCommentsList} article_id={article_id} />
        </>
      )}
    </article>
  )
}
