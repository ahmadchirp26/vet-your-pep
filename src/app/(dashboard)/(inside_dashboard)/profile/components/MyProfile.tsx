"use client";
import Image from "next/image";
import ProfileTabs from "./ProfileTabs";

import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import BackButton from "@/core/ui/backButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
const UserProfile = () => {
  const { data } = useCustomerDataQuery();

  console.log("Data", data);

  return (
    <>
      <div className="rounded-2xl container-drop-shadow bg-greendarkest p-6 w-2/3 max-lg:w-full flex-col gap-7">
        <div className="flex justify-between items-center">
          <BackButton />

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none bg-greenaccent p-2 rounded-full">
              <MoreVerticalIcon className="text-white cursor-pointer w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-greenaccent  text-white outline-none border-none "
              align="end"
              forceMount
            >
              <DropdownMenuItem className="cursor-pointer">
                Block
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center justify-between max-sm:flex-col gap-5 mt-5 ">
          <div className="flex items-center gap-5">
            <div className="rounded-full">
              {data?.getCustomerData.profileImage ? (
                <Image
                  src={data?.getCustomerData.profileImage}
                  alt="profile_image"
                  className="cursor-pointer rounded-full object-cover border-4 border-greensharp"
                  height={160}
                  width={160}
                />
              ) : (
                <Image
                  src={"/assets/dummy_avatar.png"}
                  alt="user-profile-pic"
                  className="cursor-pointer rounded-full object-cover border-4 border-greensharp"
                  height={160}
                  width={160}
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">{`${data?.getCustomerData.firstName} ${data?.getCustomerData.lastName}`}</span>
                <Image
                  src={"/assets/verified_icon.svg"}
                  alt="verified_icon"
                  height={15}
                  width={15}
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/email_icon.svg"}
                  alt="email_icon"
                  height={13}
                  width={13}
                />
                <span className="text-graylight text-sm">
                  {data?.getCustomerData.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {data?.getCustomerData.cellPhone && (
                  <>
                    <Image
                      src={"/assets/phone_icon.svg"}
                      alt="phone_icon"
                      height={13}
                      width={13}
                    />
                    <span className="text-graylight text-sm">
                      {data?.getCustomerData.cellPhone}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 max-sm:flex-row">
            <div className="flex items-center gap-3 p-2 border border-white rounded-2xl w-32 justify-center cursor-pointer">
              <Image
                src={"/assets/bell_icon.svg"}
                alt="follow_icon"
                width={12}
                height={12}
              />
              <span className="text-white">Follow</span>
            </div>
            <div className="flex items-center gap-3 p-2 border border-white rounded-2xl w-32 justify-center cursor-pointer">
              <Image
                src={"/assets/message_icon.svg"}
                alt="message_icon"
                width={12}
                height={12}
              />
              <span className="text-white">Message</span>
            </div>
          </div>
        </div>
        <div className=" w-full p-4 max-sm:p-0 max-sm:mt-4">
          <ProfileTabs />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
