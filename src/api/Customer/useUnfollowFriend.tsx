import { graphql } from "@/lib/react-query-graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";

import { customerKeys } from "./query-keys";

const UNFOLLOW_MUTATION = graphql(`
  mutation UnfollowCustomer($customerId: String!) {
    unfollowCustomer(customerId: $customerId) {
      success
    }
  }
`);

export const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: (_) => {
        return queryClient.invalidateQueries({
          queryKey: customerKeys.all,
        });
      },
    },
    UNFOLLOW_MUTATION
  );
};
