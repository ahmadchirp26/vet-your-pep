"use client";
import React from "react";
import { FormikProvider, useFormik } from "formik";
import Image from "next/image";

import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { Checkbox } from "@/core/ui/checkbox";

import EmailIcon from "../../../../public/assets/register_email_icon.svg";
import PhoneIcon from "../../../../public/assets/register_phone_icon.svg";
import PasswordIcon from "../../../../public/assets/register_password_icon.svg";

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
          <Image src={EmailIcon} alt="email_icon" className="w-6 h-6" />
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
          <Image src={PhoneIcon} alt="phone_icon" className="w-6 h-6" />
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
          <Image src={PasswordIcon} alt="password_icon" className="w-6 h-6" />
        </div>

        <div className="flex gap-2">
          <Checkbox className="border-greensharp " />
          <span className="text-graylight text-xs">
            I agree to Terms & Conditions and Privacy Policy
          </span>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-2">
          <Button
            className="rounded-full  bg-greentertiary hover:bg-greenaccent text-white w-1/2 flex justify-center items-center"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default RegisterForm;
