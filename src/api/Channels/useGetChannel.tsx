import { graphQlRequestHandler, graphql } from "@/core/lib/react-query-graphql";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";
import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { type ClientError } from "graphql-request";
import { notFound } from "next/navigation";
import { getSessionServerAction } from "../Authentication/getSessionServerAction";
import { env } from "@/env";

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
        id
        body
        images
        comments {
          content
          id
          user {
            firstName
            lastName
            id
            email
            profileImage
          }
        }

        likeCount
        likes {
          id
          user {
            firstName
            lastName
            id
            email
            profileImage
          }
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
    select: (data) => {
      return {
        ...data,
        getChannelById: {
          ...data.getChannelById,
          posts: data.getChannelById.posts?.map((post) => {
            return {
              ...post,
              images: post.images?.map(
                (url) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${url}`
              ),
            };
          }),
        },
      };
    },
  });
};

// Following function should be used only in server side, but if it is used in client side there are no issues
// However, as it uses graphQLRequestHandler, it can be declared as a server action
// because of the error:'You cannot dot into a client module from a server component'
export const fetchChannelServerSide = async (
  id: string,
  queryClient = new QueryClient()
) => {
  const token = await getSessionServerAction();
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
      data: {
        ...data,
        getChannelById: {
          ...data.getChannelById,
          posts: data.getChannelById.posts?.map((post) => {
            return {
              ...post,
              images: post.images?.map(
                (url) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${url}`
              ),
            };
          }),
        },
      },
      queryClient,
    };
  } catch (e) {
    const graphQLError = e as ClientError;
    // console.log(e);
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

export type APIGetChannelByIdQueryData = ReturnType<
  typeof useGetChannel
>["data"];
