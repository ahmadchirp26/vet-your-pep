import { channels } from "@/data/facebackend";
import ChannelCard from "@/Features/Cards/ChannelCard";

const NewChannels = () => {
  const channelsArray = channels;
  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 ">
        <span className="text-white font-bold">New Channels</span>

        <div className="mt-3">
          {channelsArray.map((channel, index) => (
            <ChannelCard key={index} channel={channel} showJoinButton={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewChannels;
