import './ArticlesList.css'
import { ArticleCard } from '../ArticleCard/ArticleCard'

export const ArticlesList = ({ articlesList,topic }) => {
  let topicDisplay = 'topic'
  if (topic === 'All') {topicDisplay = 'topics'}
  return (
    <>
    <p>Listing articles under {topic} {topicDisplay}</p>
    <p>Total Articles = {articlesList.length}</p>
    <div id="articles-list">
      {articlesList.map((article) => {
        return (
          <ArticleCard key={article.title} size="small" article={article}/>
        )
      })}
    </div>
    </>
  )
}
