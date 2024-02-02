import FollowerCard from "@/Features/Cards/FollowerCard";
import { followers } from "@/data/facebackend";

const MyFollowing = () => {
  const FollowersArray = followers;
  return (
    <>
      <div className="flex flex-col gap-2 p-4 max-sm:p-0">
        <span className="text-white font-bold">Following List</span>
        {FollowersArray.map((followers, index) => (
          <FollowerCard
            key={index}
            followers={followers}
            buttonText="Unfollow"
          />
        ))}
      </div>
    </>
  );
};

export default MyFollowing;
