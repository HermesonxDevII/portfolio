'use server'

import { z } from "zod"

import { notFound } from "next/navigation"

import { prisma } from "@/lib/prisma"

import { CreateForm, EditForm } from "@/types/Skill"
import { ActionResponse } from "@/types/ActionResponse"

export async function index() {
  try {
    return await prisma.skill.findMany({ orderBy: { createdAt: 'desc' } })
  } catch (error) {
    console.error('/actions/skills - index()', error)
    return []
  }
}

export async function create(data: CreateForm): Promise<ActionResponse> {
  const createRequest = z.object({
    name: z.string().min(1, "O campo 'nome' é obrigatório."),
    description: z.string().trim().optional(),
    skillCategoryId: z.string().min(1, "O campo 'categoria' é obrigatório.")
  })

  const validated = createRequest.safeParse(data)

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message
    return { success: false, message: errorMessage }
  }

  try {
    await prisma.skill.create({ data: validated.data })
    return { success: true, message: 'Habilidade cadastrada com sucesso!' }
  } catch (error) {
    console.error('/actions/skills - create()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar cadastrar habilidade.' }
  }
}

export async function show(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.skill.findUniqueOrThrow({
      where: { id: id }
    })
  } catch (error) {
    console.error('/actions/skills - show()', error)
    notFound()
  }
}

export async function edit(data: EditForm): Promise<ActionResponse> {
  const editRequest = z.object({
    id: z.string().min(1, "O campo 'id' é obrigatório."),
    name: z.string().trim().optional(),
    description: z.string().trim().optional(),
    skillCategoryId: z.string().min(1, "O campo 'skillCategoryId' é obrigatório.")
  })

  const validated = editRequest.safeParse(data)

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message
    return { success: false, message: errorMessage }
  }

  try {
    const { id, ...updateData } = validated.data

    await prisma.skill.update({
      where: { id: id },
      data: updateData
    })

    return { success: true, message: 'Habilidade atualizada com sucesso!' }
  } catch (error) {
    console.error('/actions/skills - edit()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar atualizar habilidade.' }
  }
}

export async function deleteInDatabase(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.skill.delete({ where: { id: id } })
  } catch (error) {
    console.error('/actions/skills - deleteInDatabase()', error)
    notFound()
  }
}
