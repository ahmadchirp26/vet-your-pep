import AllChannels from "@/Features/AllChannels";
import NewChannels from "@/Features/NewChannels";
import OnlineFriends from "@/Features/OnlineFriends";
import ProfileCard from "@/Features/ProfileCard";

export default function HomePage() {
  console.log("Hello World");
  return (
    <>
      <div className="flex gap-3 p-4">
        <div className="flex flex-col gap-4 w-52">
          <ProfileCard />

          <AllChannels />
        </div>
        <NewChannels />
        <OnlineFriends />
      </div>
    </>
  );
}
