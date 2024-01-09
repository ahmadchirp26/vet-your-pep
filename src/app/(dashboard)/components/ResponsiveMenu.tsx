"use client";

import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";

const ResponsiveMenu = () => {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-greendarkest rounded-lg p-2 outline-none">
            <Menu className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-greenprimary border-none text-white">
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Calendar</DropdownMenuItem>
            <DropdownMenuItem>Rules</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ResponsiveMenu;
