// ChannelCard.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { type APIGetChannelsData } from "@/api/Channels/useGetChannels";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import useJoinChannelMutation from "@/api/Channels/useJoinChannelMutation";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
interface ChannelCardProps {
  channel: NonNullable<APIGetChannelsData>["getChannels"]["results"][number];
  showJoinButton?: boolean;
  ButtonText?: string;
  isLandingPage?: boolean;
}

const ChannelCard = React.forwardRef<HTMLDivElement, ChannelCardProps>(
  (
    { channel, ButtonText, showJoinButton = true, isLandingPage = false },
    ref
  ) => {
    const router = useRouter();
    const joinChannelMutation = useJoinChannelMutation();

    return (
      <>
        <div
          ref={ref}
          className={`flex gap-3 w-full items-center hover:bg-greenaccent px-4 py-1.5 ${
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
              {channel.totalMembers} members
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
                        // router.push(`/channels/${channel.id}`);
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
  }
);
export const ChannelCardSkeleton = () => {
  return (
    <div className="flex gap-3 w-full items-center hover:bg-greenaccent px-4 py-1.5">
      <div className="rounded-full relative w-16 h-16">
        <div className="bg-greenlight animate-pulse rounded-full w-16 h-16" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-greenlight rounded-lg animate-pulse w-20 h-4" />
        <div className="bg-greenlight rounded-lg animate-pulse w-20 h-4" />
      </div>
    </div>
  );
};

ChannelCard.displayName = "ChannelCard";
export default ChannelCard;
