import { Form, SubmitInput } from 'ultimate-react-form'
import login from '../api/login'
import loginForm from '../data/forms/login-form'
import { CallbackProps, ILogin } from '../data/types'

export default function Login({ onError, onSuccess }: CallbackProps) {
  const submit = async (data: ILogin) => {
    try {
      const loginRequest: any = await login(data)

      if (loginRequest.error) {
        throw new Error(loginRequest.error)
      }

      onSuccess(loginRequest.data.user)
    } catch (error: any) {
      onError(error.message)
    }
  }
  return (
    <div className="form-frame">
      <Form onSubmission={submit} formData={loginForm}>
        <SubmitInput title="Connexion" />
      </Form>
    </div>
  )
}
