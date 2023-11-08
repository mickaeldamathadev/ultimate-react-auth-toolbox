import { useParams } from 'react-router-dom'
import { Form } from 'ultimate-react-form'
import authForm from '../data/forms/auth-form'

export default function Validate() {
  const { id } = useParams()
  return <Form onSubmission={() => null} formData={authForm(id)}></Form>
}
