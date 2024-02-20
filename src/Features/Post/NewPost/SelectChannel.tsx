import useGetChannels from "@/api/Channels/useGetChannels";
import { cn } from "@/core/lib/helper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import { useField } from "formik";
import React from "react";

const SelectChannel = (
  props: React.ComponentProps<typeof Select> & { name: string }
) => {
  const [field, meta, helpers] = useField({ name: props.name });
  const { data, status } = useGetChannels({
    limit: 100,
    joined: true,
  });
  if (status === "pending") {
    //[Todo]: Add a skeleton
    return <div>Loading...</div>;
  }
  if (status === "error") {
    //[Todo]: handle error
    return <div>Failed to load</div>;
  }
  return (
    <Select
      {...props}
      name={props.name}
      onValueChange={(v) => {
        helpers.setValue(v);
      }}
      value={field.value}
    >
      <SelectTrigger
        className={cn(
          "h-10 px-4 py-2 max-w-48 font-bold",
          meta.error && "border-2 border-red-600 text-red-400"
        )}
        onBlur={field.onBlur}
      >
        <SelectValue placeholder="Select Channel" />
      </SelectTrigger>
      <SelectContent>
        {data?.getChannels.results.map((channel, index) => (
          <SelectItem key={index} value={channel.id}>
            {channel.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectChannel;
