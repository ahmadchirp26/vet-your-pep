import { Button } from "@/components/ui/button";
import Image from "next/image";

const EventDetailsCard = () => {
  return (
    <>
      <div className="flex justify-between gap-5 max-md:flex-col">
        {/* Event Name, date, mode */}
        <div className="flex flex-col gap-1 p-10 max-xl:p-5 max-md:order-2 max-sm:p-2">
          <div className="flex gap-3 items-center">
            <div className="bg-greenaccent w-6 h-6 rounded-full"></div>
            <span className="font-bold text-white text-lg">The Beat Box</span>
          </div>
          <span className="text-graylight text-sm">05 Dec 2023 4:00 PM</span>
          <span className="text-white">Online</span>
          {/* Description */}
          <div className="flex max-w-[500px] mt-5">
            <span className="text-graylight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
              iaculis metus, ut vulputate mi. Morbi blandit tortor quis accumsan
              volutpat. Suspendisse potenti. Maecenas dictum ligula velit, at
              dignissim tortor convallis ut. Praesent convallis turpis a metus
              laoreet pretium. Phasellus a orci id ligula hendrerit viverra quis
              sollicitudin erat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam in iaculis metus, ut vulputate mi. Morbi
              blandit tortor quis accumsan volutpat. Suspendisse potenti.
              Maecenas dictum ligula velit, at dignissim tortor convallis ut.
              Praesent convallis turpis a metus laoreet pretium. Phasellus a
              orci id ligula hendrerit viverra quis sollicitudin erat.
            </span>
          </div>
          <Button
            className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-28 mt-5"
            type="button"
          >
            Remind me
          </Button>
        </div>

        <div className="rounded-xl mt-10 max-md:order-1">
          <Image
            src={"/assets/event_details_image.png"}
            alt="event_details_image"
            width={500}
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default EventDetailsCard;
