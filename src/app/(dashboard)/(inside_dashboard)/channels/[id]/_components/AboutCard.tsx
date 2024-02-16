"use client";
import { useGetChannel } from "@/api/Channels/useGetChannel";

interface Props {
  channelId: string;
}
const AboutCard = ({ channelId }: Props) => {
  const { data, status } = useGetChannel(channelId);
  console.log("s", data);
  if (status === "pending") {
    //[Todo]: add skeleton
    return <p>{"Loading"}</p>;
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

export default AboutCard;
