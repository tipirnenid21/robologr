export default function HeroArt() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      {/* glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25]">
        <div className="absolute left-0 top-0 h-1 w-full bg-cyan-300/30 blur-sm animate-[scan_6s_linear_infinite]" />
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 520" fill="none">
        {/* telemetry traces */}
        <path
          d="M70 365 C160 310, 235 445, 320 385 S470 320, 560 375 S710 430, 830 315"
          stroke="rgba(6,182,212,0.65)"
          strokeWidth="2.6"
        />
        <path
          d="M70 410 C170 470, 260 335, 360 420 S520 470, 640 400 S760 330, 830 380"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.8"
        />

        {/* sensor nodes */}
        {[
          [320, 385],
          [560, 375],
          [830, 315],
          [360, 420],
          [640, 400],
        ].map(([x, y], idx) => (
          <g key={idx}>
            <circle cx={x} cy={y} r="11" fill="rgba(6,182,212,0.14)" />
            <circle cx={x} cy={y} r="4.6" fill="rgba(6,182,212,0.95)" />
          </g>
        ))}

        {/* abstract robot arm */}
        <g transform="translate(125 95)">
          <path d="M110 260 L210 210 L315 250" stroke="rgba(255,255,255,0.58)" strokeWidth="6" strokeLinecap="round" />
          <path d="M210 210 L250 120 L345 85" stroke="rgba(255,255,255,0.58)" strokeWidth="6" strokeLinecap="round" />
          <path d="M345 85 L430 125" stroke="rgba(255,255,255,0.58)" strokeWidth="6" strokeLinecap="round" />

          {[
            [110, 260],
            [210, 210],
            [250, 120],
            [345, 85],
            [430, 125],
          ].map(([x, y], idx) => (
            <g key={idx}>
              <circle cx={x} cy={y} r="18" fill="rgba(255,255,255,0.06)" />
              <circle cx={x} cy={y} r="8" fill="rgba(255,255,255,0.45)" />
              <circle cx={x} cy={y} r="4" fill="rgba(6,182,212,0.92)" />
            </g>
          ))}

          {/* end effector */}
          <path d="M430 125 L470 110" stroke="rgba(6,182,212,0.9)" strokeWidth="6" strokeLinecap="round" />
          <path d="M430 125 L468 142" stroke="rgba(6,182,212,0.9)" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* UI overlay card */}
        <g opacity="0.95">
          <rect x="560" y="80" width="290" height="180" rx="18" fill="rgba(0,0,0,0.35)" stroke="rgba(255,255,255,0.10)" />
          <text x="585" y="116" fill="rgba(255,255,255,0.85)" fontSize="14">Episode: matcharm_0217</text>
          <text x="585" y="142" fill="rgba(255,255,255,0.55)" fontSize="12">quality 86 • anomaly risk low</text>

          <text x="585" y="172" fill="rgba(255,255,255,0.45)" fontSize="11">markers</text>
          <rect x="585" y="182" width="240" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="585" y="205" width="240" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="585" y="228" width="160" height="12" rx="6" fill="rgba(6,182,212,0.28)" />
        </g>
      </svg>
    </div>
  );
}