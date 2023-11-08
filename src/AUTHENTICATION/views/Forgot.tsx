import { Form, SubmitInput } from 'ultimate-react-form'
import forgot from '../api/forgot'
import forgotForm from '../data/forms/forgot-form'
import { CallbackProps, ILogin } from '../data/types'

export default function Forgot({ onError, onSuccess }: CallbackProps) {
  const submit = async (data: ILogin) => {
    try {
      const loginRequest = await forgot(data)
      console.log(loginRequest)
      if (loginRequest.error) {
        throw new Error(loginRequest.error)
      }
      onSuccess(loginRequest)
    } catch (error: any) {
      onError(error.message)
    }
  }
  return (
    <div className="form-frame">
      <Form onSubmission={submit} formData={forgotForm}>
        <SubmitInput title="Envoyer" />
      </Form>
    </div>
  )
}
