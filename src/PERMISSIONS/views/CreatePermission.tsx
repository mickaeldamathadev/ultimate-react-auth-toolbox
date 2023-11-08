import { useContext } from 'react'
import { Form, SubmitInput } from 'ultimate-react-form'
import { useRoutes } from 'ultimate-react-mongo-requests'
import { UserContext } from '../../AUTHENTICATION/context/UserContext'
import { CallbackProps } from '../../AUTHENTICATION/data/types'
import createPermissionForm from '../data/create-permission-form'
import { IPermission } from '../data/types'

export default function CreatePermission({
  onError,
  onSuccess,
}: CallbackProps) {
  const { createDoc } = useRoutes<IPermission>('scope')

  const { user } = useContext(UserContext)

  return (
    <div className="flex-center">
      <h1>Ajouter un rôle</h1>
      <Form
        onSubmission={async (data: IPermission) => {
          try {
            const request = await createDoc(data)
            if (request.error) {
              throw new Error(request.error)
            }
            onSuccess(request.data)
          } catch (error) {
            onError(error.message)
          }
        }}
        formData={createPermissionForm(user._id)}
      >
        <SubmitInput title="Création" />
      </Form>
    </div>
  )
}
