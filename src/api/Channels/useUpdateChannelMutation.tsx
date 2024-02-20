import { useGraphQLMutationProtected } from "../helpers";
import { graphql } from "@/lib/react-query-graphql";

const UPDATE_CHANNEL_MUTATION = graphql(`
  #graphql
  mutation updateChannel($input: UpdateChannelInput!) {
    updateChannel(input: $input) {
      message
      success
    }
  }
`);

const useUpdateChannelMutation = () =>
  useGraphQLMutationProtected({}, UPDATE_CHANNEL_MUTATION);

export default useUpdateChannelMutation;
