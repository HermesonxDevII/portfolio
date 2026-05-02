import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  className?: string
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn("w-full px-3 py-2 rounded-md bg-black text-white border border-white/10", className)}
      {...props}
    />
  )
}
