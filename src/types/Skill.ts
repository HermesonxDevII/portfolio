export type CreateForm = {
  name: string,
  description: string,
  skillCategoryId: string
}

export type EditForm = {
  id: string,
  name?: string,
  description?: string,
  skillCategoryId: string
}
