"use client";
import { FormikProvider, useFormik } from "formik";
import { useCreateAccountMutation } from "@/api/Authentication";
import * as Yup from "yup";
import { toast } from "@/core/ui/use-toast";
import { Input } from "@/core/ui/input";
import Image from "next/image";
import { Checkbox } from "@/core/ui/checkbox";
import { Button } from "@/core/ui/button";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const { mutateAsync } = useCreateAccountMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: async (values) => {
      router.push("/register/upload-image");
      try {
        await mutateAsync([
          {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            cellPhone: values.phoneNumber,
          },
        ]);
      } catch (error: any) {
        console.log(error);
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method={"POST"}
        className="flex flex-col gap-4"
      >
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
          <Button
            className="rounded-full bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-48"
            type="submit"
          >
            {formik.isSubmitting ? (
              <>
                <SpinnerCircle />
                <p>{"Registering"}</p>
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

export default RegisterForm;
