import { post } from 'ultimate-react-apirequests'
import { ILogin } from '../data/types'

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export default async function login({ password, contact }: ILogin) {
  try {
    if (!emailRegex.test(contact)) {
      throw new Error('votre addresse email est invalide')
    }

    const request = await post('/login', {}, { password, contact })
    console.log(request)
    if (request.error) {
      throw new Error(request.error)
    }

    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
