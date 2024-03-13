import { TopicSelection } from '../Topics/TopicSelection/TopicSelection'
import './SideBar.css'

export const TopicsSideBar = () => {
  
  return (
    <div className="sidebar" id='topics-sidebar'>
      <h2>Topics Sidebar</h2>
      <TopicSelection />
    </div>
  )
}