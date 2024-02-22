import { onlineFriends } from "@/data/facebackend";
import { OnlineAvatar } from "@/features/Cards/OnlineAvatar";
import { FriendsIcon } from "@/components/icons/FriendsIcon";
import { cn } from "@/utils/cn";
import { ChevronDownIcon } from "lucide-react";

interface Props {
  className?: string;
}
const OnlineFriends = ({ className }: Props) => {
  const friendsArray = onlineFriends;
  return (
    <div
      className={cn(
        "flex items-center gap-2 shadow-glow rounded-3xl bg-greendarkest px-2 py-3 overflow-auto",
        className
      )}
    >
      <div className="px-2 flex items-center">
        <FriendsIcon />
      </div>
      {friendsArray.map((friend, index) => (
        <OnlineAvatar key={index} friend={friend} />
      ))}
      <div className="hidden sm:flex cursor-pointer items-center justify-center rounded-full bg-greenlight p-2">
        <ChevronDownIcon className="text-white w-5 h-5" />
      </div>
    </div>
  );
};
export const OnlineFriendsSkeleton = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 shadow-glow rounded-3xl bg-greendarkest px-2 py-3 overflow-auto",
        className
      )}
    >
      <div className="px-2 flex items-center">
        <FriendsIcon />
      </div>
      <div className="h-10 w-10 bg-greenlight rounded-full animate-pulse" />
      <div className="h-10 w-10 bg-greenlight rounded-full animate-pulse" />
      <div className="h-10 w-10 bg-greenlight rounded-full animate-pulse" />
      <div className="h-10 w-10 bg-greenlight rounded-full animate-pulse" />
      <div className="hidden sm:flex cursor-pointer items-center justify-center rounded-full bg-greenlight p-2">
        <ChevronDownIcon className="text-white w-5 h-5" />
      </div>
    </div>
  );
};
export default OnlineFriends;
