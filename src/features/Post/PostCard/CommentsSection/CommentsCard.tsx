import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalculatePostTime } from "@/utils/calculate-post-time";

interface Props {
  postedBy: {
    lastName: string;
    firstName: string;
    id: string;
    profileImage?: string;
  };
  postedDate: Date;
  commentContent: string;
}

const CommentsCard = (comment: Props) => {
  return (
    <div className="flex gap-3 items-start">
      <Avatar>
        <AvatarImage src={comment.postedBy.profileImage} alt="profile_image" />
        <AvatarFallback>{comment.postedBy.firstName.charAt(0).toLocaleUpperCase() + comment.postedBy.lastName.toUpperCase().charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <div className="flex gap-2 items-baseline">
          <span className="text-white">{comment.postedBy.firstName + '' + comment.postedBy.lastName}</span>
          <span className="text-xs text-gray-500">
            {CalculatePostTime(comment.postedDate)}
          </span>
        </div>
        <p className="text-graylight text-sm mt-4">{comment.commentContent}</p>
      </div>
    </div>
  );
};

export default CommentsCard;
