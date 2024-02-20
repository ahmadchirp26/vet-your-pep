import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";

const AuthLayout = async ({ children }: PropsWithChildren) => {
  //@Unauthguard
  const sessionToken = await getSessionServerAction();
  if (sessionToken) {
    return redirect('/')
  }
  return <>{children}</>;
};
export default AuthLayout;
