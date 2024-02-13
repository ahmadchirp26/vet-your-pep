/**
 * The function prefetchJoinedChannelsServerSide is used to prefetch the data for the channels that the user has joined
 * 1. This is intended to be used only on server side
 *    - But it cannot be declared as a server action 
 *      - as it uses graphQLRequestHandler which is a client module and causes error: 'You cannot dot into a client module from a server component'
 * 2. I had to rewrite the GET_JOINED_CHANNELS query, because I cannot import the query from the client module as it causes the same error
 *    - Probably because then this file will be treated as a client module
 *    - [Todo]: Restructure the code
 * 
 */

import { getSessionServerAction } from "@/api/Authentication/getSessionServerAction";
import { graphQlRequestHandler, graphql } from "@/core/lib/react-query-graphql";
import { QueryClient } from "@tanstack/react-query";
import { channelKeys } from "../query-keys";

const GET_JOINED_CHANNELS = graphql(`
  #graphql
  query getAllChannelsWithPagination($input: ListChannelsInput!) {
    listChannels(input: $input) {
      limit
      offset
      totalRows
      results {
        id
        title
      }
    }
  }
`);

 
export const prefetchJoinedChannelsServerSide = async (queryClient = new QueryClient) => {
    const token = await getSessionServerAction()
    if (!token) {
      throw {
        status: 401,
        message: "Unauthorized",
      };
    }
    const authourizationHeaders = new Headers({
      Authorization: `Bearer ${token.accessToken}`,
    });
    try {
      const data = await queryClient.prefetchQuery({
        queryKey: channelKeys.listJoined({ limit: 100, offset: 0 ,joined: true}),
        queryFn: () =>
          graphQlRequestHandler(
            GET_JOINED_CHANNELS,
            { 
              input: {
                limit: 100,
                offset: 0,
                joined: true,
              }
            },
            authourizationHeaders
          ),
      });
      return {
        data,
        queryClient,
      };
    } catch (e) {
        console.log(e)
      throw {
        status: 500,
        message: "Internal Server Error",
      };
    }
  };