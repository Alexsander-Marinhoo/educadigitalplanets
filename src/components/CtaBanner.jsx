import { MessageCircle, CheckCircle2, Award, ArrowRight } from "lucide-react"
import { SCHOOL_INFO, createWhatsAppLink } from "../data/content"

export default function CtaBanner() {
  const ctaMsg = "Olá! Quero aproveitar as condições especiais de matrícula da Educa Digital Planets e garantir minha vaga presencial."

  return (
    <section className="bg-brand-navy text-white py-16 sm:py-20 border-b border-brand-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-brand-dark px-4 py-1.5 rounded-full border border-brand-royal/40 text-xs font-bold text-brand-lime uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Matrículas Abertas para Novas Turmas</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Não adie o seu futuro. Venha se qualificar com quem tem <span className="text-brand-lime">20 anos de experiência</span>.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Garanta sua vaga presencial com condições exclusivas e material didático atualizado. Converse diretamente com nossos consultores no WhatsApp.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsAppLink(ctaMsg)}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cta hover:bg-cta-hover active:bg-cta-active text-white px-9 py-5 rounded-lg font-heading font-bold text-lg sm:text-xl shadow-md transition-colors text-center cursor-pointer border-2 border-emerald-500"
          >
            <MessageCircle className="w-7 h-7 fill-white shrink-0" />
            <span>Garantir Minha Vaga pelo WhatsApp</span>
          </a>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" /> Turmas Reduzidas
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" /> 1 Computador por Aluno
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" /> Certificado Nacional
          </span>
        </div>
      </div>
    </section>
  )
}

