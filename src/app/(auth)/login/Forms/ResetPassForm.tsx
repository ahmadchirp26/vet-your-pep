"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";

const ResetPassForm = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      // Handle form submission
      // console.log("Form Values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center  border-b border-b-graylight w-[280px]">
          <Input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
        </div>

        {/* Confirm Password */}

        <div className="flex items-center w-full border-b border-b-graylight ">
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/login">
            <Button
              className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-36"
              type="submit"
            >
              Confirm
            </Button>
          </Link>
        </div>
      </form>
    </FormikProvider>
  );
};

export default ResetPassForm;
