import { MessageCircle, MapPin, Check, Monitor, Users2, ShieldCheck, Sparkles } from "lucide-react"
import { REAL_PHOTOS, SCHOOL_INFO, createWhatsAppLink } from "../data/content"

export default function StructureGallery() {
  const highlights = [
    "Laboratório 100% equipado com máquinas individuais",
    "Ambiente climatizado e ergonômico",
    "Material didático impresso e digital prático",
    "Localização de fácil acesso no centro da cidade",
  ]

  return (
    <section id="estrutura" className="bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-royal bg-brand-royal/10 px-3.5 py-1 rounded-full border border-brand-royal/20 inline-block">
            Estrutura Física e Acolhedora
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-dark tracking-tight">
            Venha Conhecer Nossa Escola Pessoalmente
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Preparamos um ambiente pensado para o seu rendimento máximo, com equipamentos modernos, recepção dedicada e salas confortáveis.
          </p>
        </div>

        {/* Real Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REAL_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-50 flex flex-col shadow-2xs hover:border-brand-royal/50 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/sala-aulas-praticas.jpg"
                  }}
                />
                <span className="absolute top-3 right-3 bg-brand-dark/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {photo.tag}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-brand-dark mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights and Direct Contact Block */}
        <div className="rounded-2xl bg-bg-warm p-8 sm:p-10 border-2 border-slate-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-brand-royal font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Visita Pedagógica sem Compromisso</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-dark">
              Quer conhecer a sala de aula antes de fechar a matrícula?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Você e sua família são nossos convidados de honra para tomar um café conosco, conversar com a coordenação pedagógica e testar nossa infraestrutura.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-brand-royal text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <a
              href={createWhatsAppLink("Olá! Gostaria de agendar uma visita para conhecer a escola presencialmente.")}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover active:bg-cta-active text-white px-6 py-4 rounded-lg font-heading font-bold text-base shadow-sm transition-colors text-center cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Agendar Minha Visita</span>
            </a>
            <span className="text-[11px] text-slate-500 mt-2 text-center">
              Atendimento rápido pelo WhatsApp comercial
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

