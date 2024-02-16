"use client";
import ChannelCard from "@/Features/Cards/ChannelCard";
import useGetChannels from "@/api/Channels/useGetChannels";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";

const NewChannels = () => {
  const { data, status } = useGetChannels({
    limit: 100,
    joined: false,
  });
  const channelsArray = data?.getChannels.results;
  if (status === "pending") {
    //[Todo]: add a skeleton loader
    return (
      <div>
        <SpinnerCircle />
      </div>
    );
  }
  if (status === "error") {
    //[Todo]: add a error component
    return <div>Error fetching data</div>;
  }
  return (
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
  );
};

export default NewChannels;
