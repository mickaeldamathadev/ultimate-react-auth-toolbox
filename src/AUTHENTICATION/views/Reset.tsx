import { useParams } from 'react-router-dom'
import { Form, SubmitInput } from 'ultimate-react-form'
import reset from '../api/reset'
import resetForm from '../data/forms/reset-form'
import { CallbackProps } from '../data/types'

export default function Reset({ onError, onSuccess }: CallbackProps) {
  const params = useParams()
  const submit = async (data: { password: string; confirm: string }) => {
    try {
      if (data.confirm !== data.password) {
        throw new Error('les mots de passe ne correspondent pas.')
      }
      const { error, ...success } = await reset({
        password: data.password,
        token: params.id!,
      })

      if (error) {
        throw new Error(error)
      }
      onSuccess(success)
    } catch (error: any) {
      onError(error.message)
    }
  }
  return (
    <div className="form-frame">
      <Form onSubmission={submit} formData={resetForm}>
        <SubmitInput title="Envoyer" />
      </Form>
    </div>
  )
}
