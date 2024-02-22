import useGetFollowings from "@/api/Customer/useGetFollowings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FollowButtonManager from "@/features/FollowButtonManager.tsx";

interface Props {
  customerId: string;
}

const ProfileFollowings = ({ customerId }: Props) => {
  const { data, status } = useGetFollowings({ customerId });

  if (status === "pending") {
    return <ProfileFollowersSkeleton />;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="space-y-4 py-4">
      <span className="text-white font-bold">Followings</span>
      <div className="space-y-2">
        {data?.getFollowing.map((following, index) => {
          const username = `${following.firstName} ${following.lastName}`;
          return (
            <div key={index} className = "flex justify-between gap-4">
              <div  className="flex gap-3 w-full items-center">
                <Avatar className={"rounded-full h-12 w-12"}>
                  <AvatarImage src={following.profileImage} />
                  <AvatarFallback>
                    {following.firstName.toLocaleUpperCase().charAt(0) +
                      following.lastName.toLocaleUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold text-white">{username}</span>
              </div>
              <FollowButtonManager customerId={following.id} />
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
      <span className="text-white font-bold">Followings</span>
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

export default ProfileFollowings;
