import { AuthBroadcastChannel } from "@/lib/Authentication/AuthBroadcastChannel";
import cookie from "cookiejs";
import { jwtDecode } from "jwt-decode";
interface Params {
  shouldBroadcast?: boolean;
}
export interface UserSession {
  exp: number;
  iat: number;
  email: string;
  accessToken: string;
  firstName: string;
  lastName: string;
  cellPhone: string;
  //Weirdly name sub is used as customer id
  sub: string;
  profileImage?: string;
}

export const getSession = async ({ shouldBroadcast }: Params) => {
  const accessToken = cookie.get("auth.sessionToken");
  if (!accessToken || typeof accessToken === "boolean") return null;
  const token = jwtDecode<UserSession>(accessToken);
  if (shouldBroadcast) {
    AuthBroadcastChannel().postMessage({
      event: "session",
      data: { trigger: "getSession" },
    });
  }
  return {
    ...token,
    accessToken: accessToken,
  };
};
