import { createWhatsAppLink } from "../data/content"

export default function WhatsAppFloatingButton() {
  const floatingMsg = "Olá! Gostaria de tirar dúvidas sobre as matrículas na Educa Digital Planets."

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip callout */}
      <a
        href={createWhatsAppLink(floatingMsg)}
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg border border-slate-200 hover:text-[#3774B0] transition-colors"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Atendimento Online • Tire suas Dúvidas</span>
      </a>

      {/* Floating Action Button with Pulsing Radar Animation & Glow */}
      <a
        href={createWhatsAppLink(floatingMsg)}
        target="_blank"
        rel="noreferrer"
        className="relative group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-slate-100 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        {/* Pulsing Radar Ring behind the button */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/50 animate-ping pointer-events-none" />

        <img
          src="/whatsapp-icon.svg"
          alt="WhatsApp Oficial"
          className="relative z-10 w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow-xs"
        />
      </a>
    </div>
  )
}

