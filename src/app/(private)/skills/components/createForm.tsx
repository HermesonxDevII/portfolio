'use client'

import { useMemo, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation"

import Label from "@/components/label";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Button from "@/components/button";
import Select, { Option } from "@/components/select";

import { CreateForm as CreateFormType } from "@/types/Skill";
import { FormStatus } from "@/types/FormStatus";

import { create } from "@/app/actions/skills";

import { notify } from "@/lib/utils";

import { SkillCategory } from "../../../../../generated/prisma/client"

interface CreateFormProps {
  data: SkillCategory[]
}

export default function CreateForm({ data }: CreateFormProps) {

  const router = useRouter()

  const [formData, setFormData] = useState<CreateFormType>({
    name: '',
    description: '',
    skillCategoryId: ''
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const options: Option[] = useMemo(() => {
    return data.map(item => ({
      value: item.id,
      label: item.name
    }))
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus("sending")

    const response = await create(formData)

    if (!response.success) {
      setFormStatus('error')
      notify({ title: response.message, icon: 'error' })
    } else {
      setFormStatus('success')

      router.push('/skills');
      notify({ title: response.message, icon: 'success' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div className="flex flex-col gap-1 sm:col-span-2">
        <Label htmlFor="name" required>Nome</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Digite um titulo"
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <Label htmlFor="description" required>Descrição</Label>
        <Textarea
          name="description"
          id="description"
          rows={3}
          value={formData.description}
          placeholder="Digite uma descrição"
          onChange={handleChange}
        ></Textarea>
      </div>

      <div className="flex flex-col gap-1 sm:col-span-2">
        <Label htmlFor="skillCategoryId" required>Categoria</Label>
        <Select
          id="skillCategoryId"
          name="skillCategoryId"
          options={options}
          value={formData.skillCategoryId}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-row gap-3 sm:col-span-2">
        <Button
          type="submit"
          disabled={formStatus === 'sending'}
          className="px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#f9004d]/90"
        >
          {formStatus === 'sending' ? 'Salvando...' : 'Salvar'}
        </Button>

        <Link
          href="/skills"
          className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm font-normal hover:bg-white/10 transition"
        >
          Cancelar
        </Link>
      </div>
    </form>
  )
}
