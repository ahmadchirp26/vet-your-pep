"use client";
import ChannelCard from "@/Features/Cards/ChannelCard";
import useGetChannels from "@/api/Channels/useGetChannels";

const NewChannels = () => {
  const { data } = useGetChannels({
    limit: 100,
    joined: false,
  });
  const channelsArray = data?.listChannels.results;
  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 min-w-[330px] max-xl:min-w-[160px] max-lg:min-w-[140px]">
        <span className="text-white font-bold mt-3 max-lg:text-center">
          New Channels
        </span>

        <div className="mt-3">
          {channelsArray?.map((channel, index) => (
            <ChannelCard
              key={index}
              channel={channel}
              showJoinButton={true}
              ButtonText="Join"
              isLandingPage={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewChannels;
