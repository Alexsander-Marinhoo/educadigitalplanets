import { useState, useEffect } from "react"
import { createWhatsAppLink } from "../data/content"

// Educational Doodle Icons (matching the reference banner style)
function DoodleLightbulb({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M32 8a16 16 0 0 0-16 16c0 7 4 12 7 15v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5c3-3 7-8 7-15A16 16 0 0 0 32 8z" />
      <path d="M26 52h12M28 58h8" />
      <path d="M32 2v4M12 12l3 3M52 12l-3 3M4 32h4M56 32h4" strokeDasharray="2 3" />
    </svg>
  )
}

function DoodleGraduationCap({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M32 14L6 26l26 12 26-12L32 14z" />
      <path d="M14 30v14c0 6 8 10 18 10s18-4 18-10V30" />
      <path d="M52 26v20a4 4 0 1 1-4 0V26" />
      <circle cx="50" cy="48" r="2.5" />
    </svg>
  )
}

function DoodleBeaker({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M24 10h16M28 10v12l-14 26a4 4 0 0 0 3.5 6h29a4 4 0 0 0 3.5-6L36 22V10" />
      <path d="M20 42h24" strokeDasharray="3 3" />
      <circle cx="28" cy="46" r="1.5" fill="currentColor" />
      <circle cx="36" cy="44" r="1.5" fill="currentColor" />
    </svg>
  )
}

function DoodlePaperPlane({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 32L54 10 38 54 28 36 10 32z" />
      <path d="M28 36l26-26" />
    </svg>
  )
}

function DoodleDiploma({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="12" y="16" width="40" height="28" rx="3" />
      <path d="M12 24h40M20 32h16M20 38h10" />
      <circle cx="44" cy="35" r="5" />
      <path d="M42 40l-2 8 4-2 4 2-2-8" />
    </svg>
  )
}

export default function Hero() {
  const whatsappHeroMsg = "Olá! Gostaria de agendar uma aula experimental presencial e garantir minha condição especial na Educa Digital Planets."

  // Countdown timer for high conversion urgency
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 54, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 2, minutes: 54, seconds: 59 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="relative min-h-[660px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#f4f1ea] pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 border-b border-slate-200">
      
      {/* ========================================================================= */}
      {/* 1. Desktop Only: Seamless Full-Bleed Students Photo on the Right */}
      {/* ========================================================================= */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[50%] xl:w-[52%] h-full z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 32%), linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 6%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, rgba(0,0,0,1) 32%), linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 6%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "destination-in",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90"
          alt="Jovens estudantes da Educa Digital Planets"
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
          <div className="absolute top-28 lg:top-36 right-[35%] lg:right-[42%] text-[#3774B0]/50 animate-pulse hidden sm:block">
            <DoodleLightbulb className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          {/* Graduation Cap Doodle (Top Right) */}
          <div className="absolute top-24 lg:top-32 right-8 sm:right-24 text-[#0F2E59]/40">
            <DoodleGraduationCap className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          {/* Science Beaker (Middle Center) */}
          <div className="absolute top-[45%] right-[45%] lg:right-[48%] text-[#5CA8D7]/50 hidden md:block">
            <DoodleBeaker className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          {/* Paper Airplane (Left of Students) */}
          <div className="absolute top-48 left-[42%] lg:left-[46%] text-[#3774B0]/50 -rotate-12 hidden lg:block">
            <DoodlePaperPlane className="w-10 h-10 sm:w-14 sm:h-14" />
          </div>

          {/* Diploma Doodle (Right Edge) */}
          <div className="absolute bottom-36 right-4 sm:right-12 text-[#9BBE1D]/70 hidden sm:block">
            <DoodleDiploma className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>

          {/* Motivational Poster in the Background ("SEU FUTURO COMEÇA AGORA.") */}
          <div className="absolute top-44 lg:top-48 right-[24%] lg:right-[28%] bg-white/85 backdrop-blur-xs border border-slate-300/80 rounded-xl px-3 py-2 text-center shadow-xs hidden xl:block -rotate-2">
            <span className="text-[10px] font-extrabold text-[#3774B0] block tracking-wider leading-tight">
              SEU FUTURO.
            </span>
            <span className="text-[9px] font-bold text-[#5CA8D7] block tracking-wide">
              COMEÇA AGORA.
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
        <div className="max-w-2xl lg:max-w-2xl text-left space-y-6">
          
          {/* Main Punchy Title */}
          <div className="space-y-2">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#3774B0] leading-[1.12] tracking-tight">
              <span className="inline-block bg-[#3774B0] text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-2xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black mr-2 shadow-md">
                Educa Digital!
              </span>
              <br />
              <span className="text-[#1A4B88]">
                O seu futuro profissional começa agora.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-xl pt-1">
              Cursos profissionalizantes 100% presenciais de <strong>Inglês</strong>, <strong>Informática</strong>, <strong>Comunicação & Vendas</strong> e <strong>Reforço Escolar</strong> com 20 anos de tradição.
            </p>
          </div>

          {/* High-Conversion Urgency Box in Project Royal Blue */}
          <div className="bg-[#3774B0] text-white p-4 sm:p-5 rounded-2xl border-2 border-[#16A34A] shadow-xl max-w-md sm:max-w-lg">
            <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#9BBE1D] mb-2.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#9BBE1D] animate-ping"></span>
              <span className="text-white">Condição Especial de Matrícula termina em:</span>
            </div>

            {/* Countdown Digits */}
            <div className="flex items-center gap-3">
              <div className="bg-[#245380] border border-[#5CA8D7]/40 rounded-xl px-3 py-2 text-center min-w-[64px]">
                <div className="text-xl sm:text-2xl font-black font-heading text-white tracking-wider">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-[9px] uppercase font-bold text-slate-200">HORAS</div>
              </div>

              <span className="text-xl font-bold text-[#9BBE1D]">:</span>

              <div className="bg-[#245380] border border-[#5CA8D7]/40 rounded-xl px-3 py-2 text-center min-w-[64px]">
                <div className="text-xl sm:text-2xl font-black font-heading text-white tracking-wider">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-[9px] uppercase font-bold text-slate-200">MINUTOS</div>
              </div>

              <span className="text-xl font-bold text-[#9BBE1D]">:</span>

              <div className="bg-[#245380] border border-[#5CA8D7]/40 rounded-xl px-3 py-2 text-center min-w-[64px]">
                <div className="text-xl sm:text-2xl font-black font-heading text-[#9BBE1D] tracking-wider">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-[9px] uppercase font-bold text-slate-200">SEGUNDOS</div>
              </div>
            </div>
          </div>

          {/* Solid Vibrant Green CTA Button */}
          <div className="pt-1">
            <a
              href={createWhatsAppLink(whatsappHeroMsg)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl font-heading font-black text-base sm:text-lg shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              <img
                src="/whatsapp-icon.svg"
                alt="WhatsApp Oficial"
                className="w-6 h-6 object-contain"
              />
              <span>QUERO ME INSCREVER AGORA</span>
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Mobile & Tablet Only: 100% Full-Width Clean Image at Bottom */}
        {/* ========================================================================= */}
        <div className="relative block lg:hidden pt-8 -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12 -mb-16 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+5rem)] lg:w-[calc(100%+6rem)] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90"
            alt="Estudantes da Educa Digital Planets"
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
  )
}

