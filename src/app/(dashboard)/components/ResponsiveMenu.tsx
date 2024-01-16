"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/core/ui/sheet";
import HomeIcon from "@/core/icons/HomeIcon";
import CalendarIcon from "@/core/icons/CalendarIcon";
import RulesIcon from "@/core/icons/RulesIcon";
import SettingsIcon from "@/core/icons/SettingsIcon";
import SupportIcon from "@/core/icons/SupportIcon";

const ResponsiveMenu = () => {
  return (
    <>
      <div>
        {/* Sheet */}
        <Sheet>
          <SheetTrigger className="bg-greendarkest rounded-lg p-2 outline-none">
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent className="bg-greenprimary border-none text-white">
            <ul className="flex flex-col my-5 text-white">
              <li className="flex gap-7 rounded-lg p-3 items-center  hover:bg-greenaccent cursor-pointer">
                <HomeIcon fill={"#79CD00"} width={20} height={20} />
                <span>Home</span>
              </li>
              <li className="flex gap-7 rounded-lg p-3 items-center  hover:bg-greenaccent cursor-pointer">
                <CalendarIcon fill={"#79CD00"} width={20} height={20} />
                <span>All Channels</span>
              </li>
              <li className="flex gap-7 rounded-lg p-3 items-center  hover:bg-greenaccent cursor-pointer">
                <RulesIcon fill={"#79CD00"} width={20} height={20} />
                <span>Rules</span>
              </li>
              <li className="flex gap-7 rounded-lg p-3 items-center  hover:bg-greenaccent cursor-pointer">
                <SettingsIcon fill={"#79CD00"} width={20} height={20} />
                <span>Settings</span>
              </li>
              <li className="flex gap-7 rounded-lg p-3 items-center  hover:bg-greenaccent cursor-pointer">
                <SupportIcon fill={"#79CD00"} width={20} height={20} />
                <span>Support</span>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ResponsiveMenu;
