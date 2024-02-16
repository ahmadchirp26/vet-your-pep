import NewPost from "@/Features/Post";
import PostCard from "@/Features/Cards/PostCard";
import { profilePosts } from "@/data/facebackend";
const ProfileFeed = () => {
  const postArray = profilePosts;
  return (
    <>
      <div className=" w-full  p-4 max-sm:p-0 gap-3">
        <NewPost />
        {postArray.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default ProfileFeed;
