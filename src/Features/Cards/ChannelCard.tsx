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
  isLandingPage?: boolean;
}

const ChannelCard = ({
  channel,
  ButtonText,
  showJoinButton = true,
  isLandingPage = false,
}: ChannelCardProps) => {
  return (
    <>
      <div
        className={`flex gap-3 w-full items-center mt-5 ${
          isLandingPage
            ? "max-xl:flex-col max-xl:justify-center"
            : "max-md:flex-col max-md:justify-center "
        }`}
      >
        <div className="rounded-full w-12 h-12">
          <Image src={channel.image} alt="channel_image" />
        </div>
        <div className="flex flex-col gap-1 max-xl:text-center">
          <span className="font-bold text-white">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members} members
          </span>
        </div>

        {showJoinButton && (
          <div
            className={`ml-auto ${
              isLandingPage ? "max-xl:ml-0" : "max-md:ml-0"
            }`}
          >
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
    </>
  );
};

export default ChannelCard;
