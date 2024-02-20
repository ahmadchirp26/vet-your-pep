"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import SelectChannel from "@/features/Post/NewPost/SelectChannel";
import { FormikProvider, useFormik } from "formik";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useCreatePostMutation from "@/api/Posts/useCreatePostMutation";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import PostFileUpload from "@/features/Post/NewPost/PostFileUpload";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/utils/cn";
import { FrontendAttachmentSchema } from "@/lib/zod-schemas/attachment";
import S3UploadHandlerMutationFn from "@/api/S3Bucket/S3UploadHandlerMutationFn";

const NewPostFormSchema = z.object({
  body: z.string().min(0, "Post cannot be empty"),
  channelId: z.string({
    required_error: "Please select a channel",
  }),
  attachments: z.array(FrontendAttachmentSchema).optional(),
});

interface Props {
  channelId?: string;
  onSuccess: () => void;
}
const NewPostForm = ({ channelId, onSuccess }: Props) => {
  const { data } = useAuthSessionContext();
  const { mutateAsync: createPostHandler } = useCreatePostMutation();
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

        // Converting attachments to urls
        formik.setValues((v) => {
          return {
            ...v,
            attachments: v.attachments?.map((v) => ({
              ...v,
              status: "uploading",
            })),
          };
        });
        const uploadedAttachments = formik.values.attachments
          ? await S3UploadHandlerMutationFn(
              formik.values.attachments.map((v) => ({
                file: v.nativeFile,
                id: v.id,
              })),
              data.accessToken,
              ({ id, status, file }) => {
                formik.setValues((v) => {
                  if (typeof id !== "number") return v;
                  if (!v.attachments?.[id]) return v;
                  return {
                    ...v,
                    attachments: [
                      ...v.attachments.slice(0, id),
                      {
                        id,
                        status,
                        nativeFile: file,
                        nativeURL: URL.createObjectURL(file),
                        uploadedURL:
                          status === "uploaded" ? file.name : undefined,
                      },
                      ...v.attachments.slice(id + 1),
                    ],
                  };
                });
              }
            )
          : undefined;

        await createPostHandler({
          input: {
            body: values.body,
            channelId: values.channelId,
            images: uploadedAttachments,
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

  const filesBeingUploading = formik.values.attachments?.filter(
    (v) => v.status === "uploaded"
  );
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method={"post"}
        className="space-y-3"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white text-lg font-extrabold">
              What's on your mind
            </p>
            {!formik.isValid && (
              <div className="mb-2">
                <p className="text-xs text-red-600 font-semibold">
                  {formik.errors.channelId}
                </p>
              </div>
            )}
          </div>
          <SelectChannel name={"channelId"} />
        </div>
        <div className="w-full space-y-2">
          <Textarea
            name={"body"}
            placeholder="Write here..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={cn("p-4 w-full")}
          />
          <PostFileUpload
            files={formik.values.attachments}
            setFiles={(files) => formik.setFieldValue("attachments", files)}
          />
        </div>
        <Button
          className="rounded-full border-none bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-full"
          type="submit"
          disabled={Boolean(formik.errors.body)}
          isLoading={formik.isSubmitting}
          isLoadingText={
            filesBeingUploading
              ? `Uploading Files (${filesBeingUploading.length}/${formik.values.attachments?.length})...`
              : "Posting..."
          }
        >
          {"Done"}
        </Button>
      </form>
    </FormikProvider>
  );
};

const NewPost = ({ channelId }: { channelId?: string }) => {
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
