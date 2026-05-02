import { cn } from "@/lib/utils"

interface TitleProps {
  children: React.ReactNode,
  className?: string
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1 className={cn("text-2xl font-bold text-white text-center", className)}>
      { children }
    </h1>
  )
}
