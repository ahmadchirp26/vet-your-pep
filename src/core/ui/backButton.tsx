import Image from "next/image";
import Link from "next/link";

const BackButton = ({ href }: any) => {
  return (
    <>
      <Link href={href}>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={"/assets/left_arrow_icon.svg"}
            alt="left_arrow_icon"
            width={8}
            height={8}
          />
          <span className="text-white">Back</span>
        </div>
      </Link>
    </>
  );
};

export default BackButton;
