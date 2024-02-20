"use client";
import { useState } from "react";
import CommentsSection from "@/features/Post/PostCard/CommentsSection";
import PostContent from "@/features/Post/PostCard/PostContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalculatePostTime } from "@/utils/calculate-post-time";
import PostMedia from "@/features/Post/PostCard/PostMedia";
import LikesSection from "@/features/Post/PostCard/LikesSection";

interface Props {
  postId: string;
  channelId: string;
  postedBy: {
    id: string;
    profileImage?: string;
    firstName: string;
    lastName: string;
  };
  postContent: string;
  postedTime: Date;
  channel: string;
  postImages: Array<string>;
  likes: Array<{
    id: string;
    profileImage?: string;
    firstName: string;
    lastName: string;
  }>;
  comments: React.ComponentProps<typeof CommentsSection>["comments"];
}

const PostCard = (post: Props) => {
  const [commentSectionsDropdown, setCommentSectionsDropdown] =
    useState<HTMLDivElement | null>(null);
  return (
    <div className="border border-white rounded-3xl p-4 space-y-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src={post.postedBy.profileImage} alt="profile_image" />
            <AvatarFallback>
              {post.postedBy.firstName.charAt(0).toLocaleUpperCase() +
                post.postedBy.lastName.toLocaleUpperCase().charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-white font-bold">
              {post.postedBy.firstName + " " + post.postedBy.lastName}
            </span>
            <span className="text-gray-300 text-xs truncate">
              Posted on {post.channel}
            </span>
            <span className="text-graylight text-xs">
              {CalculatePostTime(post.postedTime)}
            </span>
          </div>
        </div>
        {/* <DropdownMenu>
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
        </DropdownMenu> */}
      </div>
      <PostContent content={post.postContent} />
      <PostMedia images={post.postImages} />

      <div className="flex gap-5 items-center">
        <LikesSection
          usersWhoLikedPost={post.likes.map((l) => ({
            id: l.id,
            profileImage: l.profileImage ?? undefined,
            firstName: l.firstName,
            lastName: l.lastName,
          }))}
          postId={post.postId}
        />
        <CommentsSection
          comments={post.comments}
          postId={post.postId}
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
export const PostCardSkeleton = () => {
  return (
    <div className="border border-greenlight rounded-3xl p-4 flex flex-col justify-between gap-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 bg-greenlight rounded-lg animate-pulse"></div>
            <div className="w-[200px] space-y-2">
              <div className="w-1/4 h-4 bg-greenlight rounded-lg animate-pulse"></div>
              <div className="w-1/2 h-2 bg-greenlight rounded-lg animate-pulse"></div>
              <div className="w-1/2 h-2 bg-greenlight rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className={"w-full space-y-2"}>
          <div className="w-3/4 h-4 bg-greenlight rounded-lg animate-pulse"></div>
          <div className="w-1/2 h-4 bg-greenlight rounded-lg animate-pulse"></div>
          <div className="w-1/4 h-4 bg-greenlight rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-self-end">
        <div className="flex items-center gap-2 w-12 h-6 rounded-lg animate-pulse bg-greenlight"></div>
        <div className="flex items-center gap-2 w-12 h-6 rounded-lg animate-pulse bg-greenlight"></div>
      </div>
    </div>
  );
};
export default PostCard;
