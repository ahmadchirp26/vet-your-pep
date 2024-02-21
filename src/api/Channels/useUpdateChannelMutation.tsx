import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";
import { graphql } from "@/lib/react-query-graphql";
import { channelKeys } from "./query-keys";

const UPDATE_CHANNEL_MUTATION = graphql(`
  #graphql
  mutation updateChannel($input: UpdateChannelInput!) {
    updateChannel(input: $input) {
      message
      success
    }
  }
`);

const useUpdateChannelMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess(
        _,
        [
          {
            input: { id },
          },
        ]
      ) {
        return queryClient.invalidateQueries({
          queryKey: channelKeys.detail(id),
        });
      },
    },
    UPDATE_CHANNEL_MUTATION
  );
};

export default useUpdateChannelMutation;
