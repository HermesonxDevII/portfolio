import HighlightedText from "@/components/Highlighted-text";
import { projects } from "@/data/projects";
import { truncateText } from "@/lib/utils";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projectsSection" className="bg-[#141414] px-6 py-4">
      <div className="text-white text-center">
        <h2 className="text-4xl font-semibold mx-0 my-0">
          Meus <HighlightedText>Projetos</HighlightedText>
        </h2>

        <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
          Alguns de meus principais projetos que desenvolvi aprendendo da melhor forma, na pratica!
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a key={project.slug} href={`/projects/${project.id}`}>
              <article className="bg-black rounded-md overflow-hidden flex flex-col shadow-md shadow-black/40 hover:shadow-xl hover:shadow-white/20 hover:border hover:border-white/30 transition-all duration-300-[#000000]">
                <Image
                  src={project.thumbnail_url}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="h-auto w-full object-cover"
                />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <span className="inline-block bg-[#f9004d] text-xs font-bold text-white px-4 py-1 self-start">
                    {project.tags[0]}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
                  <p className="text-sm text-white">{truncateText(project.description, 120)}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
