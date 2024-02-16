import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import useUpdateCustomerMutation from "@/api/AccountSettings/useUpdateCustomerMutation";
import useProtectedS3UploadHandler from "@/api/S3Bucket/useProtectedS3UploadHandler";
import { Skeleton } from "@/core/ui/skeleton";
import Image from "next/image";
import React from "react";

const ProfilePicture = () => {
  const { data, status: gettingDataStatus } = useCustomerDataQuery();
  const { mutate: s3UploadHandler, status: mutatingUploadStatus } =
    useProtectedS3UploadHandler();
  const { mutate: updateCustomerHandler, status: mutatingDataStatus } =
    useUpdateCustomerMutation();

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (!event.target.files?.length) {
      return;
    }
    if (event.target.files[0]) {
      s3UploadHandler(
        { fileToUpload: event.target.files[0] },
        {
          onSuccess: (data) => {
            updateCustomerHandler({
              input: {
                profileImage: data,
              },
            });
          },
        },
      );
    }
  };
  if (
    mutatingUploadStatus === "pending" ||
    mutatingDataStatus === "pending" ||
    gettingDataStatus === "pending"
  ) {
    return <Skeleton className="mt-5 h-[190px] w-[190px]" />;
  }
  return (
    <div className="mt-5 flex h-[190px] w-[190px] flex-col items-center justify-center  p-5">
      <label
        htmlFor="picture"
        className="rounded-full relative flex justify-center items-center "
      >
        {data?.getCustomerData.profileImage ? (
          <Image
            src={data?.getCustomerData.profileImage}
            alt="profile_image"
            className="cursor-pointer rounded-full object-cover border-4 border-greensharp"
            height={160}
            width={160}
          />
        ) : (
          <Image
            src={"/assets/dummy_avatar.png"}
            alt="user-profile-pic"
            className="cursor-pointer rounded-full object-cover border-4 border-greensharp"
            height={160}
            width={160}
          />
        )}
        <label
          htmlFor="picture"
          className="bg-greendarkest rounded-full p-2 absolute cursor-pointer -bottom-3"
        >
          <Image
            src={"/assets/upload_image_icon.svg"}
            alt="user-profile-pic"
            height={20}
            width={20}
          />
        </label>

        <input
          type="file"
          id="picture"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default ProfilePicture;
