import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { IProps, IUser } from '../data/types'

interface IUSerContext {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
}

export const UserContext = createContext<IUSerContext>({} as IUSerContext)

export default function UserContextProvider({ children }: IProps) {
  const [user, setUser] = useState<IUser>({} as IUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
