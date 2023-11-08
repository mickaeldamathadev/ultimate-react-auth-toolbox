import { post } from 'ultimate-react-apirequests'

export default async function access() {
  try {
    const request = await post('/restricted', {}, {})
    if (request.error) {
      throw new Error(request.error)
    }
    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
