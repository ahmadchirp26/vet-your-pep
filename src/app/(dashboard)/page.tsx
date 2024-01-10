import ProfileCard from "@/Features/ProfileCard";
import { Button } from "@/core/ui/button";

export default function HomePage() {
  console.log("Hello World");
  return (
    <>
      <div className="flex gap-3 p-4">
        <div className="flex flex-col gap-4 w-52">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}
