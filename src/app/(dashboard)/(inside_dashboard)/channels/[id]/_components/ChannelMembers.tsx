"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  channelId: string;
}
const ChannelMembers = ({ channelId }: Props) => {
  const { data, status } = useGetChannel(channelId);
  if (status === "pending") {
    //[Todo]: Add loading skeleton
    return <div>Loading...</div>;
  }
  if (status === "error") {
    //[Todo]: Add error message
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <div className="bg-greendarkest rounded-3xl p-4 mt-5 container-drop-shadow">
        <div className="flex justify-between">
          <span className="text-white text-sm ">
            Members ({data.getChannelById.members?.length ?? 0})
          </span>
          <Link
            href={`/channels/${channelId}/members`}
            className="text-underline text-greensharp text-sm"
          >
            See all
          </Link>
        </div>
        {data.getChannelById.members?.length && (
          <Carousel className="mt-3">
            <CarouselContent>
              {data.getChannelById.members.map((member, memberIndex) => (
                <CarouselItem
                  className="flex justify-center items-center basis-3/3"
                  key={memberIndex}
                >
                  <Link href={`/profile/${member.customer.id}`}>
                    <Avatar className="hover:bg-greenaccent rounded-md cursor-pointer ">
                      <AvatarImage
                        src={member.customer.profileImage ?? undefined}
                        alt={member.customer.firstName}
                        className="rounded-full"
                      />
                      <AvatarFallback>
                        {member.customer.firstName
                          .charAt(0)
                          .toLocaleUpperCase() +
                          member.customer.lastName.toUpperCase().charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </>
  );
};

export default ChannelMembers;
