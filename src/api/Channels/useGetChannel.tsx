import { graphQlRequestHandler, graphql } from "@/lib/react-query-graphql";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { channelKeys } from "./query-keys";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { type ClientError } from "graphql-request";
import { notFound } from "next/navigation";
import { getSessionServerAction } from "../../lib/Authentication/server-actions/getSessionServerAction";
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
      moderator {
        id
        profileImage
        firstName
        lastName
      }
      members {
        id
        customer {
          id
          profileImage
          firstName
          lastName
        }
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
        input: queryKey.length === 3 ? queryKey[2] : '',
      });
    },
    select: (data) => {
      return {
        ...data,
        getChannelById: {
          ...data.getChannelById,
          image: data.getChannelById.image
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.image}`
            : undefined,
          backgroundImage: data.getChannelById.backgroundImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.backgroundImage}`
            : undefined,
          members: data.getChannelById.members?.map((member) => ({
            ...member,
            customer: {
              ...member.customer,
              profileImage: member.customer.profileImage
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${member.customer.profileImage}`
                : undefined,
            },
          })),
          moderator: {
            ...data.getChannelById.moderator,
            profileImage: data.getChannelById.moderator.profileImage
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.moderator.profileImage}`
              : undefined,
          }
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
          image: data.getChannelById.image
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.image}`
            : undefined,
          backgroundImage: data.getChannelById.backgroundImage
            ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.backgroundImage}`
            : undefined,
          members: data.getChannelById.members?.map((member) => ({
            ...member,
            customer: {
              ...member.customer,
              profileImage: member.customer.profileImage
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${member.customer.profileImage}`
                : undefined,
            },
          })),
          moderator: {
            ...data.getChannelById.moderator,
            profileImage: data.getChannelById.moderator.profileImage
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getChannelById.moderator.profileImage}`
              : undefined,
          }
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
