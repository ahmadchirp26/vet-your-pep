"use client";

import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";
import { Textarea } from "@/core/ui/textarea";

const EditChannel = () => {
  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupVisibility: "",
      channelRule: "",
      aboutChannel: "",
    },

    onSubmit: (values) => {
      // Handle form submission
      console.log("Form Values", values);
    },
  });
  return (
    <>
      <FormikProvider value={formik}>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full"
        >
          {/* Email */}

          <div className="flex items-center w-full gap-2">
            <Input
              type="text"
              id="groupName"
              name="groupName"
              placeholder="Enter Group Name"
              onChange={formik.handleChange}
              value={formik.values.groupName}
              className="bg-greenaccent rounded-3xl outline-none  border-none placeholder:text-graylight h-14"
            />
            <Select>
              <SelectTrigger className="w-full h-14 text-graylight">
                <SelectValue placeholder="Select Channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Public">Public</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Channel's Rule */}
          <div className="flex flex-col gap-1">
            <span className="text-white p-2 ">Channel Rule's</span>
            <Textarea
              placeholder="Write here..."
              name="channelRule"
              className="text-white"
            />
          </div>

          {/* About Channel */}
          <div className="flex flex-col gap-1">
            <span className="text-white p-2 ">About Channel</span>
            <Textarea
              placeholder="Write here..."
              name="aboutChannel"
              className="text-white"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end items-center mt-2">
            <Link href="/channels/12">
              <Button
                className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-48"
                type="submit"
              >
                Save
              </Button>
            </Link>
          </div>
        </form>
      </FormikProvider>
    </>
  );
};

export default EditChannel;
