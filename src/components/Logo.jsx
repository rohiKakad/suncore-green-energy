import React from 'react'
import { Link } from 'react-router-dom'

/**
 * SVG recreation of the Suncore Green Energy logo.
 * Colors extracted directly from the uploaded brand image:
 *   Sun / rays  → #F5A623
 *   Solar panel → #2D5F8A  (face) / #4A7FA8 (highlight)
 *   Ground arc  → #6B8E23
 *   "Suncore"   → #1E5C8E
 *   "Green Energy" → #6B8E23
 */
export default function Logo({ size = 'md', linkTo = '/' }) {
  const sizes = {
    sm: { img: 32, textMain: 'text-lg', textSub: 'text-xs' },
    md: { img: 44, textMain: 'text-xl', textSub: 'text-sm' },
    lg: { img: 64, textMain: 'text-3xl', textSub: 'text-base' },
  }
  const s = sizes[size] || sizes.md

  const inner = (
    <div className="flex items-center gap-2 select-none">
      {/* SVG Icon */}
      <svg
        width={s.img}
        height={s.img}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Suncore Green Energy logo icon"
      >
        {/* ── Sun rays ── */}
        <g stroke="#F5A623" strokeWidth="4" strokeLinecap="round">
          <line x1="32" y1="8"  x2="32" y2="2"  />
          <line x1="18" y1="14" x2="14" y2="10" />
          <line x1="8"  y1="28" x2="2"  y2="26" />
          <line x1="6"  y1="44" x2="0"  y2="44" />
          <line x1="10" y1="58" x2="5"  y2="62" />
          <line x1="20" y1="68" x2="16" y2="74" />
          <line x1="46" y1="6"  x2="46" y2="0"  />
          <line x1="20" y1="10" x2="17" y2="5"  />
        </g>

        {/* ── Sun body (half circle) ── */}
        <path
          d="M8 52 A30 30 0 0 1 68 52"
          fill="#F5A623"
        />

        {/* ── Solar panel (tilted rectangle) ── */}
        <g>
          {/* Panel face */}
          <polygon
            points="30,18 82,10 90,62 38,70"
            fill="#2D5F8A"
          />
          {/* Panel highlight / frame */}
          <polygon
            points="30,18 82,10 90,62 38,70"
            fill="none"
            stroke="#4A7FA8"
            strokeWidth="2"
          />
          {/* Grid lines horizontal */}
          <line x1="33" y1="30" x2="84" y2="22" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          <line x1="36" y1="42" x2="87" y2="34" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          <line x1="39" y1="54" x2="89" y2="46" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          {/* Grid lines vertical */}
          <line x1="46" y1="17" x2="40" y2="69" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          <line x1="58" y1="15" x2="52" y2="67" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          <line x1="70" y1="13" x2="64" y2="65" stroke="#4A7FA8" strokeWidth="1" opacity="0.6"/>
          {/* Bright reflection */}
          <polygon
            points="32,20 50,17 48,32 30,35"
            fill="#7FB8D8"
            opacity="0.3"
          />
        </g>

        {/* ── Ground arc ── */}
        <path
          d="M5 76 Q50 58 95 76"
          stroke="#6B8E23"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Text */}
      <div className="leading-tight">
        <div className={`font-extrabold ${s.textMain}`} style={{ color: '#1E5C8E' }}>
          Suncore
        </div>
        <div className={`font-semibold ${s.textSub} -mt-0.5`} style={{ color: '#6B8E23' }}>
          Green Energy
        </div>
      </div>
    </div>
  )

  if (!linkTo) return inner
  return <Link to={linkTo}>{inner}</Link>
}
