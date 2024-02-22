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
    <div className="bg-greendarkest rounded-3xl pb-4 px-4 space-y-2 shadow-glow">
      <div className="flex justify-between items-center py-2">
        <span className="text-white text-sm">
            Members ({data.getChannelById.members?.length ?? 0})
          </span>
        <Button variant={"link"} asChild className={"text-white p-0"}>
          <Link href={`/channels/${channelId}/members`}>See all</Link>
        </Button>
        </div>
      <div className={"px-2"}>
        {data.getChannelById.members?.length && (
          <Carousel className={"px-6"}>
            <CarouselPrevious />
            <CarouselContent className="w-48 px-2">
              {data.getChannelById.members.map((member, memberIndex) => (
                <CarouselItem
                  className="flex justify-center items-center w-12 h-12 basis-1/3"
                  key={memberIndex}
                >
                  <Link href={`/profile/${member.customer.id}`}>
                    <Avatar
                      className={
                        "hover:outline-2 hover:outline hover:outline-greensharp transition-all"
                      }
                    >
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
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
};
  );
};

export default ChannelMembers;
