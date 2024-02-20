"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleBack}
      >
        <Image
          src={"/assets/left_arrow_icon.svg"}
          alt="left_arrow_icon"
          width={8}
          height={8}
        />
        <span className="text-white">Back</span>
      </div>
    </>
  );
};

export default BackButton;
