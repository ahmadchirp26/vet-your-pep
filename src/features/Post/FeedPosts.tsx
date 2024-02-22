"use client";
import useGetPosts from "@/api/Posts/useGetPosts";
import NewPost from "@/features/Post/NewPost";
import PostCard, { PostCardSkeleton } from "@/features/Post/PostCard";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  channelId?: string;
  customerId?: string;
  onlyShowPosts?: boolean;
}

const FeedPosts = ({ className, channelId, customerId, onlyShowPosts = false }: Props) => {
  const { status, data } = useGetPosts({
    channelId,
    customerId,
  });
  if (status === "pending") {
    return <FeedPostsSkeleton className={className} />;
  }
  if (status === "error") {
    //[Todo]: handle error
    return <div>Failed to load</div>;
  }

  return (
    <div
      className={cn(
        "w-full rounded-3xl p-4 space-y-8 w-xs",
        className
      )}
    >
      {!onlyShowPosts && <NewPost channelId={channelId} />}
      {data.getPosts.results.map((post, index) => (
        <PostCard
          key={index}
          channelId={post.channel.id}
          channel={post.channel.title}
          comments={
            post.comments?.map((comment) => ({
              commentContent: comment.content,
              postedDate: new Date(),
              postedBy: {
                id: comment.user.id,
                firstName: comment.user.firstName,
                lastName: comment.user.lastName,
                profileImage: comment.user.profileImage ?? undefined,
              },
            })) ?? []
          }
          likes={
            post.likes?.map((l) => ({
              id: l.user?.id ?? "",
              profileImage: l.user?.profileImage ?? undefined,
              firstName: l.user?.firstName ?? "",
              lastName: l.user?.lastName ?? "",
            })) ?? []
          }
          postContent={post.body}
          postId={post.id}
          postImages={post.images ?? []}
          postedTime={post.createdDate}
          postedBy={{
            id: post.customer.id,
            firstName: post.customer.firstName,
            lastName: post.customer.lastName,
            profileImage: post.customer.profileImage ?? undefined,
          }}
        />
      ))}
    </div>
  );
};
export const FeedPostsSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "container-drop-shadow bg-greendarkest w-full rounded-3xl p-4 space-y-8 w-xs",
        className
      )}
    >
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
};
export default FeedPosts;
