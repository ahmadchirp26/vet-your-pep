import JoinedChannels from "@/features/Channels/JoinedChannels";
import NewChannels from "@/features/Channels/NewChannels";

const Channels = () => {
  return (
    <div className="flex gap-5 mt-3 p-3 max-sm:flex-col max-sm:p-4 w-full">
      <JoinedChannels className="flex-1" />
      <NewChannels className="flex-1" />
    </div>
  );
};

export default Channels;
