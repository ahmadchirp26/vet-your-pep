"use client";
import React from "react";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/core/ui/button";
import { useRouter } from "next/navigation";

const UploadImageForm = () => {
  const router = useRouter();
  const initialValues = {
    image: null,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: any) => {
      router.push("/");
      // Implement your image upload logic here
      if (values.image) {
        const formData = new FormData();
        formData.append("image", values.image);

        // Log the image data to the console
        console.log("Image data:", values.image);

        // Reset the form after upload
        formik.resetForm();
      } else {
        console.error("No image selected for upload.");
      }
    },
  });

  const handleImageChange = (e: any) => {
    formik.setFieldValue("image", e.target.files[0]);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="gap-4 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-white text-center">Upload profile picture</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          id="imageInput"
        />
        <label htmlFor="imageInput" className="cursor-pointer">
          {formik.values.image ? (
            <div className="flex justify-center items-center p-5 bg-greenprimary rounded-2xl">
              <Image
                src={URL.createObjectURL(formik.values.image)}
                alt="Selected"
                width={100}
                height={100}
                className="rounded-full"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center p-10 bg-greenprimary rounded-2xl ">
              <Image
                src={"/assets/upload_icon.svg"}
                alt="upload_icon"
                width={50}
                height={50}
              />
            </div>
          )}
        </label>
        <Button
          className="rounded-full mt-5 bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-48"
          type="submit"
        >
          Create account
        </Button>
      </div>
    </form>
  );
};

export default UploadImageForm;
