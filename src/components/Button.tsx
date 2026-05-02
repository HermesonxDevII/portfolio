import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ComponentProps<"button"> {
  className?: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("px-5 py-3 min-h-10 rounded font-bold text-white bg-[#f9004d] hover:bg-red-700 cursor-pointer transition", className)}
      {...props}
    >
      {children}
    </button>
  )
}
