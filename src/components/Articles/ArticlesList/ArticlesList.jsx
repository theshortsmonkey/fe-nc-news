import './ArticlesList.css'
import { ArticleCard } from '../ArticleCard/ArticleCard'

export const ArticlesList = ({ articlesList, topic }) => {
  let topicDisplay = 'topic'
  if (topic === 'All') {
    topicDisplay = 'topics'
  }
  return (
    <>
      <p>
        Listing articles under {topic} {topicDisplay}
      </p>
      <div id="articles-list">
        {articlesList ? (
          <>
            <p>Total Articles = {articlesList.length}</p>
            {articlesList.map((article) => {
              return (
                <ArticleCard
                  key={article.article_id}
                  size="small"
                  article={article}
                />
              )
            })}
          </>
        ) : (
          <p>No articles to display</p>
        )}
      </div>
    </>
  )
}
