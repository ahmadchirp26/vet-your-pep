"use client";
import LikeIcon from "@/core/icons/LikeIcon";
import { DialogContent, DialogTrigger, Dialog } from "@/core/ui/dialog";
import React from "react";
import LikesCard from "./LikesCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/core/ui/drawer";
import { ScrollArea } from "@/core/ui/scroll-area";
import { Button } from "@/core/ui/button";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { useLikeMutation } from "@/api/Posts/useLikeMutation";
import { useUnLikeMutation } from "@/api/Posts/useUnlikeMutation";

interface Props {
  postId: string;
  usersWhoLikedPost: Array<{
    profileImage?: string;
    id: string;
    firstName: string;
    lastName: string;
  }>;
}
const LikesButtonTrigger = React.forwardRef<
  HTMLButtonElement,
  { isLikedByMe: boolean; postId: string; totalLikes: number }
>((props, ref) => {
  const likeMutation = useLikeMutation();
  const unlikeMutation = useUnLikeMutation();

  return (
    <div className="flex items-center">
      <Button
        variant={"link"}
        size={"sm"}
        className="p-0 h-auto text-white"
        isLoading={likeMutation.isPending || unlikeMutation.isPending}
        onClick={() => {
          if (props.isLikedByMe) {
            unlikeMutation.mutate({ input: { postId: props.postId } });
          } else {
            likeMutation.mutate({ input: { postId: props.postId } });
          }
        }}
      >
        <LikeIcon
          fill={props.isLikedByMe ? "red" : "transparent"}
          stroke={props.isLikedByMe ? "red" : "#79CD00"}
          className="w-6 h-6"
        />
      </Button>
      <Button
        variant={"link"}
        size={"sm"}
        className="px-2 text-graylight"
        ref={ref}
        disabled={props.totalLikes === 0}
        {...props}
      >{`${props.totalLikes} Like${props.totalLikes > 1 ? "s" : ""}`}</Button>
    </div>
  );
});
LikesButtonTrigger.displayName = "LikesButtonTrigger";

const LikesSection = ({ usersWhoLikedPost, postId }: Props) => {
  const { data } = useAuthSessionContext();
  const isLikedByMe = usersWhoLikedPost.find((l) => l.id === data?.sub);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <LikesButtonTrigger
            isLikedByMe={Boolean(isLikedByMe)}
            totalLikes={usersWhoLikedPost.length}
            postId={postId}
          />
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">All Likes</span>
            <ScrollArea className="max-h-[40vh]">
              {usersWhoLikedPost.map((userThatLiked, index) => (
                <LikesCard key={index} userThatLiked={userThatLiked} />
              ))}
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <LikesButtonTrigger
          isLikedByMe={Boolean(isLikedByMe)}
          totalLikes={usersWhoLikedPost.length}
          postId={postId}
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-white">All Likes</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-2 px-4 py-8">
          {usersWhoLikedPost.map((userThatLiked, index) => (
            <LikesCard key={index} userThatLiked={userThatLiked} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default LikesSection;
