export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="grid place-items-center rounded-xl border border-white/10 bg-white/5"
      style={{ width: size, height: size }}
      aria-label="ROBOLOGR logo"
    >
      <svg
        width={Math.floor(size * 0.62)}
        height={Math.floor(size * 0.62)}
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* abstract "R" + sensor node */}
        <path
          d="M7 18V6h7a4 4 0 0 1 0 8H7"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 14l4 4"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="18.5" cy="18.5" r="1.2" fill="rgba(6,182,212,0.95)" />
      </svg>
    </div>
  );
}