import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { Button } from "@/core/ui/button";

interface Props {
  userThatLiked: {
    profileImage?: string;
    username: string;
  }
}

const LikesCard = ({ userThatLiked }: Props) => {
  return (
    <>
      <div className="flex gap-3 w-full items-center">
        <div className="rounded-full w-12 h-12">
          <Avatar>
            <AvatarImage src={userThatLiked.profileImage} alt="profile_image" />
            <AvatarFallback>{userThatLiked.username}</AvatarFallback>
          </Avatar>
        </div>

        <span className="font-bold text-white"> {userThatLiked.username}</span>

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
