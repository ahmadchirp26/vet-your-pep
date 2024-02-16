"use client";
import { Button } from "@/core/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/core/ui/dialog";
import { Input } from "@/core/ui/input";
import { Textarea } from "@/core/ui/textarea";
import Image from "next/image";
import SelectChannel from "./SelectChannel";
import { FormikProvider, useFormik } from "formik";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useCreatePostMutation from "@/api/Posts/useCreatePostMutation";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import PostFileUpload from "./PostFileUpload";
import { useState } from "react";
import { toast } from "@/core/ui/use-toast";
import { cn } from "@/core/lib/helper";

const NewPostFormSchema = z.object({
  body: z.string().min(0, "Post cannot be empty"),
  channelId: z.string().min(0, "Channel cannot be empty"),
  attachments: z.array(z.string()).optional(),
});

interface Props {
  channelId?: string;
  onSuccess: () => void;
}
const NewPostForm = ({ channelId, onSuccess }: Props) => {
  const { data } = useAuthSessionContext();
  const { mutateAsync: createPostHandler } = useCreatePostMutation();
  const [waitingForUpload, setWaitingForUpload] = useState(false);
  const formik = useFormik<z.infer<typeof NewPostFormSchema>>({
    initialValues: {
      body: "",
      channelId: channelId || "",
      attachments: [],
    },
    validationSchema: toFormikValidationSchema(NewPostFormSchema),
    onSubmit: async (values) => {
      try {
        if (!data) {
          throw new Error("User not logged in");
        }
        await createPostHandler({
          input: {
            body: values.body,
            channelId: values.channelId,
            images: values.attachments,
          },
        });
        toast({
          title: "Post created",
          variant: "default",
        });
        onSuccess();
      } catch (e) {
        toast({
          title: "Failed to create post",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method={"post"}
        className="flex flex-col gap-3"
      >
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">What's on your mind</span>
          <SelectChannel
            name={"channelId"}
            onValueChange={(v) => {
              formik.setFieldValue("channelId", v);
            }}
            value={formik.values.channelId}
          />
        </div>
        <div className="w-full">
          <div className={"relative"}>
            <div
              
            >
              <Textarea
                name={"body"}
                placeholder="Write here..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={cn(
                  "mt-3 p-2 outline-none border-b border-b-graylight has-[:focus]:border-b-greensharp",
                  Boolean(formik.errors.body) &&
                    "border-b-red-800 has-[:focus]:border-b-red-400"
                )}
              />
            </div>
            {formik.errors.body && (
              <p className="text-red-400 text-xs mt-1">{formik.errors.body}</p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <PostFileUpload
              onUploadedFilesChange={(filesUrls) => {
                formik.setFieldValue("attachments", filesUrls);
              }}
              setIsUploading={setWaitingForUpload}
            />
          </div>
          <Button
            className="rounded-full border-none bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
            type="submit"
            isLoading={formik.isSubmitting || waitingForUpload}
          >
            Done
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

const NewPost = ({ channelId }: { channelId: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="border border-white-500 rounded-full w-full h-10 flex items-center p-3 mt-4 ">
          <Input
            type="text"
            name="search_input"
            id="search_input"
            placeholder="What's new"
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
          <Image
            src={"/assets/airplane_icon.svg"}
            alt="airplane_icon"
            width={20}
            height={20}
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <NewPostForm
          channelId={channelId}
          onSuccess={() => {
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
