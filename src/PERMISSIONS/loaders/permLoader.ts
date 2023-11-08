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
export default async function permissionLoader() {
  try {
    const [perms] = await Promise.all([get('/scope')])
    console.log(perms)
    if (perms.error) {
      throw new RequestError('', perms.status!)
    }
    return perms
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}
