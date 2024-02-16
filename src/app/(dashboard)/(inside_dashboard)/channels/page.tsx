"use client";
import { useState } from "react";
import Image from "next/image";
import SearchBar from "@/app/(dashboard)/components/SearchBar";
import ChannelCard from "@/Features/Cards/ChannelCard";
import AllChannelCard from "./components/AllChannelCard";
import useGetChannels from "@/api/Channels/useGetChannels";
import { Skeleton } from "@/core/ui/skeleton";

const Channels = () => {
  const { data: allChannelsData, status: allChannelStatus } = useGetChannels({
    limit: 100,
    joined: false,
  });
  const { data: myChannelsData } = useGetChannels({ limit: 100, joined: true });
  const allChannelsArray = allChannelsData?.getChannels.results;
  const myChannelsArray = myChannelsData?.getChannels.results;
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const filteredChannels = allChannelsArray?.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="flex  gap-5 mt-3 p-3 max-sm:flex-col max-sm:p-4 w-full ">
        <div className="bg-greendarkest w-full h-full flex flex-col rounded-2xl p-4 container-drop-shadow ">
          <div className="flex items-center justify-between mt-2 c">
            <span className="text-white font-bold">All Channels</span>
            {!activeSearch ? (
              <Image
                src={"/assets/search_icon.svg"}
                alt="search_icon"
                width={20}
                height={20}
                onClick={handleSearch}
                className="cursor-pointer"
              />
            ) : (
              <div className="w-[300px]">
                <SearchBar setSearchTerm={setSearchTerm} />
              </div>
            )}
          </div>
          {myChannelStatus === "pending" ? (
            <div className=" flex gap-3 justify-center p-4 items-center">
              <Skeleton className="h-12 w-80 rounded-lg" />
            </div>
          ) : (
            <div className="mt-3 flex w-full flex-wrap gap-7 justify-center items-center ">
              {filteredChannels?.map((channel, index) => (
                <AllChannelCard
                  key={index}
                  channel={channel}
                  showJoinButton={true}
                  ButtonText="Join"
                />
              ))}
            </div>
          )}
        </div>
        <div className="bg-greendarkest w-full h-full flex flex-col rounded-2xl p-4 container-drop-shadow ">
          <div className="flex  mt-4">
            <span className="text-white font-bold">My Channels</span>
          </div>
          {allChannelStatus === "pending" ? (
            <div className=" flex gap-3 justify-center p-4 items-center">
              <Skeleton className="h-12 w-80 rounded-lg" />
            </div>
          ) : (
            <div className="mt-3 flex flex-col gap-3  ">
              {myChannelsArray?.map((channel, index) => (
                <ChannelCard
                  key={index}
                  channel={channel}
                  showJoinButton={true}
                  ButtonText="View"
                  isLandingPage={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Channels;
