import AllChannels from "@/Features/AllChannels";
import NewChannels from "@/Features/NewChannels";
import OnlineFriends from "@/Features/OnlineFriends";
import ProfileCard from "@/Features/ProfileCard";
import AllPostsFeed from "./_components/AllPostsFeed";

export default function HomePage() {
  return (
    <>
      <div className="flex gap-3 p-4 max-sm:p-1  ">
        <div className="flex flex-col gap-4 min-w-[220px] max-md:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="flex max-md:flex-col gap-3 overflow-auto ">
          <div className="max-md:order-2">
            <AllPostsFeed />
          </div>

          <div className="max-lg:hidden">
            <NewChannels />
          </div>
          <div className="max-md:order-1 max-md:overflow-auto">
            <OnlineFriends className="flex md:flex-col" />
          </div>
        </div>
      </div>
    </>
  );
}
