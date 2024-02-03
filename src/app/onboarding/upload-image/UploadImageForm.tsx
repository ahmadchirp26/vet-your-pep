"use client";
import React from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button } from "@/core/ui/button";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import UploadFileButton from "@/core/components/upload-file-button";
import useProtectedS3UploadHandler from "@/api/S3Bucket/useProtectedS3UploadHandler";
import useUpdateCustomerMutation from "@/api/AccountSettings/useUpdateCustomerMutation";
import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import { Skeleton } from "@/core/ui/skeleton";
import { useRouter } from "next/navigation";
import { toast } from "@/core/ui/use-toast";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const imageForm = z.object({
  image: z
    .any()
    .optional()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

const UploadImageForm = () => {
  const { mutate: s3UploadHandler, status: mutatingUploadStatus } =
    useProtectedS3UploadHandler();
  const { mutate: updateCustomerHandler, status: mutatingDataStatus } =
    useUpdateCustomerMutation();
  const { data, status } = useCustomerDataQuery();
  const router= useRouter()
  const formik = useFormik<z.infer<typeof imageForm>>({
    initialValues: {
      image: undefined,
    },
    validationSchema: toFormikValidationSchema(imageForm),
    onSubmit: (values) => {
      s3UploadHandler(
        { fileToUpload: values.image?.[0] },
        {
          onSuccess: (data) => {
            updateCustomerHandler({
              input: {
                profileImage: data,
              },
            }, {
              onSuccess: () => {
                toast({
                  title: "Success",
                  description: "Profile picture added",
                  variant: "default",
                })
                router.push("/")
              }
            });
          },
        }
      );
    },
  });

  const imagePreview =
    formik.values.image instanceof FileList && formik.values.image?.[0]
      ? URL.createObjectURL(formik.values.image?.[0])
      : data?.getCustomerData.profileImage;
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="gap-4 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        {status === "pending" ? (
          <Skeleton className="w-28 h-28 bg-greenprimary-foreground" />
        ) : (
          <UploadFileButton
            className="flex justify-center items-center cursor-pointer w-28 h-28 bg-greenprimary rounded-2xl"
            buttonComponent={
              imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Selected"
                  className="rounded-full"
                  width={60}
                  height={60}
                />
              ) : (
                <Image
                  src={"/assets/upload_icon.svg"}
                  alt="upload_icon"
                  width={60}
                  height={60}
                />
              )
            }
            inputProps={{
              accept: "image/*",
              onChange: (event) => {
                formik.setFieldValue("image", event.currentTarget.files);
              },
            }}
          />
        )}
        <Button
          className="rounded-full mt-5 px-4 py-2 bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center"
          type="submit"
          disabled={
            mutatingDataStatus === "pending" ||
            mutatingUploadStatus === "pending" ||
            status === "pending"
          }
        >
          {mutatingDataStatus === "pending" ||
          mutatingUploadStatus === "pending"
            ? "Uploading..."
            : "Upload Your Profile Picture"}
        </Button>
      </div>
    </form>
  );
};

export default UploadImageForm;
