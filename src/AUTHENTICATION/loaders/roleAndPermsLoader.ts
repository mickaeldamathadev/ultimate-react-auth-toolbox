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
    const [users] = await Promise.all([get('/role'), get('/scope')])
    console.log(users)
    if (users.error) {
      throw new RequestError('', users.status!)
    }
    return users
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}