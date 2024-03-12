import { useContext } from "react"
import { CurrUserContext } from "../contexts/CurrUser"
import { Link } from "react-router-dom"

export const Header = () => {
  const {currUser} = useContext(CurrUserContext)
  return (
    <header>
    <nav>
      <p><Link to='/'>Articles</Link></p>
      <p><Link to='/topics'>Topics</Link></p>
      <p><Link to='/user'>User</Link></p>
      <img id="nav-img" src={currUser.avatar_url} alt="user avatar"/>
    </nav>
    </header>
  )
}