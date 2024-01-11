import AllChannels from "@/Features/AllChannels";
import ProfileCard from "@/Features/ProfileCard";
import RuleCard from "@/app/(dashboard)/(inside_dashboard)/app-rules/components/RuleCard";
import { rules } from "@/data/facebackend";

const AppRules = () => {
  const RulesArray = rules;
  return (
    <>
      <div className="flex p-4 gap-4">
        <div className="flex flex-col gap-2 max-sm:hidden">
          <ProfileCard />
          <AllChannels />
        </div>
        <div className="bg-greendarkest rounded-2xl p-4 container-drop-shadow ">
          {RulesArray.map((rule, index) => (
            <RuleCard key={index} rule={rule} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppRules;
