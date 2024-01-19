"use client";
import { Stepper, Text } from "rizzui";
import { eventStepper } from "@/data/facebackend";
const EventStepper = () => {
  return (
    <>
      <div className="p-4 flex justify-center  w-full bg-greendarkest container-drop-shadow rounded-2xl">
        <Stepper
          direction="vertical"
          dotClassName="bg-greenaccent border-none text-greenaccent"
          className="lg:max-h-[700px] mt-4 gap-4"
          titleClassName="text-white "
          descriptionClassName="text-greensharp max-2xl:text-sm"
        >
          {eventStepper.map((event, index) => (
            <Stepper.Step
              key={index}
              title={event.eventTitle}
              description={`  ${event.date} (${event.venue}) `}
            ></Stepper.Step>
          ))}
        </Stepper>
      </div>
    </>
  );
};

export default EventStepper;
