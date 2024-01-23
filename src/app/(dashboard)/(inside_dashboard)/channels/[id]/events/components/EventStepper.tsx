// EventStepper.tsx
import React from "react";
import CustomStepper from "@/core/custom-stepper";
import { eventStepper } from "@/data/facebackend";

const EventStepper: React.FC = () => {
  return (
    <>
      <div className="bg-greendarkest p-12 container-drop-shadow rounded-2xl">
        <ol className="relative border-s border-greendark dark:border-greensharp ">
          {eventStepper.map((event, index) => (
            <CustomStepper
              key={index}
              date={event.date}
              title={event.eventTitle}
              description={event.venue}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default EventStepper;
