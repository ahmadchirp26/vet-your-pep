import AllChannels from "@/Features/AllChannels";
import NewChannels from "@/Features/NewChannels";
import OnlineFriends from "@/Features/OnlineFriends";
import ProfileCard from "@/Features/ProfileCard";

export default function HomePage() {
  return (
    <div className="p-3 md:flex items-start gap-x-3">
      <OnlineFriends className="md:flex-col order-3 mb-4 md:min-w-min" />
      <div className="hidden md:block space-y-4 min-w-[280px]">
        <ProfileCard />
        <AllChannels />
      </div>
      <AllPostsFeed className = "flex-1" />
      <div className="hidden min-w-[280px] lg:block">
        <NewChannels />
      </div>
    </div>
  );
}
