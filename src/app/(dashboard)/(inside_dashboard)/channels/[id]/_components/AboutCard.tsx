"use client";
import { useGetChannel } from "@/api/Channels/useGetChannel";

interface Props {
  channelId: string;
}
const AboutCard = ({ channelId }: Props) => {
  const { data, status } = useGetChannel(channelId);

  if (status === "pending") {
    return <AboutCardSkeleton />;
  }
  if (status === "error") {
    //[Todo]: add error
    return "Error";
  }

  return (
    <div className="text-center space-y-2 shadow-glow bg-greendarkest rounded-3xl p-2 sm:p-4">
      <p className="text-white font-bold text-lg">About</p>
      <p className="text-graylight text-sm">
        {data.getChannelById.about ?? ""}
      </p>
    </div>
  );
};

export const AboutCardSkeleton = () => {
  return (
    <div className="space-y-2 shadow-glow bg-greendarkest rounded-3xl p-2 sm:p-4">
      <div className="h-6 w-16 p-2 bg-greenlight rounded-lg animate-pulse mx-auto" />
      <div className="space-y-1">
        <div className="h-4 w-full bg-greenlight rounded-lg animate-pulse" />
        <div className="h-4 w-3/4 bg-greenlight rounded-lg animate-pulse" />
        <div className="h-4 w-1/2 bg-greenlight rounded-lg animate-pulse" />
      </div>
    </div>
  );
};

export default AboutCard;
