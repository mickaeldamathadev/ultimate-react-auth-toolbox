import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { IProps } from '../data/types'

interface IUSerContext {
  user: any
  setUser: Dispatch<SetStateAction<any>>
}

export const UserContext = createContext<IUSerContext>({} as IUSerContext)

export default function UserContextProvider({ children }: IProps) {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
