import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { postKeys } from "./query-keys";
import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { useState } from "react";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { env } from "@/env";

const document = graphql(`
  #graphql
  query getPosts($input: ListPostsInput!) {
    getPosts(input: $input) {
      limit
      offset
      totalRows
      results {
        id
        body
        channel {
          id
          title
          backgroundImage
          image
        }
        createdDate
        customer {
          id
          email
          firstName
          lastName
          profileImage
        }
        images
        likes {
          createdDate
          user {
            id
            email
            firstName
            lastName
            profileImage
          }
        }
        comments {
          id
          content
          user {
            id
            email
            firstName
            lastName
            profileImage
          }
          createdDate
        }
      }
    }
  }
`);

interface Props {
  limit?: number;
  channelId?: string;
  customerId?: string;
}
const useGetPosts = ({ limit = 100, channelId, customerId }: Props) => {
  const { data } = useAuthSessionContext();
  const [paginationParams, setPaginationParams] = useState({
    limit,
    offset: 0,
  });
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  const response = useQuery({
    queryKey: postKeys.list({
      ...paginationParams,
      // Following is the condition for getting posts based on channelId, customerId, or userFeed...(channelId)
      ...(channelId
        ? { channelId }
        : customerId
          ? data?.sub === customerId
            ? { myPosts: true }
            : { customerId }
          : { userFeed: true }),
    }),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(document, {
        input: queryKey[2],
      });
    },
    select(data) {
      return {
        ...data,
        getPosts: {
          ...data.getPosts,
          results: data.getPosts.results.map((post) => ({
            ...post,
            channel: {
              ...post.channel,
              image: post.channel.image
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${post.channel.image}`
                : undefined,
              backgroundImage: post.channel.backgroundImage
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${post.channel.backgroundImage}`
                : undefined,
            },
            customer: {
              ...post.customer,
              profileImage: post.customer.profileImage
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${post.customer.profileImage}`
                : undefined,
            },
            likes: post.likes?.map((like) => ({
              ...like,
              user: {
                ...like.user,
                profileImage: like.user?.profileImage
                  ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${like.user.profileImage}`
                  : undefined,
              },
            })),
            comments: post.comments?.map((comment) => ({
              ...comment,
              user: {
                ...comment.user,
                profileImage: comment.user?.profileImage
                  ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${comment.user.profileImage}`
                  : undefined,
              },
            })),
            images: post.images?.map(
              (image) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${image}`
            ),
          })),
        },
      };
    },
  });

  const paginationParamsExtended = {
    ...paginationParams,
    totalRows: response.data?.getPosts.totalRows ?? 0,
  };

  return {
    ...response,
    // Following is conversion to pages format from API response of offset and limit, and back.
    pageParams: {
      page:
        paginationParamsExtended.offset / paginationParamsExtended.limit + 1,
      pageSize: paginationParamsExtended.limit,
      totalRows: paginationParamsExtended.totalRows,
      setPage: (page: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }

        const maxPages = Math.max(
          paginationParamsExtended.limit
            ? Math.ceil(
                paginationParamsExtended.totalRows /
                  paginationParamsExtended.limit
              )
            : 0,
          1
        );
        const newPage = Math.min(Math.max(page, 1), maxPages);
        const newOffset = (newPage - 1) * paginationParamsExtended.limit;
        setPaginationParams({
          limit: paginationParamsExtended.limit,
          offset: newOffset,
        });
      },
      setPageSize: (pageSize: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }
        const latestTotalRows = paginationParamsExtended.totalRows;
        const maxPages = Math.max(
          pageSize ? Math.ceil(latestTotalRows / pageSize) : 0,
          1
        );
        // Possible page change due to pageSize change
        const newPage = Math.min(
          Math.max(paginationParams.offset / pageSize + 1, 1),
          maxPages
        );
        const newOffset = (newPage - 1) * pageSize;
        setPaginationParams({
          limit: pageSize,
          offset: newOffset,
        });
      },
    },
  };
};

export default useGetPosts;
