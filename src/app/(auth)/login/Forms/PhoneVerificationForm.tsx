"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";

const PhoneVerificationForm = () => {
  const formik = useFormik({
    initialValues: {
      phone_number: "",
    },

    onSubmit: (values) => {
      // Handle form submission
      console.log("Form Values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center border-b border-b-graylight w-[280px]">
          <Input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phone_number}
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/phone-verification/verification-code">
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

export default PhoneVerificationForm;
