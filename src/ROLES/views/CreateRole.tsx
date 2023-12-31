/**
 * Created by Mickael Da Matha Sant'Anna
 * Creation Date: 2023-07-05
 * Description: Create a new user role in the database
 * @param {string} name - The name of the role
 * @param {string} description - The description of the role
 */

import { Form, SubmitInput } from 'ultimate-react-form'
import { useRoutes } from 'ultimate-react-mongo-requests'
import { IRole } from '../data/Role'
import createRoleForm from '../data/create-role-form'

export default function CreateRole(props: { onError: any; onSuccess: any }) {
  const { createDoc } = useRoutes<IRole>('/role')
  return (
    <div className="flex-center">
      <h1>Ajouter un rôle</h1>
      <Form
        onSubmission={async (data: IRole) => {
          try {
            const res = await createDoc(data)
            if (res.error) {
              throw new Error(res.error)
            }
            props.onSuccess({ data: res.data, ...props })
          } catch (error) {
            props.onError(error.message)
          }
        }}
        formData={createRoleForm()}
      >
        <SubmitInput title="Création" />
      </Form>
    </div>
  )
}
