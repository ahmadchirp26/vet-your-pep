import Image, { type StaticImageData } from "next/image";

interface Comments {
  profileAvatar: StaticImageData;
  username: string;
  postedTime: string;
  commentContent: string;
}

interface CommentsCardProps {
  comment: Comments;
}

const CommentsCard = ({ comment }: CommentsCardProps) => {
  return (
    <div className="flex gap-3 items-start">
      <Image
        className="rounded-full w-8 h-8 mt-1"
        src={comment.profileAvatar}
        alt="profile_image"
      />
      <div className="space-y-1">
        <div className="flex gap-2 items-baseline">
          <span className="text-white">{comment.username}</span>
          <span className="text-xs text-gray-500">{comment.postedTime}</span>
        </div>
        <p className="text-graylight text-sm mt-4">{comment.commentContent}</p>
      </div>
    </div>
  );
};

export default CommentsCard;
