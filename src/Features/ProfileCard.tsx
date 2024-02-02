"use client";

import { Button } from "@/core/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FriendsIcon } from "@/core/icons/FriendsIcon";

import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
const ProfileCard = () => {
  const { data } = useCustomerDataQuery();
  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow">
        <div className="bg-greenaccent rounded-t-3xl  flex gap-3 justify-center  p-4 items-center">
          <div className="rounded-full w-12 h-12">
            {data?.getCustomerData.mediaUrl ? (
              <Image
                src={data?.getCustomerData.mediaUrl}
                alt="profile_image"
                className="cursor-pointer rounded-full object-cover"
                height={80}
                width={80}
              />
            ) : (
              <Image
                src={"/assets/dummy_avatar.png"}
                alt="user-profile-pic"
                className="cursor-pointer rounded-full object-cover border-4 border-greensharp"
                height={80}
                width={80}
              />
            )}
          </div>
          <div>
            <span className="text-white font-bold">{`${data?.getCustomerData.firstName} ${data?.getCustomerData.lastName}`}</span>
          </div>
        </div>

        <div className="bg-greendarkest rounded-b-3xl  p-4 flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <FriendsIcon className="w-6 h-6" />
            <span className="text-graylight text-sm">45 friends</span>
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
            <Link href={"/profile/:id"}>
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
    </>
  );
};

export default ProfileCard;
