import Link from "next/link";

import { Plus } from "lucide-react";

import Container from "@/components/container";
import Title from "@/components/title";
import Image from "next/image";

import file from '../../../../public/file.svg'
import { truncateText } from "@/lib/utils";
import Badge from "@/components/badge";

export default async function Index() {

  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Projetos</Title>

        <Link
          href="/projects/create"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <Link key={index} href="#" className="h-30 py-2 flex flex-row gap-3 rounded hover:bg-white/20 transition">
            <Image src={file} width={70} height={70} alt="teste" className="shrink-0" />

            <div className="flex flex-col gap-1.5 flex-1 min-w-0 mr-1.5">
              <div className="flex flex-row justify-between items-start gap-2">
                <Title className="text-md">Projeto 1</Title>
                <p className="text-white text-xs mt-1 shrink-0">Atualizado em: 04/05/2026</p>
              </div>

              <p className="text-white/40 text-xs">{truncateText(text, 140)}</p>

              <div className="flex flex-row gap-3 overflow-x-auto whitespace-nowrap no-scrollbar">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Badge key={index} label="React" />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}
