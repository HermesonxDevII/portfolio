import { Plus } from "lucide-react";

interface AsideHeaderProps {
  qntProjects: number
}

export default function AsideHeader({ qntProjects }: AsideHeaderProps) {
  return (
    <div className="px-5 py-5 border-b border-white/5 flex items-center justify-between">
      <div>
        <h2 className="font-bold text-lg">Projetos</h2>
        <p className="text-white/40 text-xs mt-0.5">{qntProjects} cadastrados</p>
      </div>

      <button
        type="button"
        title="Novo Projeto"
        className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}
