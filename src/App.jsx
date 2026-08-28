import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoTickerMarquee from "./components/InfoTickerMarquee"
import DifferentialsSection from "./components/DifferentialsSection"
import OrbitCoursesSection from "./components/OrbitCoursesSection"
import ProgramsSection from "./components/ProgramsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton"

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    window.lenis = lenis

    let animationFrameId

    function raf(time) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      delete window.lenis
    }
  }, [])

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

      {/* 6. Seção de Contato e Formulário de Matrícula (Grid 3 cols: 1 col Imagem + 2 cols Form) */}
      <ContactSection />

      {/* 7. Footer Institucional */}
      <Footer />

      {/* 8. Botão Flutuante do WhatsApp Comercial */}
      <WhatsAppFloatingButton />
    </div>
  )
}

