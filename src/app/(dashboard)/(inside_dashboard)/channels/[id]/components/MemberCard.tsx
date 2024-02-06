import Image, { StaticImageData } from "next/image";
interface MemberCardProps {
  username: string;
  profileAvatar: StaticImageData; // Assuming 'profileAvatar' is a string representing the image source
}

const MemberCard = ({ username, profileAvatar }: MemberCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4 hover:bg-greenaccent rounded-md cursor-pointer">
      <Image
        src={profileAvatar}
        alt={`Avatar of ${username}`}
        width={54}
        height={54}
      />
      <span className="text-graylight text-xs">{username}</span>
    </div>
  );
};

export default MemberCard;
