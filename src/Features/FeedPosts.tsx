import NewPost from "@/Features/NewPost";
import PostCard from "@/Features/Cards/PostCard";
import { posts } from "@/data/facebackend";
const FeedPosts = () => {
  const postArray = posts;
  return (
    <>
      <div className="container-drop-shadow bg-greendarkest w-full rounded-3xl p-4 gap-3">
        <NewPost />
        {postArray.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default FeedPosts;
