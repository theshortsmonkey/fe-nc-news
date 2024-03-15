import { useContext, useEffect, useState } from 'react'
import { CurrUserContext } from '../../contexts/CurrUser'
import { Link, useLocation } from 'react-router-dom'
import { UserList } from '../User/UserList'
import './Header.css'

const blankHighlightsObj = {
  home: 'header-home',
  articles: 'header-articles',
  topics: 'header-topics',
  user: 'header-user',
}

export const Header = () => {
  const [currPageHighlights, setCurrPageHighlights] =
    useState(blankHighlightsObj)
  const { currUser } = useContext(CurrUserContext)
  const { pathname } = useLocation()
  useEffect(() => {
    const affectedLink = pathname.match(/(?!\/)(\w*)/)[0]
    setCurrPageHighlights(() => {
      const newObj = { ...blankHighlightsObj }
      newObj[affectedLink] += ' highlight'
      return newObj
    })
  }, [pathname])
  return (
    <header>
      <nav>
        <div className={currPageHighlights.home}>
          <Link to="/">Home</Link>
        </div>
        <div className={currPageHighlights.articles}>
          <Link to="/articles">Articles</Link>
        </div>
        <div className={currPageHighlights.topics}>
          <Link to="/topics">Topics</Link>
        </div>
        <div className={currPageHighlights.user}>
          <Link to="/user">User</Link>
        </div>
        <div className="dropdown" tabIndex='0'>
          <div id="user-change" >
          <p>{currUser.username || 'Not Logged In'}</p>
          <img id="nav-img" src={currUser.avatar_url} alt="user avatar" tabIndex='0'/>
          </div>
          <div className="dropdown-content">
            <UserList></UserList>
          </div>
        </div>
      </nav>
    </header>
  )
}
