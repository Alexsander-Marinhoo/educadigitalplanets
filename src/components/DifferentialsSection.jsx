import { IconBooks, IconTeachers, IconTriangles, IconSchedule } from "./GeometricIcons"

export default function DifferentialsSection() {
  const cards = [
    {
      icon: <IconBooks />,
      title: "Programas em 4 Áreas de Ensino",
      description: "Inglês prático, Informática corporativa, Comunicação & Vendas e Reforço Escolar.",
    },
    {
      icon: <IconTriangles />,
      title: "Aulas para Todas as Idades",
      description: "Turmas estruturadas por faixa etária: Kids (a partir de 7 anos), Jovens e Adultos.",
    },
    {
      icon: <IconTeachers />,
      title: "Nossos Professores",
      description: "Equipe pedagógica experiente pronta para tirar dúvidas diretamente na sua máquina.",
    },
    {
      icon: <IconSchedule />,
      title: "Condições Flexíveis de Estudo",
      description: "Flexibilidade total com horários pela manhã, tarde, noite e turmas de sábado.",
    },
  ]

  return (
    <section
      id="diferenciais"
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200"
    >
      {/* Curved Dashed Line Decorative Vector Background looping like the reference */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        {/* Curving dashed line traversing from bottom left to top right and looping */}
        <path
          d="M-50,550 C300,530 650,480 900,320 C1150,150 1380,80 1400,240 C1415,360 1280,500 1100,480 C950,460 880,350 980,240"
          stroke="#3774B0"
          strokeOpacity="0.28"
          strokeWidth="1.6"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="max-w-3xl text-left mb-12 sm:mb-16 space-y-3">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-[1.12] tracking-tight">
            A rede de ensino <span className="text-[#3774B0]">Educa Digital Planets</span> é uma das melhores e mais tradicionais da região
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
            A escola atua há 20 anos com tradição. Em duas décadas já formamos e preparamos mais de 15.000 alunos para a vida e o mercado de trabalho com metodologia 100% prática.
          </p>
        </div>

        {/* 4 Cards Grid - Alinhados Retos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#3774B0] transition-all duration-300 flex flex-col text-left group min-h-[220px] justify-between"
            >
              <div>
                {/* Geometric Icon */}
                <div className="mb-6 transform group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-[#3774B0] mb-2 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
