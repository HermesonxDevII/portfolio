import { Plus } from "lucide-react";

import Link from "next/link";

import Title from "@/components/Title";
import Container from "@/components/Container";
import SkillBadge from "./components/SkillBadge";

export default function Skills() {
  return (
    <Container>
      <div className="w-full flex items-center justify-between">
        <Title>Habilidades</Title>

        <Link
          href="/skills/create"
          className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#f9004d] text-white/60 hover:text-white transition"
        >
          <Plus className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div>
            <Title className="text-md flex justify-start">Front-End</Title>
            <p className="text-white/40 text-xs mt-0.5">4 cadastrados</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SkillBadge />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <Title className="text-md flex justify-start">Back-End</Title>
            <p className="text-white/40 text-xs mt-0.5">4 cadastrados</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SkillBadge />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <Title className="text-md flex justify-start">DevOps</Title>
            <p className="text-white/40 text-xs mt-0.5">4 cadastrados</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SkillBadge />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <Title className="text-md flex justify-start">Database</Title>
            <p className="text-white/40 text-xs mt-0.5">4 cadastrados</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SkillBadge />
          </div>
        </div>
      </div>
    </Container>
  )
}
