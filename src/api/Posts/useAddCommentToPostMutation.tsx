import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import { useQueryClient } from "@tanstack/react-query";
import { postKeys } from "./query-keys";
import { channelKeys } from "../Channels/query-keys";

const CREATE_COMMENT_MUTATION = graphql(`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
    }
  }
`);


const useAddCommentToPostMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected({
    onSuccess:async () => {
      await queryClient.invalidateQueries({
        queryKey:postKeys.all
      });      
      return queryClient.invalidateQueries({
        queryKey:channelKeys.detail()
      })
    }
  }, CREATE_COMMENT_MUTATION)
}

export default useAddCommentToPostMutation;