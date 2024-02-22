import AllChannels from "@/features/Channels/JoinedChannels";
import ProfileCard from "@/features/ProfileCard";
import EventDetailsCard from "./components/EventDetailsCard";

import BackButton from "@/components/ui/backButton";

const EventDetails = (props: { params: { id: string } }) => {
  const EventId = props.params.id;
  console.log(EventId);
  console.log("Hello");
  return (
    <>
      <div className="flex gap-3 p-4 ">
        <div className="flex flex-col gap-3 max-lg:hidden">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="bg-greendarkest rounded-xl p-12 max-md:p-5 container-drop-shadow w-full">
          <BackButton />

          <EventDetailsCard EventId={EventId} />
        </div>
      </div>
    </>
  );
};

export default EventDetails;
