'use client'

import Button from "@/components/Button"
import { FormStatus } from "@/types/FormStatus"
import { useState } from "react"

type FormData = {
  name: string,
  email: string,
  telephone: string,
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    telephone: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      console.log('enviando', formData)

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        telephone: '',
        message: ''
      })
    } catch (error) {
      setStatus('error')
      throw error
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#050505] rounded-xl p-8 max-w-md w-full space-y-6 mb-10"
    >
      <div>
        <label htmlFor="name" className="block text-white/80 font-medium mb-2">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white/80 font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="telephone" className="block text-white/80 font-medium mb-2">Telefone</label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Digite seu telefone"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white/80 font-medium mb-2">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Digite uma mensagem"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-white/50 resize-vertical focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-white/80 font-medium mb-2">Assunto</label>
        <select
          id="subject"
          name="subject"
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#f9004d] focus:border-transparent transition-all"
          defaultValue=""
        >
          <option value="" disabled>Selecione um assunto</option>
          <option value="freelancer">Freelance / Trabalho</option>
          <option value="project">Projeto conjunto</option>
          <option value="doubt">Dúvida / Suporte</option>
          <option value="others">Outros</option>
        </select>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar'}
      </Button>

      {status === 'success' && (
        <p className="text-green-400 text-sm mt-2">
          Mensagem Enviada com sucesso! Retornarei em breve.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2">
          Ocorreu um erro ao enviar! Tente novamente.
        </p>
      )}
    </form>
  )
}
