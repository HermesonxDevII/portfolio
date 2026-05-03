import Link from "next/link"

import { X } from "lucide-react"

import Container from "@/components/Container"
import Title from "@/components/Title"

import Form from "./components/form"

import { show } from "@/app/actions/skillCategory"

import FormSkeleton from "@/components/Skeleton/FormSkeleton"

type Params = {
  id: string
}

interface EditProps {
  params: Promise<Params>
}

export default async function Edit({ params }: EditProps) {

  const { id } = await params
  const data = await show(id)

  return (
    // <FormSkeleton />
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Cadastrar Habilidade</Title>

        <Link
          href="/skillsCategory"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

      <Form data={data} />
    </Container>
  )
}
