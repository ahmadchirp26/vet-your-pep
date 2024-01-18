import { Button } from "@/core/ui/button";
import Image, { type StaticImageData } from "next/image";

interface Likes {
  profileAvatar: StaticImageData;
  username: string;
}

interface LikeCardProps {
  likes: Likes;
}

const LikesCard = ({ likes }: LikeCardProps) => {
  return (
    <>
      <div className="flex gap-3 w-full items-center px-5 mt-3">
        <div className="rounded-full w-12 h-12">
          <Image src={likes.profileAvatar} alt="channel_image" />
        </div>

        <span className="font-bold text-white"> {likes.username}</span>

        <div className="ml-auto">
          <Button
            className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
            type="button"
          >
            Follow
          </Button>
        </div>
      </div>
    </>
  );
};

export default LikesCard;
