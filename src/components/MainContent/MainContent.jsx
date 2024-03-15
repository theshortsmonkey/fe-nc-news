import './MainContent.css'
import { TopicsSideBar } from '../SideBars/TopicsSideBar'
import { ArticlesSideBar } from '../SideBars/ArticlesSideBar'
import { Routing } from '../Routing'

export const MainContent = ({width}) => {
  return (
    <main>
      {width > 1000 ? <TopicsSideBar /> : null}
      <div id="main-content">
        <Routing />
      </div>
      {width > 1000 ? <ArticlesSideBar /> : null}
    </main>
  )
}
