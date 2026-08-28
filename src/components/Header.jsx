import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { createWhatsAppLink } from "../data/content"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const isClickScrollingRef = useRef(false)
  const clickTimeoutRef = useRef(null)

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Cursos", href: "#cursos" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Contato", href: "#contato" },
  ]

  useEffect(() => {
    const sectionIds = ["inicio", "diferenciais", "cursos", "metodologia", "contato"]

    const handleScroll = () => {
      setScrolled(window.scrollY > 25)

      if (isClickScrollingRef.current) return

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 90) {
        setActiveSection("contato")
        return
      }

      if (window.scrollY < 120) {
        setActiveSection("inicio")
        return
      }

      const activationPoint = window.innerHeight * 0.35

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= activationPoint) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  const handleNavClick = (e, href) => {
    setIsOpen(false)
    e.preventDefault()

    const targetId = href.replace("#", "")
    setActiveSection(targetId)

    isClickScrollingRef.current = true
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false
    }, 1200)

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
          const offset = 80
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }
  }

  return (
    <header className="fixed top-0 sm:top-5 left-0 sm:left-1/2 sm:-translate-x-1/2 z-50 w-full sm:w-[96%] max-w-[1420px] pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto w-full bg-white/95 backdrop-blur-md border-b sm:border border-[#3774B0]/20 rounded-none sm:rounded-full py-2.5 px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between gap-6 lg:gap-8 xl:gap-12 shadow-md sm:shadow-lg shadow-[#3774B0]/10 transition-all duration-300 ${
          scrolled ? "shadow-xl border-[#3774B0]/40 sm:scale-[0.995]" : ""
        }`}
      >
        {/* Left: Logo Only with extra margin */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center shrink-0 group cursor-pointer py-0.5"
          title="Educa Digital Planets"
        >
          <img
            src="/logo.svg"
            alt="Educa Digital Planets Logo"
            className="h-16 sm:h-18 md:h-20 lg:h-22 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* Center: Larger Floating Pill Navigation Track */}
        <div className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-2.5 bg-[#3774B0]/8 p-1.5 rounded-full border border-[#3774B0]/15 shadow-2xs">
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "")
            const isActive = activeSection === targetId

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 xl:px-5 py-2 rounded-full text-sm xl:text-[15px] font-sans font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#3774B0] text-white font-bold shadow-sm scale-[1.02]"
                    : "text-[#3774B0] hover:bg-[#3774B0]/15"
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Right: CTA Button with WhatsApp Logo & Circular Action Icon */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a
            href={createWhatsAppLink("Olá! Gostaria de falar com um consultor pedagógico da Educa Digital Planets.")}
            target="_blank"
            rel="noreferrer"
            className="group pl-4 pr-2 py-2 rounded-full bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white font-heading font-bold text-sm xl:text-[15px] inline-flex items-center gap-2 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer shrink-0"
          >
            <img
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              className="w-5 h-5 object-contain shrink-0"
            />
            <span>Falar no WhatsApp</span>
            <div className="w-7 h-7 rounded-full bg-white text-[#16A34A] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shrink-0 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </div>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="pl-3 pr-2 py-1.5 rounded-full bg-[#16A34A] text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm sm:hidden"
          >
            <img
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              className="w-3.5 h-3.5 object-contain shrink-0"
            />
            <span>WhatsApp</span>
            <div className="w-5 h-5 rounded-full bg-white text-[#16A34A] flex items-center justify-center">
              <ChevronRight className="w-3 h-3 stroke-[3]" />
            </div>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-[#3774B0] hover:bg-[#3774B0]/10 focus:outline-none cursor-pointer shrink-0"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-7 h-7 text-[#3774B0]" /> : <Menu className="w-7 h-7 text-[#3774B0]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="pointer-events-auto lg:hidden mt-2 w-full bg-white/98 backdrop-blur-md border border-[#3774B0]/20 rounded-3xl p-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "")
            const isActive = activeSection === targetId

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-5 py-3 rounded-2xl text-sm font-sans transition-colors ${
                  isActive
                    ? "bg-[#3774B0] text-white font-bold shadow-xs"
                    : "text-[#3774B0] hover:bg-[#3774B0]/10 font-semibold"
                }`}
              >
                {link.name}
              </a>
            )
          })}

          <div className="pt-2 mt-2 border-t border-slate-100">
            <a
              href={createWhatsAppLink("Olá! Gostaria de falar com a Educa Digital Planets.")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full pl-5 pr-2 py-3 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm inline-flex items-center justify-between shadow-md transition"
            >
              <span>Falar no WhatsApp Oficial</span>
              <div className="w-7 h-7 rounded-full bg-white text-[#16A34A] flex items-center justify-center">
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

