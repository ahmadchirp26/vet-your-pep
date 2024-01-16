"use client";
import { useLogoutMutation } from "@/api/Authentication/useLogoutMutation";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { Button } from "@/core/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";

export function ProfileAvatar({ online = true }) {
  const { data } = useAuthSessionContext();
  const { mutate, status } = useLogoutMutation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback className="capitalize">
                {data?.email.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {online && (
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full"></div>
            )}
          </Button>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">{data?.email}</span>
            <span className="text-graydark text-sm">
              {online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-greendarkest cursor-pointer border-none text-white"
        align="end"
        forceMount
      >
        <DropdownMenuItem className="cursor-pointer">
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            mutate();
          }}
          disabled={status === "pending"}
        >
          {status === "pending" ? (
            <>
              <SpinnerCircle />
              <p>{"Logging out..."}</p>{" "}
            </>
          ) : (
            <p>{"Logout"}</p>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
