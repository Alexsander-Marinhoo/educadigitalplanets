import { ArrowLeft, ShieldCheck, Lock, CheckCircle } from "lucide-react"
import { SCHOOL_INFO, createWhatsAppLink } from "../data/content"

export default function PrivacyPolicy({ onBack }) {
  const handleBack = (e) => {
    if (e) e.preventDefault()
    if (onBack) {
      onBack()
    } else {
      window.location.hash = ""
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={handleBack}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/logo.svg"
              alt="Educa Digital Planets"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3774B0]/10 hover:bg-[#3774B0] text-[#3774B0] hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        
        {/* Header Hero Banner */}
        <div className="bg-[#245380] text-white p-6 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9BBE1D]/20 text-[#9BBE1D] text-xs font-bold uppercase tracking-wider border border-[#9BBE1D]/40">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacidade &amp; Transparência</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
              Esta política estabelece o nosso compromisso com a segurança e a transparência no tratamento dos dados pessoais coletados pela <strong>Educa Digital Planets</strong>, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> e as diretrizes do <strong>Google Ads</strong>.
            </p>
            <div className="text-xs text-[#9BBE1D] font-medium pt-2">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
            </div>
          </div>

          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-white">
            <Lock className="w-64 h-64" />
          </div>
        </div>

        {/* Policy Sections */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* 1. Identificação do Controlador */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">1</span>
              Identificação do Controlador
            </h2>
            <p>
              O presente website pertence e é operado por <strong>Educa Digital Planets</strong>, instituição de ensino presencial sediada na:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-1 font-medium text-slate-800">
              <p>📍 <strong>Endereço:</strong> {SCHOOL_INFO.fullAddress}</p>
              <p>📧 <strong>E-mail de Contato:</strong> contato@educadigitalplanets.com.br</p>
              <p>📱 <strong>WhatsApp Oficial:</strong> +55 {SCHOOL_INFO.phoneFormatted}</p>
            </div>
          </section>

          {/* 2. Coleta e Finalidade dos Dados */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">2</span>
              Quais dados coletamos e qual a finalidade?
            </h2>
            <p>
              Coletamos informações pessoais que você nos fornece de forma voluntária ao preencher nossos formulários de contato ou ao iniciar conversa via WhatsApp para:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Identificação e Contato:</strong> Nome completo, número de telefone / WhatsApp e endereço de e-mail.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Interesse Pedagógico:</strong> Curso de interesse (Inglês, Informática, Comunicação ou Reforço Escolar) e horário de preferência.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Finalidade Exclusiva:</strong> Esclarecer dúvidas sobre as turmas presenciais, agendar visitas à escola e viabilizar o processo de matrícula com condições especiais.</span>
              </li>
            </ul>
          </section>

          {/* 3. Cookies e Tecnologias de Rastreamento (Google Ads) */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">3</span>
              Uso de Cookies e Ferramentas do Google Ads
            </h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação e veicular anúncios pertinentes através do <strong>Google Ads</strong> e <strong>Google Analytics</strong>.
            </p>
            <p>
              Esses cookies nos auxiliam a compreender quais cursos geram maior interesse e a evitar que você receba anúncios repetitivos ou fora de sua região geográfica (São Paulo - SP).
            </p>
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
              💡 Você pode a qualquer momento configurar o seu navegador para recusar cookies ou desativar a personalização de anúncios visitando as <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-[#3774B0] underline font-semibold">Configurações de Anúncios do Google</a>.
            </p>
          </section>

          {/* 4. Compartilhamento e Segurança dos Dados */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">4</span>
              Compartilhamento e Proteção das Informações
            </h2>
            <p>
              A Educa Digital Planets <strong>não vende, não aluga e não repassa</strong> seus dados pessoais para terceiros com fins comerciais. Os dados são armazenados em ambiente seguro e acessados exclusivamente por nossa equipe pedagógica autorizada.
            </p>
          </section>

          {/* 5. Direitos do Titular (LGPD) */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">5</span>
              Seus Direitos conforme a LGPD
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (Art. 18), você possui o direito de, a qualquer momento:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados pessoais cadastrados;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a eliminação dos seus dados de nossas bases de contato;</li>
              <li>Revogar o consentimento previamente concedido.</li>
            </ul>
          </section>

          {/* 6. Canal de Atendimento do Encarregado (DPO) */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#3774B0] flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-full bg-[#3774B0] text-white text-xs font-bold flex items-center justify-center">6</span>
              Contato do Encarregado de Proteção de Dados
            </h2>
            <p>
              Para exercer seus direitos de titular ou tirar qualquer dúvida referente a esta Política de Privacidade, entre em contato através de:
            </p>
            <div className="p-4 bg-[#3774B0]/8 border border-[#3774B0]/20 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#245380]">Encarregado de Dados (DPO) - Educa Digital Planets</div>
                <div className="text-xs text-slate-600 mt-0.5">contato@educadigitalplanets.com.br</div>
              </div>
              <a
                href={createWhatsAppLink("Olá! Gostaria de falar sobre a Política de Privacidade e Proteção de Dados.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs shrink-0 shadow-sm transition-all"
              >
                <span>Falar com o Encarregado</span>
              </a>
            </div>
          </section>

        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3774B0] hover:bg-[#245380] text-white font-heading font-bold text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Principal</span>
          </button>
        </div>

      </main>

      {/* Mini Footer */}
      <footer className="bg-[#245380] text-white py-6 text-center text-xs text-slate-300 border-t border-[#5CA8D7]/30">
        <div className="max-w-4xl mx-auto px-4">
          © {new Date().getFullYear()} Educa Digital Planets. Todos os direitos reservados. {SCHOOL_INFO.address}, {SCHOOL_INFO.neighborhoodCity}.
        </div>
      </footer>
    </div>
  )
}
