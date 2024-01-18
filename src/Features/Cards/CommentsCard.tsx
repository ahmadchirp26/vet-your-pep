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
    <>
      <div className="flex gap-2 items-center mt-4">
        <div className="rounded-full w-12 h-12">
          <Image src={comment.profileAvatar} alt="profile_image" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-white ">{comment.username}</span>
            <span className="text-greensharp text-xs">
              {comment.postedTime}
            </span>
          </div>
          <span className="text-graylight">{comment.commentContent}</span>
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
