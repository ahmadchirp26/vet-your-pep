import { graphql } from "@/core/lib/react-query-graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";
import { type APICustomerByIdQueryData } from "../Customer/useCustomerByIdQuery";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { customerKeys } from "../Customer/query-keys";
import { channelKeys } from "../Channels/query-keys";
import { type APIGetChannelByIdQueryData } from "../Channels/useGetChannel";

const LIKE_MUTATION = graphql(`
  mutation createPostLike($input: CreateLikeInput!) {
    createPostLike(input: $input) {
      message
    }
  }
`);

interface Props {
  channelId?: string;
}

export const useLikeMutation = ({ channelId }: Props) => {
  const { data } = useAuthSessionContext();
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onMutate: ([
        {
          input: { postId },
        },
      ]) => {
        const userId = data?.sub;
        if (!userId) {
          return;
        }
        queryClient.setQueryData<APICustomerByIdQueryData>(
          customerKeys.detail(userId),
          (prev) =>
            prev
              ? {
                  ...prev,
                  getOtherCustomerData: {
                    ...prev.getOtherCustomerData,
                    user: {
                      ...prev.getOtherCustomerData.user,
                      posts: prev.getOtherCustomerData.user.posts?.map(
                        (post) => {
                          if (post.id === postId) {
                            return {
                              ...post,
                              likeCount: (post.likeCount ?? 0) + 1,
                              likes: post.likes
                                ? [...post.likes, { id: userId }]
                                : [
                                    {
                                      id: userId,
                                      user: {
                                        id: userId,
                                        email: data.email,
                                        firstName: data.firstName,
                                        lastName: data.lastName,
                                        profileImage: data.profileImage,
                                      },
                                    },
                                  ],
                            };
                          }
                          return post;
                        }
                      ),
                    },
                  },
                }
              : undefined
        );
        if (channelId) {
          queryClient.setQueryData<APIGetChannelByIdQueryData>(channelKeys.detail(channelId), (prev) =>
            prev ? {
              ...prev,
              getChannelById: {
                ...prev.getChannelById,
                posts: prev.getChannelById.posts?.map((post) => {
                  if (post.id === postId) {
                    return {
                      ...post,
                      likeCount: (post.likeCount ?? 0) + 1,
                      likes: post.likes
                        ? [...post.likes, { id: userId }]
                        : [
                            {
                              id: userId,
                              user: {
                                id: userId,
                                email: data.email,
                                firstName: data.firstName,
                                lastName: data.lastName,
                                profileImage: data.profileImage,
                              },
                            },
                          ],
                    };
                  }
                  return post;
                }),
              },
            } : undefined
          );
        }
      },
      onError: (error) => {
        console.log(error);
      },
    },
    LIKE_MUTATION
  );
};
