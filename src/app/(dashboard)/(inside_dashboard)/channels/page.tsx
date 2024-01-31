"use client";

import { useState } from "react";
import Image from "next/image";

import SearchBar from "@/app/(dashboard)/components/SearchBar";
import { channels } from "@/data/facebackend";
import ChannelCard from "@/Features/Cards/ChannelCard";
import AllChannelCard from "./components/AllChannelCard";
import Link from "next/link";

const Channels = () => {
  const channelsArray = channels;
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const filteredChannels = channelsArray.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div className="mt-3 flex w-full flex-wrap gap-7 justify-center items-center ">
            {filteredChannels.map((channel, index) => (
              <Link key={index} href={"/channels/:id"} className="">
                <AllChannelCard
                  key={index}
                  channel={channel}
                  showJoinButton={true}
                  ButtonText="Join"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-greendarkest w-full h-full flex flex-col rounded-2xl p-4 container-drop-shadow ">
          <div className="flex  mt-4">
            <span className="text-white font-bold">My Channels</span>
          </div>
          <div className="mt-3 flex flex-col gap-3  ">
            {channelsArray.map((channel, index) => (
              <ChannelCard
                key={index}
                channel={channel}
                showJoinButton={true}
                ButtonText="View"
                isLandingPage={false}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
