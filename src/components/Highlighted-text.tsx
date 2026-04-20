import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface HighlightedTextProps extends ComponentProps<"span"> {
  className?: string
}

export default function HighlightedText({ children, className, ...props }: HighlightedTextProps) {
  const base = "text-[#f9004d]"

  return (
    <span className={cn(base, className)} {...props}>
      {children}
    </span>
  )
}
