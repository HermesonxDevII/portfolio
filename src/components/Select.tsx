import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type Option = {
  value: string,
  label: string
}

interface SelectProps extends ComponentProps<"select"> {
  options: Option[]
  className?: string
}

export default function Select({ className, options, ...props }: SelectProps) {
  return (
    <select
      className={cn("bg-black border border-white/10 rounded px-3 py-2 text-sm", className)}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
