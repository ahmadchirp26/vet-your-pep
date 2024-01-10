import { Input } from "@/core/ui/input";
import Image from "next/image";

const NewPost = () => {
  return (
    <>
      <div className="border border-white-500 rounded-full w-full h-10 flex items-center p-3 mt-4 ">
        <Input
          type="text"
          name="search_input"
          id="search_input"
          placeholder="What's new"
          className="bg-transparent outline-none  border-none placeholder:text-graylight "
        />
        <Image
          src={"/assets/airplane_icon.svg"}
          alt="airplane_icon"
          width={20}
          height={20}
        />
      </div>
    </>
  );
};

export default NewPost;
