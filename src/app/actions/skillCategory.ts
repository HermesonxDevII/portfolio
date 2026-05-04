'use server'

import { z } from "zod";

import { notFound } from "next/navigation"

import { prisma } from "@/lib/prisma"

import { CreateForm, EditForm } from "@/types/SkillCategory"
import { ActionResponse } from "@/types/ActionResponse"

export async function index() {
  try {
    return await prisma.skillCategory.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  } catch (error) {
    console.error('/actions/skillCategory - index()', error)
    return []
  }
}

export async function create(data: CreateForm): Promise<ActionResponse> {
  const createRequest = z.object({
    name: z.string().min(1, "O campo 'nome' é obrigatório."),
    description: z.string().min(1, "O campo 'descrição' é obrigatório."),
  });

  const validated = createRequest.safeParse(data);

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message;
    return { success: false, message: errorMessage };
  }

  try {
    await prisma.skillCategory.create({ data: validated.data });
    return { success: true, message: "Categoria de Habilidade criada com sucesso!" };
  } catch (error) {
    console.error('/actions/skillCategory - create()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar cadastrar categoria de habilidade.' }
  }
}

export async function show(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.skillCategory.findUniqueOrThrow({
      where: { id: id }
    })
  } catch (error) {
    console.error('/actions/skillCategory - show()', error)
    notFound()
  }
}

export async function edit(data: EditForm): Promise<ActionResponse> {
  const editRequest = z.object({
    id: z.string().min(1, "O campo 'id' é obrigatório."),
    name: z.string().trim().optional(),
    description: z.string().trim().optional()
  })

  const validated = editRequest.safeParse(data)

  if (!validated.success) {
    const errorMessage = validated.error.issues[0].message;
    return { success: false, message: errorMessage };
  }

  try {
    const { id, ...updateData } = validated.data;

    await prisma.skillCategory.update({
      where: { id: id },
      data: updateData
    })

    return { success: true, message: "Categoria de Habilidade atualizada com sucesso!" };
  } catch (error) {
    console.error('/actions/skillCategory - edit()', error)
    return { success: false, message: 'Ocorreu um erro ao tentar atualizar categoria de habilidade.' }
  }
}

export async function deleteInDatabase(id: string) {
  try {
    if (!id)
      throw new Error("O campo 'id' é obrigatório.")

    return await prisma.skillCategory.delete({
      where: { id: id }
    })
  } catch (error) {
    console.error('/actions/skillCategory - deleteInDatabase()', error)
    notFound()
  }
}
