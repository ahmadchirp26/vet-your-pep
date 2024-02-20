"use client";
import NewPost from "@/features/Post/NewPost";
import PostCard, { PostCardSkeleton } from "@/features/Post/PostCard";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  channelId?: string;
  status: "pending" | "error" | "success";
  posts?: Array<{
    id: string;
    body: string;
    createdAt: Date;
    channel: {
      id: string;
      title: string;
    };
    customer: {
      id: string;
      profileImage?: string;
      firstName: string;
      lastName: string;
    };
    comments: Array<{
      content: string;
      user: {
        id: string;
        profileImage?: string;
        firstName: string;
        lastName: string;
      };
    }>;
    likes: Array<{
      user: {
        id: string;
        profileImage?: string;
        firstName: string;
        lastName: string;
      };
    }>;
    images: Array<string>;
  }>;
}

const FeedPosts = ({ status, posts, channelId, className }: Props) => {
  if (status === "pending") {
    //[Todo]: Add a skeleton
    return (
      <div
        className={cn(
          "container-drop-shadow w-full rounded-3xl p-4 space-y-8 w-xs",
          className
        )}
      >
        <PostCardSkeleton />
        <PostCardSkeleton />
      </div>
    );
  }
  if (status === "error") {
    //[Todo]: handle error
    return <div>Failed to load</div>;
  }

  return (
    <div
      className={cn(
        "container-drop-shadow bg-greendarkest w-full rounded-3xl p-4 space-y-8 w-xs",
        className
      )}
    >
      <NewPost channelId={channelId} />
      {posts?.map((post, index) => (
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
          postedTime={post.createdAt}
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

export default FeedPosts;
