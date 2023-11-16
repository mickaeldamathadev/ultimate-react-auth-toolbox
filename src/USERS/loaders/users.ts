import { LoaderFunctionArgs } from 'react-router'
import { get } from 'ultimate-react-apirequests'
import { RequestError } from '../../AUTHENTICATION/loaders/roleAndPermsLoader'

export default async function user({ params }: LoaderFunctionArgs) {
  try {
    const [users] = await Promise.all([get('/users')])

    if (users.error) {
      throw new RequestError('', users.status!)
    }
    return users.data
  } catch (error: any) {
    throw new Response('', {
      status: error.status,
    })
  }
}
