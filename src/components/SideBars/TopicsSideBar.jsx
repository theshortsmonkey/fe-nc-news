import { useLocation } from 'react-router-dom'
import { TopicSelection } from '../Topics/TopicSelection/TopicSelection'
import './SideBar.css'
import { useEffect, useState } from 'react'

export const TopicsSideBar = () => {
  const { pathname } = useLocation()
  const [isTopicEndpoint,setIsTopicEndpoint] = useState((/(?!\/)(topics)/).test(pathname))

  useEffect(() => {
    setIsTopicEndpoint((/(?!\/)(topics)$/).test(pathname))
  },[pathname])
  
  return (
    <aside id='topics-sidebar'>
      {!isTopicEndpoint ? <TopicSelection /> : null}
    </aside>
  )
}