"use client";
import { ProfileAvatar } from "./ProfileAvatar";
import { cn } from "@/core/lib/helper";
import { NotificationIcon } from "@/core/icons/NotificationIcon";
import { ChatIcon } from "@/core/icons/ChatIcon";
import { Popover, PopoverContent, PopoverTrigger } from "@/core/ui/popover";
import Notifications from "@/Features/Notifications";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}
const AuthMenu = ({ className }: Props) => {
  const pathname = usePathname();

  const [chatActive, setChatActive] = useState(false);

  const toggleChatActive = () => {
    setChatActive((prevState) => !prevState);
  };
  const isChatRoute = pathname.includes("/chat");
  return (
    <div
      className={cn(
        "rounded-full bg-greendarkest px-5 py-2 flex-shrink-0 flex items-center max-h-12 gap-1 container-drop-shadow",
        className
      )}
    >
      <div className="flex gap-4">
        <Link href={"/chat"}>
          <ChatIcon
            className="w-6 h-6 cursor-pointer"
            fill={isChatRoute ? "#79CD00" : "#265D5E"}
            onClick={toggleChatActive}
          />
        </Link>
        <Popover>
          <PopoverTrigger>
            <NotificationIcon className="w-6 h-6 " />
          </PopoverTrigger>
          <PopoverContent className="mt-4">
            <Notifications />
          </PopoverContent>
        </Popover>
      </div>
      <ProfileAvatar />
    </div>
  );
};

export default AuthMenu;
