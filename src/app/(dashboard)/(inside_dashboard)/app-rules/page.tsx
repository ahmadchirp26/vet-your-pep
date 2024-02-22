"use client";
import AllChannels from "@/features/Channels/JoinedChannels";
import ProfileCard from "@/features/ProfileCard";
import { usePlatformRules } from "@/api/PlatformRules/usePlatformRules";
import RuleCard from "@/app/(dashboard)/(inside_dashboard)/app-rules/components/RuleCard";

const AppRules = () => {
  const { data } = usePlatformRules();
  console.log("Rules", data?.getPlatFormRules?.results);
  const RulesArray = data?.getPlatFormRules?.results;
  return (
    <>
      <div className="flex p-4 gap-4">
        <div className="flex flex-col gap-2 max-sm:hidden">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="bg-greendarkest rounded-2xl p-4 container-drop-shadow w-full">
          {RulesArray?.map((rule, index) => (
            <RuleCard key={index} rule={rule} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppRules;
