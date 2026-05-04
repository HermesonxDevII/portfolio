'use client'

import { useState } from "react";

import Link from "next/link";

import Title from "@/components/title";
import Label from "@/components/label";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Button from "@/components/button";
import Badge from "@/components/badge";
import Select, { Option } from "@/components/select";

import { FormStatus } from "@/types/FormStatus";
import { CreateForm as CreateFormType } from "@/types/Project";
import { CategoryWithSkills } from "@/types/SkillCategory";


interface CreateFormProps {
  data: {
    categoriesWithSkills: CategoryWithSkills[]
  }
}

export default function CreateForm({ data }: CreateFormProps) {

  const [formData, setFormData] = useState<CreateFormType>({
    name: '',
    description: '',
    link: '',
    github: '',
    type: '',
    status: '',
    index: 0,
    skills: []
  })

  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [section, setSection] = useState<number>(1)

  const typeOptions: Option[] = [
    { value: 'Front-End', label: 'Front-End' },
    { value: 'Back-End', label: 'Back-End' },
    { value: 'FullStack', label: 'FullStack' }
  ]

  const statusOptions: Option[] = [
    { value: 'active', label: 'Online' },
    { value: 'inactive', label: 'Offline' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSkillSelect = (skillId: string) => {
    setFormData((prev) => {
      const isSelected = prev.skills.includes(skillId);

      return {
        ...prev,
        skills: isSelected
          ? prev.skills.filter((id) => id !== skillId)
          : [...prev.skills, skillId],
      };
    });
  };

  const handleChangeSection = (e: React.FormEvent, section: number) => {
    e.preventDefault();
    setSection(section);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus('sending')

    console.log(formData)

    setFormStatus('success')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {section === 1 &&
        <>
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

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Label htmlFor="link">Link</Label>
            <Input
              type="text"
              name="link"
              id="link"
              value={formData.link}
              placeholder="Digite o link do projeto"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Label htmlFor="github" required>Github</Label>
            <Input
              type="text"
              name="github"
              id="github"
              value={formData.github}
              placeholder="Digite o github do projeto"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Label htmlFor="type" required>Tipo do Projeto</Label>
            <Select
              id="type"
              name="type"
              options={typeOptions}
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Label htmlFor="status" required>Status</Label>
            <Select
              id="status"
              name="status"
              options={statusOptions}
              value={formData.status}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1 sm:col-span-2">
            <Label htmlFor="index" required>Ordem de exibição</Label>
            <Input
              type="number"
              name="index"
              id="index"
              value={formData.index}
              onChange={handleChange}
              required
            />
          </div>
        </>
      }

      {section === 2 &&
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="type" className="text-xl">Selecione as stacks do Projeto</Label>

          <div className="flex flex-col gap-5">
            {data.categoriesWithSkills.map((category) => (
              <div key={category.id} className="flex flex-col gap-3">
                <div>
                  <Title className="text-md flex justify-start">{category.name}</Title>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.id}
                      label={skill.name}
                      className={formData.skills.includes(skill.id) ? 'bg-white/20' : ''}
                      onClick={() => handleSkillSelect(skill.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      }

      {section === 3 &&
        <>
        </>
      }

      <div className="flex flex-row gap-3 sm:col-span-2">
        {section === 1 && (
          <>
            <Button
              type="button"
              onClick={(e) => handleChangeSection(e, 2)}
              className="px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#f9004d]/90"
            >
              Próxima
            </Button>

            <Link
              href="/projects"
              className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm font-normal hover:bg-white/10 transition"
            >
              Cancelar
            </Link>
          </>
        )}

        {section === 2 && (
          <>
            <Button
              type="submit"
              disabled={formStatus === 'sending'}
              className="px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#f9004d]/90"
            >
              {formStatus === 'sending' ? 'Salvando...' : 'Salvar'}
            </Button>

            <Button
              type="button"
              onClick={(e) => handleChangeSection(e, 1)}
              className="px-6 py-2 bg-[#1a1a1a] rounded-lg text-sm font-normal hover:bg-white/10 transition"
            >
              Voltar
            </Button>
          </>
        )}

        {section === 3 && (
          <Link
            href="/projects"
            className="text-sm text-white min-h-10 px-6 py-2 rounded-lg font-medium bg-[#f9004d] hover:bg-[#f9004d]/90 cursor-pointer transition"
          >
            Finalizar
          </Link>
        )}
      </div>
    </form>
  )
}
