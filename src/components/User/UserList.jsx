import { useEffect, useState } from "react"

export const UserList = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    
  })
  return (
    <div id="user-list">
      <p>userlist</p>
      <p>User 1</p>
      <p>User 2</p>
    </div>
  )
}
