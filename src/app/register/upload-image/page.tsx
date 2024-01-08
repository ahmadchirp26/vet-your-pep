import Image from "next/image";

import MainLayout from "@/app/components/layout/MainLayout";

import Logo from "../../../../public/assets/logo.svg";
import UploadImageForm from "@/app/components/organisms/Forms/UploadImageForm";

export default function UploadImage() {
  return (
    <>
      <MainLayout>
        <div className="flex w-full h-screen p-3 flex-col ">
          <div className="flex justify-start w-full">
            <Image src={Logo} alt="Logo" className="w-24 h-24" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-16">
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
