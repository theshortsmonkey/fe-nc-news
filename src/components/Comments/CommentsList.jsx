import { useEffect, useState } from 'react'
import { getCommentsByArticleId } from '../../utils/api'
import { CommentCard } from './CommentCard/CommentCard'
import { singleOrPluralView } from '../../utils/utils'
import { LoadingDiv } from '../LoadingDiv'

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
      <h3>{singleOrPluralView(commentsList.length,'comment')}</h3>
      <LoadingDiv isLoading={isLoading} dataType='comments'>
        {commentsList.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />
        })}
      </LoadingDiv>
    </>
  )
}
