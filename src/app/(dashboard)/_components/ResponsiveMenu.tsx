"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HomeIcon from "@/components/icons/HomeIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import RulesIcon from "@/components/icons/RulesIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import { cn } from "@/utils/cn";
import { ProfileAvatar } from "./ProfileAvatar";
import { useState, type SVGProps, useEffect } from "react";
import SheetChatIcon from "@/components/icons/SheetChatIcon";

interface Props {
  className?: string;
  initialOpen?: boolean;
}

const redirectToGmail = () => {
  // Construct the Gmail chat URL with the recipient email
  const recipientEmail = "support@vetyourpep.com";
  const gmailChatURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;

  // Open the Gmail chat URL in a new window
  window.open(gmailChatURL, "_blank");
};

const MenuLinks = [
  {
    name: "Home",
    path: "/", // Specify the route path
    icon: (props: SVGProps<SVGElement>) => <HomeIcon {...props} />,
  },
  {
    name: "All Channels",
    path: "/channels",
    icon: (props: SVGProps<SVGElement>) => <CalendarIcon {...props} />,
  },
  {
    name: "Rules",
    path: "/app-rules",
    icon: (props: SVGProps<SVGElement>) => <RulesIcon {...props} />,
  },
  {
    name: "Settings",
    path: "/account-settings",
    icon: (props: SVGProps<SVGElement>) => <SettingsIcon {...props} />,
  },
  {
    name: "Support",
    path: "/",
    onClick: redirectToGmail,
    icon: (props: SVGProps<SVGElement>) => <SupportIcon {...props} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: (props: SVGProps<SVGElement>) => <SheetChatIcon {...props} />,
  },
];

const ResponsiveMenu = ({ className, initialOpen }: Props) => {
  const [open, setOpen] = useState(initialOpen ?? true);

  useEffect(() => {
    setOpen(initialOpen ?? true);
  }, [initialOpen]);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Sheet onOpenChange={toggleOpen} open={open}>
      <SheetTrigger
        className={cn(
          "bg-greendarkest rounded-lg p-2 outline-none ",
          className
        )}
      >
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent
        className="bg-greenprimary flex flex-col justify-between border-none w-auto max-h-screen"
        onClick={toggleOpen}
      >
        <ul className="flex flex-col my-5 text-white">
          {MenuLinks.map((link, idx) => (
            <Link href={link.path} key={idx}>
              <li
                key={idx}
                className="flex gap-7 rounded-lg p-3 items-center min-w-60 hover:bg-greenaccent cursor-pointer"
                onClick={link.onClick}
                // onClick={toggleOpen}
              >
                <link.icon fill={"#79CD00"} width={20} height={20} />
                <span onClick={toggleOpen}>{link.name}</span>
              </li>
            </Link>
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
