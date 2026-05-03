import Link from "next/link";

import { Plus } from "lucide-react";

import Container from "@/components/Container";
import Title from "@/components/Title";
import Badge from "@/components/Badge";

import { index } from "@/app/actions/skillCategory";

export default async function Index() {

  const data = await index()

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Categorias de Habilidades</Title>

        <Link
          href="/skillsCategory/create"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div>
            <Title className="text-md flex justify-start">Categorias</Title>
            <p className="text-white/40 text-xs mt-0.5">{data.length} cadastrados</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {data.map((skill_category) => (
              <Badge
                key={skill_category.id}
                label={skill_category.name}
                linkable={`skillsCategory/${skill_category.id}/edit`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
