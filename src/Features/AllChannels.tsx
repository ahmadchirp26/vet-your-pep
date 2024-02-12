"use client";

import Image from "next/image";
import { useState } from "react";

import SearchBar from "@/app/(dashboard)/components/SearchBar";
import ChannelCard from "@/Features/Cards/ChannelCard";
import Link from "next/link";
import useGetChannels from "@/api/Channels/useGetChannels";

const AllChannels = () => {
  const { data } = useGetChannels({
    limit: 100,
    joined: true,
  });
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const allChannelsArray = data?.listChannels.results;

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const filteredChannels = allChannelsArray?.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 ">
        {!activeSearch ? (
          <div className="flex items-center justify-between mt-2">
            <span className="text-white font-bold">My Channels</span>
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
          <SearchBar setSearchTerm={setSearchTerm} />
        )}

        <div className="mt-3">
          {filteredChannels?.map((channel, index) => (
            <Link
              key={index}
              href={`channels/${channel.id}`}
              className="hover:bg-greensharp"
            >
              <ChannelCard
                channel={channel}
                showJoinButton={false}
                isLandingPage={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllChannels;
