"use client";

import Image from "next/image";
import { useState } from "react";

import SearchBar from "@/app/(dashboard)/components/SearchBar";
import ChannelCard from "@/Features/Cards/ChannelCard";
import Link from "next/link";
import useGetChannels from "@/api/Channels/useGetChannels";
import { Skeleton } from "@/core/ui/skeleton";

const AllChannels = () => {
  const { data, status } = useGetChannels({
    limit: 100,
    joined: true,
  });
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const allChannelsArray = data?.getMyChannels.results;

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const filteredChannels = allChannelsArray?.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  if (status === "error") {
    return (
      <div className="flex flex-col rounded-3xl container-drop-shadow bg-greendarkest p-4 min-w-[330px] max-xl:min-w-[160px] max-lg:min-w-[140px]">
        <span className="text-white font-bold mt-3 max-lg:text-center">
          My Channels
        </span>

        <span className="mt-5 text-greensharp text-center">
          Error fetching Channels
        </span>
      </div>
    );
  }

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

        {status === "pending" ? (
          <div className=" flex gap-3 justify-center p-4 items-center">
            <Skeleton className="h-12 w-60 rounded-lg" />
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default AllChannels;
