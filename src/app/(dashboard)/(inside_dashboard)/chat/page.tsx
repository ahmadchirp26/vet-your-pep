'use client';
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import SendBirdApp from "./_components/SendBirdApp";
import { useCustomerSendbirdToken } from "@/api/SendBird/useCustomerSendbirdToken";

const Chat = () => {
  const {data:userSession} = useAuthSessionContext();
  const {data:sendBirdToken, status:sendBirdStatus} = useCustomerSendbirdToken()
  if (sendBirdStatus === "pending") {
    return <div>Loading...</div>;
  }
  if (!userSession) {
    return <div>Unauthorized</div>;
  }
  if (!sendBirdToken) {
    return <div>Error</div>;
  }

  return (
    <SendBirdApp
      nickname={userSession.firstName + " " + userSession.lastName}
      userId={userSession.sub}
      chatToken={sendBirdToken.getChatToken}
    />
  );
};

export default Chat;
