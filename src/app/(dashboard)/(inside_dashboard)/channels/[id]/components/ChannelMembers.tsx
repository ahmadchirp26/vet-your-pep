import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/ui/carousel";

import MemberCard from "./MemberCard";
import { channelMembers } from "@/data/facebackend";
import Link from "next/link";

const ChannelMembers = () => {
  const pairedMembers = [];
  for (let i = 0; i < channelMembers.length; i += 2) {
    pairedMembers.push(channelMembers.slice(i, i + 2));
  }

  return (
    <>
      <div className="bg-greendarkest rounded-3xl p-4 mt-5 container-drop-shadow">
        <div className="flex justify-between">
          <span className="text-white text-sm ">Members (14.1k)</span>
          <Link
            href={"/channels/:id/members"}
            className="text-underline text-greensharp text-sm"
          >
            See all
          </Link>
        </div>

        {/* <div className="flex overflow:auto gap-2">
          {channelMembers.map((member, index) => (
            <MemberCard
              key={index}
              username={member.username}
              profileAvatar={member.profileAvatar}
            />
          ))}
        </div> */}

        <Carousel>
          <CarouselContent>
            {pairedMembers.map((pair, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                {pair.map((member, memberIndex) => (
                  <MemberCard
                    key={memberIndex}
                    username={member.username}
                    profileAvatar={member.profileAvatar}
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default ChannelMembers;
