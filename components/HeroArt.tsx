export default function HeroArt() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      {/* glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/8 blur-3xl" />

      {/* svg art */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* subtle grid */}
        <g opacity="0.25">
          {Array.from({ length: 19 }).map((_, i) => (
            <path
              key={`v-${i}`}
              d={`M${40 + i * 45} 20 V500`}
              stroke="white"
              strokeOpacity="0.08"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M20 ${40 + i * 40} H880`}
              stroke="white"
              strokeOpacity="0.08"
            />
          ))}
        </g>

        {/* telemetry traces */}
        <path
          d="M70 380 C140 320, 220 440, 300 390 S460 340, 540 380 S660 420, 820 320"
          stroke="rgba(6,182,212,0.55)"
          strokeWidth="2.5"
        />
        <path
          d="M70 410 C160 470, 260 340, 360 420 S520 470, 640 400 S760 330, 830 380"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="1.8"
        />

        {/* glowing sensor nodes */}
        {[
          [300, 390],
          [540, 380],
          [820, 320],
          [360, 420],
          [640, 400],
        ].map(([x, y], idx) => (
          <g key={idx}>
            <circle cx={x} cy={y} r="10" fill="rgba(6,182,212,0.12)" />
            <circle cx={x} cy={y} r="4.5" fill="rgba(6,182,212,0.95)" />
          </g>
        ))}

        {/* abstract robot arm (stylized) */}
        <g transform="translate(120 90)">
          <path
            d="M110 260 L210 210 L310 250"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M210 210 L245 120 L340 85"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M340 85 L420 125"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* joints */}
          {[
            [110, 260],
            [210, 210],
            [245, 120],
            [340, 85],
            [420, 125],
          ].map(([x, y], idx) => (
            <g key={idx}>
              <circle cx={x} cy={y} r="18" fill="rgba(255,255,255,0.06)" />
              <circle cx={x} cy={y} r="8" fill="rgba(255,255,255,0.45)" />
              <circle cx={x} cy={y} r="4" fill="rgba(6,182,212,0.9)" />
            </g>
          ))}

          {/* gripper-ish end effector */}
          <path
            d="M420 125 L460 110"
            stroke="rgba(6,182,212,0.85)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M420 125 L458 142"
            stroke="rgba(6,182,212,0.85)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        {/* UI-ish overlay box */}
        <g opacity="0.95">
          <rect
            x="560"
            y="80"
            width="280"
            height="170"
            rx="18"
            fill="rgba(0,0,0,0.35)"
            stroke="rgba(255,255,255,0.10)"
          />
          <text x="585" y="115" fill="rgba(255,255,255,0.85)" fontSize="14">
            Episode: matcharm_0217
          </text>
          <text x="585" y="140" fill="rgba(255,255,255,0.55)" fontSize="12">
            quality 86 • anomaly risk low
          </text>
          <rect x="585" y="160" width="230" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="585" y="185" width="230" height="12" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="585" y="210" width="170" height="12" rx="6" fill="rgba(6,182,212,0.25)" />
        </g>
      </svg>
    </div>
  );
}