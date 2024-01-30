import { Button } from "@/core/ui/button";
import { Dialog, DialogContent } from "@/core/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/core/ui/select";
import { Textarea } from "@/core/ui/textarea";
import Image from "next/image";

interface NewPostDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostDialog = ({ isOpen, onClose }: NewPostDialogProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold">What's on your mind</span>
              <Select>
                <SelectTrigger className="w-[160px] h-[35px]">
                  <SelectValue placeholder="Select Channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AI Discussion">AI Discussion</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Fitness & Lifestyle">
                    Fitness & Lifestyle
                  </SelectItem>
                </SelectContent>
              </Select>
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
    </>
  );
};

export default NewPostDialog;
