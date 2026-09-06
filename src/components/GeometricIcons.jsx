export function IconBooks() {
  return (
    <div className="w-14 h-14 relative flex items-center justify-center group">
      {/* Background Accent Shape */}
      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#5CA8D7]/30 blur-[1px]" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-md bg-[#9BBE1D]/40 rotate-12" />
      
      {/* Main Icon Badge */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3774B0] to-[#245380] flex items-center justify-center shadow-md border border-white/20">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
          <circle cx="16" cy="15" r="1" fill="#9BBE1D" stroke="none" />
        </svg>
      </div>

      {/* Floating Accent Sphere */}
      <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#5CA8D7] border-2 border-white shadow-xs z-20" />
    </div>
  )
}

export function IconTriangles() {
  return (
    <div className="w-14 h-14 relative flex items-center justify-center group">
      {/* Background Accent Shape */}
      <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-[#9BBE1D]/30 blur-[1px]" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-md bg-[#5CA8D7]/40 rotate-45" />

      {/* Main Icon Badge */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3774B0] to-[#245380] flex items-center justify-center shadow-md border border-white/20">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>

      {/* Floating Lime Dot */}
      <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#9BBE1D] border-2 border-white shadow-xs z-20 flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
      </div>
    </div>
  )
}

export function IconTeachers() {
  return (
    <div className="w-14 h-14 relative flex items-center justify-center group">
      {/* Background Accent Shape */}
      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#5CA8D7]/30 blur-[1px]" />
      <div className="absolute -bottom-1.5 -left-1 w-5 h-5 rounded-md bg-[#9BBE1D]/30 rotate-6" />

      {/* Main Icon Badge */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3774B0] to-[#245380] flex items-center justify-center shadow-md border border-white/20">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h20" />
          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
          <path d="m7 21 5-5 5 5" />
          <circle cx="12" cy="9" r="2" fill="#5CA8D7" stroke="none" />
        </svg>
      </div>

      {/* Floating Accent Sphere */}
      <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#5CA8D7] border-2 border-white shadow-xs z-20" />
    </div>
  )
}

export function IconSchedule() {
  return (
    <div className="w-14 h-14 relative flex items-center justify-center group">
      {/* Background Accent Shape */}
      <div className="absolute -top-1.5 -left-1 w-6 h-6 rounded-full bg-[#5CA8D7]/30 blur-[1px]" />
      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-[#9BBE1D]/35 -rotate-12" />

      {/* Main Icon Badge */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3774B0] to-[#245380] flex items-center justify-center shadow-md border border-white/20">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <circle cx="12" cy="15" r="2" fill="#9BBE1D" stroke="none" />
        </svg>
      </div>

      {/* Floating Accent Sphere */}
      <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#5CA8D7] border-2 border-white shadow-xs z-20" />
    </div>
  )
}

export function ShapeComp1() {
  return (
    <div className="flex items-center gap-1.5 justify-center py-1">
      <div className="w-3.5 h-3.5 bg-[#5CA8D7] rotate-45 rounded-xs" />
      <div className="w-4 h-4 rounded-full bg-[#3774B0]" />
    </div>
  )
}

export function ShapeComp2() {
  return (
    <div className="flex items-center gap-1.5 justify-center py-1">
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#9BBE1D]" />
      <div className="w-4 h-4 rounded-full bg-[#3774B0]" />
      <div className="w-4 h-4 rounded-full bg-[#5CA8D7]" />
    </div>
  )
}

export function ShapeComp3() {
  return (
    <div className="flex items-center gap-1.5 justify-center py-1">
      <div className="w-4 h-4 rounded-full bg-[#3774B0]" />
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#5CA8D7]" />
    </div>
  )
}

export function ShapeComp4() {
  return (
    <div className="flex items-center gap-1.5 justify-center py-1">
      <div className="w-4 h-4 rounded-full bg-[#5CA8D7]" />
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#9BBE1D]" />
      <div className="w-4 h-4 rounded-full bg-[#3774B0]" />
    </div>
  )
}

export function ShapeComp5() {
  return (
    <div className="flex items-center gap-1.5 justify-center py-1">
      <div className="w-5 h-5 rounded-md bg-[#5CA8D7] flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-[#3774B0] rotate-45 rounded-xs" />
      </div>
    </div>
  )
}

export function IconCordaoQuebraCabeca({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cordão de Quebra-Cabeça (Símbolo de Conscientização do Autismo e TEA)"
    >
      <defs>
        <filter id="puzzle-ribbon-shadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.2" />
        </filter>
        <clipPath id="puzzle-ribbon-clip">
          <path
            d="M32 6 C20 6 12 15 12 26 C12 32 16 38 21 44 L11 56 L20 53 L26 56 L29 49 L32 52 L35 49 L38 56 L44 53 L53 56 L43 44 C48 38 52 32 52 26 C52 15 44 6 32 6 Z M32 16 C37 16 41 20 41 25 C41 29 37 34 32 40 C27 34 23 29 23 25 C23 20 27 16 32 16 Z"
            clipRule="evenodd"
          />
        </clipPath>
      </defs>

      <g filter="url(#puzzle-ribbon-shadow)">
        <g clipPath="url(#puzzle-ribbon-clip)">
          {/* Blocos de Cores Tradicionais do Quebra-Cabeça do Autismo */}
          {/* Topo Esquerdo: Amarelo */}
          <rect x="10" y="5" width="22" height="24" fill="#FBBF24" />
          {/* Topo Direito: Azul Claro / Ciano */}
          <rect x="32" y="5" width="24" height="24" fill="#38BDF8" />
          {/* Base Esquerda: Vermelho */}
          <rect x="10" y="29" width="22" height="30" fill="#EF4444" />
          {/* Base Direita: Azul Royal */}
          <rect x="32" y="29" width="24" height="30" fill="#2563EB" />

          {/* Encaixes das Peças de Quebra-Cabeça (Jigsaw Tabs) */}
          <circle cx="32" cy="14" r="3.2" fill="#FBBF24" />
          <circle cx="17" cy="29" r="3.2" fill="#EF4444" />
          <circle cx="47" cy="29" r="3.2" fill="#2563EB" />
          <circle cx="28" cy="38" r="3.2" fill="#FBBF24" />
          <circle cx="36" cy="38" r="3.2" fill="#38BDF8" />
          <circle cx="32" cy="48" r="3.2" fill="#EF4444" />

          {/* Linhas de divisão das peças de quebra-cabeça */}
          <path
            d="M32 6 V10.8 M32 17.2 V29 M10 29 H13.8 M20.2 29 H32 M32 29 H43.8 M50.2 29 H54 M32 40 V44.8 M32 51.2 V56"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M32 14 m -3.2 0 a 3.2 3.2 0 1 0 6.4 0 a 3.2 3.2 0 1 0 -6.4 0"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M17 29 m 0 -3.2 a 3.2 3.2 0 1 0 0 6.4 a 3.2 3.2 0 1 0 0 -6.4"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M47 29 m 0 -3.2 a 3.2 3.2 0 1 0 0 6.4 a 3.2 3.2 0 1 0 0 -6.4"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M32 48 m -3.2 0 a 3.2 3.2 0 1 0 6.4 0 a 3.2 3.2 0 1 0 -6.4 0"
            stroke="rgba(0,0,0,0.22)"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* Contorno vetorial suave do laço/cordão */}
        <path
          d="M32 6 C20 6 12 15 12 26 C12 32 16 38 21 44 L11 56 L20 53 L26 56 L29 49 L32 52 L35 49 L38 56 L44 53 L53 56 L43 44 C48 38 52 32 52 26 C52 15 44 6 32 6 Z"
          stroke="rgba(30, 41, 59, 0.28)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M32 16 C37 16 41 20 41 25 C41 29 37 34 32 40 C27 34 23 29 23 25 C23 20 27 16 32 16 Z"
          stroke="rgba(30, 41, 59, 0.28)"
          strokeWidth="1.2"
          fill="none"
        />
      </g>
    </svg>
  )
}


