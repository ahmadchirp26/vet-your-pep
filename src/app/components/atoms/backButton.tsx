import Image from "next/image";
import Link from "next/link";

import LeftArrowIcon from "../../../../public/assets/left_arrow_icon.svg";
const BackButton = ({ href }: any) => {
  return (
    <>
      <Link href={href}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={LeftArrowIcon}
            alt="left_arrow_icon"
            className="h-4 w-4 "
          />
          <span className="text-white">Back</span>
        </div>
      </Link>
    </>
  );
};

export default BackButton;
