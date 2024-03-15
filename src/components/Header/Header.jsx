import { useContext, useEffect, useState } from 'react'
import { CurrUserContext } from '../../contexts/CurrUser'
import { Link, useLocation } from 'react-router-dom'
import { UserList } from '../User/UserList'
import './Header.css'
import { captiliseFirstLetter } from '../../utils/utils'

const blankHighlightsObj = {
  home: 'header-home',
  articles: 'header-articles',
  topics: 'header-topics',
  user: 'header-user',
}

export const Header = ({ width }) => {
  const [currPageHighlights, setCurrPageHighlights] =
    useState(blankHighlightsObj)
  const [navLinks, setNavLinks] = useState(<></>)
  const { currUser } = useContext(CurrUserContext)
  const { pathname } = useLocation()
  const [currPage, setCurrPage] = useState(pathname.match(/(?!\/)(\w*)/)[0])

  useEffect(() => {
    let currPageStr = pathname.match(/(?!\/)(\w*)/)[0]
    if (!currPageStr) currPageStr = 'home'
    setCurrPage(currPageStr)
  }, [pathname])
  useEffect(() => {
    setCurrPageHighlights(() => {
      const newObj = { ...blankHighlightsObj }
      newObj[currPage] += ' highlight'
      return newObj
    })
  }, [currPage])
  useEffect(() => {
    setNavLinks(
      <>
        <div className={currPageHighlights.articles}>
          <Link to="/articles">Articles</Link>
        </div>
        <div className={currPageHighlights.topics}>
          <Link to="/topics">Topics</Link>
        </div>
        <div className={currPageHighlights.user}>
          <Link to="/user">User</Link>
        </div>
      </>
    )
  }, [currPageHighlights])

  return (
    <header>
      <nav>
        <div className="header-home">
          <Link to="/">NC News Home</Link>
        </div>
        <div className="menu menu-dropdown" tabIndex="0">
          {width > 600 ? (
            navLinks
          ) : (
            <>
              <div className={currPageHighlights[currPage]}>
                <Link to={'/' + currPage}>
                  {captiliseFirstLetter(currPage)}
                </Link>
              </div>
              <div className="menu-dropdown-content">{navLinks}</div>
            </>
          )}
        </div>
        <div className="user-dropdown" tabIndex="0">
          <div id="user-change">
            <p>{currUser.username || 'Not Logged In'}</p>
            <img
              id="nav-img"
              src={currUser.avatar_url}
              alt="user avatar"
              tabIndex="0"
            />
          </div>
          <div className="user-dropdown-content">
            <UserList></UserList>
          </div>
        </div>
      </nav>
    </header>
  )
}
