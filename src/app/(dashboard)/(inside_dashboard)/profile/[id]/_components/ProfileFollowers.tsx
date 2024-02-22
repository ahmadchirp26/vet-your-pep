import useGetFollowers from "@/api/Customer/useGetFollowers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FollowButtonManager from "@/features/FollowButtonManager.tsx";

interface Props {
  customerId: string;
}

const ProfileFollowers = ({ customerId }: Props) => {
  const { data, status } = useGetFollowers({ customerId });

  if (status === "pending") {
    return <ProfileFollowersSkeleton />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="space-y-4 py-4">
      <span className="text-white font-bold">My Followers</span>
      <div className = "space-y-2">
        {data?.getFollowers.map((follower, index) => {
          const username = `${follower.firstName} ${follower.lastName}`;
          return (
            <div key={index} className="flex justify-between gap-4">
              <div className="flex gap-3 w-full items-center">
                <Avatar className={"rounded-full h-12 w-12"}>
                  <AvatarImage src={follower.profileImage} />
                  <AvatarFallback>
                    {follower.firstName.toLocaleUpperCase().charAt(0) +
                      follower.lastName.toLocaleUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold text-white">{username}</span>
              </div>
              <FollowButtonManager customerId={follower.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ProfileFollowersSkeleton = () => {
  return (
    <div className="space-y-4 py-4">
      <span className="text-white font-bold">My Followers</span>
      <div className="space-y-2">
        <div className="flex gap-3 w-full items-center">
          <div className={"rounded-full h-12 w-12 animate-pulse"}></div>
          <span className="font-bold text-white"></span>
        </div>
        <div className="flex gap-3 w-full items-center">
          <div className={"rounded-full h-12 w-12 animate-pulse"}></div>
          <span className="font-bold text-white"></span>
        </div>
        <div className="flex gap-3 w-full items-center">
          <div className={"rounded-full h-12 w-12 animate-pulse"}></div>
          <span className="font-bold text-white"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileFollowers;
