"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../atoms/button";
import { Input } from "../../atoms/input";

import EmailIcon from "../../../../../public/assets/register_email_icon.svg";
import PasswordIcon from "../../../../../public/assets/register_password_icon.svg";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // Handle form submission
      console.log("Form Values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* Email */}

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
          <Image src={EmailIcon} alt="email_icon" className="w-6 h-6" />
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
          <Image src={PasswordIcon} alt="password_icon" className="w-6 h-6" />
        </div>
        <Link href="/login/forgot-password">
          <div className="w-full justify-end text-xs text-white flex cursor-pointer">
            Forgot Password?
          </div>
        </Link>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/login">
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

export default LoginForm;
