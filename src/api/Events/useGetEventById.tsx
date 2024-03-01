import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";
import { env } from "@/env";
import { eventKeys } from "./query-keys";

const GET_EVENTS_BY_ID = graphql(`
  query GetEventById($input: String!) {
    getEventById(input: $input) {
      createdBy
      createdDate
      startDate
      id
      images
      text
      title
      updatedBy
      updatedDate
    }
  }
`);

export const useGetEventById = (EventId: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: eventKeys.detail(EventId),
    queryFn: () => {
      return protectedRequestHandler(GET_EVENTS_BY_ID, {
        input: EventId,
      });
    },
    select: (data) => {
      return {
        ...data,
        getEventById: {
          ...data.getEventById,
          images: data.getEventById.images?.map(
            (image) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${image}`
          ),
        },
      };
    },
  });
};
