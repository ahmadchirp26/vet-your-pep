import S3UploadHandlerMutationFn from "@/api/S3Bucket/S3UploadHandlerMutationFn";
import UploadFileButton from "@/core/components/upload-file-button";
import { PhotoIcon } from "@/core/icons/PhotoIcon";
import { Button } from "@/core/ui/button";
import { toast } from "@/core/ui/use-toast";
import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  setIsUploading: (isUploading: boolean) => void;
  onUploadedFilesChange: (uploadedFiles: Array<string>) => void;
}
interface FileSelected {
  id: number | string;
  nativeFile: File;
  nativeURL: string;
  status: "uploading" | "error" | "uploaded";
  uploadedURL?: string;
}

const PostFileUpload = ({ onUploadedFilesChange, setIsUploading }: Props) => {
  const { data } = useAuthSessionContext();
  const [files, setFiles] = useState<Array<FileSelected>>([]);

  const handleFileDelete = (index: number) => {
    const fileToRemove = files[index];
    if (!fileToRemove) {
      return;
    }
    setFiles((prevFiles) => [
      ...prevFiles.slice(0, index),
      ...prevFiles.slice(index + 1),
    ]);
  };

  const handleFilesAdded = async (newFilesNative: Array<File>) => {
    const newFiles = newFilesNative.map((file, idx) => ({
      id: files.length + idx,
      nativeFile: file,
      nativeURL: URL.createObjectURL(file),
      status: "uploading" as const,
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    if (!data?.accessToken) return;
    setIsUploading(true);
    try {
      const uploadedFiles = await S3UploadHandlerMutationFn(
        newFiles.map((file) => ({ file: file.nativeFile, id: file.id })),
        data.accessToken,
        ({ fileName, id, status }) => {
          setFiles((prevFiles) => {
            if (typeof id === "string") {
              return prevFiles
            }
            const fileUploading = prevFiles[id];
            if (!fileUploading) {
              return prevFiles;
            }
            return [
              ...prevFiles.slice(0, id),
              {
                ...fileUploading,
                status,
                uploadedURL: fileName,
              },
              ...prevFiles.slice(id + 1),
            ];
          });
        }
      );
      onUploadedFilesChange(uploadedFiles);
    } catch (e) {
      toast({
        title: "Error",
        description: "Error uploading files",
      });
    }
    setIsUploading(false);
  };

  return (
    <div>
      <UploadFileButton
        buttonComponent={
          <Button variant={"ghost"}>
            <PhotoIcon className="w-6 h-6" />
          </Button>
        }
        inputProps={{
          accept: "image/*",
          multiple: true,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFiles = e.target.files;
            if (selectedFiles) {
              handleFilesAdded(Array.from(selectedFiles));
            }
          },
        }}
      />
      {files.length > 0 && (
        <div className="max-h-[280px]">
          <div className="grid grid-cols-1 gap-4">
            {files?.map(({ nativeURL, nativeFile, status }, index: number) => (
              <div
                className="flex min-h-[58px] w-full items-center rounded-xl border border-gray-200 px-3 dark:border-gray-300"
                key={nativeFile.name}
              >
                <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                  <Image
                    src={nativeURL}
                    fill
                    className=" object-contain"
                    priority
                    alt={nativeFile.name}
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
                <div className="truncate px-2.5">{nativeFile.name}</div>
                <Button
                  isLoading={status === "uploading"}
                  onClick={() => handleFileDelete(index)}
                  size="sm"
                  variant="ghost"
                  color="danger"
                  className="ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20"
                >
                  <TrashIcon className="w-6 h-6" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFileUpload;
