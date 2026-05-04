'use client'

import { useState } from "react"

import Link from "next/link"

import { X } from "lucide-react"

import { useRouter } from "next/navigation"

import Container from "@/components/container"
import Title from "@/components/title"
import Button from "@/components/button"
import Label from "@/components/label"
import Textarea from "@/components/textarea"
import Input from "@/components/input"

import { FormStatus } from "@/types/FormStatus"
import { CreateForm } from "@/types/SkillCategory"

import { create } from "@/app/actions/skillCategory"

import { notify } from "@/lib/utils"

export default function Create() {

  const router = useRouter()

  const [formData, setFormData] = useState<CreateForm>({
    name: '',
    description: ''
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

    const response = await create(formData)

    if (!response.success) {
      setFormStatus('error')
      notify({ title: response.message, icon: 'error' })
    } else {
      setFormStatus('success')

      router.push('/skillCategories');
      notify({ title: response.message, icon: 'success' })
    }
  }

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Cadastrar categoria de habilidade</Title>

        <Link
          href="/skillCategories"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </Link>
      </div>

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

        <div className="flex flex-row gap-3 sm:col-span-2">
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
      </form>
    </Container>
  )
}
