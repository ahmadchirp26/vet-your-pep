import { useGetChannel } from "@/api/Channels/useGetChannel";
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import Link from "next/link";

interface Props {
  channelId: string;
}
const GroupAdmin = ({ channelId }: Props) => {
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
    <div className="bg-greendarkest rounded-3xl p-3 space-y-4 shadow-glow">
      <p className="text-md font-bold text-white text-center">
        Group Moderator
      </p>
      <Link
        href={`/profile/${data.getChannelById.moderator.id}`}
        key={data.getChannelById.moderator.id}
      >
        <div className="flex flex-col items-center justify-center gap-2 hover:bg-greenaccent rounded-md p-1 cursor-pointer">
          <Avatar className="hover:bg-greenaccent rounded-md cursor-pointer">
            <AvatarImage
              src={data.getChannelById.moderator.profileImage ?? undefined}
              alt={data.getChannelById.moderator.firstName}
            />
            <AvatarFallback>
              {data.getChannelById.moderator.firstName.charAt(0) +
                data.getChannelById.moderator.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <p className="text-graylight text-sm">
            {data.getChannelById.moderator.firstName +
              " " +
              data.getChannelById.moderator.lastName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GroupAdmin;
