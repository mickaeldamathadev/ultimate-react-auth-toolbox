import { post } from 'ultimate-react-apirequests'

export default async function reset(props: {
  password: string
  token: string
}) {
  try {
    const request = await post(
      '/reset',
      {},
      { password: props.password, token: props.token },
    )

    if (request.error) {
      throw new Error(request.error)
    }

    return request
  } catch (error: any) {
    return { error: error.message }
  }
}
