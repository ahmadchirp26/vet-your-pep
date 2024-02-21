import { graphql, useGraphQLMutation } from "@/lib/react-query-graphql";
import { useToast } from "@/components/ui/use-toast";
import { mutateSession } from "./mutateSession";

const CreateCustomerMutationDocument = graphql(`
  #graphql
  mutation CreateCustomer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $cellPhone: String!
  ) {
    createCustomer(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        cellPhone: $cellPhone
      }
    ) {
      accessToken
      user {
        id
        email
        firstName
        lastName
        cellPhone
      }
    }
  }
`);

export function useCreateAccountMutation() {
  const { toast } = useToast();
  return useGraphQLMutation(
    {
      async onSuccess(data) {
        return mutateSession({
          accessToken: data.createCustomer.accessToken,
          shouldBroadcast: true,
        });
      },
      onError(error) {
        const firstError = error.response.errors?.find((e) => e.message);
        if (!firstError) return;
        toast({
          title: firstError.message,
          variant: "destructive",
        });
      },
    },
    CreateCustomerMutationDocument
  );
}
