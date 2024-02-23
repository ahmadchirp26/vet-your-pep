import { graphql } from "@/lib/react-query-graphql";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useQuery } from "@tanstack/react-query";

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

const eventsQuery = ["events"];

export const useGetEventById = (EventId: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: eventsQuery,
    queryFn: () => {
      return protectedRequestHandler(GET_EVENTS_BY_ID, {
        input: EventId,
      });
    },
  });
};
