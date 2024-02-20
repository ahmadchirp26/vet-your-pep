import * as React from "react";

import { cn } from "@/core/lib/helper";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-2xl bg-greenaccent transition-all px-3 py-2 text-sm placeholder:text-graydark focus:[box-shadow:none] focus:border-0 focus:outline-none focus-visible:outline-greensharp disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
