import { MessageCircle, ShieldCheck, Clock, BookCheck, UserCheck, Star, Quote } from "lucide-react"
import { DIFFERENTIALS, TESTIMONIALS, createWhatsAppLink } from "../data/content"

export default function Differentials() {
  const getDifferentialIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Clock className="w-6 h-6 text-brand-royal" />
      case 1:
        return <ShieldCheck className="w-6 h-6 text-brand-royal" />
      case 2:
        return <BookCheck className="w-6 h-6 text-brand-royal" />
      case 3:
        return <UserCheck className="w-6 h-6 text-brand-royal" />
      default:
        return <Star className="w-6 h-6 text-brand-royal" />
    }
  }

  return (
    <section id="diferenciais" className="bg-bg-warm py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-royal bg-white px-3.5 py-1 rounded-full border border-slate-300 inline-block shadow-2xs">
            Por que escolher a Educa Digital Planets?
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-dark tracking-tight">
            Diferenciais que Fazem a Nossa História de 20 Anos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Não somos um curso virtual gravado. Oferecemos uma estrutura física completa, acompanhamento passo a passo e professores dedicados.
          </p>
        </div>

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DIFFERENTIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border-2 border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-brand-light/15 rounded-xl border border-brand-light/30">
                    {getDifferentialIcon(idx)}
                  </div>
                  <span className="font-heading font-black text-2xl text-slate-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials / Social Proof Row */}
        <div className="mt-12 pt-12 border-t border-slate-300">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Opinião de Quem Já Estudou Conosco
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-dark">
              Depoimentos Reais de Alunos e Responsáveis
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-xs flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-navy text-white font-heading font-bold text-sm flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-dark leading-tight">{t.name}</h4>
                    <span className="text-[11px] text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 text-center">
            <a
              href={createWhatsAppLink("Olá! Gostaria de agendar uma visita para conhecer a estrutura presencial da Educa Digital Planets.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-cta hover:bg-cta-hover active:bg-cta-active text-white px-8 py-4 rounded-lg font-heading font-bold text-base shadow-sm transition-colors duration-150 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Agendar Visita e Conhecer a Escola no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

