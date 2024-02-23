import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";

const GET_EVENTS_BY_CHANNEL_ID = graphql(`
  query GetEventsByChannel($input: String!) {
    getEventsByChannel(channelId: $input) {
      results {
        createdBy
        createdDate
        id
        images
        startDate

        text
        title
        updatedBy
        updatedDate
      }
    }
  }
`);

const eventsQuery = ["events"];

export const useGetEventByChannelId = (channelId: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: eventsQuery,
    queryFn: () => {
      return protectedRequestHandler(GET_EVENTS_BY_CHANNEL_ID, {
        input: channelId,
      });
    },
  });
};
