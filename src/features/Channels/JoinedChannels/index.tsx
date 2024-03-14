"use client";
import ChannelCard, { ChannelCardSkeleton } from "@/features/Cards/ChannelCard";
import Link from "next/link";
import useGetChannels from "@/api/Channels/useGetChannels";
import ActionHeader from "./ActionHeader";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
}

const JoinedChannels = ({ className }: Props) => {
  const {
    data,
    status,
    filters: { setSearchQuery },
  } = useGetChannels({
    limit: 100,
    joined: true,
  });

  // console.log("Channels Search", setSearchQuery);

  if (status === "pending") {
    return <JoinedChannelsSkeleton className={className} />;
  }

  if (status === "error") {
    return (
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 min-w-[330px] max-xl:min-w-[160px] max-lg:min-w-[140px]">
        <span className="text-white font-bold mt-3 max-lg:text-center">
          My Channels
        </span>

        <span className="mt-5 text-greensharp text-center">
          Error fetching Channels
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn("rounded-3xl shadow-glow bg-greendarkest pb-4", className)}
    >
      <ActionHeader
        onSearch={(searchTerm) => {
          setSearchQuery(searchTerm);
        }}
        className="px-4 py-2 mb-2"
      />
      <div className="space-y-2">
        {data?.getChannels.results?.map((channel, index) => (
          <Link key={index} href={`/channels/${channel.id}`} className="block">
            <ChannelCard
              channel={channel}
              showJoinButton={false}
              isLandingPage={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export const JoinedChannelsSkeleton = ({ className }: Props) => {
  return (
    <div
      className={cn("rounded-3xl shadow-glow bg-greendarkest pb-4", className)}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-2 mb-2">
        <div className="flex items-center h-12 w-52">
          <div className="bg-greenlight rounded-lg animate-pulse w-20 h-4" />
        </div>
        <div className="h-6 w-6 p-2 bg-greenlight rounded-lg animate-pulse" />
      </div>
      <div className="space-y-2">
        <ChannelCardSkeleton />
        <ChannelCardSkeleton />
        <ChannelCardSkeleton />
      </div>
    </div>
  );
};
export default JoinedChannels;
