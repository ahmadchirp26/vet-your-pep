import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/ui/tabs";
import ProfileFeed from "./ProfileFeed";
import MyFollowers from "./MyFollowers";
import MyFollowing from "./MyFollowing";

const ProfileTabs = () => {
  return (
    <>
      <Tabs defaultValue="posts" className="w-full ">
        <TabsList className="w-full flex justify-evenly rounded-full p-2  h-16">
          <TabsTrigger value="posts">
            <div className="flex flex-col items-center">
              <span className="text-graydark">45</span>
              <span className="text-white font-bold">Posts</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="followers">
            <div className="flex flex-col items-center ">
              <span className="text-graylight">45</span>
              <span className="text-white font-bold">Followers</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="following">
            <div className="flex flex-col items-center">
              <span className="text-graylight">45</span>
              <span className="text-white font-bold">Following</span>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <ProfileFeed />
        </TabsContent>
        <TabsContent value="followers">
          <MyFollowers />
        </TabsContent>
        <TabsContent value="following">
          <MyFollowing />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProfileTabs;
