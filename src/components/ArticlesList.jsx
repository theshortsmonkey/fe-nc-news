import { ArticleCard } from './ArticleCard/ArticleCard'

export const ArticlesList = ({ articlesList, articlesCount }) => {
  return (
    <>
    <p>Total Articles = {articlesCount}</p>
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
