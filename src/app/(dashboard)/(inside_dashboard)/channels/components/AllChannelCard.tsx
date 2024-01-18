// ChannelCard.tsx
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/core/ui/button";

interface Channel {
  image: StaticImageData;
  title: string;
  members: string;
}

interface ChannelCardProps {
  channel: Channel;
  showJoinButton?: boolean;
  ButtonText?: string;
}

const AllChannelCard = ({
  channel,
  ButtonText,
  showJoinButton = true,
}: ChannelCardProps) => {
  return (
    <>
      <div className="flex gap-3 w-[150px] justify-center  mt-5 ">
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="rounded-full w-16 h-16">
            <Image src={channel.image} alt="channel_image" />
          </div>

          <span className="font-bold text-white">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members} members
          </span>

          {showJoinButton && (
            <div className="flex justify-center mt-2">
              <Link href="/channels/:id">
                <Button
                  className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
                  type="button"
                >
                  {ButtonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllChannelCard;
