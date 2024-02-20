"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PhoneVerifyCodeForm = () => {
  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },

    onSubmit: () => {
      // Handle form submission
      // console.log("Form Values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* Verification Code */}

        <div className="flex items-center border-b border-b-graylight w-[280px]">
          <Input
            type="number"
            id="verificationCode"
            name="verificationCode"
            placeholder="Verification Code"
            onChange={formik.handleChange}
            value={formik.values.verificationCode}
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/account-settings">
            <Button
              className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-36"
              type="submit"
            >
              Verify
            </Button>
          </Link>
        </div>
      </form>
    </FormikProvider>
  );
};

export default PhoneVerifyCodeForm;
