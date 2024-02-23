import JoinedChannels from "@/features/Channels/JoinedChannels";
import ProfileTemplate from "./_template/ProfileTemplate";

const MyProfile = (props: { params: { id: string } }) => {
  return (
    <div className="p-3 flex gap-4">
      <div className="max-lg:hidden">
        <JoinedChannels />
      </div>
      <ProfileTemplate id={props.params.id} />
    </div>
  );
};

export default MyProfile;
