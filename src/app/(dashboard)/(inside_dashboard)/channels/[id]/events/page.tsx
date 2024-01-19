import AllChannels from "@/Features/AllChannels";
import ProfileCard from "@/Features/ProfileCard";
import EventCalendar from "./components/EventCalendar";

const Events = () => {
  return (
    <>
      <div className="p-3 flex gap-5 max-md:flex-col">
        <div className="flex flex-col gap-4 min-w-[220px] max-lg:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />

          <AllChannels />
        </div>
        <div className="flex gap-3 w-full max-md:justify-center max-sm:flex-col">
          <EventCalendar />
          {/* <div className="text-red-500">events stepper</div> */}
        </div>
      </div>
    </>
  );
};

export default Events;
