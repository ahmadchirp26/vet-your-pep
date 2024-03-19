import Image from "next/image";
import type { PropsWithChildren } from "react";
import AuthMenu from "./_components/AuthMenu";
import LeftSideBar from "./_components/LeftSideBar";
import ResponsiveMenu from "./_components/ResponsiveMenu";
import Logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import MainSearchBar from "./_components/MainSearchBar";
//import { fetchCustomerSendBirdTokenServerSide } from "@/api/SendBird/useCustomerSendbirdToken";
import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  //@Authguard
  const sessionToken = await getSessionServerAction();
  if (!sessionToken) {
    return redirect("/login");
  }

  // await fetchCustomerSendBirdTokenServerSide();
  return (
    <div className="h-full space-y-4 w-full">
      <div className="flex gap-4 items-center p-2">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo_image"
            className="sm:w-20 sm:h-20 w-16 h-16"
          />
        </Link>
        <MainSearchBar className="flex-1" />
        <div className="flex items-center gap-2">
          <AuthMenu className="hidden sm:flex" />
          <ResponsiveMenu className="sm:hidden" initialOpen={false} />
        </div>
      </div>
      <div className="flex">
        <div className="p-2 max-sm:hidden">
          <LeftSideBar />
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
