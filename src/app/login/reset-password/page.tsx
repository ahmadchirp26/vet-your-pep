import Image from "next/image";

import MainLayout from "@/app/components/layout/MainLayout";
import BackButton from "@/app/components/atoms/backButton";
import ResetPassForm from "@/app/components/organisms/Forms/ResetPassForm";

import Logo from "../../../../public/assets/logo.svg";

export default function UploadImage() {
  const backHref = "/login/verification-code";
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

            <div className=" h-25 flex justify-center items-center rounded-3xl register-container-gradient p-8  max-md:w-full mt-3  gap-3 flex-col">
              <span className="text-white font-bold ">Reset Password</span>

              <ResetPassForm />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
