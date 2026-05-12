'use server'

import { z } from "zod"

import { notFound } from "next/navigation"

import { prisma } from "@/lib/prisma"

import { CreateForm, CreateResponse } from "@/types/Project"
import { ActionResponse } from "@/types/ActionResponse"

export async function index() {
  try {
    return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  } catch (error) {
    console.error('/actions/projects - index()', error)
    return []
  }
}

export async function create(data: CreateForm): Promise<ActionResponse<CreateResponse>> {
  const createRequest = z.object({
    name: z.string().min(1, "O campo 'nome' é obrigatório."),
    description: z.string().trim().optional(),
    link: z.string().trim().optional(),
    github: z.string().min(1, "O campo 'github' é obrigatório."),
    type: z.string().min(1, "O campo 'tipo do projeto' é obrigatório."),
    status: z.string().min(1, "O campo 'status' é obrigatório."),
    index: z.coerce.number().default(0),
    skills: z.array(z.string().uuid("ID de skill inválido")).min(1, "Selecione pelo menos uma skill")
  })

  const validated = createRequest.safeParse(data)

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message
    return { success: false, message: errorMessage }
  }

  try {
    const { status, skills, ...createData } = validated.data

    const { id } = await prisma.project.create({
      data: {
        ...createData,
        status: status === 'active',
        skills: {
          connect: skills.map(id => ({ id: id })),
        }
      }
    })

    return { success: true, message: 'Projeto cadastrado com sucesso!', data: { 'id': id }}
  } catch (error) {
    console.error('/actions/projects - create()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar cadastrar projeto.' }
  }
}

export async function show(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.project.findUniqueOrThrow({ where: { id: id } })
  } catch (error) {
    console.error('/actions/projects - show()', error)
    notFound()
  }
}

export async function deleteInDatabase(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.project.delete({ where: { id: id } })
  } catch (error) {
    console.error('/actions/projects - deleteInDatabase()', error)
    notFound()
  }
}

export async function images(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.project.findUniqueOrThrow({
      where: { id: id },
      select: {
        images: { orderBy: { index: 'asc' } }
      }
    })
  } catch (error) {
    console.error('/actions/projects - images()', error)
    notFound()
  }
}
