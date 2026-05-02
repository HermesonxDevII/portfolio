import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface HighlightedTextProps extends ComponentProps<"span"> {
  className?: string
}

export default function HighlightedText({ children, className, ...props }: HighlightedTextProps) {
  return (
    <span className={cn("text-[#f9004d]", className)} {...props}>
      {children}
    </span>
  )
}
