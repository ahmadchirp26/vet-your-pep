import useUpdateChannelMutation from "@/api/Channels/useUpdateChannelMutation";
import S3UploadHandlerMutationFn from "@/api/S3Bucket/S3UploadHandlerMutationFn";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import UploadFileButton from "@/components/upload-file-button";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { PenSquareIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  channelId: string;
  channelTitle: string;
};

const EditChannelImage = (props: Props) => {
  const { mutateAsync } = useUpdateChannelMutation();
  const { data } = useAuthSessionContext();
  const [uploading, setUploading] = useState(false)

  return (
    <UploadFileButton
      inputProps={{
        accept: "image/*",
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange: async (event) => {
          const file = event.currentTarget.files?.[0];
          if (!data || !file) {
            return;
          }
          setUploading(true)
          try {
            const [uploadedUrl] = await S3UploadHandlerMutationFn(
              [
                {
                  file: file,
                  id: "0",
                },
              ],
              data?.accessToken
            );
            await mutateAsync({
              input: {
                id: props.channelId,
                title: props.channelTitle,
                image: uploadedUrl,
              },
            });
            toast({
              variant: "default",
              title: "Update Channel Image",
            });
          } catch (e) {
            toast({
              variant: "destructive",
              title: "Something went wrong",
            });
          }
          setUploading(false)
        },
      }}
      buttonComponent={
        <Button
          className={
            "h-auto p-2 bg-greensharp hover:bg-greensharp/80 rounded-full"
          }
          isLoading={uploading}
        >
          <PenSquareIcon className={"w-5 h-5"} />
        </Button>
      }
    />
  );
};

export default EditChannelImage;
