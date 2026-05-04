import Link from "next/link";

import { X } from "lucide-react";

import Container from "@/components/container";
import Title from "@/components/title";
import EditForm from "../../components/editForm";

import { show } from "@/app/actions/skills";
import { index } from "@/app/actions/skillCategory";

type Params = {
  id: string
}

interface EditProps {
  params: Promise<Params>
}

export default async function Edit({ params }: EditProps) {

  const { id } = await params

  const edited_skill = await show(id)
  const skill_categories_options = await index()

  const data = {
    skill: edited_skill,
    skill_categories: skill_categories_options
  }

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Editar Habilidade</Title>

        <Link
          href="/skills"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

      <EditForm data={data} />
    </Container>
  )
}
