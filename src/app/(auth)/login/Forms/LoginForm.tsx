"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/api/Authentication/useLoginMutation";
import { toast } from "@/components/ui/use-toast";
import * as Yup from "yup";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import { useRouter } from "next/navigation";
import { InputField } from "@/components/ui/input-field";
import { RegisterEmailIcon } from "@/components/icons/RegisterEmailIcon";
import { RegisterPasswordIcon } from "@/components/icons/RegisterPasswordIcon";

const LoginForm = () => {
  const { mutateAsync } = useLoginMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      try {
        await mutateAsync([values]);
        router.push("/");
      } catch (e) {
        // console.log(e);
        toast({
          title: "Error",
          description: "Invalid Credentials",
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
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email:undefined}
          icon={<RegisterEmailIcon className="w-6 h-6" />}
        />
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password ? formik.errors.password:undefined}
          icon={<RegisterPasswordIcon className="w-6 h-6" />}
        />
        <Link href="/login/forgot-password">
          <div className="w-full justify-end text-xs text-white flex cursor-pointer">
            Forgot Password?
          </div>
        </Link>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Button
            className="rounded-full bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center gap-2 w-36"
            type="submit"
          >
            {formik.isSubmitting ? (
              <>
                <SpinnerCircle />
                <p>{"Loading"}</p>
              </>
            ) : (
              <p>{"Login"}</p>
            )}
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default LoginForm;
