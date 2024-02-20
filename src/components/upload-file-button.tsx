import React, { useRef } from "react";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonComponent: React.ReactNode;
}
const UploadFileButton = React.forwardRef<HTMLInputElement, Props>(({
  className,
  buttonComponent,
  inputProps = {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        {...inputProps}
      />
      <div
        className={cn("relative max-w-max", className)}
        onClick={() => {
          void inputRef.current?.click();
        }}
      >
        {buttonComponent}
      </div>
    </div>
  );
});
UploadFileButton.displayName = "UploadFileButton";
export default UploadFileButton;
