import { useGetEventByChannelId } from "@/api/Events/useGetEvents";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

interface Props {
  channelId: string;
}

const EventCalendar = ({ channelId }: Props) => {
  const { data } = useGetEventByChannelId(channelId);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  let latestEvent;

  if (data) {
    latestEvent = data.getEvents.results[data.getEvents.results.length - 1];
  }

  return (
    <>
      {latestEvent ? (
        <Calendar
          key={latestEvent.id}
          mode="single"
          selected={new Date(latestEvent.startDate)} // Convert the string to Date object here
          onSelect={setSelectedDate}
          className="rounded-2xl container-drop-shadow bg-greendarkest text-white "
        />
      ) : null}
    </>
  );
};

export default EventCalendar;
