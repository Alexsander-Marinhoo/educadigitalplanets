import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoTickerMarquee from "./components/InfoTickerMarquee"
import DifferentialsSection from "./components/DifferentialsSection"
import OrbitCoursesSection from "./components/OrbitCoursesSection"
import ProgramsSection from "./components/ProgramsSection"
import LocationSection from "./components/LocationSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton"
import PrivacyPolicy from "./components/PrivacyPolicy"
import ReforcoEscolarPage from "./components/ReforcoEscolarPage"
import { initLenis, smoothScrollTo } from "./utils/lenis"

function getInitialPage() {
  const hash = window.location.hash.toLowerCase()
  const path = window.location.pathname.toLowerCase()

  if (hash === "#politica-de-privacidade" || path.includes("politica-de-privacidade")) {
    return "privacy"
  }
  if (
    hash === "#reforco-escolar" ||
    hash === "#reforco" ||
    path.includes("reforco-escolar") ||
    path.includes("reforco")
  ) {
    return "reforco"
  }
  return "home"
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleLocationChange = () => {
      const page = getInitialPage()
      setCurrentPage(page)

      if (page === "privacy" || page === "reforco") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else if (window.location.hash) {
        smoothScrollTo(window.location.hash, { offset: -80 })
      }
    }

    window.addEventListener("hashchange", handleLocationChange)
    window.addEventListener("popstate", handleLocationChange)

    initLenis()
    if (window.location.hash && currentPage === "home") {
      setTimeout(() => {
        smoothScrollTo(window.location.hash, { offset: -80 })
      }, 100)
    }

    return () => {
      window.removeEventListener("hashchange", handleLocationChange)
      window.removeEventListener("popstate", handleLocationChange)
    }
  }, [currentPage])

  const navigateToHome = () => {
    setCurrentPage("home")
    window.location.hash = ""
    window.history.pushState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateToPrivacy = () => {
    setCurrentPage("privacy")
    window.location.hash = "politica-de-privacidade"
    window.history.pushState(null, "", "#politica-de-privacidade")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  if (currentPage === "privacy") {
    return (
      <PrivacyPolicy
        onBack={navigateToHome}
      />
    )
  }

  if (currentPage === "reforco") {
    return (
      <ReforcoEscolarPage
        onNavigateHome={navigateToHome}
        onNavigatePrivacy={navigateToPrivacy}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#3774B0] selection:text-white">
      {/* 1. Header com Logo, Menu e Telefone */}
      <Header />

      {/* 2. Hero com Pill Badge e Alunos com Pílulas Flutuantes */}
      <Hero />

      {/* Faixa Marquee de Destaques de Cursos e Metodologia (Direita para Esquerda) */}
      <InfoTickerMarquee />

      {/* 3. Seção de Diferenciais com 4 Cards Verticais e Ícones Geométricos */}
      <DifferentialsSection />

      {/* 4. Seção Interativa em Órbita Curva e Fundo Degradê Suave */}
      <OrbitCoursesSection />

      {/* 5. Seção de Programas de Ensino com Categorias e Botões Circulares */}
      <ProgramsSection />

      {/* 6. Seção de Localização Física da Escola (Foto + Card de Maps Interativo + Rotas) */}
      <LocationSection />

      {/* 7. Seção de Contato e Formulário de Matrícula (Grid 3 cols: 1 col Imagem + 2 cols Form) */}
      <ContactSection />

      {/* 7. Footer Institucional */}
      <Footer />

      {/* 8. Botão Flutuante do WhatsApp Comercial */}
      <WhatsAppFloatingButton />
    </div>
  )
}

