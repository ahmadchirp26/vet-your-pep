"use client";
import React from "react";
import AboutCard from "../_components/AboutCard";
import AllChannels from "@/Features/AllChannels";
import Banner from "../_components/Banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/ui/tabs";
import GroupAdmin from "../_components/GroupAdmin";
import ChannelMembers from "../_components/ChannelMembers";
import { Button } from "@/core/ui/button";
import OnlineFriends from "@/Features/OnlineFriends";
import { useMediaQuery } from "@uidotdev/usehooks";
import ChannelPostFeed from "../_components/ChannelPostFeed";

type Props = {
  channelId: string;
};

const ChannelViewTemplate = (props: Props) => {
  const isMediumDeviceAndLarge = useMediaQuery("(min-width : 769px)");
  return (
    <div className="p-3 md:flex items-start gap-x-3">
      <OnlineFriends className="md:flex-col order-3 mb-4 md:min-w-min" />
      {isMediumDeviceAndLarge && (
        <div className="space-y-4 min-w-[220px]">
          <AboutCard channelId={props.channelId} />
          <AllChannels />
        </div>
      )}
      <div className="flex-1">
        <Banner channelId={props.channelId} />
        {isMediumDeviceAndLarge ? (
          <div className="flex items-start space-x-3 mt-4">
            <div className="flex gap-3 flex-1">
              <ChannelPostFeed channelId={props.channelId} />
            </div>
            <div className="space-y-3">
              <GroupAdmin channelId={props.channelId} />
              <ChannelMembers channelId={props.channelId} />
              {/* <Button className="bg-[#FF0000] font-bold container-drop-shadow rounded-3xl w-full hover:bg-red-700">
                Report Group
              </Button> */}
            </div>
          </div>
        ) : (
          <Tabs defaultValue="Feed">
            <TabsList className="w-full p-0 h-auto">
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
              <ChannelPostFeed channelId={props.channelId} />
            </TabsContent>
            <TabsContent value="Members" className="gap-5">
              <GroupAdmin channelId={props.channelId} />
              <ChannelMembers channelId={props.channelId} />
            </TabsContent>
            <TabsContent value="Info">
              <AboutCard channelId={props.channelId} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default ChannelViewTemplate;
