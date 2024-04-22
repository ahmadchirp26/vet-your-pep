import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import {
  CustomerDataQueryKey,
  type useCustomerDataQueryDataType,
} from "./useCustomerDataQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

const mutationKey = ["updateCustomerMutation"];

const Document = graphql(`
  mutation updateCustomerMutation($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      cellPhone
      email
      firstName
      id
      # isActive
      lastName
      profileImage
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
        const previousValue =
          queryClient.getQueryData<useCustomerDataQueryDataType>(
            CustomerDataQueryKey
          );
        queryClient.setQueryData<useCustomerDataQueryDataType>(
          CustomerDataQueryKey,
          (prev) => {
            if (!prev) return prev;
            return {
              ...prev,
              getCustomerData: {
                ...prev.getCustomerData,
                ...(variables.input as NonNullable<useCustomerDataQueryDataType>["getCustomerData"]),
              },
            };
          }
        );
        return previousValue;
      },
      onError(error, variables, context) {
        queryClient.setQueryData<useCustomerDataQueryDataType>(
          CustomerDataQueryKey,
          context
        );
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    },
    Document
  );
};

export default useUpdateCustomerMutation;
