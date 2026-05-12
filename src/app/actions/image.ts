'use server'

import { z } from "zod"

import { prisma } from "@/lib/prisma"

import { CreateForm } from "@/types/Image"
import { ActionResponse } from "@/types/ActionResponse"

export async function create(data: CreateForm): Promise<ActionResponse> {
  const createRequest = z.object({
    projectId: z.string().min(1, "O campo 'projectId' é obrigatório."),
    url: z.string().min(1, "O campo 'url' é obrigatório."),
    index: z.coerce.number().default(0)
  })

  const validated = createRequest.safeParse(data)

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message
    return { success: false, message: errorMessage }
  }

  try {
    await prisma.image.create({ data: validated.data })
    return { success: true, message: 'Imagem cadastrada com sucesso!'}
  } catch (error) {
    console.error('/actions/image - create()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar cadastrar imagem.' }
  }
}
