import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];
export type FileSchema = {
  id: number | string;
  nativeFile: File;
  nativeURL: string;
  status: "uploading" | "error" | "uploaded" | 'idle';
  uploadedURL?: string;
};

export const FrontendAttachmentSchema = z
  .custom<FileSchema>((v) => v, "Attachment is required")
  .refine(
    (file: FileSchema) => file && ACCEPTED_IMAGE_TYPES.includes(file.nativeFile.type),
    ".jpg, .jpeg, .png, .pdf and .webp files are accepted."
  )
  .refine((file: FileSchema) => file.nativeFile.size <= MAX_FILE_SIZE, `Max file size is 5MB.`);
