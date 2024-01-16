import AllChannels from "@/Features/AllChannels";
import FeedPosts from "@/Features/FeedPosts";
import OnlineFriends from "@/Features/OnlineFriends";
import ProfileCard from "@/Features/ProfileCard";
import AboutCard from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/AboutCard";
import GroupAdmin from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/GroupAdmin";
import EventCard from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/EventCard";
import { Button } from "@/core/ui/button";
import Banner from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/Banner";

const ViewChannel = () => {
  return (
    <>
      <div className="p-3 flex gap-5 max-md:flex-col">
        <div className="flex flex-col gap-4 min-w-[220px] max-md:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />

          <AllChannels />
        </div>
        <div className="flex flex-col gap-3 max-md:order-2">
          <Banner />
          <div className="flex gap-3 max-sm:flex-col">
            <div className="flex gap-3 max-sm:order-2">
              <FeedPosts />
            </div>
            <div className="flex flex-col gap-3 w-100 max-sm:order-1 max-sm:flex-row max-sm:w-full">
              <AboutCard />
              <GroupAdmin />
              <EventCard />
              <Button className="bg-[#FF0000] font-bold container-drop-shadow rounded-3xl hover:bg-red-700 max-sm:hidden">
                Report Group
              </Button>
            </div>
          </div>
        </div>
        <div className="max-md:order-1">
          <OnlineFriends />
        </div>
      </div>
    </>
  );
};

export default ViewChannel;
