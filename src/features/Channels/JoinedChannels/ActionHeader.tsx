import SearchBar from "@/features/SearchBar";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { XCircleIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type Props = {
  onSearch: (searchTerm: string) => void;
  className?: string;
};

const ActionHeader = (props: Props) => {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div
      className={cn("flex items-center justify-between gap-2", props.className)}
    >
      <div className="flex items-center flex-1 h-12 w-52">
        <p
          data-state={activeSearch ? "open" : "close"}
          className="transition-all text-base text-white font-extrabold data-[state=open]:animate-[search-text-out_0.5s_ease-in-out_forwards] data-[state=close]:animate-[search-text-in_0.5s_ease-in-out_forwards]"
        >
          My Channels
        </p>
        <SearchBar
          data-state={activeSearch ? "open" : "close"}
          className={
            "h-12 transition-all data-[state=open]:animate-[search-bar-in_0.5s_ease-in-out_forwards] data-[state=close]:animate-[search-bar-out_0.5s_ease-in-out_forwards]"
          }
          inputProps={{
            ref: (input) => {
              if (input && activeSearch) {
                input.focus();
              }
            },
          }}
          setSearchTerm={props.onSearch}
        />
      </div>
      <Button
        onClick={() => setActiveSearch((t) => !t)}
        variant={"ghost"}
        className="h-auto p-2 hover:bg-greensharp/10"
      >
        {activeSearch ? (
          <XCircleIcon className="w-6 h-6 text-[#79CD00]" />
        ) : (
          <SearchIcon className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default ActionHeader;
