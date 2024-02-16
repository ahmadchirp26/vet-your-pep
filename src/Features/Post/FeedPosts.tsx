"use client";
import NewPost from "@/Features/Post/NewPost";
import PostCard from "@/Features/Cards/PostCard";
import { useGetChannel } from "@/api/Channels/useGetChannel";

interface Props {
  channelId: string;
}

const FeedPosts = ({ channelId }: Props) => {
  const { data, status } = useGetChannel(channelId);
  if (status === "pending") {
    //[Todo]: Add a skeleton
    return <div>Loading...</div>;
  }
  if (status === "error") {
    //[Todo]: handle error
    return <div>Failed to load</div>;
  }
  return (
    <div className="container-drop-shadow bg-greendarkest w-full rounded-3xl p-4 gap-3 space-y-8">
      <NewPost channelId={channelId} />
      {data.getChannelById.posts?.map((post, index) => (
        <PostCard
          key={index}
          channel={data.getChannelById.title}
          comments={
            post.comments?.map((comment) => ({
              commentContent: comment.content,
              postedDate: new Date(),
              postedBy: {
                profileImage: comment.user.profileImage ?? undefined,
                username: comment.user.firstName + " " + comment.user.lastName,
              },
            })) ?? []
          }
          likes={[]}
          postContent={post.body}
          postImages={post.images ?? []}
          postedTime={new Date()}
          postedBy={{
            profileImage: undefined, //post.customer.profileImage ?? undefined,
            username: "NeedToFix", //post.customer.firstName + ' ' + post.customer.lastName,
          }}
        />
      ))}
    </div>
  );
};

export default FeedPosts;
