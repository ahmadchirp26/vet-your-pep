"use client";

import { useState } from "react";
import Image from "next/image";

import SearchBar from "@/app/(dashboard)/components/SearchBar";
import { channels } from "@/data/facebackend";
import ChannelCard from "@/Features/Cards/ChannelCard";
import AllChannelCard from "./components/AllChannelCard";

const Channels = () => {
  const channelsArray = channels;
  const [activeSearch, setActiveSearch] = useState(false);

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  return (
    <>
      <div className="flex  gap-5 mt-3 p-3 max-sm:flex-col max-sm:p-4 w-full">
        <div className="bg-greendarkest w-full h-full flex flex-col rounded-2xl p-4">
          <div className="flex items-center justify-between mt-2">
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
                <SearchBar />
              </div>
            )}
          </div>
          <div className="mt-3 flex w-full flex-wrap gap-7 justify-center items-center ">
            {channelsArray.map((channel, index) => (
              <AllChannelCard
                key={index}
                channel={channel}
                showJoinButton={true}
                ButtonText="Join"
              />
            ))}
          </div>
        </div>
        <div className="bg-greendarkest w-full h-full flex flex-col rounded-2xl p-4">
          <div className="flex  mt-4">
            <span className="text-white font-bold">My Channels</span>
          </div>
          <div className="mt-3 flex flex-col max-lg:flex-wrap gap-3  ">
            {channelsArray.map((channel, index) => (
              <ChannelCard
                key={index}
                channel={channel}
                showJoinButton={true}
                ButtonText="View"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
