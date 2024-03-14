import { useContext, useEffect, useState } from "react"
import { getUsers } from "../../utils/api"
import { CurrUserContext } from "../../contexts/CurrUser"
import { LoadingDiv } from "../LoadingDiv"

const blankUser = {
  username: 'Not Logged In',
  name: '',
  avatar_url: 'https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003_640.png'
}

export const UserList = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {setCurrUser} = useContext(CurrUserContext)
  useEffect(() => {
    setIsLoading(true)
    getUsers().then(({users}) => {
      setUserList(users)
      setIsLoading(false)
    })
  },[])
  function setUser (e,user) {
    e.preventDefault()
    setCurrUser(user)
  }
  return (
    <div id="user-list">
      <button key='no-user' onClick={(e) => setUser(e,blankUser)}>No User</button>
      <LoadingDiv isLoading={isLoading} dataType='user'>
      {userList.map((user) => {
        return <button key={user.username} onClick={(e) => setUser(e,user)}>{user.username}</button>
      })}
      </LoadingDiv>
    </div>
  )
}
