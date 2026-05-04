import { Plus } from "lucide-react";

import Link from "next/link";

import Title from "@/components/title";
import Container from "@/components/container";

import { categoriesWithSkills } from "@/app/actions/skillCategory";
import Badge from "@/components/badge";

export default async function Index() {

  const data = await categoriesWithSkills()

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Habilidades</Title>

        <Link
          href="/skills/create"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {data.map((category) => (
          <div key={category.id} className="flex flex-col gap-3">
            <div>
              <Title className="text-md flex justify-start">{category.name}</Title>
              <p className="text-white/40 text-xs mt-0.5">{category.skills.length} cadastrados</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Badge
                  key={skill.id}
                  label={skill.name}
                  linkable={`/skills/${skill.id}/edit`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
