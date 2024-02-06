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
            {channelMembers.map((member, memberIndex) => (
              <CarouselItem
                className="flex justify-center items-center basis-3/3"
                key={memberIndex}
              >
                <MemberCard
                  key={memberIndex}
                  username={member.username}
                  profileAvatar={member.profileAvatar}
                />
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
