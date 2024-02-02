"use client";
import LikeIcon from "@/core/icons/LikeIcon";
import { DialogContent, DialogTrigger, Dialog } from "@/core/ui/dialog";
import React, { useState } from "react";
import LikesCard from "../LikesCard";
import { likes } from "@/data/facebackend";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/core/ui/drawer";

const LikesButton = () => {
  const [isLiked, setLiked] = useState(false);
  const LikesArray = likes;
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <div className="flex gap-2 items-center cursor-pointer">
          <LikeIcon
            fill={isLiked ? "red" : "transparent"}
            stroke={isLiked ? "red" : "#79CD00"}
            onClick={() => {
              setLiked(!isLiked);
            }}
          />
          <DialogTrigger asChild>
            <span className="text-graylight max-lg:text-sm">20 Likes</span>
          </DialogTrigger>
        </div>
        <DialogContent>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">All Likes</span>
            {LikesArray.map((likes, index) => (
              <LikesCard key={index} likes={likes} />
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
            onClick={() => {
              setLiked(!isLiked);
            }}
          />
          <DialogTrigger asChild>
            <div className="flex gap-2">
              <span className="text-graylight sm:text-sm">20</span>
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
          {LikesArray.map((likes, index) => (
            <LikesCard key={index} likes={likes} />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LikesButton;
