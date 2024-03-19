import AllChannels from "@/features/Channels/JoinedChannels";
import ProfileCard from "@/features/ProfileCard";
import OnlineFriends from "@/features/OnlineFriends";
import EditChannel from "./_components/EditChannelForm";

const EditProfile = (props: { params: { id: string } }) => {
  return (
    <>
      <div className="p-3 flex gap-5 max-md:flex-col">
        <div className="flex flex-col gap-4 min-w-[220px] max-md:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="flex flex-col gap-3 max-md:order-2 w-full">
          <EditChannel channelId={props.params.id} />
        </div>
        <div className="max-md:order-1">
          {/* <OnlineFriends className="flex md:flex-col" /> */}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
