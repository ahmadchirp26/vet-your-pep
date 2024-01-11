interface Rule {
  title: string;
  ruleContent: string;
  postedTime: string;
}

interface RuleCardProps {
  rule: Rule;
}

const RuleCard = ({ rule }: RuleCardProps) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-3 rounded-2xl p-6 bg-greenaccent">
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold">{rule.title}</span>
          <span className="text-greensharp text-sm">{rule.postedTime}</span>
        </div>
        <span className="text-graydark">{rule.ruleContent}</span>
      </div>
    </>
  );
};

export default RuleCard;
