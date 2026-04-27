'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'

import { FormStatus } from "@/types/FormStatus"

import { LoginData as FormData } from "@/types/auth"
import { login } from "@/app/actions/auth"
import { notify } from "@/lib/utils"

import ShowPassword from "./components/ShowPassword"
import Link from "next/link"

export default function Login() {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState<FormStatus>('idle')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus('sending')

    const res = await login(formData)

    if (!res.success) {
      setStatus('error')
      notify({ title: res.message, icon: 'error', timer: 3000 })
    } else {
      setStatus('success')
      notify({ title: res.message, icon: 'success' })

      router.push('/dashboard');
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
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
          <div className="relative flex flex-row items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-black text-white border border-white/10"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
          </div>
        </div>

        <div className="flex justify-end space-y-2">
          <Link
            href="/"
            className="text-xs text-white/50 hover:text-white hover:underline cursor-pointer"
          >Voltar a home</Link>
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
