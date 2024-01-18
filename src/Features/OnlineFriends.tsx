import { onlineFriends } from "@/data/facebackend";
import { OnlineAvatar } from "./Cards/OnlineAvatar";
import { FriendsIcon } from "@/core/icons/FriendsIcon";
import { ChevronDownIcon } from "lucide-react";
const OnlineFriends = () => {
  const friendsArray = onlineFriends;
  return (
    <div className="container-drop-shadow max-md:overflow-auto flex-wrap space-x-2 md:space-y-4 md:space-x-0 bg-greendarkest px-3 md:px-2 md:py-3 py-2 rounded-3xl flex flex-col items-center max-md:flex-row">
      <div className="flex items-center md:flex-col gap-2 max-md:overflow-auto flex-1">
        <div className="px-2 md:mb-2">
          <FriendsIcon />
        </div>
        {friendsArray.map((friend, index) => (
          <OnlineAvatar key={index} friend={friend} />
        ))}
      </div>
      <div className="hidden md:flex cursor-pointer items-center justify-center rounded-full bg-greenlight p-2">
        <ChevronDownIcon className="text-white w-5 h-5" />
      </div>
    </div>
  );
};

export default OnlineFriends;
