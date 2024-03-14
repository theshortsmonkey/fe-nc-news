import { createContext, useState } from "react";

export const CurrUserContext = createContext()

const defaultUser = {
  username: 'Not Logged In',
  name: '',
  avatar_url: 'https://cdn.pixabay.com/photo/2021/06/07/13/45/user-6318003_640.png'
}

export const CurrUserProvider = ({children}) => {
  const [currUser, setCurrUser] = useState(defaultUser)

  return (
    <CurrUserContext.Provider value={{currUser, setCurrUser}}>
      {children}
    </CurrUserContext.Provider>
  )
}