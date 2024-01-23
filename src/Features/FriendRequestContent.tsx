import { FriendRequests } from "@/data/facebackend";
import FriendRequestCard from "./Cards/FriendRequestCard";

const FriendRequestContent = () => {
  const requestsArray = FriendRequests;
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="mt-1">
          {requestsArray.map((request, index) => (
            <FriendRequestCard key={index} request={request} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FriendRequestContent;
