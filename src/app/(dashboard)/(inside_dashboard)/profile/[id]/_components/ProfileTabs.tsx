import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCustomerByIdDataQuery from "@/api/Customer/useCustomerByIdQuery";
import { PostCardSkeleton } from "@/features/Post/PostCard";
import FeedPosts from "@/features/Post/FeedPosts";
import useGetPosts from "@/api/Posts/useGetPosts";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowings from "./ProfileFollowing";

interface Props {
  customerId: string;
}

const ProfileTabs = ({ customerId }: Props) => {
  const { data, status: customerStatus } = useCustomerByIdDataQuery({
    customerId,
  });
  const { data: postsData, status: postsStatus } = useGetPosts({ customerId });

  if (customerStatus === "pending" || postsStatus === "pending") {
    return <ProfileTabsSkeleton />;
  }
  if (customerStatus === "error" || postsStatus === "error") {
    return <div>Failed to load</div>;
  }

  return (
    <Tabs defaultValue="posts" className="w-full ">
      <TabsList className="w-full flex justify-evenly rounded-full max-sm:rounded-md p-2  h-16">
        <TabsTrigger value="posts">
          <div className="flex flex-col items-center">
            <span className="text-graydark">
              {postsData?.getPosts.totalRows}
            </span>
            <span className="text-white font-bold">Posts</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="followers">
          <div className="flex flex-col items-center ">
            <span className="text-graylight">
              {data?.getOtherCustomerData.user.totalFollowers}
            </span>
            <span className="text-white font-bold">Followers</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="following">
          <div className="flex flex-col items-center">
            <span className="text-graylight">
              {data?.getOtherCustomerData.user.totalFollowings}
            </span>
            <span className="text-white font-bold">Following</span>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <FeedPosts customerId={customerId} onlyShowPosts = {true} />
      </TabsContent>
      <TabsContent value="followers">
        <ProfileFollowers customerId={customerId} />
      </TabsContent>
      <TabsContent value="following">
        <ProfileFollowings customerId={customerId} />
      </TabsContent>
    </Tabs>
  );
};
export const ProfileTabsSkeleton = () => {
  return (
    <Tabs defaultValue="posts" className="w-full ">
      <TabsList className="w-full flex justify-evenly rounded-full max-sm:rounded-md p-2 h-16">
        <TabsTrigger value="posts">
          <div className="space-y-1">
            <div
              className={"w-12 h-4 bg-greenlight rounded-lg animate-pulse"}
            />
            <div className={"w-8 h-2 bg-greenlight rounded-lg animate-pulse"} />
          </div>
        </TabsTrigger>
        <TabsTrigger value="followers">
          <div className="space-y-1">
            <div
              className={"w-12 h-4 bg-greenlight rounded-lg animate-pulse"}
            />
            <div className={"w-8 h-2 bg-greenlight rounded-lg animate-pulse"} />
          </div>
        </TabsTrigger>
        <TabsTrigger value="following">
          <div className="space-y-1">
            <div
              className={"w-12 h-4 bg-greenlight rounded-lg animate-pulse"}
            />
            <div className={"w-8 h-2 bg-greenlight rounded-lg animate-pulse"} />
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <PostCardSkeleton />
        <PostCardSkeleton />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
