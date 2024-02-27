import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";
import { env } from "@/env";
import { eventKeys } from "./query-keys";

const GET_EVENTS_BY_CHANNEL_ID = graphql(`
  query GetEvents($input: ListEventsInput!) {
    getEvents(input: $input) {
      limit
      offset
      totalRows
      results {
        createdBy
        createdDate
        id
        images
        text
        title
        updatedBy
        startDate
        channel {
          title
        }

        updatedDate
      }
    }
  }
`);

export const useGetEventByChannelId = (channelId: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: eventKeys.detail(channelId),
    queryFn: () => {
      return protectedRequestHandler(GET_EVENTS_BY_CHANNEL_ID, {
        input: {
          limit: 10,
          offset: 0,
          channelId: channelId,
        },
      });
    },
    // select: (data) => {
    //   return {
    //     ...data,
    //     getEventById: {
    //       ...data.getEventById,
    //       images: data.getEventById.images?.map(
    //         (image) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${image}`
    //       ),
    //     },
    //   };
    // },
  });
};
