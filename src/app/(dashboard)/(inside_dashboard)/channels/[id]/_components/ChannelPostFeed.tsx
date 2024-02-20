import FeedPosts from "@/Features/Post/FeedPosts";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import React from "react";

type Props = {
  channelId: string;
};

const ChannelPostFeed = (props: Props) => {
  const { data, status } = useGetChannel(props.channelId);
  return (
    <FeedPosts
      status={status}
      posts={
        data?.getChannelById?.posts?.map((post) => ({
          body: post.body,
          id: post.id,
          images: post.images ?? [],
          createdAt: post.createdDate,
          customer:{
            id: post.customer?.id ?? '',
            firstName: post.customer?.firstName ?? '',
            lastName: post.customer?.lastName ?? '',
            email: post.customer?.email ?? '',
            profileImage: post.customer?.profileImage ?? undefined,            
          },
          likes:
            post.likes?.map((l) => ({
              user: {
                id: l.user?.id ?? "",
                firstName: l.user?.firstName ?? "",
                lastName: l.user?.lastName ?? "",
                profileImage: l.user?.profileImage ?? undefined,
              },
            })) ?? [],
          channel: {
            id: data?.getChannelById?.id ?? "",
            title: data?.getChannelById?.title ?? "",
          },
          comments:
            post.comments?.map((c) => ({
              content: c.content,
              user: {
                id: c.user.id,
                firstName: c.user.firstName,
                lastName: c.user.lastName,
                email: c.user.email,
                profileImage: c.user.profileImage ?? undefined,
              },
            })) ?? [],
        })) || []
      }
    />
  );
};

export default ChannelPostFeed;
