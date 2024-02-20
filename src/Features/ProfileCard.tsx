"use client";

import { Button } from "@/core/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FriendsIcon } from "@/core/icons/FriendsIcon";

import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import { Skeleton } from "@/core/ui/skeleton";
import { Avatar, AvatarImage } from "@/core/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
const ProfileCard = () => {
  const { data, status } = useCustomerDataQuery();
  // console.log("Customer Data", data);
  const userId = data?.getCustomerData?.id;
  return (
    <div className="flex flex-col rounded-3xl container-drop-shadow">
      {status === "pending" ? (
        <div className="bg-greenaccent rounded-t-3xl flex gap-3 justify-center p-4 items-center">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="w-24 h-4" />
        </div>
      ) : (
        <div className="bg-greenaccent rounded-t-3xl flex gap-3 justify-center p-4 items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={
                data?.getCustomerData.profileImage ?? "/assets/dummy_avatar.png"
              }
              alt="@shadcn"
            />
            <AvatarFallback className="flex items-center justify-center capitalize bg-greendarkest text-white w-12 h-12 rounded-full">
              {data?.getCustomerData.email.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="text-white font-semibold">
            {data?.getCustomerData.firstName +
              " " +
              data?.getCustomerData.lastName}
          </p>
        </div>
      )}
      <div className="bg-greendarkest rounded-b-3xl  p-4 flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <FriendsIcon className="w-6 h-6" />
          <span className="text-graylight text-sm">
            {data?.getCustomerData?.totalFollowers ?? 0} Followers
          </span>
        </div>
        <div className="bg-greenaccent p-2 w-full justify-center rounded-3xl gap-2 flex items-center">
          <Image
            src={"/assets/verified_icon.svg"}
            alt="verified_badge"
            width={20}
            height={20}
          />
          <span className="text-white">Verified</span>
        </div>
        <div className="flex w-full justify-center items-center">
          <Link href={`/profile/${userId}`}>
            <Button
              className="rounded-full border border-white  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-36"
              type="submit"
            >
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
