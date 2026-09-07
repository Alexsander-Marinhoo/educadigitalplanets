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

      {/* Floating Action Button - Solid WhatsApp Green (sem transparência) */}
      <a
        href={createWhatsAppLink(floatingMsg)}
        target="_blank"
        rel="noreferrer"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa4f] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        {/* Radar Ring expansivo atrás do botão (não afeta a opacidade do botão) */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        <svg
          className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 fill-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.777.978-.953 1.179-.176.2-.352.225-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.526-.075-.15-.678-1.631-.93-2.233-.244-.587-.493-.507-.678-.517l-.578-.01c-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.201 2.123 3.243 5.143 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.2-.577-.35zm-5.467 7.404h-.008a10.15 10.15 0 01-5.172-1.417l-.371-.22-3.844 1.008 1.026-3.748-.242-.385a10.16 10.16 0 01-1.557-5.399c0-5.617 4.571-10.188 10.193-10.188a10.13 10.13 0 017.202 2.987 10.13 10.13 0 012.985 7.207c0 5.62-4.572 10.188-10.191 10.188l-.021-.033zm8.687-18.88A12.22 12.22 0 0012.005 0C5.38 0 .004 5.376.004 12.001a12.2 12.2 0 001.874 6.505L0 24l5.637-1.839a12.22 12.22 0 006.368 1.76h.005c6.625 0 12.001-5.376 12.001-12.001 0-3.208-1.25-6.223-3.522-8.495z" />
        </svg>
      </a>
    </div>
  )
}

