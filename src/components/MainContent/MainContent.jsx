import './MainContent.css'
import { TopicsSideBar } from '../SideBars/TopicsSideBar'
import { ArticlesSideBar } from '../SideBars/ArticlesSideBar'
import { Routing } from '../Routing'
import { useEffect, useState } from 'react'

export const MainContent = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
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
