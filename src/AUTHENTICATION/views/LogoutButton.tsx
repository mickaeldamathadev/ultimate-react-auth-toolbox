import { ReactNode } from 'react'
import logout from '../api/logout'

export default function LogoutButton(props: {
  children?: ReactNode
  title?: string
  onError?: any
}) {
  const signout = async () => {
    try {
      const loginRequest: any = await logout()

      if (loginRequest.error) {
        throw new Error(loginRequest.error)
      }
    } catch (error: any) {
      props.onError(error.message)
    }
  }
  return (
    <button className="logout" onClick={() => signout()}>
      {props.title}
      {props.children}
    </button>
  )
}
