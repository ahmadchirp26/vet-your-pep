import Image, { type StaticImageData } from "next/image";

interface Channel {
  image: StaticImageData;
  title: string;
  members: string;
}

interface ChannelCardProps {
  channel: Channel; // Use the Event interface for the event prop
}

const ChannelCard = ({ channel }: ChannelCardProps) => {
  return (
    <>
      <div className="flex gap-4 items-center mt-4 w-full">
        <div className="rounded-full w-10 h-10">
          <Image src={channel.image} alt="channel_image" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-white text-sm">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members} members
          </span>
        </div>
      </div>
    </>
  );
};

export default ChannelCard;
