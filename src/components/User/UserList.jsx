import { useContext, useEffect, useState } from "react"
import { getUsers } from "../../utils/api"
import { CurrUserContext } from "../../contexts/CurrUser"

const blankUser = {
  username: '',
  name: '',
  avatar_url: ''
}

export const UserList = () => {
  const [userList, setUserList] = useState([])
  const {setCurrUser} = useContext(CurrUserContext)
  useEffect(() => {
    getUsers().then(({users}) => {
      setUserList(users)
    })
  },[])
  function setUser (e,user) {
    e.preventDefault()
    setCurrUser(user)
  }
  return (
    <div id="user-list">
      <button key='no-user' onClick={(e) => setUser(e,{blankUser})}>No User</button>
      {userList.map((user) => {
        return <button key={user.username} onClick={(e) => setUser(e,user)}>{user.username}</button>
      })}
    </div>
  )
}
