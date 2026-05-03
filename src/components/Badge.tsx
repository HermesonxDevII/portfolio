import { techIcons } from "@/data/techIcons"

interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  const Icon = techIcons['React'];

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-white/5">
      <Icon className="w-4 h-4 text-[#f9004d]" />
      <span className="text-xs md:text-sm text-white/80">{ label }</span>
    </div>
  )
}
