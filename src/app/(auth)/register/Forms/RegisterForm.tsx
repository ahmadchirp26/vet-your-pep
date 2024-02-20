"use client";
import { FormikProvider, useFormik } from "formik";
import { useCreateAccountMutation } from "@/api/Authentication";
import * as Yup from "yup";
import { toast } from "@/core/ui/use-toast";
import { Checkbox } from "@/core/ui/checkbox";
import { Button } from "@/core/ui/button";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";
import { useRouter } from "next/navigation";
import { InputField } from "@/core/ui/input-field";
import { RegisterEmailIcon } from "@/core/icons/RegisterEmailIcon";
import { RegisterPhoneIcon } from "@/core/icons/RegisterPhoneIcon";
import { RegisterPasswordIcon } from "@/core/icons/RegisterPasswordIcon";

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

      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync([
          {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
          },
        ]);
        router.push("/onboarding/upload-image");
      } catch (error: any) {
        // console.log(error);
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
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          icon={<RegisterEmailIcon className={"w-6 h-6"} />}
          error={formik.errors.email}
        />

        {/* First Name and Last Name */}
        <div className="flex items-center gap-4 max-md:flex-col">
          <InputField
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.errors.firstName}
          />
          <InputField
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.errors.lastName}
          />
        </div>

        {/* Phone Number */}

        <InputField
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          icon={<RegisterPhoneIcon className={"w-6 h-6"} />}
          error={formik.errors.phoneNumber}
        />

        {/* Password */}

        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          icon={<RegisterPasswordIcon className={"w-6 h-6"} />}
          error={formik.errors.password}
        />

        {/* Confirm Password */}
        <InputField
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          icon={<RegisterPasswordIcon className={"w-6 h-6"} />}
          error={formik.errors.confirmPassword}
        />

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
