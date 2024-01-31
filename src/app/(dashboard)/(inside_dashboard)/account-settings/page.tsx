import { Button } from "@/core/ui/button";
import { Switch } from "@/core/ui/switch";
import { blockList } from "@/data/facebackend";
import BlockListCard from "@/app/(dashboard)/(inside_dashboard)/account-settings/components/BlockListCard";
import Link from "next/link";
import UpdateProfile from "./components/UpdateProfile";

const AccountSettings = () => {
  const blockArray = blockList;
  return (
    <>
      <div className="p-4 flex gap-4 ">
        <div className="bg-greendarkest container-drop-shadow rounded-2xl p-6 w-full flex-col min-h-[560px]">
          <span className="text-white font-bold text-lg">Settings</span>
          {/* Alert & Notifications */}
          <div className="flex flex-col p-2 mt-3 gap-3">
            <span className="text-white font-bold ">Update Profile</span>
            <div className="h-[1px] bg-graydark w-full"></div>

            <UpdateProfile />
            <span className="text-white font-bold ">
              Alters & Notifications
            </span>
            <div className="h-[1px] bg-graydark w-full"></div>
            <div className="flex flex-col gap-5">
              <div className="mt-2 flex w-full justify-between">
                <span className="text-graylight">Notifications</span>
                <Switch />
              </div>
              <div className="mt-2 flex w-full justify-between">
                <span className="text-graylight">Sound</span>
                <Switch />
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="flex flex-col p-2 mt-3 gap-3">
            <span className="text-white font-bold ">Language</span>
            <div className="h-[1px] bg-graydark w-full"></div>
            <div className="flex flex-col gap-5">
              <div className="mt-2 flex w-full justify-between">
                <span className="text-graylight">English (USA)</span>
                <Switch />
              </div>
              <div className="mt-2 flex w-full justify-between">
                <span className="text-graylight">English(KSA)</span>
                <Switch />
              </div>
            </div>
          </div>

          {/* Phone Number Verification */}
          <div className="flex flex-col p-2 mt-3 gap-3">
            <span className="text-white font-bold ">
              Phone Number Verification
            </span>
            <div className="h-[1px] bg-graydark w-full"></div>

            <div className="mt-2 flex w-full justify-between">
              <span className="text-graylight">Verify my number</span>
              <Link href="/phone-verification">
                <Button
                  className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-28"
                  type="button"
                >
                  Verify Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-greendarkest w-[300px] max-md:w-[240px] rounded-2xl container-drop-shadow">
          <div className="mt-3 w-full gap-4 flex flex-col p-4">
            {blockArray.map((block, index) => (
              <BlockListCard key={index} block={block} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
