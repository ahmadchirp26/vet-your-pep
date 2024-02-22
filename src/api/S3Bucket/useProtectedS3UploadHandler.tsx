//[Todo]: Replace this with S3UploadHandlerMutationFn and remove this completely
import useAuthSessionContext from "../../lib/Authentication/context/AuthSessionContext";
import { graphql } from "@/__generated__";
import { requestGraphQl } from "@/lib/react-query-graphql";
import { useMutation } from "@tanstack/react-query";

const document = graphql(`
  query getCustomerSignedURL {
    getCustomerUploadUrl {
      fileName
      signedUrl
    }
  }
`);

const getCustomerUploadURL = (accessToken: string) => {
  const authourizationHeaders = new Headers({
    Authorization: `Bearer ${accessToken}`,
  });
  return requestGraphQl(document, [{}, authourizationHeaders]);
};

export const S3UploadHandlerMutationFn = async (
  fileToUpload: File,
  accessToken: string
) => {
  try {
    const {
      getCustomerUploadUrl: { fileName, signedUrl },
    } = await getCustomerUploadURL(accessToken);
    await fetch(signedUrl, {
      method: "PUT",
      body: fileToUpload,
    });
    return fileName;
  } catch (e) {
    // console.log(e);
    throw new Error("Something went wrong");
  }
};

const useProtectedS3UploadHandler = () => {
  const { data } = useAuthSessionContext();
  const mutation = useMutation({
    mutationFn: async ({ fileToUpload }: { fileToUpload: File }) => {
      if (!data?.accessToken) {
        throw new Error("User is not signed in");
      }
      return S3UploadHandlerMutationFn(fileToUpload, data.accessToken);
    },
  });
  return {
    isReady: true,
    ...mutation,
  };
};

export default useProtectedS3UploadHandler;
