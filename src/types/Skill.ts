export type Skill = {
  id: string,
  name: string,
  description: string,
  skillCategoryId: string,
  projects?: any[]
  created_at: string
  updated_at: string
}

export type CreateForm = {
  name: string,
  description: string,
  skill_category_id: string
}
