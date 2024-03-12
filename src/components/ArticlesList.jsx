import { ArticleCard } from './ArticleCard/ArticleCard'

export const ArticlesList = ({ articlesList,topic }) => {
  return (
    <>
    <p>Listing articles for the {topic}</p>
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
