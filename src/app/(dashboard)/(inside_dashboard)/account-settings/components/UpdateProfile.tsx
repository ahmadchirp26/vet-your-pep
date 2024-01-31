"use client";

import { FormikProvider, useFormik } from "formik";
import { Input } from "@/core/ui/input";
import Image from "next/image";
import { Button } from "@/core/ui/button";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { useState } from "react";

import useCustomerDataQuery from "@/api/AccountSettings/useCustomerDataQuery";
import useUpdateCustomerMutation from "@/api/AccountSettings/useUpdateCustomerMutation";

const UpdateProfile = () => {
  const { data } = useCustomerDataQuery();
  const { mutateAsync } = useUpdateCustomerMutation();

  const [imageURL, setImageURL] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: data?.getCustomerData.email ?? "",
      firstName: data?.getCustomerData.firstName ?? "",
      lastName: data?.getCustomerData.lastName ?? "",
      phoneNumber: data?.getCustomerData.cellPhone ?? "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          input: {
            firstName: values.firstName,
            lastName: values.lastName,

            cellPhone: values.phoneNumber,
          },
        });
      } catch (e) {}
    },
  });

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]; // Get the first selected file

    // Read the selected image file and set its URL to display it
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImageURL(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageURL(null); // Clear the image URL if no file is selected
    }
  };
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method={"POST"}
        className="flex flex-col gap-4 p-2 mt-3"
      >
        {/* Email */}

        <div className="flex items-center w-full  ">
          <div className="flex items-center max-md:flex-col max-md:justify-center max-md:items-center w-full gap-5">
            <div className="rounded-full relative flex justify-center items-center">
              {imageURL ? (
                <Image
                  src={imageURL}
                  alt="profile_image"
                  className="h-[100px] w-[100px] cursor-pointer rounded-full object-cover"
                  height={160}
                  width={160}
                />
              ) : (
                <Image
                  src={"/assets/john_doe_image.svg"}
                  alt="user-profile-pic"
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
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl">
                  {`${data?.getCustomerData.firstName} ${data?.getCustomerData.lastName}`}
                </span>
                <Image
                  src={"/assets/verified_icon.svg"}
                  alt="verified_icon"
                  height={15}
                  width={15}
                />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/email_icon.svg"}
                  alt="email_icon"
                  height={13}
                  width={13}
                />
                <span className="text-graylight text-sm">
                  {data?.getCustomerData.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/phone_icon.svg"}
                  alt="phone_icon"
                  height={13}
                  width={13}
                />
                <span className="text-graylight text-sm">
                  {data?.getCustomerData.cellPhone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* First Name and Last Name */}
        <div className="flex items-center gap-5 max-md:flex-col">
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="bg-greenaccent rounded-full outline-none h-12  border-none placeholder:text-graylight "
          />

          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="bg-greenaccent rounded-full outline-none h-12 border-none placeholder:text-graylight "
          />
        </div>

        {/* Email and Phone Number */}

        <div className="flex items-center w-full gap-5 max-md:flex-col ">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            readOnly
            className="bg-greenaccent rounded-full outline-none h-12  border-none placeholder:text-graylight "
          />
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="bg-greenaccent rounded-full outline-none h-12  border-none placeholder:text-graylight "
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end max-md:justify-center items-center mt-2">
          <Button
            className="rounded-full bg-greentertiary hover:bg-greenaccent text-white flex  w-36"
            type="submit"
          >
            {formik.isSubmitting ? (
              <>
                <SpinnerCircle />
                <p>{"Updating"}</p>
              </>
            ) : (
              <p>{"Update"}</p>
            )}
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default UpdateProfile;
