// EventStepper.tsx
import React from "react";
import CustomStepper from "@/components/custom-stepper";
import { eventStepper } from "@/data/facebackend";
import { useGetEventByChannelId } from "@/api/Events/useGetEvents";
import formatDate from "@/features/DateFormatter";
interface Props {
  channelId: string;
}

const EventStepper = ({ channelId }: Props) => {
  const { data } = useGetEventByChannelId(channelId);
  console.log(data);

  let latestEvent;

  if (data) {
    latestEvent = data.getEvents.results[data.getEvents.results.length - 1];
  }

  return (
    <>
      <div className="bg-greendarkest p-12 container-drop-shadow rounded-2xl">
        <ol className="relative border-s border-greendark dark:border-greensharp ">
          {latestEvent ? (
            <CustomStepper
              key={latestEvent.id}
              date={formatDate(latestEvent.startDate)}
              title={latestEvent.title}
              eventId={latestEvent.id}
              channelId={channelId}
              // description={latestEvent.text}
            />
          ) : (
            <li>No event found</li>
          )}
        </ol>
      </div>
    </>
  );
};

export default EventStepper;
