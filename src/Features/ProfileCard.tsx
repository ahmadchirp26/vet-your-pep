import { Button } from "@/core/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FriendsIcon } from "@/core/icons/FriendsIcon";

const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col rounded-3xl container-drop-shadow">
        <div className="bg-greenaccent rounded-t-3xl  flex gap-5 justify-center  p-4 items-center">
          <div className="rounded-full w-12 h-12">
            <Image
              src={"/assets/profile_avatar.svg"}
              width={80}
              height={80}
              alt="profile_image"
            />
          </div>
          <div>
            <span className="text-white font-bold">John Doe</span>
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
            <Link href="/my-profile">
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
