"use client";
import { SearchIcon } from "@/core/icons/SearchIcon";
import { cn } from "@/core/lib/helper";
import { Input } from "@/core/ui/input";

interface Props {
  className?: string;
}

const MainSearchBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "border border-white-500 rounded-full w-full max-h-12 flex items-center p-3 search-drop-shadow",
        className
      )}
    >
      <SearchIcon />
      <Input
        type="text"
        name="search_input"
        id="search_input"
        placeholder="Search..."
        className="bg-transparent outline-none text-base border-none placeholder:text-graylight"
      />
    </div>
  );
};

export default MainSearchBar;
