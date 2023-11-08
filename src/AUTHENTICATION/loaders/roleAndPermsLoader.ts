import { get } from 'ultimate-react-apirequests'

export class RequestError extends Error {
  status: number
  message: string
  constructor(message: string, status: number) {
    super()
    this.status = status
    this.message = message
  }
}
export default async function rolesAndPermsLoader() {
  try {
    const [roles, perms] = await Promise.all([get('/role'), get('/scope')])

    if (roles.error || perms.error) {
      throw new RequestError('', 304)
    }
    return { roles: roles.data, perms: perms.data }
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}
