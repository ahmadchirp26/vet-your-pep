"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";
import { useLoginMutation } from "@/api/Authentication/useLoginMutation";
import { toast } from "@/core/ui/use-toast";
import * as Yup from "yup";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { mutateAsync } = useLoginMutation();
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string().email().required("Required"),
    //   password: Yup.string().required("Required"),
    // }),
    onSubmit: async (values) => {
      router.push('/')
      // try {
      //   await mutateAsync([values]);
      // } catch (e) {
      //   console.log(e);
      //   toast({
      //     title: "Error",
      //     description: "Invalid Credentials",
      //     variant: "default",
      //   });
      // }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method="POST"
        className="flex flex-col gap-4"
      >
        <div className="flex items-center w-full border-b border-b-graylight ">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
          <Image
            src={"/assets/register_email_icon.svg"}
            alt="email_icon"
            width={22}
            height={22}
          />
        </div>

        {/* Password */}

        <div className="flex items-center w-full border-b border-b-graylight ">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
          <Image
            src={"/assets/register_password_icon.svg"}
            alt="password_icon"
            width={22}
            height={22}
          />
        </div>
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
