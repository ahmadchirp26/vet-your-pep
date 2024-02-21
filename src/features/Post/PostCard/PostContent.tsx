import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  content: string;
};

const PostContent = ({ content }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className="flex flex-wrap">
      <span className={`text-graylight ${isExpanded ? "" : "line-clamp-4"}`}>
        {content}
      </span>
      {content.length > 120 && (
        <Button
          variant={"link"}
          size={"sm"}
          className="text-gray-200 font-semibold p-0 inline-block"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      )}
    </div>
  );
};

export default PostContent;
