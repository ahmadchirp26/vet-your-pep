"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/core/lib/helper";
import { buttonVariants } from "@/core/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 ", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous:
          "absolute left-1 border-none  text-greendark hover:bg-greenlight hover:text-greendark",
        nav_button_next:
          "absolute right-1 border-none text-greendark hover:bg-greenlight hover:text-greendark",
        table: "w-full border-collapse space-y-4",
        head_row: "flex text-greylight",
        head_cell:
          "text-muted-foreground rounded-full w-32 max-lg:w-24 max-md:w-20 max-sm:w-full font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-24 w-32 max-lg:w-24 max-md:h-16 max-md:w-20 max-sm:h-full flex justify-center items-center max-sm:w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-full  first:[&:has([aria-selected])]:rounded-full last:[&:has([aria-selected])]:rounded-full focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9  p-0 font-normal rounded-full",
        ),
        day_range_end: "day-range-end",

        day_selected: "bg-[#45AEB5]  hover:bg-[#45AEA5]  ",
        day_today: "bg-[#45AEB5]  hover:bg-[#45AEA5]",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4"  {...props}/>,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" {...props} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
