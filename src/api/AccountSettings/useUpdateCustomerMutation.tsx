import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import {
  CustomerDataQueryKey,
  type useCustomerDataQueryDataType,
} from "./useCustomerDataQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/core/ui/use-toast";

const mutationKey = ["updateCustomerMutation"];

const Document = graphql(`
  mutation updateCustomerMutation($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      cellPhone
      email
      firstName
      id
      isActive
      lastName
      mediaUrl
      socialProvider {
        createdDate
        id
        provider
        socialId
      }
      stripeCustomerId
    }
  }
`);

const useUpdateCustomerMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useGraphQLMutationProtected(
    {
      mutationKey,
      onMutate([variables]) {
        console.log("variable", variables);

        const previousValue =
          queryClient.getQueryData<useCustomerDataQueryDataType>(
            CustomerDataQueryKey,
          );
        queryClient.setQueryData<useCustomerDataQueryDataType>(
          CustomerDataQueryKey,
          (prev) => {
            console.log("previous", prev);
            if (!prev) return prev;
            return {
              ...prev,
              getCustomerData: {
                ...prev.getCustomerData,
                mediaUrl: variables.input.mediaUrl,
              },
            };
          },
        );
        return previousValue;
      },
      onError(error, variables, context) {
        queryClient.setQueryData<useCustomerDataQueryDataType>(
          CustomerDataQueryKey,
          context,
        );
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    },
    Document,
  );
};

export default useUpdateCustomerMutation;
