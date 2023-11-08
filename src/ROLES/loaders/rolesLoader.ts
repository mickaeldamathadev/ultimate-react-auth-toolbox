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
export default async function rolesLoader() {
  try {
    const [roles] = await Promise.all([get('/role')])
    console.log(roles)
    if (roles.error) {
      throw new RequestError('', roles.status!)
    }
    return roles.data
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}
