import React, { useRef } from "react";
import { cn } from "../lib/helper";

interface Props {
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  buttonComponent: React.ReactNode;
}
const UploadFileButton = React.forwardRef<HTMLInputElement, Props>(({
  className,
  buttonComponent,
  inputProps = {},
}, ref) => {
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
        className={cn("relative", className)}
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
