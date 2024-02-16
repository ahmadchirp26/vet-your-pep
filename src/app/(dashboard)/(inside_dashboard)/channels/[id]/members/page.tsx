"use client";

import { channelMembers } from "@/data/facebackend";
import Image from "next/image";
import MemberCard from "../_components/MemberCard";
import SearchBar from "@/app/(dashboard)/components/SearchBar";
import { useState } from "react";
import AboutCard from "../_components/AboutCard";
import AllChannels from "@/Features/AllChannels";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = channelMembers.filter((member) =>
    member.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex gap-5 p-3">
      <div className="flex flex-col gap-5 w-[20%] max-lg:hidden">
        
        <AllChannels />
      </div>
      <div className="bg-greendarkest rounded-lg p-3 container-drop-shadow w-[80%] max-lg:w-full">
        <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-3">
          <span className="text-white text-lg font-bold">Members (14.1k)</span>

          <div className="w-[300px] ">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 p-5 max-xl:p-3 max-xl:gap-2 max-lg:justify-center max-lg:items-center">
          {filteredMembers.map((member, index) => (
            <MemberCard
              key={index}
              username={member.username}
              profileAvatar={member.profileAvatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
