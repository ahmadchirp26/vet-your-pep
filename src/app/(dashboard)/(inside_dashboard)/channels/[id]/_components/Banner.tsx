"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/core/lib/helper";
import { useGetChannel } from "@/api/Channels/useGetChannel";

interface Props {
  className?: string;
  channelId: string;
}
const Banner = ({ channelId, className }: Props) => {
  const { data, status } = useGetChannel(channelId);
  if (status === "pending") {
    //[Todo]: add skeleton
    return <p>{"Loading..."}</p>;
  }
  if (status === "error") {
    //[Todo]: add error
    return <p>{"Error"}</p>;
  }
  return (
    <div
      className={cn("rounded-t-2xl relative p-4", className)}
      style={{
        backgroundImage: `url('https://placehold.co/800x200/00000/ACACAC?text=Cover')`,
        backgroundSize: "cover", // Optional: Adjust the background size based on your design needs
        backgroundPosition: "center", // Optional: Adjust the background position
        height: "200px", // Optional: Set the height
      }}
    >
      <div className="absolute rounded-full w-28 h-28 overflow-hidden">
        <Image
          loader={({ src }) => `https://placehold.co/${src}`}
          src={"112x112/ACACAC/00000?text=Profile"}
          alt="profile_picture"
          layout="fill"
        />
      </div>
      <div>
        <Link href="/channels/:id/edit" className="cursor-pointer">
          <div className="absolute top-5 right-5 bg-greensharp rounded-3xl flex justify-center items-center cursor-pointer p-2 outline-none">
            <Image
              src={"/assets/pencil_icon.svg"}
              alt="pencil_icon"
              width={18}
              height={18}
            />
          </div>
        </Link>
      </div>
      <div className="absolute bottom-5 right-5 flex flex-col">
        <span className="text-white font-bold text-4xl max-lg:text-2xl max-sm:text-xl">
          {data.getChannelById.title}
        </span>
        <span className="text-greensharp text-right capitalize">{`${data.getChannelById.status.toLocaleLowerCase()} group`}</span>
      </div>
    </div>
  );
};

export default Banner;
