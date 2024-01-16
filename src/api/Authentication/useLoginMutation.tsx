import { graphql, useGraphQLMutation } from '@/core/lib/react-query-graphql'
import { useToast } from '@/core/ui/use-toast'
import { mutateSession } from './mutateSession'

const LoginMutationDocument = graphql(`
  #graphql
  mutation Login($email: String!, $password: String!) {
    loginAsCustomer(input: { email: $email, password: $password }) {
      accessToken
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`)

export function useLoginMutation() {
  const { toast } = useToast()

  return useGraphQLMutation(
    {
      onError(error) {
        const firstError = error.response.errors?.find(e => e.message)
        if (!firstError) return
        toast({
          title: firstError.message,
          variant: 'destructive'
        })
      },
      onSuccess(data) {
        return mutateSession({
          accessToken: data.loginAsCustomer.accessToken,
          shouldBroadcast: true
        })
      }
    },
    LoginMutationDocument
  )
}
