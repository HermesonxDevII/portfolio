'use client'

import { useState } from "react"

import Link from "next/link"

import { X } from "lucide-react"

import { useRouter } from "next/navigation"

import Container from "@/components/Container"
import Title from "@/components/Title"
import Button from "@/components/Button"
import Label from "@/components/Label"
import Textarea from "@/components/Textarea"
import Input from "@/components/Input"

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
      notify({ title: response.message, icon: 'error', timer: 3000 })
    } else {
      setFormStatus('success')

      router.push('/skillsCategory');
      notify({ title: response.message, icon: 'success' })
    }
  }

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Cadastrar Habilidade</Title>

        <Link
          href="/skillsCategory"
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
            href="/skillsCategory"
            className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm font-normal hover:bg-white/10 transition"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </Container>
  )
}
