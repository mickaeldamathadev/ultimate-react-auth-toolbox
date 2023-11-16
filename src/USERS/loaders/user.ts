import { LoaderFunctionArgs } from 'react-router'
import { get } from 'ultimate-react-apirequests'
import { RequestError } from '../../AUTHENTICATION/loaders/roleAndPermsLoader'

export default async function user({ params }: LoaderFunctionArgs) {
  try {
    const [user] = await Promise.all([get('/users/' + params.id)])

    if (user.error) {
      throw new RequestError('', user.status!)
    }
    return user.data
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}
