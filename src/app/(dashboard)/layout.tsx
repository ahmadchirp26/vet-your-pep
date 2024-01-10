import Image from "next/image";
import type { ReactNode } from "react";

import SearchBar from "./components/SearchBar";
import AuthMenu from "./components/AuthMenu";
import LeftSideBar from "./components/LeftSideBar";
import ResponsiveMenu from "./components/ResponsiveMenu";

import Logo from "../../../public/assets/logo.svg";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col  ">
        <div className="flex gap-10 max-sm:gap-5 items-center max-sm:justify-between p-2">
          <Image
            src={Logo}
            alt="logo_image"
            className="w-20 h-20 max-sm:w-14 max-sm:h-14"
          />

          <div className="max-sm:hidden w-full">
            <SearchBar />
          </div>

          <AuthMenu />

          <div className="sm:hidden">
            <ResponsiveMenu />
          </div>
        </div>
        <div className="flex mt-5">
          <div className="p-2 max-sm:hidden">
            <LeftSideBar />
          </div>

          {/* <div className="sm:hidden mt-5 flex-shrink-0  w-full  p-2">
          <SearchBar />
        </div> */}
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
