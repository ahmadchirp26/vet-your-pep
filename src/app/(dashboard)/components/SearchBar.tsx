import { Input } from "@/core/ui/input";
import Image from "next/image";

const SearchBar = () => {
  return (
    <>
      <div className="border border-white-500 rounded-full w-full h-10 flex items-center p-3 search-drop-shadow">
        <Image
          src={"/assets/search_icon.svg"}
          alt="search_icon"
          width={20}
          height={20}
        />
        <Input
          type="text"
          name="search_input"
          id="search_input"
          placeholder="search..."
          className="bg-transparent outline-none  border-none placeholder:text-graylight "
        />
      </div>
    </>
  );
};

export default SearchBar;
