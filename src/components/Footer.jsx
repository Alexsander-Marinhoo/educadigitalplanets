import { ArrowUp } from "lucide-react"
import { SCHOOL_INFO, createWhatsAppLink } from "../data/content"

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    if (window.lenis) {
      if (href === "#inicio") {
        window.lenis.scrollTo(0, { duration: 1.2 })
      } else {
        window.lenis.scrollTo(href, { offset: -70, duration: 1.2 })
      }
    } else {
      if (href === "#inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
  }

  return (
    <footer
      id="contato"
      className="bg-[#245380] text-white font-sans antialiased border-t border-[#5CA8D7]/30 selection:bg-[#5CA8D7] selection:text-[#245380]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* SEÇÃO SUPERIOR: Grid em 3 Colunas (Explorar / Institucional / Contato) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 pt-16 sm:pt-20 pb-16 sm:pb-20 text-left">
          
          {/* Coluna 1: Explorar */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm sm:text-base text-[#9BBE1D] tracking-wide">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base font-sans">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleLinkClick(e, "#inicio")}
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={(e) => handleLinkClick(e, "#diferenciais")}
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Diferenciais &amp; Tradição
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  onClick={(e) => handleLinkClick(e, "#cursos")}
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Cursos em Destaque
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  onClick={(e) => handleLinkClick(e, "#localizacao")}
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Localização &amp; Como Chegar
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Institucional */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm sm:text-base text-[#9BBE1D] tracking-wide">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base font-sans">
              <li>
                <a
                  href={createWhatsAppLink("Olá! Gostaria de informações sobre o curso de Inglês.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Inglês Prático &amp; Conversação
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink("Olá! Gostaria de informações sobre o curso de Informática.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Informática Profissionalizante
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink("Olá! Gostaria de informações sobre Comunicação e Vendas.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Comunicação, Vendas &amp; Liderança
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppLink("Olá! Gostaria de informações sobre o Reforço Escolar.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Reforço Escolar Especializado
                </a>
              </li>
              <li>
                <a
                  href={SCHOOL_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 cursor-pointer block"
                >
                  Facebook Oficial da Escola
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Atendimento */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm sm:text-base text-[#9BBE1D] tracking-wide">
              Contato &amp; Atendimento
            </h4>
            <div className="space-y-2.5 text-sm sm:text-base font-sans text-slate-100">
              <div>
                <a
                  href="mailto:contato@educadigitalplanets.com.br"
                  className="hover:text-white hover:underline transition-all duration-200 block break-all"
                >
                  contato@educadigitalplanets.com.br
                </a>
              </div>
              <div>
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-100 hover:text-white hover:underline transition-all duration-200 block font-medium"
                >
                  +55 {SCHOOL_INFO.phoneFormatted} (WhatsApp)
                </a>
              </div>
              <div className="text-slate-200 pt-1 text-xs sm:text-sm">
                <span className="font-semibold text-white">📍 {SCHOOL_INFO.address}</span>
                <br />
                <span className="text-[#9BBE1D] font-medium">{SCHOOL_INFO.neighborhoodCity}</span>
                <br />
                <span className="text-slate-300 text-xs">Zona Leste • CEP {SCHOOL_INFO.zipCode}</span>
              </div>
              <div className="text-xs text-[#9BBE1D] font-bold pt-1">
                Aulas 100% Presenciais • {SCHOOL_INFO.openingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Linha Divisória Sutil */}
        <div className="border-b border-[#5CA8D7]/30" />

        {/* ========================================================================= */}
        {/* BARRA INFERIOR: Metadados & Botão de Rolagem ao Topo */}
        {/* ========================================================================= */}
        <div className="py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-200">
          
          {/* Metadados, Política de Privacidade e Copyright */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Educa Digital Planets. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-[#5CA8D7]">•</span>
            <a
              href="#politica-de-privacidade"
              className="text-slate-300 hover:text-white hover:underline transition-colors cursor-pointer"
            >
              Política de Privacidade
            </a>
            <span className="hidden sm:inline text-[#5CA8D7]">•</span>
            <a
              href="https://www.instagram.com/alexsander.code/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-[#9BBE1D] transition-colors inline-flex items-center gap-1 group"
            >
              <span>Desenvolvido por</span>
              <strong className="text-white group-hover:text-[#9BBE1D] font-semibold">
                Alex.Code
              </strong>
            </a>
          </div>

          {/* Botão de Rolagem ao Topo */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#3774B0] border border-[#5CA8D7]/40 hover:border-[#9BBE1D] text-white hover:bg-[#16A34A] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm shrink-0"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
          </button>

        </div>

      </div>
    </footer>
  )
}

