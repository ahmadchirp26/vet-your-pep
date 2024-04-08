"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { useForgetPasswordMutation } from "@/api/Authentication/useForgotPasswordMutation";
import { useRouter } from "next/navigation";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import { InputField } from "@/components/ui/input-field";

const ForgotPassForm = () => {
  const router = useRouter();
  const { mutateAsync } = useForgetPasswordMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Required"),
    }),

    onSubmit: async (values) => {
      console.log(values);

      try {
        await mutateAsync([
          { input: { email: values.email } }, // Assuming 'email' is the field from your form
        ]);

        router.push(`/login/verification-code/${values.email}`);
      } catch (e) {
        // console.log(e);
        toast({
          title: "Error",
          description: "Email doesn't exists",
          variant: "default",
        });
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method="POST"
        className="flex flex-col gap-4"
      >
        {/* Email */}

        <div className="flex items-center  w-[280px]">
          <InputField
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email ? formik.errors.email : undefined}
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

export default ForgotPassForm;
