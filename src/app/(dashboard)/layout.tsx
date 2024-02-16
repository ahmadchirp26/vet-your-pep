import Image from "next/image";
import type { ReactNode } from "react";
import AuthMenu from "./components/AuthMenu";
import LeftSideBar from "./components/LeftSideBar";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import MainSearchBar from "./components/MainSearchBar";
import { fetchCustomerSendBirdTokenServerSide } from "@/api/SendBird/useCustomerSendbirdToken";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({ children }) => {
  await fetchCustomerSendBirdTokenServerSide()
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
          <ResponsiveMenu className="sm:hidden" />
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
