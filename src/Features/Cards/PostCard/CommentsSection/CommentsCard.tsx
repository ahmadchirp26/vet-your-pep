import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { CalculatePostTime } from "@/core/utils/calculate-post-time";


interface Props {
  postedBy: {
    username: string;
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
        <AvatarFallback>{comment.postedBy.username}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <div className="flex gap-2 items-baseline">
          <span className="text-white">{comment.postedBy.username}</span>
          <span className="text-xs text-gray-500">{CalculatePostTime(comment.postedDate)}</span>
        </div>
        <p className="text-graylight text-sm mt-4">{comment.commentContent}</p>
      </div>
    </div>
  );
};

export default CommentsCard;
