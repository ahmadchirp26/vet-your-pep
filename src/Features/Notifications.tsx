import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NotificationContent from "./NotificationContent";
import FriendRequestContent from "./FriendRequestContent";

const Notifications = () => {
  return (
    <>
      <div className="bg-greendarkest container-drop-shadow h-full overflow-auto w-full rounded-2xl p-4 mt-2 flex flex-col">
        <div className="flex flex-col p-1">
          <Tabs defaultValue="posts" className="w-full mt-2">
            <TabsList className="w-full flex bg-transparent ">
              <TabsTrigger value="Notifications">
                <span className="text-white font-bold">Notifications</span>
              </TabsTrigger>

              <TabsTrigger value="Friend Requests">
                <span className="text-white font-bold">Friend Requests</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Notifications">
              <NotificationContent />
            </TabsContent>
            <TabsContent value="Friend Requests">
              <FriendRequestContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Notifications;
