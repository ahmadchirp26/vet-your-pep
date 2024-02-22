import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FollowButtonManager from "@/features/FollowButtonManager.tsx";

interface Props {
  userThatLiked: {
    profileImage?: string;
    id: string;
    firstName: string;
    lastName: string;
  };
}

const LikesCard = ({ userThatLiked }: Props) => {
  return (
    <div className="flex gap-3 w-full items-center">
      <div className="rounded-full w-12 h-12">
        <Avatar>
          <AvatarImage src={userThatLiked.profileImage} alt="profile_image" />
          <AvatarFallback>
            {userThatLiked.firstName.charAt(0).toLocaleUpperCase() +
              userThatLiked.lastName.toLocaleUpperCase().charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <span className="font-bold text-white">
        {userThatLiked.firstName + " " + userThatLiked.lastName}
      </span>
      <div className="ml-auto">
        <FollowButtonManager customerId={userThatLiked.id} />
      </div>
    </div>
  );
};

export default LikesCard;
