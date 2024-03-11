import { useContext } from "react"
import { CurrUserContext } from "../contexts/CurrUser"

export const Header = () => {
  const {currUser} = useContext(CurrUserContext)
  return (
    <header>
    <nav>
      <p>Articles</p>
      <p>Topics</p>
      <p>User</p>
      <img id="nav-img" src={currUser.avatar_url} alt="user avatar"/>
    </nav>
    </header>
  )
}