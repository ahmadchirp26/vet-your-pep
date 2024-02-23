import { JoinedChannelsSkeleton } from "@/features/Channels/JoinedChannels";
import { ProfileTemplateSkeleton } from "./_template/ProfileTemplate";

const Loading = () => {
  return (
    <div className="p-3 flex gap-4">
      <div className="max-lg:hidden">
        <JoinedChannelsSkeleton />
      </div>
      <ProfileTemplateSkeleton />
    </div>
  );
};

export default Loading;
