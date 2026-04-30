import { Project } from "@/types/Project";

import AsideHeader from "./AsideHeader";
import AsideFooter from "./AsideFooter";

import Link from "next/link";

interface AsideProps {
  projects: Project[]
}

export default function Aside({ projects }: AsideProps) {
  return (
    <aside className="w-72 bg-[#141414] border-r border-white/5 flex flex-col overflow-hidden">
      <AsideHeader qntProjects={projects.length} />

      {/* Projects */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        <Link
          href='/skills'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Habilidades</Link>

        <Link
          href='/skillsCategory'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Categoria de Habilidades</Link>

        <Link
          href='/skillsCategory'
          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/30 transition"
        >Projetos</Link>
        {/* {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg group transition"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{project.title}</p>
              <p className="text-white/30 text-xs truncate">{project.slug}</p>
            </div>

            <div className="flex gap-1 ml-2 shrink-0">
              <button
                type="button"
                title="Editar"
                className="p-1.5 rounded hover:bg-white/10 text-white/50 hover:text-white transition"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                title="Deletar"
                className="p-1.5 rounded hover:bg-red-600 text-white/50 hover:text-white transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))} */}
      </div>

      <AsideFooter />
    </aside>
  )
}
