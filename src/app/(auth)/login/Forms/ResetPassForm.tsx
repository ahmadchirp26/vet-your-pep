"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";

import { Button } from "@/components/ui/button";

import * as Yup from "yup";
import { useParams, useRouter } from "next/navigation";
import { InputField } from "@/components/ui/input-field";
import { useResetPasswordMutation } from "@/api/Authentication/useResetPasswordMutation";

const ResetPassForm = () => {
  const { mutateAsync } = useResetPasswordMutation();

  const router = useRouter();
  const params = useParams<{ email?: string; code?: string }>();

  console.log(params.email, params.code);

  const email = decodeURIComponent(params?.email ?? "");
  const code = params?.code ?? "";
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: async (values) => {
      console.log(values);

      try {
        await mutateAsync([
          { input: { email: email, password: values.password, code: code } }, // Assuming 'email' is the field from your form
        ]);

        router.push("/login");
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center  w-full">
          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="New Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password ? formik.errors.password : undefined}
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-[280px] "
          />
        </div>

        {/* Confirm Password */}

        <div className="flex items-center w-full  ">
          <InputField
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            className="bg-transparent outline-none  border-none placeholder:text-graylight w-[280px]"
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
              <p>{"Confirm"}</p>
            )}
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default ResetPassForm;
