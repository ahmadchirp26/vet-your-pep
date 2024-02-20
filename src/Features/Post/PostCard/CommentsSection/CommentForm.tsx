import useAddCommentToPostMutation from "@/api/Posts/useAddCommentToPostMutation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Schema = z.object({
  content: z.string().min(0, "Comment cannot be empty"),
});
interface Props {
    postId: string;
}
const CommentForm = ({postId}:Props) => {
  const { mutate, status } = useAddCommentToPostMutation();
  const formik = useFormik<z.infer<typeof Schema>>({
    initialValues: {
      content: "",
    },
    validationSchema: toFormikValidationSchema(Schema),
    onSubmit: (values) => {
      mutate({
        input: {
          content: values.content,
          postId
        },
      });
    },
  });
  console.log(formik.errors);
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        method={"post"}
        className="bg-greenaccent rounded-full w-full h-10 flex items-center p-3 mt-4 "
      >
        <Input
          type="text"
          name="content"
          id="content"
          placeholder="Write a comment"
          className="bg-transparent outline-none border-none placeholder:text-graylight"
          onChange={formik.handleChange}
          value={formik.values.content}
          onBlur={formik.handleBlur}
        />
        <div className="ml-auto">
          <Button
            className="rounded-full bg-greentertiary hover:bg-greendarkest lex justify-center items-center w-20 h-7"
            type="submit"
            isLoading={status === 'pending'}
            disabled={status === 'pending' || !formik.isValid}
          >
            Send
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default CommentForm;
