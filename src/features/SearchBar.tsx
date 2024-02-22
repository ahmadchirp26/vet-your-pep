"use client";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { cn } from "@/utils/cn";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props extends React.ComponentProps<"div"> {
  className?: string;
  setSearchTerm: (term: string) => void;
  inputProps?: React.ComponentProps<typeof Input>;
}

const SearchBar = ({ className, setSearchTerm,inputProps, ...props }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);
    setSearchTerm(value); // Communicate changes back to parent component
  };

  return (
    <div
      className={cn(
        "border border-white-500 rounded-full w-full max-h-12 flex items-center p-3 search-drop-shadow",
        className
      )}
      {...props}
    >
      <SearchIcon />
      <Input
        type="text"
        name="search_input"
        id="search_input"
        placeholder="Search..."
        className="bg-transparent outline-none text-base border-none placeholder:text-graylight"
        value={searchInput}
        onChange={handleInputChange}
        {...inputProps}
      />
    </div>
  );
};

export default SearchBar;
