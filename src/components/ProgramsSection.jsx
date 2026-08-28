import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Code2, Languages, Monitor, TrendingUp, GraduationCap } from "lucide-react"
import { createWhatsAppLink } from "../data/content"

function IconBadgeKids() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#3774B0]/10 border border-[#3774B0]/25 flex items-center justify-center text-[#3774B0] shadow-2xs">
      <Code2 className="w-6 h-6 stroke-[2.2]" />
    </div>
  )
}

function IconBadgeTeens() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#5CA8D7]/15 border border-[#5CA8D7]/35 flex items-center justify-center text-[#245380] shadow-2xs">
      <Languages className="w-6 h-6 stroke-[2.2]" />
    </div>
  )
}

function IconBadgeInformatica() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#3774B0]/10 border border-[#3774B0]/25 flex items-center justify-center text-[#3774B0] shadow-2xs">
      <Monitor className="w-6 h-6 stroke-[2.2]" />
    </div>
  )
}

function IconBadgeVendas() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#9BBE1D]/20 border border-[#9BBE1D]/45 flex items-center justify-center text-[#15803D] shadow-2xs">
      <TrendingUp className="w-6 h-6 stroke-[2.2]" />
    </div>
  )
}

function IconBadgeReforco() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#3774B0]/10 border border-[#3774B0]/25 flex items-center justify-center text-[#3774B0] shadow-2xs">
      <GraduationCap className="w-6 h-6 stroke-[2.2]" />
    </div>
  )
}

function ProgramCard({ item }) {
  return (
    <a
      href={createWhatsAppLink(item.msg)}
      target="_blank"
      rel="noreferrer"
      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#3774B0] transition-all duration-200 flex flex-col justify-between h-full min-h-[300px] w-full group cursor-pointer"
    >
      <div>
        {/* Meaningful Badge Icon */}
        <div className="mb-4 flex items-center justify-start">
          {item.icon}
        </div>

        <span className="text-[11px] font-semibold text-slate-500 block mb-1">
          {item.tag}
        </span>

        <h4 className="font-heading font-bold text-base text-[#3774B0] mb-2 group-hover:text-[#5CA8D7] transition-colors leading-snug min-h-[44px] flex items-start">
          {item.title}
        </h4>

        <p className="text-xs text-slate-600 font-normal mb-1">
          {item.format}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-center mt-4">
        <div className="w-full py-3 px-2 sm:px-3 rounded-xl bg-[#16A34A] group-hover:bg-[#15803D] active:bg-[#14532D] text-white font-heading font-extrabold text-[11px] sm:text-xs md:text-xs lg:text-[12px] flex items-center justify-center gap-1.5 shadow-md group-hover:shadow-xl transition-all duration-200 tracking-wider uppercase whitespace-nowrap">
          <img
            src="/whatsapp-icon.svg"
            alt="WhatsApp"
            className="w-4 h-4 object-contain shrink-0"
          />
          <span>QUERO ME INSCREVER AGORA</span>
        </div>
      </div>
    </a>
  )
}

export default function ProgramsSection() {
  const kidsPrograms = [
    {
      icon: <IconBadgeKids />,
      tag: "• 7 aos 14 anos",
      title: "Informática & Lógica Kids",
      format: "Formato: 100% Presencial",
      msg: "Olá! Gostaria de consultar turmas e valores para o programa de Informática & Lógica Kids.",
    },
    {
      icon: <IconBadgeTeens />,
      tag: "• 12 aos 17 anos",
      title: "Inglês Teens & Conversação",
      format: "Formato: 100% Presencial",
      msg: "Olá! Gostaria de consultar turmas e valores para o programa de Inglês Teens & Conversação.",
    },
  ]

  const adultPrograms = [
    {
      icon: <IconBadgeInformatica />,
      tag: "• Jovens e Adultos",
      title: "Informática Profissionalizante",
      format: "Formato: Presencial em Laboratório",
      msg: "Olá! Gostaria de consultar horários e valores do curso de Informática Profissionalizante.",
    },
    {
      icon: <IconBadgeVendas />,
      tag: "• Carreira & Negócios",
      title: "Comunicação, Vendas & Liderança",
      format: "Formato: Presencial Prático",
      msg: "Olá! Gostaria de consultar horários e valores do curso de Comunicação e Vendas.",
    },
    {
      icon: <IconBadgeReforco />,
      tag: "• Apoio Pedagógico",
      title: "Reforço Escolar Individual",
      format: "Formato: Acompanhamento Semanal",
      msg: "Olá! Gostaria de consultar horários e valores do Reforço Escolar Individual.",
    },
  ]

  return (
    <section
      id="metodologia"
      className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-200"
    >
      {/* Curved Dashed Line Decorative Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <path
          d="M-50,600 C350,750 700,450 950,550 C1200,650 1350,450 1500,500"
          stroke="#3774B0"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M600,100 C900,50 1150,250 1000,400 C850,550 550,400 450,250"
          stroke="#5CA8D7"
          strokeOpacity="0.25"
          strokeWidth="1.2"
          strokeDasharray="5 5"
          fill="none"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-left">
        {/* Main Section Header */}
        <div className="mb-12 space-y-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-[1.12] tracking-tight">
            Nossos <span className="text-[#3774B0]">Programas de Ensino</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            Cursos completos com acompanhamento individualizado na máquina, projetados para cada faixa etária e objetivo profissional.
          </p>
        </div>

        {/* Category 1: Programas para Crianças */}
        <div className="mb-14">
          <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 flex items-center gap-2.5 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#3774B0] shrink-0"></span>
            <span>Programas para Crianças e Jovens</span>
          </h3>

          {/* Desktop Grid (lg:grid) */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsPrograms.map((item, idx) => (
              <ProgramCard key={idx} item={item} />
            ))}
          </div>

          {/* Mobile & Tablet Swiper (1.25 no celular / 2.4 no tablet) */}
          <div className="block lg:hidden -mr-4 sm:-mr-8">
            <Swiper
              spaceBetween={14}
              slidesPerView={1.25}
              breakpoints={{
                640: {
                  slidesPerView: 2.1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.4,
                  spaceBetween: 20,
                },
              }}
              grabCursor={true}
              className="w-full"
            >
              {kidsPrograms.map((item, idx) => (
                <SwiperSlide key={idx} className="!h-auto pb-4">
                  <ProgramCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Category 2: Programas para Jovens e Adultos */}
        <div>
          <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 flex items-center gap-2.5 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#16A34A] shrink-0"></span>
            <span>Grupos por Faixa Etária e Capacitação Profissional</span>
          </h3>

          {/* Desktop Grid (lg:grid) */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adultPrograms.map((item, idx) => (
              <ProgramCard key={idx} item={item} />
            ))}
          </div>

          {/* Mobile & Tablet Swiper (1.25 no celular / 2.4 no tablet) */}
          <div className="block lg:hidden -mr-4 sm:-mr-8">
            <Swiper
              spaceBetween={14}
              slidesPerView={1.25}
              breakpoints={{
                640: {
                  slidesPerView: 2.1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.4,
                  spaceBetween: 20,
                },
              }}
              grabCursor={true}
              className="w-full"
            >
              {adultPrograms.map((item, idx) => (
                <SwiperSlide key={idx} className="!h-auto pb-4">
                  <ProgramCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  )
}
