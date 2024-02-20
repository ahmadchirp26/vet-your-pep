import { Button } from "@/components/ui/button";
import Link from "next/link";

const EventCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-greendarkest rounded-3xl justify-center items-center p-3 container-drop-shadow">
        <span className="text-lg text-white font-bold"> Events</span>
        <div className="flex items-center gap-3 max-sm:flex-col">
          <span className="text-white">The Beat Box</span>
          <span className="text-graydark text-sm">Online</span>
        </div>
        <span className="text-greensharp text-sm text-center">
          05 Dec 2023 4:00 PM
        </span>
        <Link href="/channels/:id/events">
          <Button
            className="rounded-full border border-white bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-30"
            type="button"
          >
            Add to Calendar
          </Button>
        </Link>
      </div>
    </>
  );
};

export default EventCard;
