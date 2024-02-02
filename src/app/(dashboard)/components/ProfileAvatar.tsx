"use client";
import { useLogoutMutation } from "@/api/Authentication/useLogoutMutation";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { cn } from "@/core/lib/helper";
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { Button } from "@/core/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}
export function ProfileAvatar({ className }: Props) {
  const { data } = useAuthSessionContext();
  const { mutate, status } = useLogoutMutation();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("flex gap-2 hover:bg-secondary/20", className)}
        >
          <div className="relative">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback className="capitalize">
                {data?.email.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {true && (
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          <div className="flex flex-col flex-1 items-start justify-start">
            <p className="text-white font-bold text-sm overflow-ellipsis">
              {data?.email.split("@")[0]}
            </p>
            <p className="text-graydark text-sm">{"Online"}</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-greendarkest cursor-pointer border-none text-white"
        align="end"
        forceMount
      >
        <Link href="/my-profile">
          <DropdownMenuItem className="cursor-pointer">
            View Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            // mutate();
            router.push("/login");
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
