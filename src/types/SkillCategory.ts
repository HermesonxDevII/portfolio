import { Prisma } from "../../generated/prisma/client"

export type CreateForm = {
  name: string,
  description: string
}

export type EditForm = {
  id: string,
  name?: string,
  description?: string
}

export type CategoryWithSkills = Prisma.SkillCategoryGetPayload<{ include: { skills: true } }>
