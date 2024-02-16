'use client';
import React from "react";
import SendbirdApp from "@sendbird/uikit-react/App";
import './index.css'
const APP_ID = "B6F60367-DE85-472F-BFDA-F790A7143E0D";

interface Props {
  chatToken: string;
  userId: string;
  nickname: string;
}

const SendBirdApp = ({ chatToken,nickname,userId }: Props) => {
  return (
    <div className="w-full h-screen bg-greensharp">
      <SendbirdApp
        appId={APP_ID}
        userId={userId}
        nickname={nickname}
        accessToken={chatToken}
        isMessageGroupingEnabled={false}

        theme="dark"
      />
    </div>
  );
};

export default SendBirdApp;
