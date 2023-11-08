import { post } from 'ultimate-react-apirequests'
import { Form, Input, Select, SubmitInput } from 'ultimate-react-form'
import { IRole } from '../../ROLES/data/Role'
import { CallbackProps } from '../data/types'

export default function Register({
  onError,
  onSuccess,
  roles,
}: CallbackProps & { roles: any[] }) {
  return (
    <Form
      onSubmission={async (data: any) => {
        try {
          if (data.password !== data.confirm) {
            throw new Error('Les mots de passes ne correspondent pas')
          }
          const res = await post('/register', {}, data)
          if (res.error) {
            throw new Error(res.error)
          }

          onSuccess('Utilisateur enregistré avec succes')
        } catch (error: any) {
          onError(error.message)
        }
      }}
    >
      <Input type="text" name="lastname" placeholder="Nom de l'utilisateur" />
      <Input
        type="text"
        name="firstname"
        placeholder="Prénom de l'utilisateur"
      />
      <Input type="text" name="contact" placeholder="Email de l'utilisateur" />
      <label> Role</label>
      <Select
        name="role"
        options={
          roles
            ? roles.map((role: IRole) => {
                return {
                  value: role._id,
                  title: role.name,
                }
              })
            : []
        }
      />
      <Input type="password" name="password" placeholder="Mot de passe" />
      <Input type="password" name="confirm" placeholder="Confirm" />
      <SubmitInput title="Enregistrer" />
    </Form>
  )
}
