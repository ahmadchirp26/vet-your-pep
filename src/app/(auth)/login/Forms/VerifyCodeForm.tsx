"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface CodeFormProps {
  email: string;
}

const VerifyCodeForm = ({ email }: CodeFormProps) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      code: "",
    },

    onSubmit: (values) => {
      const code = values.code;
      router.push(`/login/reset-password/${email}/${code}`);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method="POST"
        className="flex flex-col gap-4"
      >
        {/* Verification Code */}

        <div className="flex items-center border-b border-b-graylight w-[280px]">
          <Input
            type="number"
            id="code"
            name="code"
            placeholder="Verification Code"
            onChange={formik.handleChange}
            value={formik.values.code}
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Button
            className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-36"
            type="submit"
          >
            {formik.isSubmitting ? (
              <>
                <SpinnerCircle />
                <p>{"Loading"}</p>
              </>
            ) : (
              <p>{"Next"}</p>
            )}
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default VerifyCodeForm;
