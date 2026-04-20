import Button from "@/components/Button";
import HighlightedText from "@/components/Highlighted-text";
import Link from "next/link";

export default function Presentation() {
  return (
    <section id="presentationSection" className="min-h-screen flex items-center">
      <div className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <p className="text-4xl sm:text-4xl font-extrabold">Olá, sou Hermeson</p>

        <h1 className="text-4xl sm:text-4xl font-extrabold leading-tight">
          <HighlightedText>Desenvolvedor Fullstack</HighlightedText>
        </h1>

        <p className="text-lg sm:text-1xl font-sans font-semibold">
          Sou um entusiasta de tecnologia viciado em aprender coisas novas. Confira mais sobre mim e alguns de meus projetos logo abaixo!
        </p>

        <div className="text-2xl sm:text-3xl mt-5">
          <Link href="#">
            <Button className="h-14 px-8 text-sm flex items-center justify-center">
              <span>Fale Comigo</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
