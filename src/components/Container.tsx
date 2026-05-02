import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode,
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-xl bg-[#141414] p-6 rounded-lg space-y-4", className)}>
      { children }
    </div>
  )
}
