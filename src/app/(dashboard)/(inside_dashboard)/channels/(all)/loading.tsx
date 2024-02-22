import { JoinedChannelsSkeleton } from "@/features/Channels/JoinedChannels";
import { NewChannelsSkeleton } from "@/features/Channels/NewChannels";

const Loading = () => {
  return (
    <div className="flex gap-5 mt-3 p-3 max-sm:flex-col max-sm:p-4 w-full">
      <JoinedChannelsSkeleton className="flex-1" />
      <NewChannelsSkeleton className="flex-1" />
    </div>
  );
};

export default Loading;
