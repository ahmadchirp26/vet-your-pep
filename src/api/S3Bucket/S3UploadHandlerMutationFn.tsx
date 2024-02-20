import { graphql } from "@/__generated__";
import { requestGraphQl } from "@/lib/react-query-graphql";

const document = graphql(`
  query getPostUploadUrls($input: Float!) {
    getPostUploadUrls(count: $input) {
      fileName
      signedUrl
    }
  }
`);

const S3UploadHandlerMutationFn = async (
  filesToUpload: Array<{ file: File; id: string | number }>,
  accessToken: string,
  onFileUploadStatusChange: (params: {
    id: number | string;
    file: File;
    fileName?: string;
    status: "error" | "uploaded" | "uploading";
  }) => void
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
    return (await Promise.all(
      filesToUpload
        .map(async (fileToUpload, index) => {
          const data = signedUrls[index];
          try {
            if (!data) {
              throw new Error("No signed url found");
            }
            onFileUploadStatusChange({
              id: fileToUpload.id,
              file: fileToUpload.file,
              status: "uploading",
            });
            await fetch(data.signedUrl, {
              method: "PUT",
              body: fileToUpload.file,
            });
            onFileUploadStatusChange({
              id: fileToUpload.id,
              file: fileToUpload.file,
              fileName: data.fileName,
              status: "uploaded",
            });
            return data.fileName;
          } catch (e) {
            onFileUploadStatusChange({
              id: fileToUpload.id,
              file: fileToUpload.file,
              status: "error",
            });
          }
        })
        .filter((f) => f)
    )) as Array<string>;
  } catch (e) {
    // console.log(e);
    throw new Error("Something went wrong");
  }
};
export default S3UploadHandlerMutationFn;
