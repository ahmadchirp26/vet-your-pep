// ChannelCard.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/core/ui/button";

interface Channel {
  image: StaticImageData;
  title: string;
  members: string;
}

interface ChannelCardProps {
  channel: Channel;
  showJoinButton?: boolean; // Optional prop to show/hide the Join button
}

const ChannelCard = ({ channel, showJoinButton = true }: ChannelCardProps) => {
  return (
    <>
      <div className="flex gap-3 w-full items-center mt-5">
        <div className="rounded-full w-12 h-12">
          <Image src={channel.image} alt="channel_image" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-white">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members} members
          </span>
        </div>
        {showJoinButton && (
          <div className="ml-auto">
            <Link href={`/join/${channel.title}`}>
              <Button
                className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
                type="button"
              >
                Join
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ChannelCard;
