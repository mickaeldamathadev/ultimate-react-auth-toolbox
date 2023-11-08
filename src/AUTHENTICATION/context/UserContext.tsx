import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { IProps } from '../data/types'

interface IUSerContext<T> {
  user: T
  setUser: Dispatch<SetStateAction<T>>
}

export function UserContext<T>() {
  return createContext<IUSerContext<T>>({} as IUSerContext<T>)
}

export default function UserContextProvider<T>({ children }: IProps) {
  const [user, setUser] = useState<T>({} as T)
  const Context = UserContext<T>()
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}
