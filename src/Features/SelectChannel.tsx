import { useJoinedChannels } from "@/api/Channels/useJoinedChannels";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import React from "react";

const SelectChannel = (props: React.ComponentProps<typeof Select>) => {
  const { data, status } = useJoinedChannels();
  if (status === "pending") {
    //[Todo]: Add a skeleton
    return <div>Loading...</div>;
  }
  if (status === "error") {
    //[Todo]: handle error
    return <div>Failed to load</div>;
  }
  return (
    <Select {...props}>
      <SelectTrigger className="w-[160px] h-[35px]">
        <SelectValue placeholder="Select Channel" />
      </SelectTrigger>
      <SelectContent>
        {data?.listChannels.results.map((channel, index) => (
          <SelectItem key={index} value={channel.id}>
            {channel.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectChannel;
