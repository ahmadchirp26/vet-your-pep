import AllChannels from "@/features/AllChannels";
import ProfileCard from "@/features/ProfileCard";
import EventCalendar from "./components/EventCalendar";
import EventStepper from "./components/EventStepper";

const Events = () => {
  return (
    <>
      <div className="p-3 flex gap-5 max-md:flex-col ">
        <div className="flex flex-col gap-4 min-w-[220px] max-lg:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />

          <AllChannels />
        </div>
        <div className="flex gap-3 w-full max-md:justify-center max-lg:flex-col ">
          <div className="max-lg:order-2">
            <EventCalendar />
          </div>
          <div className="max-lg:order-1">
            <EventStepper />
          </div>
          {/* <div className="text-red-500">events stepper</div> */}
        </div>
      </div>
    </>
  );
};

export default Events;
