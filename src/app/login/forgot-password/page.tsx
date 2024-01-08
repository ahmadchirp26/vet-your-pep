import Image from "next/image";

import MainLayout from "@/app/components/layout/MainLayout";
import BackButton from "@/app/components/atoms/backButton";
import ForgotPassForm from "@/app/components/organisms/Forms/ForgotPassForm";

import Logo from "../../../../public/assets/logo.svg";

export default function UploadImage() {
  const backHref = "/login";
  return (
    <>
      <MainLayout>
        <div className="flex w-full h-screen p-3 flex-col ">
          <div className="w-full justify-start">
            <BackButton href={backHref} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-16">
            <Image src={Logo} alt="Logo" className="w-24 h-24" />

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
      </MainLayout>
    </>
  );
}
