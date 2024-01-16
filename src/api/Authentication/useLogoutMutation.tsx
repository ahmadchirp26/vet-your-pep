import { useMutation } from '@tanstack/react-query'
import { mutateSession } from './mutateSession'

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      // Destroy Session On Server
      return mutateSession({
        accessToken: null,
        shouldBroadcast: true
      })
    }
  })
}
