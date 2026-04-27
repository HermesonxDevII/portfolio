import { ExternalLink, Mail, Phone } from "lucide-react"
import { SiGithub, SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const SOCIAL_LINKS = {
  whatsapp: "(85) 98700-4830",
  email: "daviqrozz2@gmail.com",
  github: "https://github.com/DaviQrozz",
  linkedin: "https://www.linkedin.com/in/davi-queiroz-648218231/",
  instagram: "https://instagram.com/daviqrozz",
}

export default function SocialContact() {
  return (
    <aside className="w-full md:w-90 lg:w-96 space-y-6 p-6 bg-[#0f0f0f] rounded-xl border border-[#1a1a1a]">
      <h3 className="text-2xl font-bold text-white mb-6">Contato Direto</h3>

      <div
        id="contacts"
        className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d] transition-all"
      >
        <a
          href="https://wa.me/558598704430"
          target="_blank"
          className="group flex items-center gap-3 flex-1"
        >
          <Phone className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-sm text-white/70">WhatsApp</p>
            <p className="font-medium text-white">{SOCIAL_LINKS.whatsapp}</p>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all">
        <a
          href={`mailto:${SOCIAL_LINKS.email}`}
          target="_blank"
          className="group flex items-center gap-3 flex-1"
        >
          <Mail className="w-5 h-5 text-[#f9004d] group-hover:scale-110 transition-transform" />
          <div>
            <p className="text-sm text-white/70">Email</p>
            <p className="font-medium text-white break-all">{SOCIAL_LINKS.email}</p>
          </div>
          <ExternalLink className="w-5 h-5 text-white/50 ml-auto" />
        </a>
      </div>

      <div>
        <p className="text-white/80 font-medium mb-4">Redes Sociais</p>
        <div className="space-y-2">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:bg-[#f9004d]">
              <SiGithub className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">GitHub</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center">
              <SlSocialLinkedin className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">LinkedIn</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#f9004d]/10 transition-all group"
          >
            <div className="w-10 h-10 bg-gradient from-[#e4405f] to-[#f77737] rounded-lg flex items-center justify-center">
              <SiInstagram className="w-7 h-7 text-white" />
            </div>
            <span className="text-white font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </aside>
  )
}
