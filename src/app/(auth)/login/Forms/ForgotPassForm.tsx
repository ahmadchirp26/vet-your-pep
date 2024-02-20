"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";

const ForgotPassForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: () => {
      // Handle form submission
      // console.log("Form Values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* Email */}

        <div className="flex items-center border-b border-b-graylight w-[280px]">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/login/verification-code">
            <Button
              className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-36"
              type="submit"
            >
              Next
            </Button>
          </Link>
        </div>
      </form>
    </FormikProvider>
  );
};

export default ForgotPassForm;
