"use client";
import NewPost from "@/Features/Post/NewPost";
import PostCard from "@/Features/Cards/PostCard";

interface Props {
  channelId?: string;
  status:'pending' | 'error' | 'success';
  posts?:Array<{
    id:string;
    body:string;
    channel:{
      id:string;
      title:string;
    }
    comments:Array<{
      content:string;
      user:{
        profileImage?:string;
        firstName:string;
        lastName:string;
      }
    }>;
    likes:Array<{
      user:{
        id:string;
        profileImage?:string;
        firstName:string;
        lastName:string;
      }
    }>;
    images:Array<string>;
  }>
}

const FeedPosts = ({ status, posts, channelId }: Props) => {
  
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
                profileImage: comment.user.profileImage ?? undefined,
                username: comment.user.firstName + " " + comment.user.lastName,
              },
            })) ?? []
          }
          likes={
            post.likes?.map((l) => ({
              id: l.user?.id ?? '',
              profileImage: l.user?.profileImage ?? undefined,
              username: l.user?.firstName + " " + l.user?.lastName,
            })) ?? []
          }
          postContent={post.body}
          postId={post.id}
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
