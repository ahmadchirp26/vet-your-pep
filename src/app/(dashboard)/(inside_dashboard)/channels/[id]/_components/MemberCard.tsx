import Image, { type StaticImageData } from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/core/ui/avatar";

interface MemberCardProps {
  username: string;
  profileAvatar?: string; // Assuming 'profileAvatar' is a string representing the image source
}

const MemberCard = ({ username, profileAvatar }: MemberCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4 hover:bg-greenaccent rounded-md cursor-pointer w-[100px] h-[100px]">
      <Avatar className="hover:bg-greenaccent rounded-md cursor-pointer">
        <AvatarImage src={profileAvatar} alt={username} />
        <AvatarFallback>
          {username.charAt(0) + username.charAt(1)}
        </AvatarFallback>
      </Avatar>

      <span className=" text-xs text-white w-20 text-center">{username}</span>
    </div>
  );
};

export default MemberCard;
