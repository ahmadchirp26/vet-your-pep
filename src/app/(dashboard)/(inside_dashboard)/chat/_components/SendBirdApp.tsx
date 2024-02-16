'use client';
import React from "react";
import SendbirdApp from "@sendbird/uikit-react/App";
import './index.css'
import { env } from "@/env";

interface Props {
  chatToken: string;
  userId: string;
  nickname: string;
}

const SendBirdApp = ({ chatToken,nickname,userId }: Props) => {
  return (
    <div className="w-full h-screen bg-greensharp">
      <SendbirdApp
        appId={env.NEXT_PUBLIC_SENDGRID_API_KEY}
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
