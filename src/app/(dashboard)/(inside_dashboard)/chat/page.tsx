"use client";
import SendbirdApp from "@sendbird/uikit-react/App";
import "./index.css";

const APP_ID = "16CD5681-56AE-4956-B5BB-48EA1E12C699";
const USER_ID = "james";
const NickName = "James Bond";

const Chat = () => {
  return (
    <div className="w-full  h-screen bg-greensharp">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID} // Specify your user ID.
        nickname={NickName}
        theme="dark"
      />
    </div>
  );
};

export default Chat;
