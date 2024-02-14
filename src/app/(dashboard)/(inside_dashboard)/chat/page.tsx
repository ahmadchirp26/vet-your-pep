"use client";
import SendbirdApp from "@sendbird/uikit-react/App";
import "./index.css";

const APP_ID = "B6F60367-DE85-472F-BFDA-F790A7143E0D";
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
