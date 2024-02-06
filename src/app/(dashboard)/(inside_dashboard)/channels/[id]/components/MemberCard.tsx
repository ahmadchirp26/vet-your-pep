import Image, { StaticImageData } from "next/image";
interface MemberCardProps {
  username: string;
  profileAvatar: StaticImageData; // Assuming 'profileAvatar' is a string representing the image source
}

const MemberCard = ({ username, profileAvatar }: MemberCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4 hover:bg-greenaccent rounded-md cursor-pointer w-[100px] h-[100px]">
      <Image
        src={profileAvatar}
        alt={`Avatar of ${username}`}
        width={60}
        height={60}
        className="w-[60px] h-[60px]"
      />
      <span className=" text-xs text-white">{username}</span>
    </div>
  );
};

export default MemberCard;
