"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";
import { Checkbox } from "@/core/ui/checkbox";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
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
          <Image
            src={"/assets/register_email_icon.svg"}
            alt="email_icon"
            width={22}
            height={22}
          />
        </div>

        {/* First Name and Last Name */}
        <div className="flex items-center gap-4 max-md:flex-col">
          <div className="flex items-center w-full border-b border-b-graylight ">
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="bg-transparent outline-none  border-none placeholder:text-graylight"
            />
          </div>
          <div className="flex items-center w-full border-b border-b-graylight ">
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="bg-transparent outline-none  border-none placeholder:text-graylight"
            />
          </div>
        </div>

        {/* Phone Number */}

        <div className="flex items-center w-full border-b border-b-graylight ">
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            className="bg-transparent outline-none  border-none placeholder:text-graylight "
          />
          <Image
            src={"/assets/register_phone_icon.svg"}
            alt="phone_icon"
            width={18}
            height={18}
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
          <Image
            src={"/assets/register_password_icon.svg"}
            alt="password_icon"
            width={22}
            height={22}
          />
        </div>

        <div className="flex gap-2">
          <Checkbox className="border-greensharp " />
          <span className="text-graylight text-xs">
            I agree to Terms & Conditions and Privacy Policy
          </span>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Link href="/register/upload-image">
            <Button
              className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white  flex justify-center items-center w-48"
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

export default RegisterForm;
