import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";
import { type PropsWithChildren } from "react";

const OnboardingLayout = async ({ children }: PropsWithChildren) => {
  //@Authguard
  const sessionToken = await getSessionServerAction();
  if (!sessionToken) {
    return redirect("/login");
  }
  return <>{children}</>;
};
export default OnboardingLayout;
