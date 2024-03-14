import { useEffect, useState } from 'react'
import './SideBar.css'
import { ArticlesList } from '../Articles/ArticlesList/ArticlesList'
import { getArticles } from '../../utils/api'
import { Link } from 'react-router-dom'

export const ArticlesSideBar = () => {
  const [articlesList,setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {limit:4}
    getArticles({topic: '',...queryObj}).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  },[])

  return (
    <aside id='articles-sidebar'>
      <h2>Recent Articles</h2>
      {articlesList.map((article) => {
        return <div className='sidebar-link' key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></div>
      })}
    </aside>
  )
}