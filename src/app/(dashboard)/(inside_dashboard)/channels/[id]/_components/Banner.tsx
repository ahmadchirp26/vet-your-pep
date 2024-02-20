"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import { useState } from "react";
import ChannelRules from "./ChannelRules";

interface Props {
  className?: string;
  channelId: string;
}
const Banner = ({ channelId, className }: Props) => {
  const [isChannelRulesOpen, setIsChannelRulesOpen] = useState(false);
  const { data, status } = useGetChannel(channelId);
  const { data: userData } = useCustomerDataQuery();
  // console.log("User Data", userData);
  // console.log("Channel Data", data);
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
        backgroundImage: `url('https://placehold.co/800x200/00000/ACACAC?text=Cover')`,
        backgroundSize: "cover", // Optional: Adjust the background size based on your design needs
        backgroundPosition: "center", // Optional: Adjust the background position
        height: "200px", // Optional: Set the height
      }}
    >
      <div className="absolute rounded-full w-32 h-32 bottom-5 overflow-hidden">
        <Image
          loader={({ src }) => `https://placehold.co/${src}`}
          src={"112x112/ACACAC/00000?text=Profile"}
          alt="profile_picture"
          layout="fill"
        />
      </div>
      {data?.getChannelById?.moderator?.id === userData?.getCustomerData?.id ? (
        <div>
          <Link href={`/channels/${channelId}/edit`} className="cursor-pointer">
            <div className="absolute top-5 right-5 bg-greensharp rounded-3xl flex justify-center items-center cursor-pointer p-2 outline-none">
              <Image
                src={"/assets/pencil_icon.svg"}
                alt="pencil_icon"
                width={18}
                height={18}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="absolute top-5 right-5 bg-greensharp rounded-3xl flex justify-center items-center cursor-pointer p-2 outline-none">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <MoreVerticalIcon className="text-white cursor-pointer w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-greenaccent  text-white outline-none border-none "
              align="end"
              forceMount
            >
              <DropdownMenuItem
                onClick={() => setIsChannelRulesOpen(true)}
                className="cursor-pointer"
              >
                Channel Rules
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ChannelRules
            isOpen={isChannelRulesOpen}
            onClose={() => setIsChannelRulesOpen(false)}
            channelId={channelId}
          />
        </div>
      )}
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
