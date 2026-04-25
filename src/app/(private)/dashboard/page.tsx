'use client'

import { projects } from "@/data/projects";
import Aside from "./components/Aside";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormStatus } from "@/types/FormStatus";

type formData = {
  title: string,
  slug: string,
  description: string,
  thumbnail_url: string,
  live_url: string,
  github_url: string,
  tech_stack: string[],
  tags: string[],
  featured: boolean,
  status: string,
  order_index: number,
}

export default function Dashboard() {

  const [formData, setFormData] = useState<formData>({
    title: '',
    slug: '',
    description: '',
    thumbnail_url: '',
    live_url: '',
    github_url: '',
    tech_stack: [],
    tags: [],
    featured: false,
    status: 'published',
    order_index: 0,
  })

  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [openForm, setOpenForm] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    let newValue: string | number | boolean | string[] = value;

    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    } else if (type === 'number') {
      newValue = Number(value);
    } else if (name === 'tech_stack' || name === 'tags') {
      newValue = value ? value.split(',').map(item => item.trim()) : [];
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="flex h-screen overflow-hidden">
        <Aside projects={projects} />

        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">
          <section className="bg-[#141414] rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenForm(prev => !prev)}
              type="button"
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/5 transition"
            >
              <h2 className="text-lg font-semibold">Novo Projeto</h2>
              {openForm
                ? <ChevronUp className="w-5 h-5 text-white/50" />
                : <ChevronDown className="w-5 h-5 text-white/50" />
              }
            </button>

            {openForm && (
              <form
                action=""
                className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="text-sm text-white/70">Título *</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    placeholder="Digite um titulo"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label htmlFor="slug" className="text-sm text-white/70">Slug *</label>
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    value={formData.slug}
                    placeholder="Digite um slug"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label htmlFor="description" className="text-sm text-white/70">Descrição</label>
                  <textarea
                    name="description"
                    id="description"
                    rows={3}
                    value={formData.description}
                    placeholder="Digite uma descrição"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="thumbnail_url" className="text-sm text-white/70">Thumbnail</label>
                  <input
                    type="text"
                    name="thumbnail_url"
                    id="thumbnail_url"
                    value={formData.thumbnail_url}
                    placeholder="Digite o link da thumbnail"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="github_url" className="text-sm text-white/70">Github</label>
                  <input
                    type="text"
                    name="github_url"
                    id="github_url"
                    value={formData.github_url}
                    placeholder="Digite o link do github"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="live_url" className="text-sm text-white/70">Live</label>
                  <input
                    type="text"
                    name="live_url"
                    id="live_url"
                    value={formData.live_url}
                    placeholder="Digite o link do projeto"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="tech_stack" className="text-sm text-white/70">Tech Stack (Vírgula)</label>
                  <input
                    type="text"
                    name="tech_stack"
                    id="tech_stack"
                    value={Array.isArray(formData.tech_stack) ? formData.tech_stack.join(', ') : formData.tech_stack}
                    placeholder="Digite uma tech"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="tags" className="text-sm text-white/70">Tags (Vírgula)</label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    value={Array.isArray(formData.tags) ? formData.tags.join(', ') : formData.tags}
                    placeholder="Digite uma tag"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="status" className="text-sm text-white/70">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="order_index" className="text-sm text-white/70">Ordem</label>
                  <input
                    type="number"
                    name="order_index"
                    id="order_index"
                    value={formData.order_index}
                    placeholder="Digite a posição do projeto na exibição"
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center gap-2 sm:col-span-2">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={formData.featured}
                    className="bg-black border border-white/10 rounded px-3 py-2 text-sm"
                    onChange={handleChange}
                  />
                  <label htmlFor="featured" className="text-sm text-white/70">Projeto em Destaque</label>
                </div>

                <div className="flex flex-row gap-3 sm:col-span-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="px-6 py-2 bg-[#f9004d] rounded-lg text-sm font-medium hover:bg-[#f9004d]/90 transition"
                  >
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar'}
                  </button>

                  <button
                    type="button"
                    className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm hover:bg-white/10 transition"
                  >Cancelar</button>
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
)
}
