"use client";
import { SearchIcon } from "@/core/icons/SearchIcon";
import { cn } from "@/core/lib/helper";
import { Input } from "@/core/ui/input";
import { useState } from "react";

interface Props {
  className?: string;
  setSearchTerm: (term: string) => void; // New prop to handle search term changes
}

const SearchBar = ({ className, setSearchTerm }: Props) => {
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
      />
    </div>
  );
};

export default SearchBar;
