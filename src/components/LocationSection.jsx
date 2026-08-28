import { useState, useRef, useEffect } from "react"
import { MapPin } from "lucide-react"
import { SCHOOL_INFO } from "../data/content"

// Slides para o carrossel estilo Instagram Stories
// (Placeholders prontos para o cliente substituir pelas fotos reais da instituição)
const STORY_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    badge: "Laboratório de Informática",
    title: "Laboratórios Modernos & Climatizados",
    desc: "1 computador individual por aluno com internet rápida e softwares atualizados.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    badge: "Salas de Aulas Práticas",
    title: "Acompanhamento Individual com Professores",
    desc: "Metodologia humanizada com suporte direto em sala para tirar dúvidas na hora.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    badge: "Educação Inclusiva",
    title: "Espaço Preparado para Alunos com TEA",
    desc: "Estrutura acolhedora, paciência e didática adaptada em Informática e Inglês.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    badge: "Tradição & Localização",
    title: "20 Anos Formando Alunos na Região",
    desc: "Fácil acesso na Av. Prof. Alípio de Barros, 963 com estacionamento e transporte.",
  },
]

const STORY_DURATION = 5000 // 5 segundos por story

function InstagramStoriesCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const dragStartX = useRef(null)
  const isDragging = useRef(false)

  // Timer automático para o próximo slide executado com setTimeout
  useEffect(() => {
    if (isPaused) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % STORY_SLIDES.length)
    }, STORY_DURATION)

    return () => clearTimeout(timer)
  }, [currentIndex, isPaused])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % STORY_SLIDES.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length)
  }

  // Interação de Arrasto (Swipe) via Touch
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
      goToNext() // Arrastou para a esquerda -> Próximo story
    } else if (deltaX > 35) {
      goToPrev() // Arrastou para a direita -> Story anterior
    } else {
      // Toque simples (Tap)
      const rect = e.currentTarget.getBoundingClientRect()
      const touchX = endX - rect.left
      if (touchX < rect.width * 0.35) {
        goToPrev()
      } else {
        goToNext()
      }
    }
  }

  // Interação de Arrasto (Drag) via Mouse
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
      goToNext() // Arrastou para a esquerda -> Próximo
    } else if (deltaX > 35) {
      goToPrev() // Arrastou para a direita -> Anterior
    } else {
      // Clique simples
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      if (clickX < rect.width * 0.35) {
        goToPrev()
      } else {
        goToNext()
      }
    }
  }

  const currentSlide = STORY_SLIDES[currentIndex]

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-950 group h-[340px] sm:h-[390px] flex flex-col justify-between cursor-grab active:cursor-grabbing select-none touch-pan-y"
    >
      {/* Imagem de Fundo do Story Atual com Transição Suave */}
      {STORY_SLIDES.map((slide, idx) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
            idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {/* Gradientes Superior e Inferior para destaque das barrinhas e textos */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-slate-950/70 pointer-events-none" />

      {/* ========================================================================= */}
      {/* BARRINHAS NO TOPO DO CARD (ESTILO INSTAGRAM STORIES) */}
      {/* ========================================================================= */}
      <div className="relative z-20 px-4 pt-3.5 sm:px-5 sm:pt-4 flex items-center gap-1.5 w-full pointer-events-none">
        {STORY_SLIDES.map((_, idx) => (
          <div
            key={idx}
            className="flex-1 h-1 sm:h-1.5 bg-white/30 backdrop-blur-xs rounded-full overflow-hidden"
          >
            {idx < currentIndex ? (
              <div className="h-full w-full bg-white rounded-full" />
            ) : idx === currentIndex ? (
              <div
                key={currentIndex}
                className="h-full bg-white rounded-full"
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

      {/* ========================================================================= */}
      {/* TEXTO E LEGENDA NA PARTE INFERIOR DO STORY */}
      {/* ========================================================================= */}
      <div className="relative z-20 p-5 sm:p-7 text-left text-white space-y-1.5 pointer-events-none">
        <span className="inline-block px-3 py-1 rounded-full bg-[#9BBE1D] text-[#245380] text-[11px] font-heading font-black tracking-wide uppercase shadow-xs">
          {currentSlide.badge}
        </span>
        <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white leading-tight">
          {currentSlide.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-200 font-normal line-clamp-2">
          {currentSlide.desc}
        </p>
      </div>
    </div>
  )
}

export default function LocationSection() {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Av. Prof. Alípio de Barros, 963 - São Paulo - SP, 08180-000"
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <section
      id="localizacao"
      className="relative bg-white py-14 sm:py-20 overflow-hidden border-b border-slate-200"
    >
      {/* Vetores decorativos curvos em harmonia com o restante do site */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <path
          d="M-50,300 C320,100 680,420 1020,200 C1250,50 1420,380 1520,280"
          stroke="#3774B0"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M150,680 C500,520 850,720 1200,540 C1380,450 1480,590 1550,520"
          stroke="#5CA8D7"
          strokeOpacity="0.2"
          strokeWidth="1.2"
          strokeDasharray="5 5"
          fill="none"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl text-left mb-10 sm:mb-12 space-y-2.5">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] text-slate-900 leading-[1.12] tracking-tight">
            Venha Conhecer Nosso <span className="text-[#3774B0]">Espaço de Ensino</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
            Uma estrutura acolhedora e moderna na Zona Leste de São Paulo, pensada para proporcionar o melhor ambiente de aprendizado prático para crianças, jovens e adultos.
          </p>
        </div>

        {/* Grid de 2 Cards: Carrossel Instagram Stories + Card Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ========================================================================= */}
          {/* CARD 1: Carrossel Interativo Estilo Instagram Stories */}
          {/* ========================================================================= */}
          <div className="location-fade-item">
            <InstagramStoriesCard />
          </div>

          {/* ========================================================================= */}
          {/* CARD 2: Card de Mapa do Google Maps */}
          {/* ========================================================================= */}
          <div className="location-fade-item rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md bg-white h-[340px] sm:h-[390px] flex flex-col">
            
            {/* Cabeçalho do Endereço */}
            <div className="px-6 py-4 sm:px-7 sm:py-5 border-b border-slate-200 bg-slate-50/80 text-left flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3774B0] shrink-0" />
                  <h3 className="font-heading font-black text-base sm:text-lg text-slate-900 leading-snug">
                    {SCHOOL_INFO.address}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-6">
                  {SCHOOL_INFO.cityStateZip}
                </p>
              </div>
            </div>

            {/* Iframe do Google Maps preenchendo todo o restante do card */}
            <div className="flex-1 w-full relative bg-slate-100 min-h-0">
              <iframe
                title="Mapa de Localização da Educa Digital Planets"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
