import { cn } from "@/lib/utils"

type ButtonProps = React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
  className?: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
  const base = "px-5 py-3 min-h-10 rounded font-bold text-white bg-[#f9004d] hover:bg-red-700"

  return (
    <button type="button" className={cn(base, className)} {...props}>
      {children}
    </button>
  )
}
