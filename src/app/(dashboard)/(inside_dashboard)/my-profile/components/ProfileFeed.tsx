import NewPost from "@/Features/NewPost";
import PostCard from "@/Features/Cards/PostCard";
import { profilePosts } from "@/data/facebackend";
const ProfileFeed = () => {
  const postArray = profilePosts;
  return (
    <>
      <div className=" w-full  p-4 gap-3">
        <NewPost />
        {postArray.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default ProfileFeed;
