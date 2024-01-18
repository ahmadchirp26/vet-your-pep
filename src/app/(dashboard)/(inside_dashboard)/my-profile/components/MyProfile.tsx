import Image from "next/image";
import ProfileTabs from "./ProfileTabs";

const UserProfile = () => {
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
              <span className="text-white font-bold text-xl">John Doe</span>
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
              <span className="text-graylight text-sm">johndeo@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/phone_icon.svg"}
                alt="phone_icon"
                height={13}
                width={13}
              />
              <span className="text-graylight text-sm">(123)242-2134</span>
            </div>
          </div>
        </div>
        <div className=" w-full p-4">
          <ProfileTabs />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
