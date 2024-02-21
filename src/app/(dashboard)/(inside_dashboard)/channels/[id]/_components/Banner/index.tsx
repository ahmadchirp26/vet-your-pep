"use client";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import ChannelRulesModal from "./ChannelRulesModal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import EditCoverImage from "./EditCoverImage";
import EditChannelImage from "./EditChannelImage";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";

interface Props {
  className?: string;
  channelId: string;
  isEditMode?: boolean;
}
const Banner = ({ channelId, className, isEditMode = false }: Props) => {
  const { data, status } = useGetChannel(channelId);
  const { data: session } = useAuthSessionContext();
  const router = useRouter();
  const isModerator = session?.sub === data?.getChannelById.moderator.id;
  if (status === "pending") {
    //[Todo]: add skeleton
    return <p>{"Loading..."}</p>;
  }
  if (status === "error") {
    //[Todo]: add error
    return <p>{"Error"}</p>;
  }
  return (
    <div
      className={cn("rounded-t-2xl relative p-4", className)}
      style={{
        backgroundImage: `url(${data.getChannelById.backgroundImage ?? "https://placehold.co/800x200/627f7f/ffff"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
      }}
    >
      <div className="absolute inset-0 w-full bg-black bg-opacity-30 overflow-hidden rounded-t-2xl"></div>
      <div className="absolute rounded-full flex items-center justify-center w-32 h-32 bottom-5 overflow-hidden">
        <Image
          {...(data.getChannelById.image
            ? { src: data.getChannelById.image }
            : {
                loader: ({ src }) => `https://placehold.co/${src}`,
                src: "112x112/ffff/627f7f?text=Profile",
              })}
          alt="profile_picture"
          layout={"fill"}
        />
        {isEditMode && (
          <div className="absolute">
            <EditChannelImage
              channelId={channelId}
              channelTitle={data.getChannelById.title}
            />
          </div>
        )}
      </div>
      <div className="absolute top-5 right-5">
        {isEditMode ? (
          <EditCoverImage
            channelId={channelId}
            channelTitle={data.getChannelById.title}
          />
        ) : (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                className={
                  "h-auto p-2 bg-greensharp hover:bg-greensharp/80 rounded-full"
                }
              >
                <MoreVerticalIcon className="text-white w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-greenaccent  text-white outline-none border-none "
              align="end"
              forceMount
            >
              <DropdownMenuItem
                className="cursor-pointer p-0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <ChannelRulesModal
                  channelId={channelId}
                  className={"px-2 py-1.5 flex-1"}
                />
              </DropdownMenuItem>

              {isModerator && (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    router.push(`/channels/${channelId}/edit`);
                  }}
                >
                  Edit Channel
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="absolute bottom-5 right-5 flex flex-col">
        <span className="text-white font-bold text-4xl max-lg:text-2xl max-sm:text-xl">
          {data.getChannelById.title}
        </span>
        <span className="text-greensharp text-right capitalize">{`${data.getChannelById.status.toLocaleLowerCase()} group`}</span>
      </div>
    </div>
  );
};

export default Banner;
