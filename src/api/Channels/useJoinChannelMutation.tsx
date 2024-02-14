import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import { useQueryClient } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";

const JOIN_CHANNEL_MUTATION = graphql(`
  #graphql
  mutation JoinChannel($channelId: String!) {
    joinChannel(channelId: $channelId) {
      message
      success
    }
  }
`);
const useJoinChannelMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: (_) => {
        return queryClient.invalidateQueries({
          queryKey: channelKeys.all,
        });
      },
    },
    JOIN_CHANNEL_MUTATION
  );
};

export default useJoinChannelMutation;
