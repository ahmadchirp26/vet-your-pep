import { graphQlRequestHandler, graphql } from "@/core/lib/react-query-graphql";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";
import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { getSessionServerSide } from "../Authentication/getSessionServerSide";
import { type ClientError } from "graphql-request";
import { notFound } from "next/navigation";

const GET_CHANNEL_BY_ID_DOCUMENT = graphql(`
  #graphql
  query getChannelById($input: String!) {
    getChannelById(input: $input) {
      backgroundImage
      image
      price
      about
      id
      isPaid
      rules
      status
      totalMembers
      title
      posts {
        body
        customer {
          email
          firstName
          lastName
          id
          profileImage
        }
        images
        likeCount
        likes {
          id
          user
        }
      }
      members {
        id
        customer {
          id
          firstName
          lastName
          email
          profileImage
        }
        paidStatus
        roleChannel
      }
      moderator {
        firstName
        lastName
        id
        email
        profileImage
      }
    }
  }
`);

export const useGetChannel = (id: string) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: channelKeys.detail(id),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(GET_CHANNEL_BY_ID_DOCUMENT, {
        input: queryKey[1],
      });
    },
  });
};

export const getChannelByIdServerFetch = async (id: string) => {
  const token = getSessionServerSide();
  if (!token) {
    throw {
      status: 401,
      message: "Unauthorized",
    };
  }
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${token.accessToken}`,
  });
  const queryClient = new QueryClient();
  try {
    const data = await queryClient.fetchQuery({
      queryKey: channelKeys.detail(id),
      queryFn: () =>
        graphQlRequestHandler(
          GET_CHANNEL_BY_ID_DOCUMENT,
          { input: id },
          authourizationHeaders
        ),
    });
    return {
      data,
      queryClient,
    };
  } catch (e) {
    const graphQLError = e as ClientError;
    // @ts-expect-error @ts-ignore
    if (graphQLError?.response?.errors?.[0]?.statusCode === 400) {
      return notFound();
    }
    throw {
      status: 500,
      message: "Internal Server Error",
    };
  }
};
