import CommentsCard from "@/Features/Cards/CommentsCard";
import { Input } from "@/core/ui/input";
import { comments } from "@/data/facebackend";
import { Button } from "@/core/ui/button";

const CommentsSection = () => {
  const commentsArray = comments;
  return (
    <>
      <div className="p-2 border-t-greensharp border-t mt-4">
        <div className="mt-3">
          {commentsArray.map((comment, index) => (
            <CommentsCard key={index} comment={comment} />
          ))}
        </div>
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
    </>
  );
};

export default CommentsSection;
