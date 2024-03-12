import { useContext, useEffect, useState } from "react"
import { CurrUserContext } from "../contexts/CurrUser"
import { Link, useLocation } from "react-router-dom"

const blankHighlightsObj = {
  articles: '',
  topics: '',
  user: ''
}

export const Header = () => {
  const [currPageHighlights,setCurrPageHighlights] = useState(blankHighlightsObj)
  const {currUser} = useContext(CurrUserContext)
  const { pathname } = useLocation()
  useEffect(() => {
    const affectedLink = pathname.match(/(?!\/)(\w*)/)[0]
    setCurrPageHighlights(() => {
      const newObj = {...blankHighlightsObj}
      newObj[affectedLink] = 'highlight'
      return newObj
    })
  },[pathname])
  return (
    <header>
    <nav>
      <p className={currPageHighlights.articles}><Link to='/articles'>Articles</Link></p>
      <p className={currPageHighlights.topics}><Link to='/topics'>Topics</Link></p>
      <p className={currPageHighlights.user}><Link to='/user'>User</Link></p>
      <img id="nav-img" src={currUser.avatar_url} alt="user avatar"/>
    </nav>
    </header>
  )
}