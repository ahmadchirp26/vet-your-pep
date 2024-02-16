"use client";
import ChannelCard from "@/Features/Cards/ChannelCard";
import useGetChannels from "@/api/Channels/useGetChannels";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { Skeleton } from "@/core/ui/skeleton";

const NewChannels = () => {
  const { data, status } = useGetChannels({
    limit: 100,
    joined: false,
  });
  const channelsArray = data?.getChannels.results;
  if (status === "pending") {
    //[Todo]: add a skeleton loader
    return (
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 min-w-[330px] max-xl:min-w-[160px] max-lg:min-w-[140px]">
        <span className="text-white font-bold mt-3 max-lg:text-center">
          New Channels
        </span>

        <span className="mt-5 text-greensharp text-center">
          Error fetching Channels
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 min-w-[330px] max-xl:min-w-[160px] max-lg:min-w-[140px]">
      <span className="text-white font-bold mt-3 max-lg:text-center">
        New Channels
      </span>
      {status === "pending" ? (
        <div className=" flex gap-3 justify-center p-4 items-center">
          <Skeleton className="h-12 w-60 rounded-lg" />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default NewChannels;
