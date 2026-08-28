import { Globe, Laptop, MessageSquare, BookOpen } from "lucide-react"
import { createWhatsAppLink } from "../data/content"

function IconOrbitEnglish() {
  return (
    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3774B0] to-[#245380] flex items-center justify-center shadow-md shadow-[#3774B0]/25">
      <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
    </div>
  )
}

function IconOrbitComputer() {
  return (
    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#5CA8D7] to-[#3774B0] flex items-center justify-center shadow-md shadow-[#5CA8D7]/25">
      <Laptop className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
    </div>
  )
}

function IconOrbitCommunication() {
  return (
    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#9BBE1D] to-[#16A34A] flex items-center justify-center shadow-md shadow-[#9BBE1D]/25">
      <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
    </div>
  )
}

function IconOrbitTutoring() {
  return (
    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3774B0] to-[#5CA8D7] flex items-center justify-center shadow-md shadow-[#3774B0]/25">
      <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.2]" />
    </div>
  )
}

export default function OrbitCoursesSection() {
  const coursesOrbit = [
    {
      name: "Inglês Prático",
      sub: "Conversação & Prática",
      iconComponent: <IconOrbitEnglish />,
      position: "top-0 sm:top-2 md:top-3 left-1 sm:left-4 md:left-8 lg:left-12",
      msg: "Olá! Gostaria de saber mais sobre o curso de Inglês Prático na Educa Digital Planets.",
    },
    {
      name: "Informática Profissional",
      sub: "Office, Gestão & PC",
      iconComponent: <IconOrbitComputer />,
      position: "top-1 sm:top-3 md:top-4 right-1 sm:right-4 md:right-8 lg:right-12",
      msg: "Olá! Gostaria de saber mais sobre o curso de Informática Profissional na Educa Digital Planets.",
    },
    {
      name: "Comunicação & Vendas",
      sub: "Oratória e Liderança",
      iconComponent: <IconOrbitCommunication />,
      position: "bottom-10 sm:bottom-12 md:bottom-14 left-1 sm:left-4 md:left-8 lg:left-12",
      msg: "Olá! Gostaria de saber mais sobre o curso de Comunicação & Vendas na Educa Digital Planets.",
    },
    {
      name: "Reforço Escolar",
      sub: "Fundamental e Médio",
      iconComponent: <IconOrbitTutoring />,
      position: "bottom-8 sm:bottom-10 md:bottom-12 right-1 sm:right-4 md:right-8 lg:right-12",
      msg: "Olá! Gostaria de saber mais sobre o Reforço Escolar na Educa Digital Planets.",
    },
  ]

  return (
    <section id="cursos" className="relative bg-[#f4f1ea] pt-10 sm:pt-12 lg:pt-14 pb-0 overflow-hidden border-b border-slate-200">

      {/* Ambient Gradient Spheres (Bolas em degradê com as cores da marca estilo o modelo de referência) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Esfera 1: Azul Claro suave no topo esquerdo */}
        <div className="absolute -top-16 -left-16 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-[#5CA8D7]/30 blur-[90px] sm:blur-[130px]" />

        {/* Esfera 2: Rosa / Coral suave no centro atrás da aluna */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full bg-rose-200/40 blur-[100px] sm:blur-[140px]" />

        {/* Esfera 3: Azul Royal suave na lateral direita */}
        <div className="absolute top-10 -right-20 w-[460px] sm:w-[620px] h-[460px] sm:h-[620px] rounded-full bg-[#3774B0]/25 blur-[90px] sm:blur-[130px]" />

        {/* Esfera 4: Verde Lima na base esquerda */}
        <div className="absolute bottom-10 -left-12 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-[#9BBE1D]/25 blur-[80px] sm:blur-[120px]" />

        {/* Esfera 5: Azul Claro brilhante na base direita */}
        <div className="absolute bottom-10 -right-12 w-[400px] sm:w-[520px] h-[400px] sm:h-[520px] rounded-full bg-[#5CA8D7]/30 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">

        {/* Section Header with High Impact */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center space-y-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-[1.12] tracking-tight">
            Você pode escolher um dos nossos <span className="text-[#3774B0]">cursos presenciais</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Clique no curso desejado para consultar turmas, horários flexíveis e valores promocionais com a nossa equipe.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (lg:hidden): Grid de Cards no Topo e Aluna no Bottom */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-6">
          {/* Grid 2x2 de Cards dos Cursos */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto mb-4 px-1">
            {coursesOrbit.map((item, idx) => (
              <a
                key={idx}
                href={createWhatsAppLink(item.msg)}
                target="_blank"
                rel="noreferrer"
                className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-slate-200/90 flex flex-col items-center text-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                {item.iconComponent}
                <div>
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#3774B0] block leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Imagem da Aluna Centralizada na Base (Maior e com destaque no Mobile) */}
          <div className="relative z-10 w-full flex justify-center -mb-14 sm:-mb-20 pointer-events-none mt-2">
            <img
              src="/cursos-img-png.png"
              alt="Aluna da Educa Digital Planets"
              className="w-[370px] sm:w-[480px] md:w-[520px] h-[400px] sm:h-[500px] md:h-[540px] object-contain object-bottom"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 85%, transparent 100%)",
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (hidden lg:flex): Orbit Stage com Cards Orbitando a Aluna */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex relative max-w-5xl lg:max-w-6xl mx-auto min-h-[560px] lg:min-h-[600px] items-end justify-center">

          {/* Curved Dashed Orbit Arc SVG circling behind the girl (z-10) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1100 540"
            preserveAspectRatio="none"
          >
            {/* Smooth looping dashed orbit path */}
            <path
              d="M 150,360 C 100,160 260,45 550,35 C 840,25 1000,140 950,330 C 900,460 710,480 550,470 C 360,460 220,440 150,360 Z"
              stroke="#3774B0"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>

          {/* Orbit Course Badges positioned around the child (z-30) */}
          {coursesOrbit.map((item, idx) => (
            <a
              key={idx}
              href={createWhatsAppLink(item.msg)}
              target="_blank"
              rel="noreferrer"
              className={`absolute ${item.position} bg-white/95 backdrop-blur-md rounded-3xl p-3.5 sm:p-4 lg:p-5 shadow-xl border border-slate-200/90 flex flex-col items-center gap-1.5 sm:gap-2 z-30 cursor-pointer min-w-[140px] sm:min-w-[170px] lg:min-w-[200px]`}
            >
              {/* Clean Vector Badge Icon */}
              {item.iconComponent}

              {/* Title & Subtitle */}
              <div className="text-center">
                <span className="font-heading font-bold text-xs sm:text-sm lg:text-base text-[#3774B0] block leading-tight">
                  {item.name}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium block mt-0.5">
                  {item.sub}
                </span>
              </div>
            </a>
          ))}

          {/* Central Happy Student Girl Child (z-20: In front of orbit line, head above the circle) */}
          <div className="relative z-20 w-[420px] sm:w-[580px] md:w-[680px] lg:w-[760px] xl:w-[820px] flex items-end justify-center pointer-events-none -mb-16 sm:-mb-24 md:-mb-28 lg:-mb-32">
            <img
              src="/cursos-img-png.png"
              alt="Aluna da Educa Digital Planets"
              className="w-full h-[540px] sm:h-[660px] md:h-[740px] lg:h-[800px] object-contain object-bottom"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 88%, transparent 100%)",
              }}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

