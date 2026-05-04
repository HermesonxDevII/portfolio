'use client'

import { useState } from "react"

import { useRouter } from "next/navigation"

import Link from "next/link"

import { Trash2 } from "lucide-react"

import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Textarea from "@/components/textarea"

import { EditForm as EditFormType } from "@/types/SkillCategory"

import { FormStatus } from "@/types/FormStatus"

import { edit, deleteInDatabase } from "@/app/actions/skillCategory"

import { notify } from "@/lib/utils"

import { SkillCategory } from "../../../../../generated/prisma/client"

interface EditFormProps {
  data: SkillCategory
}

export default function EditForm({ data }: EditFormProps) {

  const router = useRouter()

  const [formData, setFormData] = useState<EditFormType>({
    id: data.id,
    name: data.name,
    description: data.description ?? ''
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus("sending")

    const response = await edit(formData)

    if (!response.success) {
      setFormStatus('error')
      notify({ title: response.message, icon: 'error' })
    } else {
      setFormStatus('success')

      router.push('/skillCategories');
      notify({ title: response.message, icon: 'success' })
    }
  }

  const handleDelete = async () => {
    deleteInDatabase(data.id)

    router.push('/skillCategories');
    notify({ title: 'Categoria de Habilidade deletada com sucesso!', icon: 'success' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-1 sm:col-span-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Digite um titulo"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          name="description"
          id="description"
          rows={3}
          value={formData.description}
          placeholder="Digite uma descrição"
          onChange={handleChange}
        ></Textarea>
      </div>

      <div className="flex flex-row justify-between sm:col-span-2">
        <div className="flex flex-row gap-3">
          <Button
            type="submit"
            disabled={formStatus === 'sending'}
            className="px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#f9004d]/90"
          >
            {formStatus === 'sending' ? 'Salvando...' : 'Salvar'}
          </Button>

          <Link
            href="/skillCategories"
            className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm font-normal hover:bg-white/10 transition"
          >
            Cancelar
          </Link>
        </div>

        <Button
          type="button"
          disabled={formStatus === 'sending'}
          className="p-2 rounded-lg text-sm font-medium hover:bg-[#f9004d]/90"
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </div>
    </form>
  )
}
