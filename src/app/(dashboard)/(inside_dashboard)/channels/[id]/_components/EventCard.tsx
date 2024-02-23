import { useGetEventByChannelId } from "@/api/Events/useGetEventByChannelId";
import { Button } from "@/components/ui/button";
import formatDate from "@/features/DateFormatter";
import Link from "next/link";

interface Props {
  channelId: string;
}

const EventCard = ({ channelId }: Props) => {
  const { data, error } = useGetEventByChannelId(channelId);
  console.log(data);

  return (
    <>
      {data ? (
        data.getEventsByChannel.results.map((event) => (
          <div
            key={event.id}
            className="flex flex-col gap-2 bg-greendarkest rounded-3xl justify-center items-center p-3 container-drop-shadow"
          >
            <span className="text-lg text-white font-bold">Events</span>
            <div className="flex items-center gap-3 max-sm:flex-col">
              <span className="text-white">{event.title}</span>
              {/* <span className="text-graydark text-sm">Online</span> */}
            </div>
            <span className="text-greensharp text-sm text-center">
              {formatDate(event.startDate)}
            </span>
            <Link href={`/channels/${channelId}/events`}>
              <Button
                className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-30"
                type="button"
              >
                Add to Calendar
              </Button>
            </Link>
          </div>
        ))
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

export default EventCard;
