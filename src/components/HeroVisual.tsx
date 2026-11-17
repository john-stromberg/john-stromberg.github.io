export function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 960 540"
      role="img"
      aria-label="Stylized yield and scenario curves across a research grid"
    >
      <defs>
        <linearGradient id="curveA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3ddc97" stopOpacity="0.15" />
          <stop offset="45%" stopColor="#3ddc97" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#8ef0c4" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="curveB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7eb8ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#7eb8ff" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="curveC" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f4efe4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f4efe4" stopOpacity="0.45" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="hero-grid" opacity="0.35">
        {Array.from({ length: 13 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 70}
            y1="36"
            x2={40 + i * 70}
            y2="504"
            stroke="#f4efe4"
            strokeOpacity="0.08"
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1="40"
            y1={36 + i * 67}
            x2="920"
            y2={36 + i * 67}
            stroke="#f4efe4"
            strokeOpacity="0.08"
          />
        ))}
      </g>

      <path
        className="curve curve-c"
        d="M48 410 C 160 398, 220 360, 300 340 S 460 330, 540 300 S 700 210, 800 190 S 880 170, 912 150"
        fill="none"
        stroke="url(#curveC)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        className="curve curve-b"
        d="M48 360 C 150 350, 210 300, 290 280 S 450 270, 530 250 S 690 200, 790 220 S 880 250, 912 240"
        fill="none"
        stroke="url(#curveB)"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path
        className="curve curve-a"
        d="M48 300 C 140 290, 200 250, 280 230 S 440 210, 520 200 S 680 180, 780 150 S 870 110, 912 96"
        fill="none"
        stroke="url(#curveA)"
        strokeWidth="2.75"
        strokeLinecap="round"
        filter="url(#softGlow)"
      />

      <circle className="endpoint" cx="912" cy="96" r="5.5" fill="#3ddc97" />
      <circle className="endpoint-ring" cx="912" cy="96" r="11" fill="none" stroke="#3ddc97" />
    </svg>
  )
}
