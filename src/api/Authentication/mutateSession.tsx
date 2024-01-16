import { AuthBroadcastChannel } from '@/lib/Authentication/AuthBroadcastChannel'
import cookie from 'cookiejs'

interface Params {
  shouldBroadcast?: boolean
  accessToken: string | null
}

export const mutateSession = async ({
  shouldBroadcast,
  accessToken
} // eslint-disable-next-line @typescript-eslint/require-await
: Params) => {
  if (accessToken) {
    cookie.set('auth.sessionToken', accessToken, { expires: 7 })
  } else {
    cookie.remove('auth.sessionToken')
  }
  if (shouldBroadcast) {
    AuthBroadcastChannel().postMessage({
      event: 'session',
      data: { trigger: 'mutateSession' }
    })
  }
}
