"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import CommentsCard from "@/features/Post/PostCard/CommentsSection/CommentsCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import CommentForm from "@/features/Post/PostCard/CommentsSection/CommentForm";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon } from "lucide-react";

interface CommentsSection_Props {
  postId: string;
  comments: Array<React.ComponentProps<typeof CommentsCard>>;
}

const CommentsSection_ = ({ comments, postId }: CommentsSection_Props) => {
  return (
    <div className="border-t-greensharp border-t py-4 mt-4">
      <ScrollArea className="max-h-[200px] overflow-auto">
        <div className="space-y-3">
          {comments.map((comment, index) => (
            <CommentsCard key={index} {...comment} />
          ))}
        </div>
      </ScrollArea>
      <CommentForm postId={postId} />
    </div>
  );
};

const CommentsSectionTrigger = React.forwardRef<
  HTMLButtonElement,
  { totalComments: number; "data-state"?: "open" | "closed" }
>(({ totalComments, ...props }, ref) => {
  return (
    <div className="flex items-center">
      <MessageSquareIcon
        className={`w-6 h-6 text-[#79CD00] ${props["data-state"] === "open" ? "fill-[#79CD00]" : ""}`}
      />
      <Button
        variant={"link"}
        size={"sm"}
        className="px-2 text-graylight"
        ref={ref}
        disabled={totalComments < 0}
        {...props}
      >{`${totalComments} Comments${totalComments >= 0 ? "" : ""}`}</Button>
    </div>
  );
});
CommentsSectionTrigger.displayName = "CommentsSectionTrigger";

interface Props extends CommentsSection_Props {
  container?: HTMLDivElement | null;
}
const CommentsSection = ({ container, postId, comments }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value={"comments"} className="border-none">
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              // className={
              //   "flex gap-2 items-center cursor-pointer flex-1 justify-between font-medium transition-all"
              // }
              asChild
            >
              <CommentsSectionTrigger totalComments={comments.length} />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          {container ? (
            createPortal(
              <AccordionContent>
                <CommentsSection_ postId={postId} comments={comments} />
              </AccordionContent>,
              container
            )
          ) : (
            <AccordionContent>
              <CommentsSection_ postId={postId} comments={comments} />
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <CommentsSectionTrigger totalComments={comments.length} />
      </DrawerTrigger>
      <DrawerContent>
        <CommentsSection_ postId={postId} comments={comments} />
      </DrawerContent>
    </Drawer>
  );
};
export default CommentsSection;
