import { OnlineAvatar } from "@/Features/Cards/OnlineAvatar";
import { admins } from "@/data/facebackend";

const GroupAdmin = () => {
  const adminArray = admins;
  return (
    <>
      <div className="flex flex-col  bg-greendarkest rounded-3xl justify-center items-center p-3 container-drop-shadow">
        <span className="text-md font-bold text-white ">Group Admin</span>
        <div className="flex flex-col gap-2 justify-center items-center mb-2">
          {adminArray.map((friend, index) => (
            <OnlineAvatar key={index} friend={friend} />
          ))}
          <span className="text-graylight text-sm">You</span>
        </div>
      </div>
    </>
  );
};

export default GroupAdmin;
