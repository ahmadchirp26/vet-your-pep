import AllChannels from "@/features/Channels/JoinedChannels";
import UserProfile from "../components/MyProfile";

const MyProfile = (props:{params:{id:string}}) => {
  return (
    <>
      <div className=" p-3 flex  gap-4">
        <div className="max-lg:hidden">
          <AllChannels />
        </div>
        <UserProfile id = {props.params.id} />
      </div>
    </>
  );
};

export default MyProfile;
