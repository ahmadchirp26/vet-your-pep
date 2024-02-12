import AllChannels from "@/Features/AllChannels";
import ProfileCard from "@/Features/ProfileCard";
import Banner from "../_components/Banner";
import FeedPosts from "@/Features/FeedPosts";
import AboutCard from "../_components/AboutCard";
import GroupAdmin from "../_components/GroupAdmin";
import EventCard from "../_components/EventCard";
import { Button } from "@/core/ui/button";
import OnlineFriends from "@/Features/OnlineFriends";
import EditChannel from "./components/EditChannelForm";

const EditProfile = () => {
  return (
    <>
      <div className="p-3 flex gap-5 max-md:flex-col">
        <div className="flex flex-col gap-4 min-w-[220px] max-md:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <ProfileCard />

          <AllChannels />
        </div>
        <div className="flex flex-col gap-3 max-md:order-2 w-full">
          <Banner />
          <EditChannel />
        </div>
        <div className="max-md:order-1">
          <OnlineFriends />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
