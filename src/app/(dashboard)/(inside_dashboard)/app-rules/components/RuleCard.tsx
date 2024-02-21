import { CalculatePostTime } from "@/utils/calculate-post-time";

interface Rule {
  title: string;
  rules: string;
  createdDate?: Date;
}

interface RuleCardProps {
  rule: Rule;
}

const RuleCard = ({ rule }: RuleCardProps) => {
  const formattedDate = rule.createdDate
    ? CalculatePostTime(rule.createdDate)
    : "";
  return (
    <>
      <div className="mt-5 flex flex-col gap-3 rounded-2xl p-6 bg-greenaccent">
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold">{rule.title}</span>
          <span className="text-greensharp text-sm">{formattedDate}</span>
        </div>
        <span className="text-graylight">{rule.rules}</span>
      </div>
    </>
  );
};

export default RuleCard;
