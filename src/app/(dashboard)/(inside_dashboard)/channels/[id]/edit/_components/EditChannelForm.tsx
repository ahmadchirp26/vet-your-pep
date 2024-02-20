"use client";
import { FormikProvider, useFormik } from "formik";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGetChannel } from "@/api/Channels/useGetChannel";
import useUpdateChannelMutation from "@/api/Channels/useUpdateChannelMutation";

import { useState } from "react";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import { useRouter } from "next/navigation";

type Props = {
  channelId: string;
};

const EditChannel = ({ channelId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // console.log("Real Channel ID", channelId);
  const { data, status } = useGetChannel(channelId);
  const { mutateAsync } = useUpdateChannelMutation();

  const formik = useFormik({
    initialValues: {
      title: data?.getChannelById.title || "",
      status: data?.getChannelById.status || "",
      rules: data?.getChannelById.rules || "",
      about: data?.getChannelById.about || "",
    },
    enableReinitialize: true,

    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await mutateAsync({
          input: {
            id: channelId,
            title: values.title,
            about: values.about,
            rules: values.rules,
          },
        });
        toast.success("Channel updated successfully");
        router.back();
      } catch (e) {
        toast.error("Error updating channel");
      } finally {
        setIsLoading(false);
      }
    },
  });
  if (status === "pending") {
    return "Loading...";
  }
  if (status === "error") {
    return "Error";
  }
  return (
    <>
      <div className="bg-greendarkest p-6 rounded-lg">
        <FormikProvider value={formik}>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            {/* Email */}

            <div className="flex items-center w-full gap-2">
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Channel Name"
                onChange={formik.handleChange}
                value={formik.values.title}
                className="bg-greenaccent rounded-3xl outline-none  border-none placeholder:text-white h-14"
              />
              <Select>
                <SelectTrigger
                  className="w-full h-14 text-white"
                  disabled={true}
                >
                  <SelectValue placeholder={formik.values.status} />
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
                name="rules"
                className="text-white"
                onChange={formik.handleChange}
                value={formik.values.rules}
              />
            </div>

            {/* About Channel */}
            <div className="flex flex-col gap-1">
              <span className="text-white p-2 ">About Channel</span>
              <Textarea
                placeholder="Write here..."
                name="about"
                className="text-white"
                onChange={formik.handleChange}
                value={formik.values.about}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end items-center mt-2">
              <Button
                className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-48"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <SpinnerCircle /> : "Save"}
              </Button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};

export default EditChannel;
