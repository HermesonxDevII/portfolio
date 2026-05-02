import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import HighlightedText from "./Highlighted-text";

interface LabelProps extends ComponentProps<"label"> {
  className?: string,
  required?: boolean
}

export default function Label({ children, className, required, ...props }: LabelProps) {
  return (
    <label className={cn("text-sm text-white/70", className)} {...props}>
      {children} {required && <HighlightedText>*</HighlightedText>}
    </label>
  )
}
