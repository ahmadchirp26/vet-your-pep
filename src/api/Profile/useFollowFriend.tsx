import { graphql } from "@/lib/react-query-graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";

import { customerKeys } from "../Customer/query-keys";

const FOLLOW_MUTATION = graphql(`
  mutation FollowCustomer($customerId: String!) {
    followCustomer(customerId: $customerId) {
      message
      success
    }
  }
`);

export const useFollowMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: (_) => {
        return queryClient.invalidateQueries({
          queryKey: customerKeys.all,
        });
      },
    },
    FOLLOW_MUTATION
  );
};
