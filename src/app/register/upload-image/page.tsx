import Image from "next/image";

import MainLayout from "@/app/components/layout/MainLayout";
import UploadImageForm from "@/app/register/upload-image/components/UploadImageForm";

import BackButton from "@/core/ui/backButton";

export default function UploadImage() {
  const backHref = "/register";
  return (
    <>
      <MainLayout>
        <div className="flex w-full h-screen p-3 flex-col ">
          <div className="w-full justify-start">
            <BackButton href={backHref} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-16">
            <Image
              src={"/assets/logo.svg"}
              alt="Logo"
              width={100}
              height={100}
            />

            <span className="text-greensharp text-2xl  font-bold">
              {" "}
              VetYourPep
            </span>
            <span className="font-bold text-greensecondary text-xl">
              Account settings
            </span>

            <div className=" h-25 flex justify-center items-center rounded-3xl register-container-gradient p-8 w-1/2 max-md:w-full mt-3 ">
              <UploadImageForm />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
