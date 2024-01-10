"use client";
import { useState } from "react";
import HomeIcon from "@/core/icons/HomeIcon";
import CalendarIcon from "@/core/icons/CalendarIcon";
import RulesIcon from "@/core/icons/RulesIcon";
import SettingsIcon from "@/core/icons/SettingsIcon";
import SupportIcon from "@/core/icons/SupportIcon";

const LeftSideBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  console.log(activeIcon);

  const handleIconClick = (icon: any) => {
    setActiveIcon(icon === activeIcon ? null : icon);
  };

  const isIconActive = (icon: any) => icon === activeIcon;

  return (
    <div className="bg-greendarkest px-2 py-10 rounded-full flex-col gap-5 container-drop-shadow w-16 items-center justify-center">
      <div className="flex flex-col gap-10 items-center justify-center w-full">
        <HomeIcon
          fill={isIconActive("home") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("home")}
        />
        <CalendarIcon
          fill={isIconActive("calendar") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("calendar")}
        />
        <RulesIcon
          fill={isIconActive("rules") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("rules")}
        />
        <SettingsIcon
          fill={isIconActive("settings") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("settings")}
        />
        <SupportIcon
          fill={isIconActive("support") ? "#79CD00" : "#ACACAC"}
          onClick={() => handleIconClick("support")}
        />
      </div>
    </div>
  );
};

export default LeftSideBar;