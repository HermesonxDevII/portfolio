import { techIcons } from "@/data/techIcons"
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BadgeProps {
  label: string,
  linkable?: string,
  className?: string,
  onClick?: () => void
}

export default function Badge({ label, linkable, className, onClick }: BadgeProps) {

  const base = "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-white/5  cursor-pointer";
  const Icon = techIcons[label];

  if (linkable) {
    return (
      <Link href={linkable} className={cn(base, className)}>
        <Icon className="w-4 h-4 text-[#f9004d]" />
        <span className="text-xs md:text-sm text-white/80">{ label }</span>
      </Link>
    )
  }

  return (
    <div className={cn(base, className)} onClick={onClick}>
      <Icon className="w-4 h-4 text-[#f9004d]" />
      <span className="text-xs md:text-sm text-white/80">{ label }</span>
    </div>
  )
}
