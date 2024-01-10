import AllChannels from "@/Features/AllChannels";
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
      </div>
    </>
  );
}
