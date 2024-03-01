import { useState } from "react";
import { useGetEventByChannelId } from "@/api/Events/useGetEvents";
import { Button } from "@/components/ui/button";
import formatDate from "@/features/DateFormatter";
import Link from "next/link";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";

interface Props {
  channelId: string;
}

const EventCard = ({ channelId }: Props) => {
  const { data, status } = useGetEventByChannelId(channelId);
  const [isLoading, setIsLoading] = useState(false); // Step 1

  const handleAddToCalendarClick = () => {
    setIsLoading(true); // Step 2
    // Perform any asynchronous actions here (e.g., fetching data)
    // After the data is loaded, update the state again to hide the spinner
  };

  if (status === "pending") {
    return <EventCardSkeleton />;
  }

  if (status === "error") {
    return <p>{"Error"}</p>;
  }

  let latestEvent;

  if (data) {
    latestEvent = data.getEvents.results[data.getEvents.results.length - 1];
  }

  return (
    <>
      {latestEvent ? (
        <div
          key={latestEvent.id}
          className="flex flex-col gap-2 bg-greendarkest rounded-3xl justify-center items-center p-3 container-drop-shadow"
        >
          <span className="text-lg text-white font-bold">Events</span>
          <div className="flex items-center gap-3 max-sm:flex-col">
            <span className="text-white">{latestEvent.title}</span>
            {/* <span className="text-graydark text-sm">Online</span> */}
          </div>
          <span className="text-greensharp text-sm text-center">
            {formatDate(latestEvent.startDate)}
          </span>
          {/* Step 3 */}

          <Link href={`/channels/${channelId}/events`}>
            <Button
              className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-30"
              type="button"
              onClick={handleAddToCalendarClick} // Step 2 (continued)
            >
              {isLoading ? <SpinnerCircle /> : "Add to Calendar"}
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-2 bg-greendarkest rounded-3xl justify-center items-center p-3 container-drop-shadow">
          <span className="text-lg text-white font-bold">Events</span>

          <span className="text-greensharp text-sm text-center">
            No Events Available
          </span>
        </div>
      )}
    </>
  );
};

export const EventCardSkeleton = () => {
  return (
    <div className="bg-greendarkest rounded-3xl p-3 space-y-4 shadow-glow flex flex-col items-center">
      <div className="h-6 w-16 p-2 bg-greenlight rounded-lg animate-pulse" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-4 w-20 bg-greenlight rounded-lg animate-pulse" />
        <div className="h-4 w-20 bg-greenlight rounded-lg animate-pulse" />
        <div className="h-8 w-20 p-2 bg-greenlight rounded-lg animate-pulse" />
      </div>
    </div>
  );
};

export default EventCard;
