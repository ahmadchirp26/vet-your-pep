"use client";
import { Button } from "@/core/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/core/ui/dialog";
import { Input } from "@/core/ui/input";
import { Textarea } from "@/core/ui/textarea";
import Image from "next/image";
import SelectChannel from "./SelectChannel";

const NewPost = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">What's on your mind</span>
            <SelectChannel />
          </div>
          <div className="w-full">
            <Textarea
              placeholder="Write here..."
              className="mt-3 p-2 outline-none"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-greenaccent p-2 flex justify-center items-center rounded-full cursor-pointer">
                <Image
                  src={"/assets/photo_upload_icon.svg"}
                  alt="photo_icon"
                  width={15}
                  height={15}
                />
              </div>
              <div className="bg-greenaccent p-2 flex justify-center items-center rounded-full cursor-pointer">
                <Image
                  src={"/assets/video_upload_icon.svg"}
                  alt="photo_icon"
                  width={15}
                  height={15}
                />
              </div>
              <div className="bg-greenaccent p-2 flex justify-center items-center rounded-full cursor-pointer">
                <Image
                  src={"/assets/emoji_upload_icon.svg"}
                  alt="photo_icon"
                  width={15}
                  height={15}
                />
              </div>
              <div className="bg-greenaccent p-2 flex justify-center items-center rounded-full cursor-pointer">
                <Image
                  src={"/assets/file_attach_icon.svg"}
                  alt="photo_icon"
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <Button
              className="rounded-full border-none bg-greentertiary hover:bg-greenaccent text-white flex justify-center items-center w-20"
              type="button"
            >
              Done
            </Button>
          </div>
        </div>
        {/* </DialogDescription> */}
        {/* </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
