import { useState, useRef, useEffect } from "react"
import { Sparkles, ShieldCheck, CheckCircle2, Send, Clock, User, Phone, BookOpen, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { SCHOOL_INFO } from "../data/content"

// Slides para o carrossel do Facebook na seção de contato
const FACEBOOK_STORIES = [
  {
    id: 1,
    image: "/imagens-facebook/turma-de-ingles.jpeg",
    badge: "Turma de Inglês Kids",
    title: "Aulas de Inglês Presencial",
    desc: "Metodologia descontraída e acolhedora dos 7 aos 17 anos.",
  },
  {
    id: 2,
    image: "/imagens-facebook/617211311_1218628043704366_1207732931107126307_n.jpg",
    badge: "Falar Bem Muda Tudo",
    title: "Curso de Comunicação para Jovens",
    desc: "Oratória, liderança e segurança para falar em público.",
  },
  {
    id: 3,
    image: "/imagens-facebook/618225059_1218782840355553_5395396274763763253_n.jpg",
    badge: "Educação Inclusiva",
    title: "Alunos com TEA",
    desc: "Atendimento individualizado e paciente em Informática e Inglês.",
  },
  {
    id: 4,
    image: "/imagens-facebook/757533569_1372510358316133_2178043590460528448_n.jpg",
    badge: "Cursos Profissionalizantes",
    title: "Inglês e Informática Kids & Teens",
    desc: "Aulas 100% práticas no computador com condições especiais.",
  },
]

const STORY_DURATION = 5000 // 5 segundos por story

function ContactStoriesCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const dragStartX = useRef(null)
  const isDragging = useRef(false)

  // Timer automático para o próximo slide
  useEffect(() => {
    if (isPaused) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FACEBOOK_STORIES.length)
    }, STORY_DURATION)

    return () => clearTimeout(timer)
  }, [currentIndex, isPaused])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FACEBOOK_STORIES.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FACEBOOK_STORIES.length) % FACEBOOK_STORIES.length)
  }

  // Interação Touch (Swipe & Tap)
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX
    isDragging.current = false
    setIsPaused(true)
  }

  const handleTouchEnd = (e) => {
    setIsPaused(false)
    if (dragStartX.current === null) return
    const endX = e.changedTouches[0].clientX
    const deltaX = endX - dragStartX.current
    dragStartX.current = null

    if (deltaX < -35) {
      goToNext()
    } else if (deltaX > 35) {
      goToPrev()
    } else {
      const rect = e.currentTarget.getBoundingClientRect()
      const touchX = endX - rect.left
      if (touchX < rect.width * 0.35) {
        goToPrev()
      } else {
        goToNext()
      }
    }
  }

  // Interação Mouse (Drag & Click)
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX
    isDragging.current = false
    setIsPaused(true)
  }

  const handleMouseUp = (e) => {
    setIsPaused(false)
    if (dragStartX.current === null) return
    const deltaX = e.clientX - dragStartX.current
    dragStartX.current = null

    if (deltaX < -35) {
      goToNext()
    } else if (deltaX > 35) {
      goToPrev()
    } else {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      if (clickX < rect.width * 0.35) {
        goToPrev()
      } else {
        goToNext()
      }
    }
  }

  const currentSlide = FACEBOOK_STORIES[currentIndex]

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 min-h-[580px] sm:min-h-[660px] md:min-h-[700px] lg:min-h-full h-full flex flex-col justify-between cursor-grab active:cursor-grabbing select-none touch-pan-y group"
    >
      {/* Imagens dos Stories com Absolute Inset (Renderização Confiável e Sem Telas Pretas) */}
      {FACEBOOK_STORIES.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 pointer-events-none ${
            idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Overlay apenas na base inferior para leitura do texto, deixando o restante 100% claro e nítido */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

      {/* Topo: Barrinhas de Progresso + Selo de Matrículas Abertas */}
      <div className="relative z-20 px-4 pt-3.5 sm:px-5 sm:pt-4 space-y-2.5 w-full pointer-events-none">
        {/* Barrinhas de Progresso com contraste limpo */}
        <div className="flex items-center gap-1.5 w-full">
          {FACEBOOK_STORIES.map((_, idx) => (
            <div
              key={idx}
              className="flex-1 h-1 sm:h-1.5 bg-black/30 backdrop-blur-xs rounded-full overflow-hidden border border-white/20 shadow-xs"
            >
              {idx < currentIndex ? (
                <div className="h-full w-full bg-white rounded-full" />
              ) : idx === currentIndex ? (
                <div
                  key={currentIndex}
                  className="h-full bg-white rounded-full shadow-xs"
                  style={{
                    animation: `story-progress ${STORY_DURATION}ms linear forwards`,
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              ) : (
                <div className="h-full w-0 bg-white rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Selo Superior de Matrículas Abertas */}
        <div className="flex items-center justify-start">
          <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
            <span className="text-xs font-bold text-[#3774B0]">Matrículas Abertas</span>
          </div>
        </div>
      </div>

      {/* Legenda e Detalhes no Rodapé */}
      <div className="relative z-20 p-5 sm:p-7 text-left text-white space-y-1.5 pointer-events-none">
        <span className="inline-block px-3 py-1 rounded-full bg-[#9BBE1D] text-[#245380] text-[11px] font-heading font-black tracking-wide uppercase shadow-xs">
          {currentSlide.badge}
        </span>
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight drop-shadow-md">
          {currentSlide.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed drop-shadow-sm">
          {currentSlide.desc}
        </p>
      </div>
    </div>
  )
}

// Formata telefone brasileiro para WhatsApp: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    curso: "",
    mensagem: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handlePhoneChange = (e) => {
    const formatted = formatWhatsApp(e.target.value)
    setFormData({ ...formData, telefone: formatted })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nome.trim() || !formData.telefone.trim()) return

    const cursoNome = formData.curso ? formData.curso : "Geral / A definir"
    const text = `Olá, *Educa Digital Planets*! 👋%0A%0AGostaria de garantir minha *Bolsa Promocional* e agendar minha aula experimental:%0A%0A👤 *Nome:* ${encodeURIComponent(formData.nome)}%0A📱 *WhatsApp:* ${encodeURIComponent(formData.telefone)}%0A📚 *Curso de Interesse:* ${encodeURIComponent(cursoNome)}${formData.mensagem ? `%0A💬 *Observação:* ${encodeURIComponent(formData.mensagem)}` : ""}%0A%0APor favor, poderiam me passar mais informações sobre turmas e valores promocionais?`

    const waNumber = SCHOOL_INFO.whatsappNumber
    const waUrl = `https://wa.me/${waNumber}?text=${text}`

    window.open(waUrl, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  return (
    <section
      id="contato"
      className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      {/* Curved background vector accents */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 700"
      >
        <path
          d="M-50,450 C300,600 650,200 1000,450 C1250,600 1380,300 1500,400"
          stroke="#3774B0"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid 12 Colunas: 5 Cols Carrossel Stories + 7 Cols Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ========================================================================= */}
          {/* COLUNA 1 (5 Colunas): Carrossel de Stories com Imagens do Facebook */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <ContactStoriesCard />
          </div>

          {/* ========================================================================= */}
          {/* COLUNA 2 (7 Colunas): Formulário de Alta Visibilidade no Azul da Marca */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 bg-[#3774B0] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#245380] shadow-2xl flex flex-col justify-between text-left relative text-white">
            
            {/* Header do Formulário */}
            <div className="mb-8 space-y-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight tracking-tight">
                Garanta sua Bolsa Promocional
              </h2>
              <p className="text-sm sm:text-base text-blue-50 font-normal leading-relaxed">
                Preencha os campos abaixo e entraremos em contato via WhatsApp em minutos com turmas e valores especiais com desconto.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Nome Completo */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4 text-white" />
                    <span>Seu Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jessica Mercedes"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                  />
                </div>

                {/* WhatsApp / Telefone */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white" />
                    <span>WhatsApp com DDD *</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    maxLength={15}
                    placeholder="(11) 97739-7802"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                  />
                </div>

                {/* Curso de Interesse (Ocupa a linha completa) */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-white" />
                    <span>Curso de Interesse</span>
                  </label>
                  <select
                    value={formData.curso}
                    onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                    className="w-full bg-white text-slate-900 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400 font-normal">
                      👇 Clique e selecione seu curso desejado...
                    </option>
                    <option value="Informática Profissionalizante">💻 Informática Profissionalizante</option>
                    <option value="Inglês Prático & Conversação">🇺🇸 Inglês Prático & Conversação</option>
                    <option value="Comunicação, Vendas & Liderança">🗣️ Comunicação, Vendas & Liderança</option>
                    <option value="Reforço Escolar Individual">📚 Reforço Escolar Individual</option>
                    <option value="Informática & Lógica Kids">🧒 Informática & Lógica Kids</option>
                  </select>
                </div>

              </div>

              {/* Botão de Envio para WhatsApp de Alta Visibilidade */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white font-heading font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <img
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                  <span>SOLICITAR BOLSA & MATRÍCULA NO WHATSAPP</span>
                  <Send className="w-5 h-5 ml-1 hidden sm:inline-block" />
                </button>
              </div>

              {/* Selo de Garantia e Privacidade */}
              <div className="flex items-center justify-center gap-2 text-xs text-blue-100 text-center pt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Atendimento humanizado sem spam. Seus dados estão 100% seguros (LGPD).</span>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl text-xs font-bold text-white text-center">
                ✨ Redirecionando para o WhatsApp oficial com seus dados preenchidos...
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

