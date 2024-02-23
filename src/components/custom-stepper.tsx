// CustomStepper.tsx
import Link from "next/link";
import React from "react";

interface CustomStepperProps {
  date: string;
  title: string;
  // description: string;
  eventId: string;
  channelId: string;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  date,
  title,
  // description,
  eventId,
  channelId,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-6 h-6 bg-greenaccent rounded-full -left-[13px]  "></div>
      <div className="flex flex-col hover:bg-greenaccent p-1 rounded-md ">
        {/* <span className="mb-1 text-xs font-normal leading-none text-graylight">
          {date}
        </span> */}
        <Link href={`/channels/${channelId}/events/${eventId}`}>
          <span className="text-lg   text-white">{title}</span>
        </Link>
        <span className="mb-4 text-xs font-normal text-greensharp">{date}</span>
      </div>
    </li>
  );
};

export default CustomStepper;
