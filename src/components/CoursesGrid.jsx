import { MessageCircle, CheckCircle2, BookOpen, Laptop, MessageSquareText, Lightbulb, ArrowRight } from "lucide-react"
import { COURSES, createWhatsAppLink } from "../data/content"

export default function CoursesGrid() {
  const getCourseIcon = (id) => {
    switch (id) {
      case "ingles":
        return <BookOpen className="w-6 h-6 text-white" />
      case "informatica":
        return <Laptop className="w-6 h-6 text-white" />
      case "comunicacao":
        return <MessageSquareText className="w-6 h-6 text-white" />
      case "reforco":
        return <Lightbulb className="w-6 h-6 text-white" />
      default:
        return <BookOpen className="w-6 h-6 text-white" />
    }
  }

  return (
    <section id="cursos" className="bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-royal bg-brand-royal/10 px-3.5 py-1 rounded-full border border-brand-royal/20 inline-block">
            Formação Presencial Completa
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-dark tracking-tight">
            Nossos Cursos Presenciais
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Metodologia prática, turmas reduzidas e laboratórios com computadores individuais para você dominar o conteúdo com segurança.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl border-2 border-slate-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-brand-royal/60 transition-colors duration-150 shadow-xs"
            >
              <div>
                {/* Card Header with Icon & Badges */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3.5 bg-brand-royal rounded-xl shadow-xs">
                      {getCourseIcon(course.id)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                        {course.duration}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-brand-dark">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-royal bg-blue-50 border border-blue-200 px-3 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
                    {course.badge}
                  </span>
                </div>

                <p className="text-sm font-semibold text-brand-blue mb-3">
                  {course.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Modules Checklist */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6 space-y-2.5">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Conteúdo Programático Principal:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.modules.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={createWhatsAppLink(course.whatsappMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover active:bg-cta-active text-white px-6 py-3.5 rounded-lg font-heading font-bold text-sm sm:text-base shadow-xs transition-colors duration-150 text-center cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>{course.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner below Grid */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-brand-navy">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-white">
              Ficou em dúvida sobre qual curso escolher?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Nossos orientadores pedagógicos realizam um teste de nível e orientação gratuita pelo WhatsApp.
            </p>
          </div>
          <a
            href={createWhatsAppLink("Olá! Gostaria de receber uma orientação gratuita para escolher o melhor curso.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-royal text-brand-dark hover:text-white px-6 py-3 rounded-lg font-heading font-bold text-sm transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Receber Orientação Gratuita</span>
          </a>
        </div>
      </div>
    </section>
  )
}

