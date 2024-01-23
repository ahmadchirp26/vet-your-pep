import { Notifications } from "@/data/facebackend";
import NotificationCard from "./Cards/NotificationCard";

const NotificationContent = () => {
  const notificationsArray = Notifications;
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="mt-1">
          {notificationsArray.map((notification, index) => (
            
            <NotificationCard key={index} notification={notification} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationContent;
