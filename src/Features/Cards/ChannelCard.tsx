// ChannelCard.tsx
import Image from "next/image";
import { Button } from "@/core/ui/button";
import { type APIGetChannelsData } from "@/api/Channels/useGetChannels";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import useJoinChannel from "@/api/Channels/useJoinChannel";
import { useRouter } from "next/navigation";

interface ChannelCardProps {
  channel: NonNullable<APIGetChannelsData>["listChannels"]["results"][number];
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
  const router = useRouter();
  const joinChannelMutation = useJoinChannel();
  return (
    <>
      <div
        className={`flex gap-3 w-full items-center mt-5 ${
          isLandingPage
            ? "max-xl:flex-col max-xl:justify-center"
            : "max-md:flex-col max-md:justify-center "
        }`}
      >
        <div className="rounded-full w-16 h-16">
          {channel.image ? (
            <Image src={channel.image} alt="channel_image" />
          ) : (
            <Image
              src={"/assets/logo.svg"}
              alt="channel_image"
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="flex flex-col gap-1 max-xl:text-center">
          <span className="font-bold text-white">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members?.length} members
          </span>
        </div>

        {showJoinButton && (
          <div
            className={`ml-auto ${
              isLandingPage ? "max-xl:ml-0" : "max-md:ml-0"
            }`}
          >
            {/* <Link href={`channels/${channel.id}`}> */}
            <Button
              className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
              type="button"
              onClick={() =>
                joinChannelMutation.mutate(
                  {
                    channelId: channel.id,
                  },

                  {
                    onSuccess: () => {
                      router.push(`/channels/${channel.id}`);
                    },
                  }
                )
              }
            >
              {joinChannelMutation.status === "pending" ? (
                <SpinnerCircle />
              ) : (
                ButtonText
              )}
            </Button>
            {/* </Link> */}
          </div>
        )}
      </div>
    </>
  );
};

export default ChannelCard;
