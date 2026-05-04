import Link from "next/link";

import { X } from "lucide-react";

import Container from "@/components/container";
import Title from "@/components/title";
import CreateForm from "../components/createForm";

import { categoriesWithSkills } from "@/app/actions/skillCategory";

export default async function Create() {

  const data = {
    categoriesWithSkills: await categoriesWithSkills()
  }

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Cadastrar Projeto</Title>

        <Link
          href="/projects"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

      <CreateForm data={data} />
    </Container>
  )
}
