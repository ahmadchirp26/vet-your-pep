import { useGetChannel } from "@/api/Channels/useGetChannel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Props {
  channelId: string;
}
const GroupAdmin = ({ channelId }: Props) => {
  const { data, status } = useGetChannel(channelId);
  if (status === "pending") {
    return <GroupAdminSkeleton />;
  }
  if (status === "error") {
    //[Todo]: add error
    return <p>{"Error"}</p>;
  }
  
  return (
    <div className="bg-greendarkest rounded-3xl p-3 space-y-4 shadow-glow">
      <p className="text-md font-bold text-white text-center">
        Group Moderator
      </p>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Link href={`/profile/${data.getChannelById.moderator.id}`}>
          <Avatar className="hover:bg-greenaccent rounded-md cursor-pointer ">
            <AvatarImage
              src={data.getChannelById.moderator.profileImage ?? undefined}
              alt={data.getChannelById.moderator.firstName}
              className="rounded-full"
            />
            <AvatarFallback>
              {data.getChannelById.moderator.firstName
                .charAt(0)
                .toLocaleUpperCase() +
                data.getChannelById.moderator.lastName.toUpperCase().charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Link>
        <p className="text-graylight text-sm">
          {data.getChannelById.moderator.firstName +
            " " +
            data.getChannelById.moderator.lastName}
        </p>
      </div>
    </div>
  );
};

export const GroupAdminSkeleton = () => {
  return (
    <div className="bg-greendarkest rounded-3xl p-3 space-y-4 shadow-glow flex flex-col items-center">
      <div className="h-6 w-16 p-2 bg-greenlight rounded-lg animate-pulse" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-12 w-12 bg-greenlight rounded-full animate-pulse" />
        <div className="h-2 w-20 p-2 bg-greenlight rounded-lg animate-pulse" />
      </div>
    </div>
  );
};
export default GroupAdmin;
