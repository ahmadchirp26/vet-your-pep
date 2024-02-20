import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { useQuery } from "@tanstack/react-query";
import { userAllFeedsKeys } from "./query-keys";
import { env } from "@/env";

const GET_USER_ALL_FEEDS = graphql(`
  query getUserAllFeeds($input: ListChannelsInput!) {
    getChannels(input: $input) {
      limit
      offset
      totalRows
      results {
        id
        title
        status
        about
        posts {
          id
          body
          images
          createdDate
          channel {
            id
            title
          }
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
          customer {
            firstName
            lastName
            email
            id
            profileImage
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
      }
    }
  }
`);

const useUserAllFeed = () => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: userAllFeedsKeys.list({ limit: 10, offset: 0, joined: true }),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(GET_USER_ALL_FEEDS, {
        input: {
          limit: queryKey[2].limit,
          offset: queryKey[2].offset,
          joined: queryKey[2].joined,
        },
      });
    },
    select: (data) => {
      return {
        feed: data.getChannels.results
          .map((channel) => channel.posts ?? [])
          .flat()
          .map((post) => ({
            ...post,
            comments: post.comments?.map((comment) => ({
              ...comment,
              user: {
                ...comment.user,
                profileImage: comment.user.profileImage
                  ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${comment.user.profileImage}`
                  : undefined,
              },
            })),
            customer: {
              ...post.customer,
              profileImage: post.customer.profileImage
                ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${post.customer.profileImage}`
                : undefined,
            },
            likes: post.likes?.map((like) => ({
              ...like,
              user: like.user
                ? {
                    ...like.user,
                    profileImage: like.user.profileImage
                      ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${like.user.profileImage}`
                      : undefined,
                  }
                : null,
            })),
            images: post.images?.map(
              (url) => `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${url}`
            ),
          })),
      };
    },
  });
};
export type APIUserAllFeedData = ReturnType<typeof useUserAllFeed>["data"];
export default useUserAllFeed;
