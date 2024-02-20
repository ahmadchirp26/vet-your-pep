"use client";
import { useLogoutMutation } from "@/api/Authentication/useLogoutMutation";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import { cn } from "@/utils/cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}
export function ProfileAvatar({ className }: Props) {
  const { data, status: customerDataStatus } = useCustomerDataQuery();
  const { mutate, status } = useLogoutMutation();
  const router = useRouter()
  if (customerDataStatus === "pending") {
    return (
      <div className="flex gap-2 ml-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="flex flex-col gap-1 flex-1 items-start justify-start">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-12 h-2" />
        </div>
      </div>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("flex gap-2 hover:bg-secondary/20", className)}
        >
          <div className="relative">
            <Avatar className="h-8 w-8">
              {data?.getCustomerData.profileImage ? (
                <AvatarImage
                  src={data?.getCustomerData.profileImage}
                  alt="@shadcn"
                />
              ) : (
                <AvatarImage src={"/assets/dummy_avatar.png"} alt="@shadcn" />
              )}

              <AvatarFallback className="capitalize">
                {data?.getCustomerData.email.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {true && (
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          <div className="flex flex-col flex-1 items-start justify-start">
            <p className="text-white font-bold text-sm overflow-ellipsis">
              {`${data?.getCustomerData.firstName} ${data?.getCustomerData.lastName}`}
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
        <Link href={`/profile/${data?.getCustomerData.id}`}>
          <DropdownMenuItem className="cursor-pointer">
            View Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            mutate(undefined, {
              onSuccess: () => {
                router.replace('/login')
              }
            });
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
