import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import { useQueryClient } from "@tanstack/react-query";
import { channelKeys } from "../Channels/query-keys";

const CREATE_POST_DOCUMENT = graphql(`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      message
      success
    }
  }
`);

const useCreatePostMutation = () => {
  const queryClient = useQueryClient()
  return useGraphQLMutationProtected({
    onSuccess:(_, [{input:{channelId}}]) => {
      return queryClient.invalidateQueries({
        queryKey:channelKeys.detail(channelId)
      })
    }
  }, CREATE_POST_DOCUMENT);
};
export default useCreatePostMutation;
