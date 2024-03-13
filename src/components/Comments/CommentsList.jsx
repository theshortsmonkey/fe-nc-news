import { useEffect, useState } from 'react'
import { getCommentsByArticleId } from '../../utils/api'
import { CommentCard } from './CommentCard/CommentCard'
import { Loading } from '../Loading'

export const CommentsList = ({ article_id,commentsList, setCommentsList }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setCommentsList(comments)
      setIsLoading(false)
    })
  }, [])
  return (
    <>
      <h3>All Comments</h3>
      {isLoading ?  <Loading/> : (
        commentsList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />
        })
      ) }
    </>
  )
}
