"use client";
import { SearchIcon } from "@/core/icons/SearchIcon";
import { cn } from "@/core/lib/helper";
import { Input } from "@/core/ui/input";
import { useState } from "react";
import { useCustomerSearch } from "@/api/SearchCustomer/useCustomerSearch";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/core/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { SpinnerCircle } from "@/core/icons/SpinnerCircle";

interface Props {
  className?: string;
}

const MainSearchBar = ({ className }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useCustomerSearch(searchQuery);
  console.log(data);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      className={cn(
        "border border-white-500 rounded-full w-full max-h-12 flex items-center p-3 search-drop-shadow",
        className,
      )}
    >
      <SearchIcon />
      <Input
        type="text"
        name="search_input"
        id="search_input"
        placeholder="Search..."
        className="bg-transparent outline-none text-base border-none placeholder:text-graylight"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {isLoading && (
        <div>
          <SpinnerCircle />
        </div>
      )}
      {/* {isError && <div>Error fetching data</div>} */}
      {data?.searchCustomers?.results && (
        <div className="absolute top-20 w-1/2 bg-greendarkest p-2  rounded-2xl space-y-2 z-10">
          {data.searchCustomers.results.map((user) => (
            <div
              key={user.id}
              className="flex items-center cursor-pointer hover:bg-greenaccent rounded-xl"
            >
              <Avatar className="hover:bg-greenaccent rounded-md cursor-pointer">
                <AvatarImage
                  src={user.profileImage ?? undefined}
                  alt={user.firstName}
                />
                <AvatarFallback>
                  {user.firstName.charAt(0) + user.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="text-white p-2  w-full rounded-xl ">{`${user.firstName} ${user.lastName}`}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainSearchBar;
