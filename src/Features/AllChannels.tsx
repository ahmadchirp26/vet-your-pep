"use client";

import Image from "next/image";
import { useState } from "react";

import { channels } from "@/data/facebackend";
import SearchBar from "@/app/(dashboard)/components/SearchBar";
import ChannelCard from "@/Features/Cards/ChannelCard";

const AllChannels = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const channelsArray = channels;

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };
  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 ">
        {!activeSearch ? (
          <div className="flex items-center justify-between mt-2">
            <span className="text-white font-bold">All Channels</span>
            <Image
              src={"/assets/search_icon.svg"}
              alt="search_icon"
              width={20}
              height={20}
              onClick={handleSearch}
              className="cursor-pointer"
            />
          </div>
        ) : (
          <SearchBar />
        )}

        <div className="mt-3">
          {channelsArray.map((channel, index) => (
            <ChannelCard key={index} channel={channel} showJoinButton={false} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllChannels;
