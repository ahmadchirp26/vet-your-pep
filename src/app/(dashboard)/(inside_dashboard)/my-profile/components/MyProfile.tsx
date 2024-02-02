"use client";
import Image from "next/image";
import ProfileTabs from "./ProfileTabs";

import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";

const UserProfile = () => {
  const { data } = useCustomerDataQuery();

  console.log("Data", data);

  return (
    <>
      <div className="rounded-2xl container-drop-shadow bg-greendarkest p-6 w-2/3 max-lg:w-full flex-col gap-7">
        <div className="flex items-center gap-5">
          <div className="rounded-full">
            {data?.getCustomerData.mediaUrl ? (
              <Image
                src={data?.getCustomerData.mediaUrl}
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
        <div className=" w-full p-4 max-sm:p-0 max-sm:mt-4">
          <ProfileTabs />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
