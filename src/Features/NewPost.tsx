"use client";
import { useState } from "react";
import Image from "next/image";

import { Input } from "@/core/ui/input";
import NewPostDialog from "@/Features/Dialogs/NewPostDialog";

const NewPost = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(true);
  };
  return (
    <>
      <div
        className="border border-white-500 rounded-full w-full h-10 flex items-center p-3 mt-4 "
        onClick={handleDialog}
      >
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
      {openDialog && (
        <NewPostDialog
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
        />
      )}
    </>
  );
};

export default NewPost;
