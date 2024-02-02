import AllChannels from "@/Features/AllChannels";
import UserProfile from "../components/MyProfile";

const MyProfile = () => {
  return (
    <>
      <div className=" p-3 flex  gap-4">
        <div className="max-lg:hidden">
          <AllChannels />
        </div>
        <UserProfile />
      </div>
    </>
  );
};

export default MyProfile;
