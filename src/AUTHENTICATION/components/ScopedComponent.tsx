import { ReactNode, useEffect, useState } from 'react'
import verifyScope from '../api/scope'

interface ScopedComponentProps {
  children: ReactNode
  scope: string
}

export default function ScopedComponent({
  children,
  scope,
}: ScopedComponentProps) {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        const req = await verifyScope(scope)

        if (req.error) {
          throw new Error('')
        }
        setAuth(true)
      } catch (error) {
        setAuth(false)
      }
    })()
  }, [])

  return <>{auth ? children : null}</>
}
