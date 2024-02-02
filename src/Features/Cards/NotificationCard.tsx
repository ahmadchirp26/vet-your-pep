import Image, { type StaticImageData } from "next/image";

interface Notifications {
  profileAvatar: StaticImageData;
  notificationContent: string;
  date: string;
}

interface NotificationsCardProps {
  notification: Notifications;
}

const NotificationCard = ({ notification }: NotificationsCardProps) => {
  return (
    <>
      <div className="flex gap-2 items-center py-4 ">
        <div className="rounded-full w-12 h-12">
          <Image src={notification.profileAvatar} alt="profile_image" />
        </div>

        <div className="flex flex-col">
          <span className="text-graylight text-xs ">
            {notification.notificationContent}
          </span>
          <span className="text-greensharp text-xs">{notification.date}</span>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
