export type Project = {
  id: string,
  title: string,
  slug: string,
  description: string,
  thumbnail_url: string,
  live_url: string | null,
  github_url: string,
  tech_stack: string[],
  tags: string[],
  featured: boolean,
  status: string,
  order_index: number,
  created_at: string,
  updated_at: string
}
