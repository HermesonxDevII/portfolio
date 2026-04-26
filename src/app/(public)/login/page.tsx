'use client'

import { FormStatus } from "@/types/FormStatus"
import { useState } from "react"
import { login } from "@/app/actions/auth"

type FormData = {
  email: string,
  password: string
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    await login(formData)
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        action=""
        className="w-full max-w-sm bg-[#141414] p-6 rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-white text-center">Login</h1>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-white/80">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 rounded-md bg-black text-white border border-white/10"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-white/80">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-3 py-2 rounded-md bg-black text-white border border-white/10"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-2 rounded bg-[#f9004d] text-white font-medium hover:bg-[#f9004d]/90 transition"
        >
          { status === 'sending' ? 'Acessando' : 'Acessar' }
        </button>
      </form>
    </main>
  )
}
