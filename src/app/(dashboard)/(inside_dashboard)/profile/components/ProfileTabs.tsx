import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/ui/tabs";
import useCustomerByIdDataQuery from "@/api/Customer/useCustomerByIdQuery";
import PostCard from "@/Features/Post/PostCard";
import MyFollowers from "./MyFollowers";

interface Props {
  customerId: string;
}

const ProfileTabs = ({ customerId }: Props) => {
  const { data } = useCustomerByIdDataQuery({ customerId });
  return (
    <>
      <Tabs defaultValue="posts" className="w-full ">
        <TabsList className="w-full flex justify-evenly rounded-full max-sm:rounded-md p-2  h-16">
          <TabsTrigger value="posts">
            <div className="flex flex-col items-center">
              <span className="text-graydark">
                {data?.getOtherCustomerData.user.posts?.length ?? 0}
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
          {data?.getOtherCustomerData.user.posts?.map((post, index) => (
            <PostCard
              key={index}
              postId={post.id}
              channel={post.channel?.title ?? "Unknown"}
              channelId={post.channel?.id ?? ""}
              comments={
                post.comments?.map((comment) => ({
                  commentContent: comment.content,
                  postedDate: new Date(),
                  postedBy: {
                    profileImage: comment.user.profileImage ?? undefined,
                    firstName: comment.user.firstName,
                    lastName: comment.user.lastName,
                    id: comment.user.id,
                  },
                })) ?? []
              }
              likes={
                post.likes?.map((l) => ({
                  id: l.user?.id ?? '',
                  profileImage: l.user?.profileImage ?? undefined,
                  firstName: l.user?.firstName ?? '' ,
                  lastName: l.user?.lastName ?? '',
                })) ?? []
              }
              postContent={post.body}
              postImages={post.images ?? []}
              postedTime={new Date()}
              postedBy={{
                profileImage: post.customer.profileImage ?? undefined,
                firstName: post.customer.firstName,
                lastName: post.customer.lastName,
                id: post.customer.id,
              }}
            />
          ))}
        </TabsContent>
        <TabsContent value="followers">
          <MyFollowers />
        </TabsContent>
        <TabsContent value="following">{/* <MyFollowing /> */}</TabsContent>
      </Tabs>
    </>
  );
};

export default ProfileTabs;
