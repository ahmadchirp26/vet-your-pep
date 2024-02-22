"use client";
import ChannelCard, { ChannelCardSkeleton } from "@/features/Cards/ChannelCard";
import useGetChannels from "@/api/Channels/useGetChannels";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
}

const NewChannels = ({className}:Props) => {
  const { data, status } = useGetChannels({
    limit: 100,
    joined: false,
  });
  const channelsArray = data?.getChannels.results;
  if (status === 'pending') {
    return <NewChannelsSkeleton className={className} />;
  }
  if (status === 'error') {
    return <p>{"Error"}</p>
  }
  return (
    <div className={cn("rounded-3xl shadow-glow bg-greendarkest pb-4", className)}>
      <div className="flex items-center justify-between gap-2 px-4 py-2 mb-2">
        <div className="flex items-center h-12 w-52">
          <p className="transition-all text-base text-white font-extrabold">
            New Channels
          </p>
        </div>
      </div>
      <div className="space-y-2">
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

export const NewChannelsSkeleton = ({className}:Props) => {
  return (
    <div className={cn("rounded-3xl shadow-glow bg-greendarkest pb-4", className)}>
      <div className="flex items-center justify-between gap-2 px-4 py-2 mb-2">
        <div className="flex items-center h-12 w-52">
          <div className="bg-greenlight rounded-lg animate-pulse w-20 h-4" />
        </div>
      </div>
      <div className="space-y-2">
        <ChannelCardSkeleton />
        <ChannelCardSkeleton />
        <ChannelCardSkeleton />
      </div>
    </div>
  );
};

export default NewChannels;
