// ChannelCard.tsx
import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

interface Block {
  profileAvatar: StaticImageData;
  username: string;
}

interface BlockListCardProps {
  block: Block;
}

const BlockListCard = ({ block }: BlockListCardProps) => {
  return (
    <>
      <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:hover:bg-greenaccent max-sm:p-1 max-sm:rounded-xl">
        <div className="flex gap-3 w-full items-center max-sm:flex-col ">
          <div className="rounded-full w-12 h-12">
            <Image src={block.profileAvatar} alt="channel_image" />
          </div>

          <span className=" text-graylight text-sm">{block.username}</span>
        </div>

        <div className="">
          <Button
            className="rounded-full text-red-500 underline bg-transparent hover:bg-transparent flex justify-center items-center w-20"
            type="button"
          >
            Unblock
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlockListCard;
