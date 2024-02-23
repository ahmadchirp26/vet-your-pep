// EventStepper.tsx
import React from "react";
import CustomStepper from "@/components/custom-stepper";
import { eventStepper } from "@/data/facebackend";
import { useGetEventByChannelId } from "@/api/Events/useGetEventByChannelId";
import formatDate from "@/features/DateFormatter";
interface Props {
  channelId: string;
}

const EventStepper = ({ channelId }: Props) => {
  const { data } = useGetEventByChannelId(channelId);
  console.log(data);
  return (
    <>
      <div className="bg-greendarkest p-12 container-drop-shadow rounded-2xl">
        <ol className="relative border-s border-greendark dark:border-greensharp ">
          {data?.getEventsByChannel?.results?.map((event, index) => (
            <CustomStepper
              key={index}
              date={formatDate(event.startDate)}
              title={event.title}
              eventId={event.id}
              channelId={channelId}
              // description={event.text}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default EventStepper;
