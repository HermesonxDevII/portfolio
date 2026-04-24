'use client'

import Link from "next/link";

import Button from "@/components/Button";

import { useState } from "react";
import { X, Menu } from "lucide-react"

export default function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const operateMenu = () => setMenuIsOpen(prev => !prev)

  return (
    <header className="fixed bg-black top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-3 py-2 md:px-6 md:py-3 flex items-center justify-between">
        <span className="text-white font-extrabold text-lg">
          <Link className="hover:text-[#f9004d] transition-all" href="/">Hermeson Oliveira</Link>
        </span>

        {/* Mobile Button Menu */}
        <div className="block md:hidden">
          <Button
            onClick={operateMenu}
            className="py-1.5 px-3 flex items-center gap-2 md:py-2 md:px-4"
          >
            {menuIsOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5"/>}
            <span className="font-bold">MENU</span>
          </Button>
        </div>

        {/* Desktop Navigator Links */}
        <nav className="hidden md:flex text-white gap-8 font-bold">
          <Link className="hover:text-[#f9004d] transition-colors" href="/#presentationSection">Sobre mim</Link>
          <Link className="hover:text-[#f9004d] transition-colors" href="/#projectsSection">Projetos</Link>
          <Link className="hover:text-[#f9004d] transition-colors" href="/#skillsSection">Habilidades</Link>
          <Link className="hover:text-[#f9004d] transition-colors" href="/contacts">Contatos</Link>
        </nav>
      </div>

      {/* Mobile Navigator Links */}
      <nav
        className={`md:hidden bg-black border-t border-white/10 px-4 flex justify-around items-center overflow-hidden transition-all duration-200 ease-out ${menuIsOpen ? 'py-3 max-h-16 opacity-100' : 'px-0 max-h-0 opacity-0'}`}
      >
        <Link
          onClick={operateMenu}
          className="text-white font-bold hover:text-[#f9004d] transition-colors"
          href="/#presentationSection"
        >Sobre mim</Link>

        <Link
          onClick={operateMenu}
          className="text-white font-bold hover:text-[#f9004d] transition-colors"
          href="/#projectsSection"
        >Projetos</Link>

        <Link
          onClick={operateMenu}
          className="text-white font-bold hover:text-[#f9004d] transition-colors"
          href="/#skillsSection"
        >Habilidades</Link>

        <Link
          onClick={operateMenu}
          className="text-white font-bold hover:text-[#f9004d] transition-colors"
          href="/contacts"
        >Contatos</Link>
      </nav>
    </header>
  )
}
