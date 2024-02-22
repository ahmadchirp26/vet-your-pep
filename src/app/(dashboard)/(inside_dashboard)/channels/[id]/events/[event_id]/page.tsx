import AllChannels from "@/features/Channels/JoinedChannels";
import ProfileCard from "@/features/ProfileCard";
import EventDetailsCard from "./components/EventDetailsCard";
import Image from "next/image";
import Link from "next/link";

const EventDetails = () => {
  return (
    <>
      <div className="flex gap-3 p-4 ">
        <div className="flex flex-col gap-3 max-lg:hidden">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="bg-greendarkest rounded-xl p-12 max-md:p-5 container-drop-shadow w-full">
          <Link href={"/channels/:id/events"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={"/assets/back_arrow_icon.svg"}
                alt="Back Arrow Icon"
                width={8}
                height={8}
              />
              <span className="text-white">Back</span>
            </div>
          </Link>
          <EventDetailsCard />
        </div>
      </div>
    </>
  );
};

export default EventDetails;
