import { useState } from "react"
import { Sparkles, ShieldCheck, CheckCircle2, Send, Clock, User, Phone, BookOpen, Calendar } from "lucide-react"
import { SCHOOL_INFO } from "../data/content"

// Formata telefone brasileiro para WhatsApp: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
function formatWhatsApp(value) {
  const numbers = value.replace(/\D/g, "").slice(0, 11)
  if (numbers.length === 0) return ""
  if (numbers.length <= 2) return `(${numbers}`
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    curso: "",
    mensagem: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handlePhoneChange = (e) => {
    const formatted = formatWhatsApp(e.target.value)
    setFormData({ ...formData, telefone: formatted })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nome.trim() || !formData.telefone.trim()) return

    const cursoNome = formData.curso ? formData.curso : "Geral / A definir"
    const text = `Olá, *Educa Digital Planets*! 👋%0A%0AGostaria de garantir minha *Bolsa Promocional* e agendar minha aula experimental:%0A%0A👤 *Nome:* ${encodeURIComponent(formData.nome)}%0A📱 *WhatsApp:* ${encodeURIComponent(formData.telefone)}%0A📚 *Curso de Interesse:* ${encodeURIComponent(cursoNome)}${formData.mensagem ? `%0A💬 *Observação:* ${encodeURIComponent(formData.mensagem)}` : ""}%0A%0APor favor, poderiam me passar mais informações sobre turmas e valores promocionais?`

    const waNumber = SCHOOL_INFO.whatsappNumber
    const waUrl = `https://wa.me/${waNumber}?text=${text}`

    window.open(waUrl, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Curved background vector accents */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <path
          d="M-50,200 C300,50 600,350 950,150 C1250,-20 1400,300 1500,200"
          stroke="#3774B0"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M100,650 C400,480 800,680 1100,520 C1300,400 1450,600 1550,550"
          stroke="#5CA8D7"
          strokeOpacity="0.22"
          strokeWidth="1.2"
          strokeDasharray="5 5"
          fill="none"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid 3 Colunas: 1 Col Imagem + 2 Cols Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          
          {/* ========================================================================= */}
          {/* COLUNA 1 (1 Coluna): Imagem dos Alunos e Selos de Confiança */}
          {/* ========================================================================= */}
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 min-h-[420px] sm:min-h-[500px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 group">
            {/* Background Real Student Photo (High Quality & Cheerful) */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Alunos felizes da Educa Digital Planets"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay Gradient for readability of badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#245380]/95 via-[#245380]/45 to-black/20" />

            {/* Top Pill Badge */}
            <div className="relative z-10 self-start bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-md flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse"></span>
              <span className="text-xs font-bold text-[#3774B0]">Matrículas Abertas</span>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-10 text-white pt-24 space-y-1">
              <span className="text-xs font-semibold text-[#9BBE1D] uppercase tracking-wider block">
                Educa Digital Planets
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Venha fazer parte
              </h3>
              <p className="text-xs text-slate-200 font-normal">
                Mais de 20 anos formando alunos com aulas 100% práticas.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUNA 2 e 3 (2 Colunas): Formulário de Alta Visibilidade no Azul da Marca */}
          {/* ========================================================================= */}
          <div className="lg:col-span-2 bg-[#3774B0] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#245380] shadow-2xl flex flex-col justify-between text-left relative text-white">
            
            {/* Header do Formulário */}
            <div className="mb-8 space-y-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight tracking-tight">
                Garanta sua Bolsa Promocional
              </h2>
              <p className="text-sm sm:text-base text-blue-50 font-normal leading-relaxed">
                Preencha os campos abaixo e entraremos em contato via WhatsApp em minutos com turmas e valores especiais com desconto.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Nome Completo */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4 text-white" />
                    <span>Seu Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jessica Mercedes"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                  />
                </div>

                {/* WhatsApp / Telefone */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white" />
                    <span>WhatsApp com DDD *</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    required
                    maxLength={15}
                    placeholder="(11) 98340-6358"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white text-slate-900 placeholder:text-slate-400 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all"
                  />
                </div>

                {/* Curso de Interesse (Ocupa a linha completa) */}
                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-white" />
                    <span>Curso de Interesse</span>
                  </label>
                  <select
                    value={formData.curso}
                    onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                    className="w-full bg-white text-slate-900 font-semibold text-sm sm:text-base rounded-2xl px-5 py-4 shadow-md border-0 focus:ring-4 focus:ring-white/30 outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400 font-normal">
                      👇 Clique e selecione seu curso desejado...
                    </option>
                    <option value="Informática Profissionalizante">💻 Informática Profissionalizante</option>
                    <option value="Inglês Prático & Conversação">🇺🇸 Inglês Prático & Conversação</option>
                    <option value="Comunicação, Vendas & Liderança">🗣️ Comunicação, Vendas & Liderança</option>
                    <option value="Reforço Escolar Individual">📚 Reforço Escolar Individual</option>
                    <option value="Informática & Lógica Kids">🧒 Informática & Lógica Kids</option>
                  </select>
                </div>

              </div>

              {/* Botão de Envio para WhatsApp de Alta Visibilidade */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#16A34A] hover:bg-[#15803D] active:bg-[#14532D] text-white font-heading font-black text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <img
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain"
                  />
                  <span>SOLICITAR BOLSA & MATRÍCULA NO WHATSAPP</span>
                  <Send className="w-5 h-5 ml-1 hidden sm:inline-block" />
                </button>
              </div>

              {/* Selo de Garantia e Privacidade */}
              <div className="flex items-center justify-center gap-2 text-xs text-blue-100 text-center pt-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Atendimento humanizado sem spam. Seus dados estão 100% seguros (LGPD).</span>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-xl text-xs font-bold text-white text-center">
                ✨ Redirecionando para o WhatsApp oficial com seus dados preenchidos...
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

