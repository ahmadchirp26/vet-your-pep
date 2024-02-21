import { Button } from "@/components/ui/button";
import Image, { type StaticImageData } from "next/image";

interface FriendRequests {
  profileAvatar: StaticImageData;
  requestContent: string;
  date: string;
}

interface FriendRequestsCardProps {
  request: FriendRequests;
}

const NotificationCard = ({ request }: FriendRequestsCardProps) => {
  return (
    <>
      <div className="flex gap-2 items-center py-4 ">
        <div className="rounded-full w-12 h-12">
          <Image src={request.profileAvatar} alt="profile_image" />
        </div>

        <div className="flex flex-col">
          <span className="text-graylight text-xs ">
            {request.requestContent}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-greensharp text-xs">{request.date}</span>
            <Button className="rounded-2xl hover:bg-greenlight  bg-greenaccent text-xs text-white max-w-22 max-h-5">
              Accept Request
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
