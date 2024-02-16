"use client";
import Image from "next/image";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/core/ui/avatar";
import { CalculatePostTime } from "@/core/utils/calculate-post-time";
import { useLikeMutation } from "@/api/Posts/useLikeMutation";

interface Props {
  postId: string;
  postedBy: {
    profileImage?: string;
    username: string;
  };
  postContent: string;
  postedTime: Date;
  channel: string;
  postImages: Array<string>;
  likes: Array<string>;
  comments: React.ComponentProps<typeof CommentsSection>["comments"];
}

const PostCard = (post: Props) => {
  const [commentSectionsDropdown, setCommentSectionsDropdown] =
    useState<HTMLDivElement | null>(null);
  const likeMutation = useLikeMutation();
  return (
    <div className="border border-white rounded-3xl p-4 space-y-4 flex flex-col mt-5">
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={post.postedBy.profileImage} alt="profile_image" />
            <AvatarFallback>{post.postedBy.username}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-white font-bold">
              {post.postedBy.username}
            </span>
            <span className="text-gray-300 text-xs truncate">
              Posted on {post.channel}
            </span>
            <span className="text-graylight text-xs">
              {CalculatePostTime(post.postedTime)}
            </span>
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
      <div className="flex flex-wrap gap-2">
        {post.postImages.map((image, index) => (
          <div key={index} className="relative w-40 h-40">
            <Image
              src={image}
              alt="post_image"
              layout="fill"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-5 items-center">
        <LikesButton
          isLiked={false}
          likesArray={post.likes.map((l) => ({
            profileImage: undefined,
            username: l,
          }))}
          onLike={() => {
            likeMutation.mutate({ input: { postId: post.postId } });
          }}
        />
        <CommentsSection
          comments={post.comments}
          container={commentSectionsDropdown}
        />
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
