"use client";
import { Calendar } from "@/core/ui/calendar";
import React from "react";

const EventCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-2xl container-drop-shadow bg-greendarkest text-white "
    />
  );
};

export default EventCalendar;
