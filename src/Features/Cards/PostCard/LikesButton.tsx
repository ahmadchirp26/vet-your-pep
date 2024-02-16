"use client";
import LikeIcon from "@/core/icons/LikeIcon";
import { DialogContent, DialogTrigger, Dialog } from "@/core/ui/dialog";
import React from "react";
import LikesCard from "../LikesCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/core/ui/drawer";

interface Props {
  isLiked: boolean;
  likesArray: Array<{
    profileImage?: string;
    username: string;
  }>;
  onLike: () => void;
}
const LikesButton = ({ isLiked, likesArray, onLike }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <div className="flex gap-2 items-center cursor-pointer">
          <LikeIcon
            fill={isLiked ? "red" : "transparent"}
            stroke={isLiked ? "red" : "#79CD00"}
            onClick={onLike}
          />
          <DialogTrigger asChild>
            <span className="text-graylight max-lg:text-sm">{`${likesArray.length} Like${likesArray.length > 1 ? "s" : ""}`}</span>
          </DialogTrigger>
        </div>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">All Likes</span>
            {likesArray.map((userThatLiked, index) => (
              <LikesCard key={index} userThatLiked={userThatLiked} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer">
          <LikeIcon
            fill={isLiked ? "red" : "transparent"}
            stroke={isLiked ? "red" : "#79CD00"}
            onClick={onLike}
          />
          <DialogTrigger asChild>
            <div className="flex gap-2">
              <span className="text-graylight sm:text-sm">{likesArray.length}</span>
              <span className="hidden sm:block">Likes</span>
            </div>
          </DialogTrigger>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-white">All Likes</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-2 px-4 py-8">
          {likesArray.map((userThatLiked, index) => (
            <LikesCard key={index} userThatLiked={userThatLiked} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LikesButton;
