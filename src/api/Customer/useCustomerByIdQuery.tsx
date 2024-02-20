import { useGraphQLRequestHandlerProtected } from "@/lib/auth-helpers";
import { graphql } from "@/lib/react-query-graphql";
import { env } from "@/env";
import { useQuery } from "@tanstack/react-query";
import { customerKeys } from "./query-keys";
const Document = graphql(`
  query getOtherCustomerData($input: String!) {
    getOtherCustomerData(customerId: $input) {
      isFollowing
      user {
        id
        email
        firstName
        lastName
        profileImage
        totalFollowers
        totalFollowings
        createdDate
        posts {
          id
          body
          images
          customer {
            id
            firstName
            lastName
            profileImage
          }
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
          likeCount
          likes {
            id
            user {
              id
              email
              firstName
              lastName
              profileImage
            }
          }
        }
      }
    }
  }
`);

interface Props {
  customerId: string;
}
const useCustomerByIdDataQuery = ({ customerId }: Props) => {
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();
  return useQuery({
    queryKey: customerKeys.detail(customerId),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(Document, {
        input: queryKey[1],
      });
    },
    select: (data) => {
      return {
        ...data,
        getOtherCustomerData: {
          ...data.getOtherCustomerData,
          user: {
            ...data.getOtherCustomerData.user,
            profileImage: data.getOtherCustomerData.user.profileImage
              ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${data.getOtherCustomerData.user.profileImage}`
              : undefined,
            posts: data.getOtherCustomerData.user.posts?.map((post) => {
              return {
                ...post,
                customer: {
                  ...post.customer,
                  profileImage: post.customer.profileImage
                    ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${post.customer.profileImage}`
                    : undefined,
                },
                comments: post.comments?.map((comment) => ({
                  ...comment,
                  user: {
                    ...comment.user,
                    profileImage: comment.user.profileImage
                      ? `https://${env.NEXT_PUBLIC_AWS_S3_FILE_HOST}/${comment.user.profileImage}`
                      : undefined,
                  },
                })),
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
              };
            }),
          },
        },
      };
    },
  });
};
export type APICustomerByIdQueryData = ReturnType<
  typeof useCustomerByIdDataQuery
>["data"];
export default useCustomerByIdDataQuery;
