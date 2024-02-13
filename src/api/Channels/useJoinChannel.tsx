import { graphql } from "@/core/lib/react-query-graphql";
import { useGraphQLMutationProtected } from "../helpers";
import { useQueryClient } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";
import { APIGetChannelsData } from "./useGetChannels";

const JOIN_CHANNEL_MUTATION = graphql(`
  #graphql
  mutation JoinChannel($channelId: String!) {
    joinChannel(channelId: $channelId) {
      message
      success
    }
  }
`);
const useJoinChannel = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: (_) => {
        return queryClient.invalidateQueries({
          queryKey: channelKeys.all,
        });
        // queryClient.setQueryData<APIGetChannelsData>(channelKeys.all, prev => {
        //   if (!prev) return prev;
        //   prev.listChannels.results.map(r =>
        //     ({
        //       ...r,
        //       members:r.members ? [
        //         ...r.members,
        //         {

        //         }
        //       ]:r.members
        //     })
        //   )
        // });
      },
    },
    JOIN_CHANNEL_MUTATION
  );
};

export default useJoinChannel;
