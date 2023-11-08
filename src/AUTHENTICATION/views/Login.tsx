import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form } from 'ultimate-react-form'
import login from '../api/login'
import { UserContext } from '../context/UserContext'
import loginForm from '../data/forms/login-form'
import { CallbackProps, ILogin } from '../data/types'

export default function Login({ onError, onSuccess }: CallbackProps) {
  const Context = UserContext()
  const { setUser } = useContext(Context)
  const nav = useNavigate()
  const submit = async (data: ILogin) => {
    try {
      const loginRequest: any = await login(data)

      if (loginRequest.error) {
        throw new Error(loginRequest.error)
      }

      const userdb = loginRequest.data.user
      setUser((user) => {
        return { ...userdb }
      })
      onSuccess(userdb)
    } catch (error: any) {
      onError(error.message)
    }
  }
  return (
    <div className="form-frame">
      <Form onSubmission={submit} formData={loginForm} />
    </div>
  )
}
