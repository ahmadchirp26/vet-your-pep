// ChannelCard.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useJoinChannel from "@/api/Channels/useJoinChannelMutation";
import { type APIGetChannelsData } from "@/api/Channels/useGetChannels";
import { useRouter } from "next/navigation";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";

interface ChannelCardProps {
  channel: NonNullable<APIGetChannelsData>["getChannels"]["results"][number];
  showJoinButton?: boolean;
  ButtonText?: string;
}

const AllChannelCard = ({
  channel,
  ButtonText,
  showJoinButton = true,
}: ChannelCardProps) => {
  const router = useRouter();
  const joinChannelMutation = useJoinChannel();
  return (
    <>
      <div className="flex gap-3 w-[150px] justify-center  mt-5 ">
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="rounded-full w-16 h-16">
            {channel.image ? (
              <Image
                src={channel.image}
                alt="channel_image"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src={"/assets/logo.svg"}
                alt="channel_image"
                width={100}
                height={100}
              />
            )}
          </div>

          <span className="font-bold text-white">{channel.title}</span>
          <span className="text-graylight text-sm">
            {channel.members?.length ?? 0} members
          </span>

          {showJoinButton && (
            <div className="flex justify-center mt-2">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllChannelCard;
