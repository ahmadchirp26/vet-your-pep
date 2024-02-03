import Image from "next/image";
import UploadImageForm from "@/app/onboarding/upload-image/UploadImageForm";

export default function UploadImage() {
  return (
    <div className="flex w-full min-h-screen p-3 flex-col ">
      <div className="flex flex-col justify-center items-center gap-2 mt-16">
        <Image src={"/assets/logo.svg"} alt="Logo" width={100} height={100} />
        <span className="text-greensharp text-2xl font-bold">VetYourPep</span>
        <span className="font-bold text-greensecondary text-xl">
          Account settings
        </span>
        <div className=" h-25 flex justify-center items-center rounded-3xl register-container-gradient p-8 w-1/2 max-md:w-full mt-3 ">
          <UploadImageForm />
        </div>
      </div>
    </div>
  );
}
