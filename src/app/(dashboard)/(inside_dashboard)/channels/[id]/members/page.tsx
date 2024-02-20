"use client";

import MemberCard from "../_components/MemberCard";
import SearchBar from "@/app/(dashboard)/_components/SearchBar";
import { useState } from "react";
import AllChannels from "@/Features/AllChannels";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import Link from "next/link";

const Members = (props: { params: { id: string } }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const channelId = props.params.id;
  const { data, status } = useGetChannel(channelId);

  const channelMembers = data?.getChannelById?.members;
  // console.log("Channel Members", channelMembers);

  const filteredMembers = channelMembers?.filter((member) =>
    member.customer.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex gap-5 p-3">
      <div className="flex flex-col gap-5 w-[20%] max-lg:hidden">
        <AllChannels />
      </div>
      <div className="bg-greendarkest rounded-lg p-3 container-drop-shadow w-[80%] max-lg:w-full">
        <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-3">
          <span className="text-white text-lg font-bold">
            Members ({data?.getChannelById.members?.length ?? 0})
          </span>

          <div className="w-[300px] ">
            <SearchBar setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 p-5 max-xl:p-3 max-xl:gap-2 max-lg:justify-center max-lg:items-center">
          {filteredMembers?.map((member, index) => (
            <Link
              href={`/profile/${member.customer.id}`}
              key={member.customer.id}
            >
              <MemberCard
                key={index}
                username={member.customer.firstName}
                profileAvatar={member.customer.profileImage ?? undefined}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
