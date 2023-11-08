import { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import access from '../api/access'

interface AuthRouteProps {
  component: ReactElement
  onError: () => any
}

export default function RestrictedRoute({ component }: AuthRouteProps) {
  const nav = useNavigate()
  const [auth, setAuth] = useState(false)

  async function authenticate() {
    try {
      const res = await access()
      if (res.error) {
        throw new Error('Unauthorized Request')
      }
      setAuth(true)
    } catch (error) {
      console.log(error)
      nav('/')
    }
  }
  useEffect(() => {
    authenticate()
  }, [])

  return auth ? component : null
}
