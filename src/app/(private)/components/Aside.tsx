import AsideHeader from "./AsideHeader";
import AsideFooter from "./AsideFooter";

import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-72 bg-[#141414] border-r border-white/5 flex flex-col overflow-hidden">
      <AsideHeader />

      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        <Link
          href='/skills'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Habilidades</Link>

        <Link
          href='/skillCategories'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Categorias de Habilidades</Link>

        <Link
          href='/projects'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Projetos</Link>
      </div>

      <AsideFooter />
    </aside>
  )
}
