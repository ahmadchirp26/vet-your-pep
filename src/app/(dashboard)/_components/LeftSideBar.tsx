"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import HomeIcon from "@/components/icons/HomeIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import RulesIcon from "@/components/icons/RulesIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SupportIcon from "@/components/icons/SupportIcon";

const LeftSideBar = () => {
  // const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname);
  const [activeIcon, setActiveIcon] = useState("");
  // console.log(activeIcon);
  useEffect(() => {
    // Extract route parameter and set active icon accordingly
    const routeParam = pathname.replace("/", "");
    // console.log(routeParam);
    setActiveIcon(routeParam || "home");
  }, [pathname]);

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
    if (icon === "support") {
      redirectToGmail(); // Call redirectToGmail when support icon is clicked
    }
  };

  const redirectToGmail = () => {
    // Construct the Gmail chat URL with the recipient email
    const recipientEmail = "support@vetyourpep.com";
    const gmailChatURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;

    // Open the Gmail chat URL in a new window
    window.open(gmailChatURL, "_blank");
  };

  const isIconActive = (icon: any) => icon === activeIcon;

  return (
    <div className="bg-greendarkest px-2 py-10 rounded-full flex-col gap-5 container-drop-shadow w-16 items-center justify-center">
      <div className="flex flex-col gap-10 items-center justify-center w-full">
        <Link href="/">
          <HomeIcon
            fill={isIconActive("home") ? "#79CD00" : "#ACACAC"}
            onClick={() => handleIconClick("home")}
            width={33}
            height={33}
          />
        </Link>
        <Link href="/channels">
          <CalendarIcon
            fill={isIconActive("channels") ? "#79CD00" : "#ACACAC"}
            onClick={() => handleIconClick("channels")}
            width={33}
            height={33}
          />
        </Link>
        <Link href="/app-rules">
          <RulesIcon
            fill={isIconActive("app-rules") ? "#79CD00" : "#ACACAC"}
            onClick={() => handleIconClick("app-rules")}
            width={33}
            height={33}
          />
        </Link>
        <Link href="/account-settings">
          <SettingsIcon
            fill={isIconActive("account-settings") ? "#79CD00" : "#ACACAC"}
            onClick={() => handleIconClick("account-settings")}
            width={33}
            height={33}
          />
        </Link>

        <SupportIcon
          fill={isIconActive("support") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("support")}
          width={33}
          height={33}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LeftSideBar;
