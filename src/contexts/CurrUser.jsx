import { createContext, useState } from "react";

export const CurrUserContext = createContext()

export const CurrUserProvider = ({children}) => {
  const [currUser, setCurrUser] = useState({
    username: 'cooljmessy',
    name: 'Peter Messy',
    avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002'
  })

  return (
    <CurrUserContext.Provider value={{currUser, setCurrUser}}>
      {children}
    </CurrUserContext.Provider>
  )
}