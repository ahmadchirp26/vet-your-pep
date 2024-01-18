"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/core/ui/sheet";
import HomeIcon from "@/core/icons/HomeIcon";
import CalendarIcon from "@/core/icons/CalendarIcon";
import RulesIcon from "@/core/icons/RulesIcon";
import SettingsIcon from "@/core/icons/SettingsIcon";
import SupportIcon from "@/core/icons/SupportIcon";
import { cn } from "@/core/lib/helper";
import { ProfileAvatar } from "./ProfileAvatar";
import { type SVGProps } from "react";

interface Props {
  className?: string;
}

const MenuLinks = [
  {
    name: "Home",
    icon: (props: SVGProps<SVGElement>) => <HomeIcon {...props} />,
  },
  {
    name: "All Channels",
    icon: (props: SVGProps<SVGElement>) => <CalendarIcon {...props} />,
  },
  {
    name: "Rules",
    icon: (props: SVGProps<SVGElement>) => <RulesIcon {...props} />,
  },
  {
    name: "Settings",
    icon: (props: SVGProps<SVGElement>) => <SettingsIcon {...props} />,
  },
  {
    name: "Support",
    icon: (props: SVGProps<SVGElement>) => <SupportIcon {...props} />,
  },
];

const ResponsiveMenu = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn("bg-greendarkest rounded-lg p-2 outline-none", className)}
      >
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-greenprimary flex flex-col justify-between border-none w-auto max-h-screen">
        <ul className="flex flex-col my-5 text-white">
          {MenuLinks.map((link, idx) => (
            <li
              key={idx}
              className="flex gap-7 rounded-lg p-3 items-center min-w-60 hover:bg-greenaccent cursor-pointer"
            >
              <link.icon fill={"#79CD00"} width={20} height={20} />
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex text-gray-800 mt-auto w-full">
          <ProfileAvatar className="w-full bg-primary hover:bg-primary/60 transition-colors justify-between px-3 py-1 h-auto" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveMenu;
