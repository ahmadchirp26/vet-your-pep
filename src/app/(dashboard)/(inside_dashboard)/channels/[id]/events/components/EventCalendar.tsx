import { useGetEventByChannelId } from "@/api/Events/useGetEventByChannelId";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

interface Props {
  channelId: string;
}

const EventCalendar = ({ channelId }: Props) => {
  const { data } = useGetEventByChannelId(channelId);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  return (
    <>
      {data?.getEventsByChannel?.results?.map((event, index) => (
        <Calendar
          key={index}
          mode="single"
          selected={new Date(event.startDate)} // Convert the string to Date object here
          onSelect={setSelectedDate}
          className="rounded-2xl container-drop-shadow bg-greendarkest text-white "
        />
      ))}
    </>
  );
};

export default EventCalendar;
