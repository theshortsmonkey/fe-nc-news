import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api'
import { ArticleCard } from './ArticleCard/ArticleCard'

export const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({})
  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data.article)
    })
  })
  return (
    <article>
      <ArticleCard size='large' article={article} />
    </article>
  )
}
