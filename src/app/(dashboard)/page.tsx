import AllChannels from "@/features/Channels/JoinedChannels";
import NewChannels from "@/features/Channels/NewChannels";
import OnlineFriends from "@/features/OnlineFriends";
import ProfileCard from "@/features/ProfileCard";
import FeedPosts from "@/features/Post/FeedPosts";

export default function HomePage() {
  return (
    <div className="p-3 md:flex items-start gap-x-3">
      {/* <OnlineFriends className="md:flex-col order-3 mb-4 md:min-w-min" /> */}
      <div className="hidden md:block space-y-4 min-w-[280px]">
        <ProfileCard />
        <AllChannels />
      </div>
      <FeedPosts className={"flex-1 container-drop-shadow bg-greendarkest"} />
      <div className="hidden min-w-[280px] lg:block">
        <NewChannels />
      </div>
    </div>
  );
}
