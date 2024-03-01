"use client";
import { useGetEventById } from "@/api/Events/useGetEventById";
import { Button } from "@/components/ui/button";
import formatDate from "@/features/DateFormatter";
import Image from "next/image";

interface Props {
  EventId: string;
}

const EventDetailsCard = ({ EventId }: Props) => {
  // console.log("Event ID", EventId);
  const { data } = useGetEventById(EventId);
  return (
    <>
      <div className="flex justify-between gap-5 max-md:flex-col">
        {/* Event Name, date, mode */}
        <div className="flex flex-col gap-1 p-10 max-xl:p-5 max-md:order-2 max-sm:p-2">
          <div className="flex gap-3 items-center">
            <div className="bg-greenaccent w-6 h-6 rounded-full"></div>
            <span className="font-bold text-white text-lg">
              {data?.getEventById?.title}
            </span>
          </div>
          <span className="text-graylight text-sm">
            {formatDate(data?.getEventById?.startDate)}
          </span>
          <span className="text-white">Online</span>
          {/* Description */}
          <div className="flex max-w-[500px] mt-5">
            <span className="text-graylight">{data?.getEventById?.text}</span>
          </div>
          {/* <Button
            className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-28 mt-5"
            type="button"
          >
            Remind me
          </Button> */}
        </div>

        <div className="rounded-xl mt-10 max-md:order-1">
          {data?.getEventById?.images?.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt="event_details_image"
              width={500}
              height={600}
              className="rounded-xl"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventDetailsCard;
