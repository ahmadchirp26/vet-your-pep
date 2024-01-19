"use client";
import Image, { type StaticImageData } from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/core/ui/dropdown-menu";
import { MoreVerticalIcon } from "lucide-react";
import LikesButton from "./LikesButton";
import { useState } from "react";
import CommentsSection from "./CommentsSection";
import PostContent from "./PostContent";

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
  const [commentSectionsDropdown, setCommentSectionsDropdown] =
    useState<HTMLDivElement | null>(null);
  return (
    <div className="border border-white rounded-3xl p-4 space-y-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-3">
          <div className="rounded-full w-12 h-12 mt-1">
            <Image
              src={post.profileImage}
              alt="avatar"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold">{post.username}</span>
            <span className="text-gray-300 text-xs truncate">
              Posted on {post.group}
            </span>
            <span className="text-graylight text-xs">{post.postedTime}</span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <MoreVerticalIcon className="text-white cursor-pointer w-4 h-4" />
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
      <PostContent content={post.postContent} />
      <div className="w-full relative h-[350px]">
        <Image
          src={post.postImage}
          alt="post_image"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <div className="flex gap-5 items-center">
        <LikesButton />
        <CommentsSection container={commentSectionsDropdown} />
      </div>
      <div
        ref={(div) => {
          setCommentSectionsDropdown(div);
        }}
        style={{ marginTop: "0" }}
      ></div>
    </div>
  );
};

export default PostCard;
