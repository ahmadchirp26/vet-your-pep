import useGetFollowings from "@/api/Customer/useGetFollowings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FollowButtonManager from "@/features/FollowButtonManager.tsx";
import Link from "next/link";

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
            <div key={index} className="flex justify-between gap-4">
              <div className="flex gap-3 w-full items-center">
                <Avatar className={"rounded-full h-12 w-12"}>
                  <AvatarImage src={following.profileImage} />
                  <AvatarFallback>
                    {following.firstName.toLocaleUpperCase().charAt(0) +
                      following.lastName.toLocaleUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Link href={`/profile/${following.id}`}>
                  <Button
                    variant={"link"}
                    className={"text-white font-bold  px-0 py-0 h-auto"}
                  >
                    {username}
                  </Button>
                </Link>
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
