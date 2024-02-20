import Image from "next/image";

import BackButton from "@/components/ui/backButton";
import ForgotPassForm from "@/app/(auth)/login/Forms/ForgotPassForm";

export default function ForgetPassword() {
  return (
    <>
      <div className="flex w-full h-screen p-3 flex-col ">
        <div className="w-full justify-start">
          <BackButton />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-16">
          <Image src={"/assets/logo.svg"} alt="Logo" width={100} height={100} />

          <span className="text-greensharp text-2xl  font-bold mt-3">
            {" "}
            VetYourPep
          </span>

          <div className=" h-25 flex justify-center items-center rounded-3xl register-container-gradient p-8 w-3/3.5 max-md:w-full mt-3  gap-3 flex-col">
            <span className="text-white font-bold ">Forgot Password</span>
            <span className="text-graydark text-center text-sm">
              Tell us your email address, and we’ll get you back
              <br /> on track in no time.
            </span>
            <ForgotPassForm />
          </div>
        </div>
      </div>
    </>
  );
}
