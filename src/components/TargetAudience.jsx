import { MessageCircle, Check, Sparkles, GraduationCap, Briefcase, Smile } from "lucide-react"
import { TARGET_AUDIENCES, createWhatsAppLink } from "../data/content"

export default function TargetAudience() {
  const getAudienceIcon = (id) => {
    switch (id) {
      case "criancas":
        return <Smile className="w-6 h-6 text-brand-royal" />
      case "jovens":
        return <GraduationCap className="w-6 h-6 text-brand-royal" />
      case "adultos":
        return <Briefcase className="w-6 h-6 text-brand-royal" />
      default:
        return <Sparkles className="w-6 h-6 text-brand-royal" />
    }
  }

  return (
    <section id="publico" className="bg-bg-warm py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-royal bg-white px-3.5 py-1 rounded-full border border-slate-300 inline-block shadow-2xs">
            Ensino para Todas as Fases
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-dark tracking-tight">
            Metodologia Adaptada para Cada Momento da Sua Vida
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Seja para construir uma base escolar sólida, conquistar o primeiro emprego ou se qualificar para uma promoção, temos a turma ideal para você.
          </p>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
          {TARGET_AUDIENCES.map((audience) => (
            <div
              key={audience.id}
              className={`bg-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between border-2 transition-colors duration-150 ${
                audience.featured
                  ? "border-brand-royal shadow-md ring-2 ring-brand-royal/10"
                  : "border-slate-300 shadow-xs"
              }`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-brand-light/15 rounded-xl border border-brand-light/30">
                    {getAudienceIcon(audience.id)}
                  </div>
                  {audience.featured && (
                    <span className="text-xs font-bold bg-brand-royal text-white px-3 py-1 rounded-full">
                      Mais Procurado
                    </span>
                  )}
                </div>

                <span className="text-xs font-bold text-brand-royal uppercase tracking-wide block mb-1">
                  {audience.badge}
                </span>

                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">
                  {audience.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  {audience.highlight}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {audience.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-8">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                    O que é trabalhado em aula:
                  </span>
                  {audience.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA Button */}
              <div className="pt-2">
                <a
                  href={createWhatsAppLink(audience.whatsappMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-heading font-bold text-sm transition-colors duration-150 text-center cursor-pointer ${
                    audience.featured
                      ? "bg-cta hover:bg-cta-hover active:bg-cta-active text-white shadow-sm"
                      : "bg-brand-royal hover:bg-brand-navy active:bg-brand-dark text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{audience.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

