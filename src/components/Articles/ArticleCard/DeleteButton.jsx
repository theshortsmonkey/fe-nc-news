import { useState } from 'react'
import { deleteArticleById } from '../../../utils/api'

export const DeleteButton = ({ article_id, setIsArticleDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false)

  function handleDeleteClick() {
    setIsDeleting(true)
    deleteArticleById(article_id).then((res) => {
      console.log(res)
      setIsDeleting(false)
      setIsArticleDeleted(true)
    })
  }

  return (
    <div id="delete-article-button">
    {isDeleting ? (
      <p>Deleting comment...</p>
    ) : (
      <button
        id="card-delete"
        onClick={() => {
          handleDeleteClick()
        }}
      >
        Delete Article
      </button>
          )}
    </div>
  )
}
