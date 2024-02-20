import { graphql } from "@/core/lib/react-query-graphql";
import { useQueryClient } from "@tanstack/react-query";
import { useGraphQLMutationProtected } from "../helpers";
import { channelKeys } from "../Channels/query-keys";
import { userAllFeedsKeys } from "./query-keys";

const LIKE_MUTATION = graphql(`
  mutation likePost($input: CreateLikeInput!) {
    likePost(input: $input) {
      message
    }
  }
`);


export const useLikeMutation = () => {
  const queryClient = useQueryClient();
  return useGraphQLMutationProtected(
    {
      onSuccess: async() => {
        await queryClient.invalidateQueries({
          queryKey:userAllFeedsKeys.all
        });      
        return queryClient.invalidateQueries({
          queryKey:channelKeys.detail()
        })
        // const userId = data?.sub;
        // if (!userId) {
        //   return;
        // }
        // queryClient.setQueryData<APICustomerByIdQueryData>(
        //   customerKeys.detail(userId),
        //   (prev) =>
        //     prev
        //       ? {
        //           ...prev,
        //           getOtherCustomerData: {
        //             ...prev.getOtherCustomerData,
        //             user: {
        //               ...prev.getOtherCustomerData.user,
        //               posts: prev.getOtherCustomerData.user.posts?.map(
        //                 (post) => {
        //                   if (post.id === postId) {
        //                     return {
        //                       ...post,
        //                       likeCount: (post.likeCount ?? 0) + 1,
        //                       likes: post.likes
        //                         ? [...post.likes, { id: userId }]
        //                         : [
        //                             {
        //                               id: userId,
        //                               user: {
        //                                 id: userId,
        //                                 email: data.email,
        //                                 firstName: data.firstName,
        //                                 lastName: data.lastName,
        //                                 profileImage: data.profileImage,
        //                               },
        //                             },
        //                           ],
        //                     };
        //                   }
        //                   return post;
        //                 }
        //               ),
        //             },
        //           },
        //         }
        //       : undefined
        // );
        // if (channelId) {
        //   queryClient.setQueryData<APIGetChannelByIdQueryData>(channelKeys.detail(channelId), (prev) =>
        //     prev ? {
        //       ...prev,
        //       getChannelById: {
        //         ...prev.getChannelById,
        //         posts: prev.getChannelById.posts?.map((post) => {
        //           if (post.id === postId) {
        //             return {
        //               ...post,
        //               likeCount: (post.likeCount ?? 0) + 1,
        //               likes: post.likes
        //                 ? [...post.likes, { id: userId }]
        //                 : [
        //                     {
        //                       id: userId,
        //                       user: {
        //                         id: userId,
        //                         email: data.email,
        //                         firstName: data.firstName,
        //                         lastName: data.lastName,
        //                         profileImage: data.profileImage,
        //                       },
        //                     },
        //                   ],
        //             };
        //           }
        //           return post;
        //         }),
        //       },
        //     } : undefined
        //   );
        // }
      },
      onError: (error) => {
        console.log(error);
      },
    },
    LIKE_MUTATION
  );
};
