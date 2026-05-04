import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface TextareaProps extends ComponentProps<"textarea"> {
  className?: string
}

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn("bg-black border border-white/10 rounded-md px-3 py-2 text-sm resize-none", className)}
      {...props}
    ></textarea>
  )
}
