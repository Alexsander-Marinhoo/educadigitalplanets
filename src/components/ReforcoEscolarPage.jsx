import { useState, useEffect } from "react"
import {
  MapPin,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Check,
  FileText,
  Calculator,
  Compass,
  User,
  Phone,
  Calendar,
  ShieldCheck
} from "lucide-react"
import { SCHOOL_INFO } from "../data/content"
import LocationSection from "./LocationSection"
import Footer from "./Footer"
import { DoodleLightbulb, DoodleGraduationCap, DoodleBeaker, DoodlePaperPlane, DoodleDiploma } from "./Hero"
import { IconBooks, IconTriangles, IconTeachers, IconSchedule, IconCordaoQuebraCabeca } from "./GeometricIcons"

// Formata telefone brasileiro para WhatsApp: (XX) XXXXX-XXXX
function formatWhatsApp(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11)
  if (numbers.length === 0) return ""
  if (numbers.length <= 2) return `(${numbers}`
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
}

export default function ReforcoEscolarPage({ onNavigateHome, onNavigatePrivacy }) {
  const [formData, setFormData] = useState({
    nomeResponsavel: "",
    whatsapp: "",
    nomeAluno: "",
    serieEscolar: "",
    materias: [],
    periodo: "Tarde",
    observacao: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    document.title = "Reforço Escolar Presencial em São Paulo | Educa Digital Planets"

    const metaDesc = document.querySelector('meta[name="description"]')
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : ""
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Reforço Escolar 100% Presencial no Jardim Maia (Zona Leste de SP). Turmas novas para Ensino Fundamental e Médio em Matemática, Português, Redação e Provas. 20 anos de tradição."
      )
    }

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute("href", "https://www.educadigitalplanets.com.br/reforco-escolar")
    }

    return () => {
      document.title = "Cursos Profissionalizantes na Zona Leste de SP | Educa Digital Planets"
      if (metaDesc && prevDesc) metaDesc.setAttribute("content", prevDesc)
      if (canonical) canonical.setAttribute("href", "https://www.educadigitalplanets.com.br/")
    }
  }, [])

  const defaultWhatsappMsg =
    "Olá! Vi o anúncio de Reforço Escolar no Jardim Maia e gostaria de informações sobre vagas para a nova turma!"

  const createReforcoWaLink = (customMsg = "") => {
    const text = customMsg || defaultWhatsappMsg
    return `https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  const handlePhoneChange = (e) => {
    setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })
  }

  const handleMateriaToggle = (materia) => {
    if (formData.materias.includes(materia)) {
      setFormData({
        ...formData,
        materias: formData.materias.filter((m) => m !== materia),
      })
    } else {
      setFormData({
        ...formData,
        materias: [...formData.materias, materia],
      })
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!formData.nomeResponsavel.trim() || !formData.whatsapp.trim() || !formData.nomeAluno.trim()) {
      alert("Por favor, preencha os dados de contato do responsável e o nome do aluno.")
      return
    }

    const materiasStr = formData.materias.length > 0 ? formData.materias.join(", ") : "A definir no diagnóstico"

    const msg = `Olá, equipe da *Educa Digital Planets*! 👋%0A%0AGostaria de agendar uma *Avaliação Diagnóstica de Reforço Escolar* para meu(minha) filho(a):%0A%0A👤 *Responsável:* ${encodeURIComponent(formData.nomeResponsavel)}%0A📱 *WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A🎒 *Nome do Aluno:* ${encodeURIComponent(formData.nomeAluno)}%0A📚 *Série / Ano Escolar:* ${encodeURIComponent(formData.serieEscolar || "Não informado")}%0A📝 *Matérias com Dificuldade:* ${encodeURIComponent(materiasStr)}%0A⏰ *Turno Preferido:* ${encodeURIComponent(formData.periodo)}${formData.observacao ? `%0A💬 *Observações:* ${encodeURIComponent(formData.observacao)}` : ""}%0A%0APor favor, poderiam me informar os horários disponíveis e valores da nova turma presencial?`

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=${msg}`, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  const faqs = [
    {
      q: "Quais anos e séries escolares o Reforço Escolar atende?",
      a: "Atendemos alunos do Ensino Fundamental I (1º ao 5º ano), Ensino Fundamental II (6º ao 9º ano) e Ensino Médio completo (1º ao 3º ano). As turmas são organizadas por faixa etária e nível de ensino para garantir atendimento personalizado.",
    },
    {
      q: "As aulas são presenciais ou online?",
      a: "As aulas são 100% presenciais em nossa sede no Jardim Maia (São Paulo - Zona Leste). Acreditamos que o contato humano, olho no olho, com o professor sentado ao lado do estudante sem distrações de telas é indispensável para tirar dúvidas profundas e recuperar notas com rapidez.",
    },
    {
      q: "Como funciona a avaliação diagnóstica inicial?",
      a: "Antes de iniciar, você e seu filho podem agendar um horário presencial conosco. Nossos coordenadores conversam com a família e analisam o caderno, as provas recentes e as maiores dificuldades do aluno para montar um cronograma de estudos sob medida.",
    },
    {
      q: "O reforço ajuda nas lições de casa diárias e trabalhos da escola?",
      a: "Sim! Além de sanar matérias que o aluno não entendeu em sala de aula, nossos professores auxiliam na realização dos deveres de casa, elaboração de trabalhos e resumos, ensinando métodos de organização que desenvolvem a autonomia do estudante.",
    },
    {
      q: "E se a prova da escola estiver muito perto?",
      a: "Trabalhamos com plantão intensivo pré-prova. O aluno traz o conteúdo programático do colégio e fazemos listas de exercícios simuladas focadas exatamente no que vai cair na avaliação dele, para ele ir seguro e confiante.",
    },
    {
      q: "Como os pais acompanham a evolução das notas?",
      a: "Mantemos contato direto com os responsáveis via WhatsApp e presencialmente. Passamos relatórios de frequência, evolução nas matérias e comportamento, garantindo total tranquilidade e transparência para a família.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#3774B0] selection:text-white flex flex-col">
      
      {/* ========================================================================= */}
      {/* 1. TOP BAR DE LOCALIZAÇÃO PRESENCIAL & AVISO DE TURMA NOVA (GOOGLE ADS) */}
      {/* ========================================================================= */}
      <div className="bg-[#0A2240] text-white border-b border-[#3774B0]/30 py-2.5 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-[#9BBE1D] text-[#0A2240] px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse"></span>
              Turma Nova em Formação
            </span>
            <span className="text-slate-200">
              Aulas <strong>100% Presenciais</strong> no Jardim Maia • São Paulo (Zona Leste)
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <span className="hidden md:inline">📍 {SCHOOL_INFO.address}</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <a
              href={createReforcoWaLink()}
              target="_blank"
              rel="noreferrer"
              className="text-[#9BBE1D] hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>Plantão de Matrículas: {SCHOOL_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HEADER EXCLUSIVO COM LOGO E BOTÃO DIRETO AO WHATSAPP */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
          
          {/* Logo Oficial da Escola */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigateHome()
              }}
              className="flex items-center cursor-pointer group text-left py-0.5"
              title="Voltar à página principal da escola"
            >
              <img
                src="/logo.svg"
                alt="Educa Digital Planets"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </a>
          </div>

          {/* Navegação Rápida & Botões em Destaque */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href="#formulario"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#3774B0] hover:bg-[#2e6296] active:bg-[#25507c] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-heading font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Agendar Avaliação</span>
            </a>

            <a
              href={createReforcoWaLink("Olá! Gostaria de falar com um coordenador sobre o Reforço Escolar presencial.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-heading font-bold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 object-contain shrink-0" />
              <span className="hidden xs:inline">WhatsApp Oficial</span>
              <span className="xs:hidden">Contato</span>
            </a>
          </div>

        </div>
      </header>

      <main className="flex-1">

        {/* ========================================================================= */}
        {/* 3. HERO SECTION (PADRÃO IDÊNTICO À HERO DA PÁGINA PRINCIPAL) */}
        {/* ========================================================================= */}
        <section
          id="inicio"
          className="relative min-h-[660px] lg:min-h-[740px] flex items-center overflow-hidden bg-[#f4f1ea] pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 border-b border-slate-200"
        >
          
          {/* ========================================================================= */}
          {/* 1. Desktop Only: Seamless Full-Bleed Students Photo on the Right */}
          {/* ========================================================================= */}
          <div
            className="hero-student-photo hidden lg:block absolute inset-y-0 right-0 w-[50%] xl:w-[52%] h-full z-0 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 32%), linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 6%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 32%), linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 6%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          >
            <img
              src="/images/acompanhamento-individual.jpg"
              alt="Alunos e professores no Reforço Escolar Presencial da Educa Digital Planets"
              className="w-full h-full object-cover object-center brightness-[1.02] contrast-[1.06] saturate-[1.12]"
              loading="eager"
            />
          </div>

          {/* ========================================================================= */}
          {/* 2. Floating Educational Doodles & Poster (Chalk/Line Illustration Style) */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 w-full sm:w-[96%] max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pointer-events-none z-10">
            <div className="relative w-full h-full">
              
              {/* Lightbulb Doodle (Top Center-Right) */}
              <div className="hero-doodle-icon absolute top-28 lg:top-36 right-[35%] lg:right-[42%] text-[#3774B0]/50 animate-pulse hidden sm:block">
                <DoodleLightbulb className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>

              {/* Graduation Cap Doodle (Top Right) */}
              <div className="hero-doodle-icon absolute top-24 lg:top-32 right-8 sm:right-24 text-[#0F2E59]/40">
                <DoodleGraduationCap className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              {/* Science Beaker (Middle Center) */}
              <div className="hero-doodle-icon absolute top-[45%] right-[45%] lg:right-[48%] text-[#5CA8D7]/50 hidden md:block">
                <DoodleBeaker className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              {/* Paper Airplane (Left of Students) */}
              <div className="hero-doodle-icon absolute top-48 left-[42%] lg:left-[46%] text-[#3774B0]/50 -rotate-12 hidden lg:block">
                <DoodlePaperPlane className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>

              {/* Diploma Doodle (Right Edge) */}
              <div className="hero-doodle-icon absolute bottom-36 right-4 sm:right-12 text-[#9BBE1D]/70 hidden sm:block">
                <DoodleDiploma className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>

              {/* Motivational Poster in the Background */}
              <div className="hero-doodle-icon absolute top-44 lg:top-48 right-[24%] lg:right-[28%] bg-white/85 backdrop-blur-xs border border-slate-300/80 rounded-xl px-3 py-2 text-center shadow-xs hidden xl:block -rotate-2">
                <span className="text-[10px] font-extrabold text-[#3774B0] block tracking-wider leading-tight">
                  REFORÇO PRESENCIAL
                </span>
                <span className="text-[9px] font-bold text-[#5CA8D7] block tracking-wide">
                  DIRETO NO CADERNO
                </span>
              </div>

              {/* Curving Dashed Loop Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1440 700"
              >
                <path
                  d="M-30,420 C150,220 320,180 350,300 C380,440 220,500 120,440 C20,380 90,220 420,240 C750,260 900,160 1150,280 C1320,360 1420,200 1490,220"
                  stroke="#3774B0"
                  strokeOpacity="0.25"
                  strokeWidth="1.8"
                  strokeDasharray="6 6"
                />
              </svg>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. Main Content: Text on TOP, Image on BOTTOM on Mobile/Tablet */}
          {/* ========================================================================= */}
          <div className="relative z-30 w-full sm:w-[96%] max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
            <div className="max-w-2xl lg:max-w-2xl text-left space-y-5 sm:space-y-6">
              
              {/* Badge Destacado de Localização Presencial */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3774B0]/10 border border-[#3774B0]/25 text-[#245380] text-xs sm:text-sm font-bold shadow-2xs">
                <MapPin className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Escola Presencial em <strong>Jardim Maia • São Paulo (Zona Leste)</strong></span>
              </div>

              {/* Main Punchy Title */}
              <div className="space-y-2">
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#3774B0] leading-[1.12] tracking-tight">
                  <span className="inline-block bg-[#3774B0] text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-2xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black mr-2 shadow-md">
                    Reforço Escolar!
                  </span>
                  <br />
                  <span className="text-[#1A4B88] inline-block mt-1">
                    Apoio presencial para o seu filho recuperar as notas
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-xl pt-1">
                  Acompanhamento individualizado em <strong>Matemática</strong>, <strong>Português</strong>, <strong>Redação</strong> e <strong>Lição de Casa</strong> com 20 anos de tradição. Professores pacientes que ensinam no ritmo de cada estudante, do Ensino Fundamental ao Médio.
                </p>
              </div>

              {/* High-Conversion Compliant Urgency & Status Box (Google Ads Safe) */}
              <div className="bg-[#3774B0] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#9BBE1D] shadow-xl max-w-md sm:max-w-lg space-y-2">
                <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#9BBE1D] flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9BBE1D] animate-pulse"></span>
                    <span className="text-white">Avaliação Diagnóstica Presencial Gratuita</span>
                  </span>
                  <span className="bg-[#245380] text-[#9BBE1D] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#5CA8D7]/30">
                    Presencial
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  📍 Av. Prof. Alípio de Barros, 963 — Turmas reduzidas para identificar onde travou o aprendizado e sanar dúvidas no caderno.
                </p>
              </div>

              {/* Solid Vibrant Green CTA Button */}
              <div className="hero-fade-content pt-1">
                <a
                  href={createReforcoWaLink("Olá! Gostaria de agendar uma Avaliação Diagnóstica Gratuita de Reforço Escolar para meu filho na Educa Digital Planets.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl font-heading font-black text-base sm:text-lg shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer w-full sm:w-auto"
                >
                  <img
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp Oficial"
                    className="w-6 h-6 object-contain"
                  />
                  <span>AGENDAR AVALIAÇÃO GRATUITA</span>
                </a>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* Mobile & Tablet Only: 100% Full-Width Clean Image at Bottom */}
            {/* ========================================================================= */}
            <div className="hero-student-photo relative block lg:hidden pt-8 -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12 -mb-16 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] lg:w-[calc(100%+6rem)] overflow-hidden">
              <img
                src="/images/acompanhamento-individual.jpg"
                alt="Reforço Escolar Presencial na Educa Digital Planets"
                className="w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover object-center"
                style={{
                  maskImage: "linear-gradient(to top, rgba(0,0,0,1) 82%, rgba(0,0,0,0.6) 94%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 82%, rgba(0,0,0,0.6) 94%, transparent 100%)",
                }}
                loading="eager"
              />
              {/* Subtle top edge gradient veil matching background #f4f1ea */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#f4f1ea]/70 to-transparent pointer-events-none" />
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. DIAGNÓSTICO DOS DESAFIOS (CARDS COM ÍCONES GEOMÉTRICOS & LINHA CURVA) */}
        {/* ========================================================================= */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200">
          {/* Linha Curva Tracejada Decorativa em SVG Idêntica ao Anexo */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 700"
          >
            <path
              d="M-50,550 C300,530 650,480 900,320 C1150,150 1380,80 1400,240 C1415,360 1280,500 1100,480 C950,460 880,350 980,240"
              stroke="#3774B0"
              strokeOpacity="0.28"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            
            {/* Título e Subtítulo Alinhados à Esquerda Conforme o Anexo */}
            <div className="max-w-3xl text-left space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#3774B0] bg-[#3774B0]/10 px-3.5 py-1 rounded-full">
                Diagnóstico dos Desafios
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-[1.12] tracking-tight">
                A rede de ensino <span className="text-[#3774B0]">Educa Digital Planets</span> resolve as maiores dificuldades escolares do seu filho
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
                A escola atua há 20 anos com tradição. Em duas décadas já formamos e preparamos mais de 15.000 alunos para a vida e o aprendizado com metodologia 100% prática e acolhedora.
              </p>
            </div>

            {/* 4 Cards Grid - Idênticos ao Anexo com Ícones Geométricos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: IconBooks */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#3774B0] transition-all duration-300 flex flex-col text-left group min-h-[230px] justify-between">
                <div>
                  <div className="mb-6 transform group-hover:scale-105 transition-transform">
                    <IconBooks />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#3774B0] mb-2 leading-tight">
                    Dúvidas Acumuladas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    O aluno não compreende a matéria em sala de aula e acumula dificuldades. No reforço presencial, explicamos passo a passo até destravar o aprendizado.
                  </p>
                </div>
              </div>

              {/* Card 2: IconTriangles */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#3774B0] transition-all duration-300 flex flex-col text-left group min-h-[230px] justify-between">
                <div>
                  <div className="mb-6 transform group-hover:scale-105 transition-transform">
                    <IconTriangles />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#3774B0] mb-2 leading-tight">
                    Lição de Casa Sem Brigas
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Acabaram os estresses e discussões em família à noite. As tarefas escolares são feitas na escola com orientação de professores dedicados e método.
                  </p>
                </div>
              </div>

              {/* Card 3: IconTeachers */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#3774B0] transition-all duration-300 flex flex-col text-left group min-h-[230px] justify-between">
                <div>
                  <div className="mb-6 transform group-hover:scale-105 transition-transform">
                    <IconTeachers />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#3774B0] mb-2 leading-tight">
                    Nossos Professores Presenciais
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Equipe pedagógica experiente pronta para tirar dúvidas diretamente no caderno do aluno, com didática paciente e acolhimento individual.
                  </p>
                </div>
              </div>

              {/* Card 4: IconSchedule */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#3774B0] transition-all duration-300 flex flex-col text-left group min-h-[230px] justify-between">
                <div>
                  <div className="mb-6 transform group-hover:scale-105 transition-transform">
                    <IconSchedule />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#3774B0] mb-2 leading-tight">
                    Recuperação de Notas e Confiança
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Simulados pré-prova focados no conteúdo da escola regular para o aluno responder com calma e conquistar notas azuis com total segurança.
                  </p>
                </div>
              </div>

            </div>

            {/* Faixa de Solução */}
            <div className="bg-[#245380] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#9BBE1D]">
                  <Sparkles className="w-4 h-4" />
                  <span>A Solução Presencial da Educa Digital Planets</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl leading-tight">
                  Transformamos insegurança em notas azuis e orgulho para a família.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Em nosso ambiente presencial estruturado, o estudante tem foco total, paciência e estímulo contínuo para aprender a gostar de estudar.
                </p>
              </div>

              <a
                href={createReforcoWaLink("Olá! Gostaria de entender melhor como o Reforço Escolar pode ajudar meu filho a melhorar as notas.")}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 bg-[#9BBE1D] hover:bg-[#8AA918] text-[#0A2240] font-heading font-black px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Falar com Pedagogo Agora
              </a>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CICLOS E SÉRIES ATENDIDAS (FUNDAMENTAL I, II E MÉDIO) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#16A34A] bg-[#16A34A]/10 px-3.5 py-1 rounded-full">
                Público Atendido
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#0A2240]">
                Reforço Escolar para Todas as Fases do Aprendizado
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Cada faixa etária exige uma abordagem didática diferente. Nossos programas são estruturados respeitando a maturidade e os desafios específicos de cada ciclo.
              </p>
            </div>

            {/* 3 Cards dos Ciclos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Fundamental I */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#3774B0]/40 transition-all">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-[#3774B0]/10 text-[#3774B0] px-3 py-1 rounded-full text-xs font-bold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>1º ao 5º ano</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A2240]">
                    Ensino Fundamental I
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Foco na base sólida: alfabetização, interpretação de pequenos textos, operações matemáticas fundamentais e criação do hábito diário de lição de casa.
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700">Principais conquistas:</div>
                    {[
                      "Alfabetização e fluência em leitura",
                      "Tabuada e raciocínio lógico sem decoreba",
                      "Dever de casa realizado com autonomia",
                      "Desenvolvimento de atenção e calma",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 stroke-[2.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={createReforcoWaLink("Olá! Gostaria de consultar vagas no Reforço Escolar para Ensino Fundamental I.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#3774B0] hover:text-white text-[#3774B0] font-bold text-xs sm:text-sm transition-colors text-center block"
                  >
                    Consultar Turmas Fund. I
                  </a>
                </div>
              </div>

              {/* Fundamental II */}
              <div className="bg-white rounded-3xl p-7 border-2 border-[#3774B0] shadow-xl flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3774B0] text-white px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                  Mais Procurado
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 text-[#16A34A] px-3 py-1 rounded-full text-xs font-bold">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>6º ao 9º ano</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A2240]">
                    Ensino Fundamental II
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A fase em que a quantidade de matérias e professores aumenta. Foco em sanar dúvidas de álgebra, geometria, gramática e preparação para provas.
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700">Principais conquistas:</div>
                    {[
                      "Matemática (equações, frações, porcentagem)",
                      "Língua Portuguesa e redação estruturada",
                      "Ciências e noções de química/física",
                      "Preparação focada para provas bimestrais",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 stroke-[2.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={createReforcoWaLink("Olá! Gostaria de consultar vagas no Reforço Escolar para Ensino Fundamental II.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#3774B0] hover:bg-[#1A4B88] text-white font-bold text-xs sm:text-sm transition-colors text-center block shadow-md"
                  >
                    Garantir Vaga no Fund. II
                  </a>
                </div>
              </div>

              {/* Ensino Médio */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#3774B0]/40 transition-all">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-[#9BBE1D]/20 text-[#0A2240] px-3 py-1 rounded-full text-xs font-bold">
                    <Compass className="w-3.5 h-3.5 text-[#9BBE1D]" />
                    <span>1º ao 3º ano</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A2240]">
                    Ensino Médio &amp; Vestibulares
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Preparação para as matérias exatas mais exigentes, simulados pré-vestibular, ENEM e técnicas de redação nota máxima para o futuro do jovem.
                  </p>
                  
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700">Principais conquistas:</div>
                    {[
                      "Física, Química e Biologia descomplicadas",
                      "Matemática avançada (funções e trigonometria)",
                      "Redação dissertativa-argumentativa (padrão ENEM)",
                      "Técnicas de estudo e gestão de tempo",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 stroke-[2.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={createReforcoWaLink("Olá! Gostaria de consultar vagas no Reforço Escolar para Ensino Médio.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#3774B0] hover:text-white text-[#3774B0] font-bold text-xs sm:text-sm transition-colors text-center block"
                  >
                    Consultar Ensino Médio
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DISCIPLINAS E MATÉRIAS COBERTAS */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#3774B0] bg-[#3774B0]/10 px-3.5 py-1 rounded-full">
                Matérias Atendidas
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#0A2240]">
                Onde seu filho mais precisa de ajuda?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossos professores cobrem as principais disciplinas do currículo nacional, com foco especial em exatas e produção textual.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Matemática", desc: "Cálculos, frações, equações e raciocínio lógico", icon: Calculator, color: "text-[#3774B0] bg-[#3774B0]/10" },
                { name: "Português", desc: "Gramática, interpretação de texto e leitura fluente", icon: BookOpen, color: "text-[#16A34A] bg-[#16A34A]/10" },
                { name: "Redação", desc: "Estrutura do texto, coesão, coerência e repertório", icon: FileText, color: "text-amber-600 bg-amber-50" },
                { name: "Ciências & Bio", desc: "Corpo humano, meio ambiente e método científico", icon: Sparkles, color: "text-emerald-600 bg-emerald-50" },
                { name: "Física & Química", desc: "Fórmulas, conceitos práticos e experimentos", icon: Compass, color: "text-indigo-600 bg-indigo-50" },
                { name: "Tarefas Escolares", desc: "Auxílio diário em deveres, trabalhos e pesquisas", icon: CheckCircle2, color: "text-rose-600 bg-rose-50" },
              ].map((subject, idx) => {
                const IconComponent = subject.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#3774B0] hover:shadow-lg transition-all text-center flex flex-col items-center justify-between gap-3 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${subject.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-sm text-slate-800">{subject.name}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight">{subject.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. COMO FUNCIONA: NOSSO MÉTODO COMPROVADO EM 4 PASSOS */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#0A2240] text-white border-b border-[#3774B0]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#9BBE1D] bg-[#9BBE1D]/20 px-3.5 py-1 rounded-full border border-[#9BBE1D]/40">
                Metodologia Passo a Passo
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white">
                Como Funciona o Acompanhamento na Prática
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Um método estruturado em 4 etapas para que seu filho sinta segurança desde o primeiro dia de aula.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#0F2E59] border border-[#3774B0]/40 p-6 rounded-2xl space-y-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#9BBE1D] text-[#0A2240] font-black flex items-center justify-center text-sm shadow-md">
                  1
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Diagnóstico Inicial
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avaliamos o histórico, o caderno e as provas recentes para descobrir exatamente onde começou o bloqueio do aluno na matéria.
                </p>
              </div>

              <div className="bg-[#0F2E59] border border-[#3774B0]/40 p-6 rounded-2xl space-y-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#9BBE1D] text-[#0A2240] font-black flex items-center justify-center text-sm shadow-md">
                  2
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Plano Individualizado
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Montamos uma rotina de exercícios sob medida, respeitando o ritmo de aprendizado dele, sem pressa e sem comparações.
                </p>
              </div>

              <div className="bg-[#0F2E59] border border-[#3774B0]/40 p-6 rounded-2xl space-y-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#9BBE1D] text-[#0A2240] font-black flex items-center justify-center text-sm shadow-md">
                  3
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Apoio Presencial Paciente
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  O professor senta junto, explica de formas diferentes até a criança compreender e ensina a pensar por conta própria.
                </p>
              </div>

              <div className="bg-[#0F2E59] border border-[#3774B0]/40 p-6 rounded-2xl space-y-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#9BBE1D] text-[#0A2240] font-black flex items-center justify-center text-sm shadow-md">
                  4
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Revisão Pré-Prova
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Simulados focados nas provas da escola para treinar velocidade, atenção e garantir a tão esperada nota azul no boletim.
                </p>
              </div>

            </div>

            <div className="text-center pt-4">
              <a
                href={createReforcoWaLink("Olá! Gostaria de agendar o Diagnóstico Inicial do meu filho na Educa Digital Planets.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white px-8 py-4 rounded-xl font-heading font-black text-sm sm:text-base shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <img
                  src="/whatsapp-icon.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                />
                <span>Agendar Diagnóstico Gratuito com Pedagogo</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. POR QUE O MODELO 100% PRESENCIAL É DECISIVO */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              <div className="space-y-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#3774B0] bg-[#3774B0]/10 px-3.5 py-1 rounded-full">
                  Diferencial Pedagógico
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#0A2240]">
                  Por que aulas de reforço online falham e o 100% presencial funciona?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Crianças e adolescentes já passam tempo demais na frente de telas. Na hora de aprender uma matéria difícil, o formato presencial é insubstituível:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Sem distrações de celular e abas abertas",
                      desc: "Na escola, o ambiente é 100% focado no estudo, longe de notificações, jogos e redes sociais que tiram a atenção.",
                    },
                    {
                      title: "O professor vê onde a mão travou no papel",
                      desc: "Presencialmente, o educador acompanha a resolução linha por linha do exercício e percebe imediatamente onde o raciocínio errou.",
                    },
                    {
                      title: "Criação de disciplina e rotina de horário",
                      desc: "O compromisso de sair de casa e ir até a escola ensina responsabilidade e maturidade para a vida escolar.",
                    },
                    {
                      title: "Acolhimento humanizado para alunos com timidez",
                      desc: "Muitos estudantes têm medo de falar. O professor cria um laço de confiança individual para desbloquear o aprendizado.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#16A34A]/15 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-slate-800">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Visual com Foto das Salas Práticas */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#f4f1ea] aspect-4/3 sm:aspect-16/10">
                  <img
                    src="/images/sala-aulas-praticas.jpg"
                    alt="Salas de aulas práticas da Educa Digital Planets"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card de Destaque Flutuante */}
                <div className="mt-6 sm:mt-0 sm:absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-200 max-w-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shrink-0 shadow-xs">
                      <IconCordaoQuebraCabeca className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#3774B0] uppercase">Educação Inclusiva</div>
                      <div className="text-xs text-slate-700 font-medium leading-snug">
                        Atendimento preparado com paciência para alunos com dificuldades de foco e TEA.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. LOCALIZAÇÃO FÍSICA ESTRATÉGICA (IGUAL À PÁGINA PRINCIPAL) */}
        {/* ========================================================================= */}
        <LocationSection />

        {/* ========================================================================= */}
        {/* 10. FORMULÁRIO DE DIAGNÓSTICO ESCOLAR / PRÉ-MATRÍCULA */}
        {/* ========================================================================= */}
        <section id="formulario" className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
          {/* Fundo com curvas sutis em harmonia com a página principal */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1440 700"
          >
            <path
              d="M-50,450 C300,600 650,200 1000,450 C1250,600 1380,300 1500,400"
              stroke="#3774B0"
              strokeOpacity="0.14"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Card Azul de Alta Visibilidade (Igual ao Formulário da Página Principal) */}
            <div className="bg-[#3774B0] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#245380] shadow-2xl relative overflow-hidden text-white">
              
              {/* Header do Formulário */}
              <div className="mb-8 space-y-2.5 text-left">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-heading font-black tracking-wider uppercase backdrop-blur-xs">
                  Atendimento Personalizado
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight tracking-tight">
                  Agende a Avaliação Diagnóstica do seu Filho
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                  Preencha os campos abaixo e entraremos em contato via WhatsApp em minutos para entender as necessidades escolares e agendar a visita presencial.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-bold flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span>
                    ✨ Pronto! Seus dados foram encaminhados para nosso WhatsApp oficial. Aguarde um instante que nossa coordenadora já vai te atender.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmitForm} className="space-y-6 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Nome do Responsável */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 h-6">
                      <User className="w-4 h-4 text-white shrink-0" />
                      <span>Nome do Responsável (Pai / Mãe) *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silva"
                      value={formData.nomeResponsavel}
                      onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-base sm:text-lg rounded-2xl px-5 h-[58px] shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 h-6">
                      <Phone className="w-4 h-4 text-white shrink-0" />
                      <span>WhatsApp para Contato *</span>
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      required
                      maxLength={15}
                      placeholder="(11) 98765-4321"
                      value={formData.whatsapp}
                      onChange={handlePhoneChange}
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-base sm:text-lg rounded-2xl px-5 h-[58px] shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Nome do Aluno */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 h-6">
                      <GraduationCap className="w-4 h-4 text-white shrink-0" />
                      <span>Nome do Estudante *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Lucas Silva"
                      value={formData.nomeAluno}
                      onChange={(e) => setFormData({ ...formData, nomeAluno: e.target.value })}
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-base sm:text-lg rounded-2xl px-5 h-[58px] shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                    />
                  </div>

                  {/* Série / Ano Escolar */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 h-6">
                      <BookOpen className="w-4 h-4 text-white shrink-0" />
                      <span>Série ou Ano Escolar *</span>
                    </label>
                    <select
                      required
                      value={formData.serieEscolar}
                      onChange={(e) => setFormData({ ...formData, serieEscolar: e.target.value })}
                      className="w-full bg-white text-slate-900 font-semibold text-base sm:text-lg rounded-2xl px-5 h-[58px] shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400 font-normal">
                        👇 Selecione o ano escolar...
                      </option>
                      <option value="1º ao 3º ano Fundamental I">1º ao 3º ano Fundamental I (Alfabetização / Base)</option>
                      <option value="4º ou 5º ano Fundamental I">4º ou 5º ano Fundamental I</option>
                      <option value="6º ou 7º ano Fundamental II">6º ou 7º ano Fundamental II</option>
                      <option value="8º ou 9º ano Fundamental II">8º ou 9º ano Fundamental II</option>
                      <option value="1º ano Ensino Médio">1º ano Ensino Médio</option>
                      <option value="2º ou 3º ano Ensino Médio">2º ou 3º ano Ensino Médio (Vestibulares / ENEM)</option>
                    </select>
                  </div>
                </div>

                {/* Seleção de Matérias com Maior Dificuldade */}
                <div className="space-y-3">
                  <label className="block text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Selecione as matérias onde o aluno tem mais dificuldade:</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {[
                      "Matemática",
                      "Português",
                      "Redação",
                      "Ciências",
                      "Física / Química",
                      "História / Geog.",
                      "Lição de Casa",
                      "Todas as Matérias",
                    ].map((mat, idx) => {
                      const isSelected = formData.materias.includes(mat)
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleMateriaToggle(mat)}
                          className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-white text-[#1C5182] border-white shadow-lg font-black scale-[1.02]"
                              : "bg-white/15 hover:bg-white/25 text-white border-white/30 hover:border-white/50"
                          }`}
                        >
                          {isSelected ? `✓ ${mat}` : mat}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Turno Preferido */}
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 h-6">
                    <Calendar className="w-4 h-4 text-white shrink-0" />
                    <span>Turno Preferido para as Aulas Presenciais:</span>
                  </label>
                  <select
                    value={formData.periodo}
                    onChange={(e) => setFormData({ ...formData, periodo: e.target.value })}
                    className="w-full bg-white text-slate-900 font-semibold text-base sm:text-lg rounded-2xl px-5 h-[58px] shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all cursor-pointer"
                  >
                    <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                    <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
                    <option value="Final de Tarde / Noite (17h às 20h)">Final de Tarde / Noite (17h às 20h)</option>
                    <option value="Aos Sábados">Turmas Especiais aos Sábados</option>
                  </select>
                </div>

                {/* Botão de Envio do Formulário */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white font-heading font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <img
                      src="/whatsapp-icon.svg"
                      alt="WhatsApp"
                      className="w-6 h-6 object-contain shrink-0"
                    />
                    <span>ENVIAR FICHA E AGENDAR NO WHATSAPP</span>
                  </button>
                </div>

                {/* Selo de Garantia e Privacidade */}
                <div className="flex items-center justify-center gap-2 text-xs text-blue-100 text-center pt-1">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>
                    Atendimento humanizado sem spam. Seus dados estão 100% seguros conforme a LGPD e nossa{" "}
                    <button
                      type="button"
                      onClick={onNavigatePrivacy}
                      className="underline text-white font-bold hover:text-blue-200 cursor-pointer"
                    >
                      Política de Privacidade
                    </button>.
                  </span>
                </div>

              </form>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FAQ DO REFORÇO ESCOLAR (PERGUNTAS FREQUENTES DOS PAIS) */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#3774B0] bg-[#3774B0]/10 px-3.5 py-1 rounded-full">
                Tire suas Dúvidas
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#0A2240]">
                Perguntas Frequentes sobre o Reforço Escolar
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tudo o que você precisa saber sobre o funcionamento das aulas presenciais.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-slate-50/50"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left font-heading font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[#3774B0] shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Chamada Final para WhatsApp */}
            <div className="text-center pt-4">
              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                Ainda tem alguma dúvida específica sobre o caso do seu filho?
              </p>
              <a
                href={createReforcoWaLink("Olá! Tenho uma dúvida sobre o Reforço Escolar e gostaria de conversar com o pedagogo.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#16A34A] hover:underline"
              >
                <span>Fale diretamente com nossa coordenação no WhatsApp →</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 12. FOOTER INSTITUCIONAL (IGUAL À PÁGINA PRINCIPAL) */}
      {/* ========================================================================= */}
      <Footer onNavigateHome={onNavigateHome} onNavigatePrivacy={onNavigatePrivacy} />

      {/* ========================================================================= */}
      {/* 13. BOTÃO FLUTUANTE DO WHATSAPP ESPECÍFICO DO REFORÇO ESCOLAR */}
      {/* ========================================================================= */}
      <aside
        aria-label="Atendimento rápido WhatsApp Reforço Escolar"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-end group pointer-events-auto"
      >
        <a
          href={createReforcoWaLink("Olá! Vim pela página de Reforço Escolar e gostaria de garantir uma vaga na nova turma!")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a equipe do Reforço Escolar no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-400/50"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
          <img
            src="/whatsapp-icon.svg"
            alt="Ícone WhatsApp"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:rotate-12"
          />
          <div className="hidden lg:block absolute right-full mr-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Matrículas Abertas • Reforço Escolar
          </div>
        </a>
      </aside>

    </div>
  )
}
