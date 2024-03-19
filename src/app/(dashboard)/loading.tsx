import { JoinedChannelsSkeleton } from "@/features/Channels/JoinedChannels";
import { NewChannelsSkeleton } from "@/features/Channels/NewChannels";
import { OnlineFriendsSkeleton } from "@/features/OnlineFriends";
import { ProfileCardSkeleton } from "@/features/ProfileCard";
import { FeedPostsSkeleton } from "@/features/Post/FeedPosts";

export default function Loading() {
  return (
    <div className="p-3 md:flex items-start gap-x-3">
      {/* <OnlineFriendsSkeleton className="md:flex-col order-3 mb-4 md:min-w-min" /> */}
      <div className="hidden md:block space-y-4 min-w-[280px]">
        <ProfileCardSkeleton />
        <JoinedChannelsSkeleton />
      </div>
      <FeedPostsSkeleton className="flex-1" />
      <div className="hidden min-w-[280px] lg:block">
        <NewChannelsSkeleton />
      </div>
    </div>
  );
}
