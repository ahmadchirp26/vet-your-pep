// ChannelCard.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { type APIGetChannelsData } from "@/api/Channels/useGetChannels";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import useJoinChannelMutation from "@/api/Channels/useJoinChannelMutation";
import { useRouter } from "next/navigation";

interface ChannelCardProps {
  channel: NonNullable<APIGetChannelsData>["getChannels"]["results"][number];
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
  const joinChannelMutation = useJoinChannelMutation();
  // console.log("Channel Members", channel);
  return (
    <>
      <div
        className={`flex gap-3 w-full items-center mt-5 ${
          isLandingPage
            ? "max-xl:flex-col max-xl:justify-center"
            : "max-md:flex-col max-md:justify-center "
        }`}
      >
        <div className="rounded-full relative w-16 h-16">
          {channel.image ? (
            <Image
              className={"rounded-full"}
              layout={"fill"}
              src={channel.image}
              alt="channel_image"
            />
          ) : (
            <Image
              src={"/assets/logo.svg"}
              alt="channel_image"
              objectFit="cover"
              layout={"fill"}
              className="rounded-full"
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
