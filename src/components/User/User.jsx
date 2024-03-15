import { useContext } from 'react'
import './User.css'
import { CurrUserContext } from '../../contexts/CurrUser'
import { UserArticles } from './UserArticles'
import { UserComments } from './UserComments'

export const User = () => {
  const { currUser } = useContext(CurrUserContext)
  return currUser.username ? (
    <div id="user-page">
      <h2>Welcome {currUser.name}, this is your content!</h2>
      <p id="user-details">Username: {currUser.username}</p>
      <img id="avatar" src={currUser.avatar_url} alt="user avatar" />
      <div id="user-content">
        <UserArticles />
        <UserComments />
      </div>
    </div>
  ) : (
    <h2>Please login to view your content</h2>
  )
}
