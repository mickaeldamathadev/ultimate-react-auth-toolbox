import { get } from 'ultimate-react-apirequests'

export default async function verifyScope(scope: string) {
  try {
    const request = await get('/verifyScope/' + scope)

    if (request.error) {
      throw new Error(request.error)
    }

    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
