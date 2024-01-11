"use client";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import LikeIcon from "@/core/icons/LikeIcon";
import PostLikesDialog from "@/Features/Dialogs/PostLikesDialog";
import CommentsSection from "@/Features/CommentsSection";

interface Post {
  profileImage: StaticImageData;
  username: string;
  postContent: string;
  postedTime: string;
  group: string;
  postImage: StaticImageData;
  likes: string;
  comments: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [openLikesDialog, setOpenLikesDialog] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  const handleLikesDialog = () => {
    setOpenLikesDialog(true);
  };
  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentsSection = () => {
    setOpenComments(!openComments);
  };
  return (
    <>
      <div className="border border-white rounded-3xl p-4 flex flex-col mt-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-12 h-12">
              <Image
                src={post.profileImage}
                alt="avatar"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col ">
              <span className="text-white font-bold">{post.username}</span>
              <div className="flex gap-2 items-center">
                <span className="text-graylight">Posted on {post.group}</span>
                <span className="text-graylight text-xs">
                  {post.postedTime}
                </span>
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              {" "}
              <Image
                src={"/assets/menu_icon.svg"}
                alt="menu_icon"
                width={4}
                height={4}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-greenaccent  text-white outline-none border-none "
              align="end"
              forceMount
            >
              <DropdownMenuItem className="cursor-pointer">
                Mute Notifications
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Hide Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <span className="text-graylight mt-4 flex">{post.postContent}</span>
        <div className="w-full relative h-[350px] mt-4">
          <Image
            src={post.postImage}
            alt="post_image"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="flex gap-5 items-center mt-4 px-4 ">
          <div className="flex gap-2 items-center cursor-pointer">
            <LikeIcon
              fill={isLiked ? "red" : "transparent"}
              stroke={isLiked ? "red" : "#79CD00"}
              onClick={() => handleLikeButton()}
            />
            <span
              className="text-graylight max-lg:text-sm"
              onClick={handleLikesDialog}
            >
              {post.likes} Likes{" "}
            </span>
          </div>
          {openLikesDialog && (
            <PostLikesDialog
              isOpen={openLikesDialog}
              onClose={() => setOpenLikesDialog(false)}
            />
          )}
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleCommentsSection}
          >
            <Image
              src={"/assets/comment_icon.svg"}
              alt="comment_icon"
              width={20}
              height={20}
            />
            <span className="text-graylight max-lg:text-sm">
              {post.comments} comments{" "}
            </span>
          </div>
        </div>
        {openComments && <CommentsSection />}
      </div>
    </>
  );
};

export default PostCard;
