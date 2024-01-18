import { Dialog, DialogContent } from "@/core/ui/dialog";

import LikesCard from "@/Features/Cards/LikesCard";
import { likes } from "@/data/facebackend";

interface PostLikesDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostLikesDialog = ({ isOpen, onClose }: PostLikesDialogProps) => {
  const LikesArray = likes;
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">All Likes</span>
            {LikesArray.map((likes, index) => (
              <LikesCard key={index} likes={likes} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostLikesDialog;
