import { useState } from "react"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { FAQ_ITEMS, createWhatsAppLink } from "../data/content"

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="bg-bg-warm py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-royal bg-white px-3.5 py-1 rounded-full border border-slate-300 inline-block shadow-2xs">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-dark tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Separamos as dúvidas mais comuns de novos alunos e responsáveis para você ficar 100% seguro.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-brand-dark hover:text-brand-royal focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-royal shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-royal" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Extra Question CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white border-2 border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-brand-dark">Ainda tem alguma pergunta específica?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Nossa equipe atende rapidamente pelo WhatsApp.</p>
          </div>
          <a
            href={createWhatsAppLink("Olá! Tenho uma dúvida sobre os cursos da Educa Digital Planets.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-5 py-2.5 rounded-lg font-heading font-bold text-xs sm:text-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

