import React from 'react'
import { Link } from 'react-router-dom'

/**
 * SVG recreation of the Suncore Green Energy logo.
 * Brand colors (from the logo artwork):
 *   Sun / rays      → #F7B13A → #EE7D22 (gradient)
 *   Solar tiles     → #29A6E4 (top) → #1A4E9C (bottom)
 *   "SUNCORE"       → #1E5C8E
 *   "GREEN ENERGY"  → #F5A623
 */

const TILE_TOP = [41, 166, 228]    // #29A6E4
const TILE_BOTTOM = [26, 78, 156]  // #1A4E9C

const mix = (a, b, t) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`

// 21 rays fanning from just below the left horizon to just below the right, alternating long/short
const SUN = { cx: 730, cy: 500 }
const rays = Array.from({ length: 21 }, (_, i) => {
  const angle = ((170 + i * 10) * Math.PI) / 180
  const half = (2.6 * Math.PI) / 180
  const inner = 152
  const outer = i % 2 === 0 ? 288 : 215
  const pt = (r, a) => `${(SUN.cx + r * Math.cos(a)).toFixed(1)},${(SUN.cy + r * Math.sin(a)).toFixed(1)}`
  return `${pt(inner, angle - half)} ${pt(outer, angle)} ${pt(inner, angle + half)}`
})

// 4×4 grid of rounded tiles, drawn flat then projected into the isometric diamond
const TILE = 108
const GAP = 18
const tiles = []
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 4; col++) {
    tiles.push({ x: col * (TILE + GAP), y: row * (TILE + GAP), fill: mix(TILE_TOP, TILE_BOTTOM, (row + col) / 6) })
  }
}

/** Icon only (sun + solar tiles). */
export function LogoMark({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size * (630 / 720)}
      viewBox="370 200 720 630"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Suncore Green Energy logo"
    >
      <defs>
        <linearGradient id="suncore-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7B13A" />
          <stop offset="1" stopColor="#EE7D22" />
        </linearGradient>
      </defs>

      {/* ── Sun rays ── */}
      <g fill="url(#suncore-sun)">
        {rays.map(points => <polygon key={points} points={points} />)}
      </g>

      {/* ── Sun body: half disc, cut along the top edges of the panel ── */}
      <path d="M592.2 507.5 A138 138 0 1 1 867.8 507.5 L730 446 Z" fill="url(#suncore-sun)" />

      {/* ── Solar tiles ── */}
      <g transform="translate(730 458) scale(1 0.513) rotate(45)">
        {tiles.map(t => (
          <rect key={`${t.x}-${t.y}`} x={t.x} y={t.y} width={TILE} height={TILE} rx="20" fill={t.fill} />
        ))}
      </g>
    </svg>
  )
}

export default function Logo({ size = 'md', linkTo = '/', variant = 'dark' }) {
  const sizes = {
    sm: { img: 36, textMain: 'text-lg', textSub: 'text-[8px]' },
    md: { img: 50, textMain: 'text-xl', textSub: 'text-[9px]' },
    lg: { img: 72, textMain: 'text-3xl', textSub: 'text-xs' },
  }
  const s = sizes[size] || sizes.md

  const inner = (
    <div className="flex items-center gap-2 select-none">
      <LogoMark size={s.img} />

      {/* Text */}
      <div className="leading-none">
        <div
          className={`font-extrabold tracking-wide ${s.textMain}`}
          style={{ color: variant === 'light' ? '#FFFFFF' : '#1E5C8E' }}
        >
          SUNCORE
        </div>
        <div className={`font-semibold tracking-[0.3em] mt-1 ${s.textSub}`} style={{ color: '#F5A623' }}>
          GREEN ENERGY
        </div>
      </div>
    </div>
  )

  if (!linkTo) return inner
  return <Link to={linkTo} aria-label="Suncore Green Energy – Home">{inner}</Link>
}
