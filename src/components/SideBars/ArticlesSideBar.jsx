import { useEffect, useState } from 'react'
import './SideBar.css'
import { getArticles } from '../../utils/api'
import { Link } from 'react-router-dom'
import { LoadingDiv } from '../LoadingDiv'

export const ArticlesSideBar = () => {
  const [articlesList, setArticlesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isListingRecent, setIsListingRecent] = useState(true)
  const [sortBy, setSortBy] = useState('votes')

  useEffect(() => {
    setIsLoading(true)
    const queryObj = {
      limit: 4,
      sort_by: sortBy,
      order: 'desc',
    }
    getArticles({ topic: '', ...queryObj }).then((data) => {
      setArticlesList(data.articles)
      setIsLoading(false)
    })
  }, [sortBy])

  function handleToggle(e, sorting) {
    e.preventDefault()
    setIsListingRecent((curr) => !curr)
    setSortBy(sorting)
  }

  return (
    <aside id="articles-sidebar">
      <button
        disabled={isListingRecent}
        onClick={(e) => handleToggle(e, 'created_at')}
      >
        Recent Articles
      </button>
      <button
        disabled={!isListingRecent}
        onClick={(e) => handleToggle(e, 'votes')}
      >
        Most Popular
      </button>
      <LoadingDiv isLoading={isLoading} dataType="articles">
        {articlesList.map((article) => {
          return (
            <div className="sidebar-link" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </div>
          )
        })}
      </LoadingDiv>
    </aside>
  )
}
