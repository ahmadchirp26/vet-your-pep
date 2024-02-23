import { graphql } from "@/__generated__";
import { requestGraphQl } from "@/lib/react-query-graphql";
import { type FileSchema } from "@/lib/zod-schemas/attachment";

const document = graphql(`
  query getPostUploadUrls($input: Float!) {
    getPostUploadUrls(count: $input) {
      fileName
      signedUrl
    }
  }
`);

const S3UploadHandlerMutationFn = async (
  filesToUpload: Array<FileSchema>,
  accessToken: string,
  onFileUploadStatusChange?: (params: FileSchema) => void,
) => {
  try {
    const authourizationHeaders = new Headers({
      Authorization: `Bearer ${accessToken}`,
    });
    const { getPostUploadUrls } = await requestGraphQl(document, [
      { input: filesToUpload.length },
      authourizationHeaders,
    ]);
    const signedUrls = getPostUploadUrls;
    return await Promise.all(
      filesToUpload
        .map(async (fileToUpload, index) => {
          const data = signedUrls[index];
          try {
            if (!data) {
              throw new Error("No signed url found");
            }
            fileToUpload = {
              ...fileToUpload,
              status: "uploading",
            };
            onFileUploadStatusChange && onFileUploadStatusChange(fileToUpload);
            await fetch(data.signedUrl, {
              method: "PUT",
              body: fileToUpload.nativeFile,
            });
            fileToUpload = {
              ...fileToUpload,
              status: "uploaded",
              uploadedURL: data.fileName,
            };
            onFileUploadStatusChange && onFileUploadStatusChange(fileToUpload);
          } catch (e) {
            fileToUpload = {
              ...fileToUpload,
              status: "error",
            };
            onFileUploadStatusChange && onFileUploadStatusChange(fileToUpload);
          }
          return fileToUpload;
        })
        .filter((f) => f),
    );
  } catch (e) {
    // console.log(e);
    throw new Error("Something went wrong");
  }
};
export default S3UploadHandlerMutationFn;
