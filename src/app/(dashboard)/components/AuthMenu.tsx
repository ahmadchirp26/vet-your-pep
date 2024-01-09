import Image from "next/image";
import { ProfileAvatar } from "./ProfileAvatar";

const AuthMenu = () => {
  return (
    <>
      <div className="rounded-full bg-greendarkest p-5 w-60 flex-shrink-0 h-12 flex items-center gap-5 container-drop-shadow">
        <Image
          src={"/assets/notification_icon.svg"}
          width={22}
          height={22}
          alt="notification_icon"
          className="cursor-pointer"
        />
        <Image
          src={"/assets/chat_icon.svg"}
          width={22}
          height={22}
          alt="chat_icon"
          className="cursor-pointer"
        />
        <ProfileAvatar />
      </div>
    </>
  );
};

export default AuthMenu;
