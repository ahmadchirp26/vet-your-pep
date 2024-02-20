import { Button } from "@/components/ui/button";
import Image, { type StaticImageData } from "next/image";

interface Follower {
  profileAvatar: StaticImageData;
  username: string;
}

interface FollowerCardProps {
  followers: Follower;
  buttonText: string;
}

const FollowerCard = ({ followers, buttonText }: FollowerCardProps) => {
  return (
    <>
      <div className="flex gap-3 w-full items-center px-5 max-sm:px-0 mt-3">
        <div className="rounded-full w-12 h-12">
          <Image src={followers.profileAvatar} alt="channel_image" />
        </div>

        <span className="font-bold text-white"> {followers.username}</span>

        <div className="ml-auto">
          <Button
            className="rounded-full  bg-red-500 hover:bg-red-700 text-white flex justify-center items-center w-20"
            type="button"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FollowerCard;
