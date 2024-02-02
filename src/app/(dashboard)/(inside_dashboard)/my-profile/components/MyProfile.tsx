"use client";
import Image from "next/image";
import ProfileTabs from "./ProfileTabs";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";

const UserProfile = () => {
  const { data } = useAuthSessionContext();
  return (
    <>
      <div className="rounded-2xl container-drop-shadow bg-greendarkest p-6 w-2/3 max-lg:w-full flex-col gap-7">
        <div className="flex items-center gap-5">
          <div className="rounded-full">
            <Image
              src={"/assets/john_doe_image.svg"}
              alt="user-profile-pic"
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-xl">{`${data?.firstName} ${data?.lastName}`}</span>
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
              <span className="text-graylight text-sm">{data?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              {data?.cellPhone && (
                <>
                  <Image
                    src={"/assets/phone_icon.svg"}
                    alt="phone_icon"
                    height={13}
                    width={13}
                  />
                  <span className="text-graylight text-sm">
                    {data?.cellPhone}
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
