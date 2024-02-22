"use client";
import React from "react";
import AboutCard, { AboutCardSkeleton } from "../_components/AboutCard";
import JoinedChannels, {
  JoinedChannelsSkeleton,
} from "@/features/Channels/JoinedChannels";
import Banner, { BannerSkeleton } from "../_components/Banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GroupAdmin, { GroupAdminSkeleton } from "../_components/GroupAdmin";
import ChannelMembers, {
  ChannelMembersSkeleton,
} from "../_components/ChannelMembers";
import OnlineFriends, { OnlineFriendsSkeleton } from "@/features/OnlineFriends";
import { useMediaQuery } from "@uidotdev/usehooks";
import ChannelPostFeed from "../_components/ChannelPostFeed";
import { FeedPostsSkeleton } from "@/features/Post/FeedPosts";
import EventCard from "../_components/EventCard";

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
          <JoinedChannels />
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
              <EventCard channelId={props.channelId} />
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

export const ChannelViewTemplateSkeleton = () => {
  return (
    <div className="p-3 md:flex items-start gap-x-3">
      <OnlineFriendsSkeleton className="md:flex-col order-3 mb-4 md:min-w-min" />
      <div className="space-y-4 min-w-[220px]">
        <AboutCardSkeleton />
        <JoinedChannelsSkeleton />
      </div>

      <div className="flex-1">
        <BannerSkeleton />
        <div className="flex items-start space-x-3 mt-4">
          <div className="flex gap-3 flex-1">
            <FeedPostsSkeleton />
          </div>
          <div className="space-y-3">
            <GroupAdminSkeleton />
            <ChannelMembersSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelViewTemplate;
