import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { graphql } from "@/core/lib/react-query-graphql";
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
