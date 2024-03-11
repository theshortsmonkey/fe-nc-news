export const ArticleCard = (props) => {
  const cardSize = props.size
  let cardClass = ''
  if (cardSize === 'small') cardClass = "article-card-small"
  return (
  <div className={cardClass}>
    {props.children}
  </div>
  )
}
