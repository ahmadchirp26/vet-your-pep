import { graphql } from "@/lib/react-query-graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";
import { channelKeys } from "../Channels/query-keys";
import { postKeys } from "./query-keys";

const UN_LIKE_MUTATION = graphql(`
  mutation unlikePost($input: UpdateLikeInput!) {
    unlikePost(input: $input) {
      id
    }
  }
`);

export const useUnLikeMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: postKeys.all,
        });
        return queryClient.invalidateQueries({
          queryKey: channelKeys.detail(),
        });
      },
      onError: (error) => {
        console.log(error);
      },
    },
    UN_LIKE_MUTATION
  );
};
