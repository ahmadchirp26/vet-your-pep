import { onlineFriends } from "@/data/facebackend";
import { OnlineAvatar } from "./Cards/OnlineAvatar";
import Image from "next/image";
const OnlineFriends = () => {
  const friendsArray = onlineFriends;
  return (
    <>
      <div className="container-drop-shadow bg-greendarkest p-3 rounded-3xl flex flex-col items-center ">
        <Image
          src={"/assets/friends_icon.svg"}
          alt="friends_icon"
          width={30}
          height={30}
          className="mt-3"
        />
        {friendsArray.map((friend, index) => (
          <OnlineAvatar key={index} friend={friend} />
        ))}
        <div className="cursor-pointer items-center justify-center flex rounded-full mt-4 bg-greenlight p-3">
          <Image
            src={"/assets/arrowdown_icon.svg"}
            alt="arrowdown_icon"
            width={12}
            height={12}
          />
        </div>
      </div>
    </>
  );
};

export default OnlineFriends;
