import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { Button } from "@/core/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";

export function ProfileAvatar({ online = true }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />

              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {online && (
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full"></div>
            )}
          </Button>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">John Doe</span>
            <span className="text-graydark text-sm">
              {online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
