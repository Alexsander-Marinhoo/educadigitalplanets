export default function InfoTickerMarquee() {
  const items = [
    "Inglês Prático & Conversação",
    "Informática Profissionalizante",
    "Comunicação, Vendas & Oratória",
    "Reforço Escolar Individual",
    "Metodologia 100% Prática e Presencial",
    "Turmas Kids, Teens e Adultos",
    "Mais de 20 Anos de Tradição",
    "Acompanhamento Direto na Máquina",
    "Flexibilidade de Horários & Sábados",
    "Certificado Reconhecido no Mercado",
  ]

  // Duplicar para looping infinito fluido
  const marqueeList = [...items, ...items, ...items, ...items]

  return (
    <div className="relative bg-[#3774B0] border-y border-[#245380]/40 shadow-xs overflow-hidden py-3 sm:py-3.5 z-20 select-none">
      <div className="animate-marquee-left hover:[animation-play-state:paused] flex items-center gap-6 sm:gap-8 whitespace-nowrap">
        {marqueeList.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="font-heading font-extrabold text-xs sm:text-sm text-white tracking-widest uppercase">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9BBE1D] shrink-0 shadow-xs" />
          </div>
        ))}
      </div>
    </div>
  )
}

