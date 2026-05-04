'use client'

import { useState } from "react";

import Link from "next/link";

import { X } from "lucide-react";

import Container from "@/components/container";
import Title from "@/components/title";
import Label from "@/components/label";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Button from "@/components/button";
import Select, { Option } from "@/components/select";

import { CreateForm } from "@/types/Skill";
import { FormStatus } from "@/types/FormStatus";

export default function Create() {

  const [formData, setFormData] = useState<CreateForm>({
    name: '',
    description: '',
    skill_category_id: ''
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

  const options: Option[] = [
    { value: 'teste', label: 'teste' },
    { value: 'teste 2', label: 'teste 2' },
    { value: 'teste 3', label: 'teste 3' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    setFormStatus("sending")
  }

  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Cadastrar Habilidade</Title>

        <Link
          href="/skills"
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

        <div className="flex flex-col gap-1 sm:col-span-2">
          <Label htmlFor="skill_category_id" required>Categoria</Label>
          <Select
            id="skill_category_id"
            name="skill_category_id"
            options={options}
            value={formData.skill_category_id}
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
    </Container>
  )
}
