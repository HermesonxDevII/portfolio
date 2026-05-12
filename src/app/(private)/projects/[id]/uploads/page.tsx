import Link from "next/link"

import { X } from "lucide-react"

import Container from "@/components/container"
import Title from "@/components/title"

import { images } from "@/app/actions/projects";
import UploadImage from "../../components/uploadImage";

type params = {
  id: string
}

interface UploadsProps {
  params: Promise<params>
}

export default async function Uploads({ params }: UploadsProps) {

  const { id } = await params

  const data = await images(id)
  console.log('data: ', data)

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>{data.images.length === 0 ? 'Adicionar' : 'Editar'} Imagens</Title>

        <Link
          href="/projects"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

      <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <UploadImage
            projectId={id}
            title="Imagem do card (384x384)"
            type="card"
            url={data.images[0]?.url}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <UploadImage
            projectId={id}
            title="Imagem de alguma tela (???x???)"
            type="screen"
            url={data.images[1]?.url}
          />
        </div>

        <div className="flex flex-row gap-3 sm:col-span-2">
          <Link
            href="/projects"
            className="text-sm text-white min-h-10 px-6 py-2 rounded-lg font-medium bg-[#f9004d] hover:bg-[#f9004d]/90 cursor-pointer transition"
          >
            Finalizar
          </Link>
        </div>
      </div>
    </Container>
  )
}
