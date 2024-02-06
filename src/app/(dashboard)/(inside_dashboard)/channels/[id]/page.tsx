import AllChannels from "@/Features/AllChannels";
import FeedPosts from "@/Features/FeedPosts";
import OnlineFriends from "@/Features/OnlineFriends";
import ProfileCard from "@/Features/ProfileCard";
import AboutCard from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/AboutCard";
import GroupAdmin from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/GroupAdmin";
import EventCard from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/EventCard";
import { Button } from "@/core/ui/button";
import Banner from "@/app/(dashboard)/(inside_dashboard)/channels/[id]/components/Banner";
import ChannelMembers from "./components/ChannelMembers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/ui/tabs";

const ViewChannel = () => {
  return (
    <>
      <div className="p-3 flex gap-5 max-lg:flex-col">
        <div className="flex flex-col gap-4 min-w-[220px] max-lg:hidden max-xl:min-w-[170px] max-lg:min-w-[150px]">
          <AboutCard />

          <AllChannels />
        </div>
        <div className="flex flex-col gap-3 max-lg:order-2">
          <Banner />
          <Tabs defaultValue="Feed" className="w-full lg:hidden">
            <TabsList className="w-full ">
              <TabsTrigger
                value="Feed"
                className="w-full bg-greendarkest text-white"
              >
                Feed
              </TabsTrigger>
              <TabsTrigger
                value="Members"
                className="w-full bg-greendarkest text-white"
              >
                Members
              </TabsTrigger>
              <TabsTrigger
                value="Info"
                className="w-full bg-greendarkest text-white"
              >
                About
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Feed">
              <FeedPosts />
            </TabsContent>
            <TabsContent value="Members" className="gap-5">
              <GroupAdmin />
              <ChannelMembers />
            </TabsContent>
            <TabsContent value="Info">
              <AboutCard />
            </TabsContent>
          </Tabs>

          <div className="flex gap-3 max-lg:flex-col">
            <div className="flex gap-3 max-lg:hidden">
              <FeedPosts />
            </div>
            <div className="flex flex-col gap-3 w-60 max-lg:order-1 max-lg:flex-col max-lg:w-full">
              <div className="max-lg:hidden">
                <GroupAdmin />
              </div>
              <div className="max-lg:hidden">
                <ChannelMembers />
              </div>

              <Button className="bg-[#FF0000] font-bold container-drop-shadow rounded-3xl hover:bg-red-700 max-lg:hidden">
                Report Group
              </Button>
            </div>
          </div>
        </div>
        <div className="max-lg:order-1">
          <OnlineFriends className="flex lg:flex-col" />
        </div>
      </div>
    </>
  );
};

export default ViewChannel;
