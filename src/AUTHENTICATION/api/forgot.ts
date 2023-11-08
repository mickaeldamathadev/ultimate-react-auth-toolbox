import { post } from 'ultimate-react-apirequests'
import { ILogin } from '../data/types'

export default async function forgot({ contact }: ILogin) {
  try {
    const request = await post('/forgot', {}, { contact })

    if (request.error) {
      throw new Error(request.error)
    }

    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
