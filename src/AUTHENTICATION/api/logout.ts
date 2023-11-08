import { post } from 'ultimate-react-apirequests'

export default async function logout() {
  try {
    const request = await post('/logout', {}, {})

    if (request.error) {
      throw new Error(request.error)
    }

    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
