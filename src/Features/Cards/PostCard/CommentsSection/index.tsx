"use client";
import CommentIcon from "@/core/icons/CommentIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/core/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { createPortal } from "react-dom";
import { Input } from "@/core/ui/input";
import { Button } from "@/core/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Drawer, DrawerContent, DrawerTrigger } from "@/core/ui/drawer";
import CommentsCard from "./CommentsCard";
import { ScrollArea } from "@/core/ui/scroll-area";

interface CommentsSection_Props {
  comments:Array<React.ComponentProps<typeof CommentsCard>>
}

const CommentsSection_ = ({comments}:CommentsSection_Props) => {

  return (
    <div className="border-t-greensharp border-t px-2 py-4 mt-4">
      <ScrollArea>
        <div className="space-y-3">
          {comments.map((comment, index) => (
            <CommentsCard key={index} {...comment} />
          ))}
        </div>
      </ScrollArea>
      <div className="bg-greenaccent rounded-full w-full h-10 flex items-center p-3 mt-4 ">
        <Input
          type="text"
          name="search_input"
          id="search_input"
          placeholder="Write a comment"
          className="bg-transparent outline-none  border-none placeholder:text-graylight "
        />
        <div className="ml-auto">
          <Button
            className="rounded-full bg-greentertiary hover:bg-greendarkest lex justify-center items-center w-20 h-7"
            type="button"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

interface Props extends CommentsSection_Props {
  container?: HTMLDivElement | null;
}
const CommentsSection = ({ container, comments }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value={"comments"} className="border-none">
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={
                "flex gap-2 items-center cursor-pointer flex-1 justify-between font-medium transition-all"
              }
            >
              <div className="flex gap-2 items-center cursor-pointer">
                <CommentIcon />
                <div className="flex gap-1 text-graylight items-baseline">
                  <span className="sm:text-sm">{comments.length}</span>
                  <span className="hidden sm:block">comments</span>
                </div>
              </div>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          {container ? (
            createPortal(
              <AccordionContent>
                <CommentsSection_ comments={comments} />
              </AccordionContent>,
              container
            )
          ) : (
            <AccordionContent>
              <CommentsSection_ comments={comments} />
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-2 items-center cursor-pointer">
        <CommentIcon />
        <div className="flex gap-1 text-graylight items-baseline">
          <span className="sm:text-sm">{comments.length}</span>
          <span className="hidden sm:block">comments</span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <CommentsSection_ comments={comments} />
      </DrawerContent>
    </Drawer>
  );
};

export default CommentsSection;
