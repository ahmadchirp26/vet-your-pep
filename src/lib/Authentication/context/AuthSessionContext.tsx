"use client";
import createGenericContext from "@/utils/create-generic-context";
import { useEffect, type PropsWithChildren, useState } from "react";
import { AuthBroadcastChannel } from "../AuthBroadcastChannel";
import { getSession } from "@/api/Authentication";

interface AuthSessionContext {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  data: Awaited<ReturnType<typeof getSession>> | undefined;
  status: "loading" | "authenticated" | "unauthenticated";
}
const [_useAuthSessionContext, AuthSessionContextProvider] =
  createGenericContext<AuthSessionContext>();

export const AuthSessionProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<AuthSessionContext>({
    data: undefined,
    status: "loading",
  });

  useEffect(() => {
    const setSessionState = () => {
      getSession({ shouldBroadcast: false })
        .then((session) => {
          // console.log(session);
          setState({
            data: session,
            status: session === null ? "unauthenticated" : "authenticated",
          });
        })
        .catch((error) => {
          console.error(error);
          setState({
            data: null,
            status: "unauthenticated",
          });
        });
    };
    setSessionState();
    AuthBroadcastChannel().addEventListener("message", setSessionState);
    return () => {
      AuthBroadcastChannel().removeEventListener("message", setSessionState);
    };
  }, []);

  return (
    <AuthSessionContextProvider
      value={{
        data: state.data,
        status: state.status,
      }}
    >
      {children}
    </AuthSessionContextProvider>
  );
};

interface Props {
  required: boolean;
}
const useAuthSessionContext = (props?: Props) => {
  const { data, status } = _useAuthSessionContext();
  if (props?.required) {
    if (!data || status === "unauthenticated") {
      throw new Error("User is not authenticated");
    }
  }
  return { data, status };
};
export default useAuthSessionContext;
