import Image, { type StaticImageData } from "next/image";
interface OnlineAvatarProps {
  friend: {
    image: StaticImageData;
  };
}

export function OnlineAvatar({ friend }: OnlineAvatarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-10 w-10 rounded-full">
        <Image src={friend.image} alt="avatar" />

        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full "></div>
      </div>
    </div>
  );
}
