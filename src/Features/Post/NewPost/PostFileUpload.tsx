import UploadFileButton from "@/core/components/upload-file-button";
import { PhotoIcon } from "@/core/icons/PhotoIcon";
import { Button } from "@/core/ui/button";
import { ScrollArea } from "@/core/ui/scroll-area";
import { type FileSchema } from "@/lib/zod-schemas/attachment";
import { TrashIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  files: Array<FileSchema> | undefined;
  setFiles: (files: Array<FileSchema> | undefined) => void;
}

const PostFileUpload = ({ files = [], setFiles }: Props) => {
  const handleFileDelete = (index: number) => {
    const fileToRemove = files[index];
    if (!fileToRemove) {
      return;
    }
    setFiles(
      files ? [...files.slice(0, index), ...files.slice(index + 1)] : undefined
    );
  };

  const handleFilesAdded = async (newFilesNative: Array<File>) => {
    const newFiles = newFilesNative.map((file, idx) => ({
      id: files.length + idx,
      nativeFile: file,
      nativeURL: URL.createObjectURL(file),
      status: "idle" as const,
    }));
    setFiles(files ? [...files, ...newFiles] : newFiles);
  };

  return (
    <div>
      <div>
        <UploadFileButton
          buttonComponent={
            <Button variant={"ghost"} className="h-auto p-2" type={"button"}>
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
          <p className="text-xs text-end">{`${files.length} File`}</p>
        )}
      </div>

      {files.length > 0 && (
        <ScrollArea className="max-h-[24vh] py-2 border-t overflow-auto">
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
        </ScrollArea>
      )}
    </div>
  );
};

export default PostFileUpload;
