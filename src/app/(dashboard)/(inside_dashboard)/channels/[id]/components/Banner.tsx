"use client";
import Image from "next/image";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import ChannelRules from "./ChannelRules";
import Link from "next/link";

const Banner = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <div
        className="rounded-2xl relative "
        style={{
          backgroundImage: `url('/assets/banner_cover_image.jpg')`,
          backgroundSize: "cover", // Optional: Adjust the background size based on your design needs
          backgroundPosition: "center", // Optional: Adjust the background position
          height: "200px", // Optional: Set the height
        }}
      >
        <div className="rounded-full w-40 h-40  absolute m-5 max-sm:w-28 max-sm:h-28 ">
          <Image
            src={"/assets/banner_profile_image.png"}
            alt="profile_picture"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Link href="/channels/:id/edit" className="cursor-pointer">
            <div className="absolute top-5 right-5 bg-greensharp rounded-3xl flex justify-center items-center cursor-pointer p-2 outline-none">
              <Image
                src={"/assets/pencil_icon.svg"}
                alt="pencil_icon"
                width={18}
                height={18}
              />
            </div>
          </Link>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="absolute top-5 right-5 bg-greensharp rounded-3xl flex justify-center items-center cursor-pointer p-2 outline-none">
              {" "}
              <MoreVerticalIcon 
                className="text-white cursor-pointer w-4 h-4"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-greendarkest  text-white outline-none border-none "
              align="end"
              forceMount
            >
              <DropdownMenuItem className="cursor-pointer">
                Mute Notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Leave Group
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleDialog}
              >
                Channel rules
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer sm:hidden">
                Report Group
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          {openDialog && (
            <ChannelRules
              isOpen={openDialog}
              onClose={() => setOpenDialog(false)}
            />
          )}
        </div>
        <div className="absolute bottom-5 right-5 flex flex-col">
          <span className="text-white font-bold text-4xl max-lg:text-2xl max-sm:text-xl">
            AI Discussion
          </span>
          <span className="text-greensharp text-right">Public Group</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
