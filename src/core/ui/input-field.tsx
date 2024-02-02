import * as React from "react";

import { cn } from "@/core/lib/helper";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <div
          className={cn(
            "flex items-center w-full border-b border-b-graylight has-[:focus]:border-b-greensharp",
            Boolean(error) && "border-b-red-800 has-[:focus]:border-b-red-400"
          )}
        >
          <Input type={type} ref={ref} {...props} />
          {icon}
        </div>
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);
InputField.displayName = "InputField";

export { InputField };
