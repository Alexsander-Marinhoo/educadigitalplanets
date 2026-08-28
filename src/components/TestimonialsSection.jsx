import { ShieldCheck, Monitor, Award, Users, CheckCircle2 } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Fiz o curso de Informática e Excel Avançado e consegui uma vaga de assistente administrativo em menos de 2 meses. O suporte presencial dos professores fez toda a diferença!",
      name: "Rodrigo Almeida",
      role: "ALUNO DE INFORMÁTICA CORPORATIVA",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "As aulas presenciais de Inglês me destravaram totalmente para entrevistas. O método com foco em conversação desde o primeiro dia é excelente e muito prático.",
      name: "Clara Fonseca",
      role: "ALUNA DE INGLÊS PRÁTICO",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "Professores dedicados e pacientes. Meu filho de 9 anos melhorou muito o raciocínio na escola e adora as aulas de informática educativa e lógica aos sábados.",
      name: "Marcos Rocha",
      role: "PAI DO GABRIEL (9 ANOS)",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "A estrutura de 20 anos de tradição se reflete no compromisso da escola. Salas climatizadas, 1 computador por aluno e material atualizado com o mercado.",
      name: "Mariana Silveira",
      role: "MÃE DE ALUNA DE REFORÇO",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "O curso de Comunicação e Vendas transformou minha postura profissional. Aprendi a falar em público sem medo e aumentei meus resultados nas vendas.",
      name: "Carlos Eduardo Ramos",
      role: "CONSULTOR COMERCIAL",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "O acompanhamento pedagógico no Reforço Escolar recuperou as notas da minha filha em matemática e português. O ambiente é muito acolhedor e seguro.",
      name: "Ana Júlia Viana",
      role: "MÃE DA BEATRIZ (14 ANOS)",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "A flexibilidade de horários noturnos me permitiu estudar mesmo trabalhando o dia todo. O certificado presencial foi muito valorizado na minha empresa.",
      name: "Tiago André",
      role: "ANALISTA DE SUPORTE",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "Excelente acolhimento desde o primeiro atendimento no WhatsApp até as aulas práticas. Recomendo a Educa Digital Planets para qualquer pessoa!",
      name: "Larissa Souza",
      role: "ALUNA DE INFORMÁTICA & ROTINAS",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "Didática impecável e professores que realmente acompanham o seu desenvolvimento na máquina. Sem dúvidas a melhor escola da nossa região.",
      name: "Helena Ribeiro",
      role: "ALUNA DE INGLÊS CORPORATIVO",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80",
    },
    {
      text: "Ambiente nota 10! Meu filho desenvolveu disciplina, foco e autonomia nos estudos através do acompanhamento personalizado dos instrutores.",
      name: "Fernando Mattos",
      role: "PAI DO LUCAS (12 ANOS)",
      city: "SÃO PAULO • SP",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80",
    },
  ]

  const row1 = testimonials.slice(0, 5)
  const row2 = testimonials.slice(5, 10)

  // Duplicar para loop contínuo e sem interrupções
  const row1Repeated = [...row1, ...row1, ...row1, ...row1]
  const row2Repeated = [...row2, ...row2, ...row2, ...row2]

  return (
    <section id="depoimentos" className="py-20 lg:py-24 bg-[#f4f1ea] bg-pattern-dots border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#3774B0] leading-tight tracking-tight">
            O que dizem os nossos clientes
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base font-sans text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Histórias de famílias, alunos e profissionais que transformaram a aprendizagem e conquistaram novas oportunidades com a <strong>Educa Digital Planets</strong>.
          </p>
        </div>
      </div>

      {/* Dual Continuous Sliders Container with Gradient Fade Masks */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Gradient Fade Mask matching #f4f1ea */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 md:w-56 bg-gradient-to-r from-[#f4f1ea] via-[#f4f1ea]/90 to-transparent z-10" />

        {/* Right Gradient Fade Mask matching #f4f1ea */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 md:w-56 bg-gradient-to-l from-[#f4f1ea] via-[#f4f1ea]/90 to-transparent z-10" />

        {/* Track 1: Moving to LEFT */}
        <div className="animate-marquee-left flex gap-5 pb-4">
          {row1Repeated.map((t, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-[#3774B0] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs sm:text-[13px] font-sans text-slate-700 leading-relaxed font-normal">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 shadow-2xs"
                  loading="lazy"
                />
                <div className="flex flex-col min-w-0">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#3774B0] truncate">
                    {t.name}
                  </div>
                  {t.role && (
                    <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 truncate mt-0.5">
                      {t.role}{t.city ? ` • ${t.city}` : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: Moving to RIGHT */}
        <div className="animate-marquee-right flex gap-5 pt-1">
          {row2Repeated.map((t, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-[#3774B0] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs sm:text-[13px] font-sans text-slate-700 leading-relaxed font-normal">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200 shadow-2xs"
                  loading="lazy"
                />
                <div className="flex flex-col min-w-0">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[#3774B0] truncate">
                    {t.name}
                  </div>
                  {t.role && (
                    <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 truncate mt-0.5">
                      {t.role}{t.city ? ` • ${t.city}` : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Trust Badges Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl sm:rounded-full bg-white border border-slate-200 shadow-md p-4 sm:py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          {/* Trust item 1 */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#3774B0]/10 text-[#3774B0] border border-[#3774B0]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-heading font-bold text-[#3774B0]">
                20 Anos de Tradição
              </div>
              <div className="text-[11px] font-sans text-slate-500">
                Mais de 15.000 alunos formados
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-200" />

          {/* Trust item 2 */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#3774B0]/10 text-[#3774B0] border border-[#3774B0]/20 flex items-center justify-center shrink-0">
              <Monitor className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-heading font-bold text-[#3774B0]">
                Aulas 100% Presenciais
              </div>
              <div className="text-[11px] font-sans text-slate-500">
                1 computador por aluno
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-200" />

          {/* Trust item 3 */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-start sm:justify-center">
            <div className="w-10 h-10 rounded-2xl bg-[#3774B0]/10 text-[#3774B0] border border-[#3774B0]/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-heading font-bold text-[#3774B0]">
                Certificado Reconhecido
              </div>
              <div className="text-[11px] font-sans text-slate-500">
                Válido em todo o território nacional
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

