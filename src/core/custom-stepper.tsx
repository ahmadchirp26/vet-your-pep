// CustomStepper.tsx
import React from "react";

interface CustomStepperProps {
  date: string;
  title: string;
  description: string;
}

const CustomStepper: React.FC<CustomStepperProps> = ({
  date,
  title,
  description,
}) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-6 h-6 bg-greenaccent rounded-full -left-[13px]  "></div>
      <div className="flex flex-col ">
        <span className="mb-1 text-xs font-normal leading-none text-graylight">
          {date}
        </span>
        <span className="text-lg   text-white">{title}</span>
        <span className="mb-4 text-sm font-normal text-greensharp">
          {description}
        </span>
      </div>
    </li>
  );
};

export default CustomStepper;
