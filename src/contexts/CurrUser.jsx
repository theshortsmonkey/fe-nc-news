import { createContext, useState } from "react";

export const CurrUserContext = createContext()

const defaultUser = {
  username: '',
  name: '',
  avatar_url: ''
}

export const CurrUserProvider = ({children}) => {
  const [currUser, setCurrUser] = useState(defaultUser)

  return (
    <CurrUserContext.Provider value={{currUser, setCurrUser}}>
      {children}
    </CurrUserContext.Provider>
  )
}