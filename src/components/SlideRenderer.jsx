// ─── SlideRenderer — Design System Pagamee v2 ────────────────────────────────
// CSS 100% inline per html2canvas. Nessuna classe Tailwind dentro le slide.
// Canvas base: 540 × 540 px — export 2× = 1080 × 1080 px

import React from 'react'

export const SLIDE_SIZE = 540

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  cyan:       '#00B4D8',
  cyanLight:  '#00D8FF',
  cyanDark:   '#0090BE',
  navy:       '#0D1B35',
  navyMid:    '#152844',
  blue:       '#0077B6',
  amber:      '#FFC107',
  amberLight: '#FFD454',
  white:      '#FFFFFF',
  offWhite:   '#F8FBFF',
  bodyText:   '#2C3E6B',
  mutedText:  '#7B8DB0',
  border:     '#E8F3FB',
  bg:         '#F0F9FF',
}

const font = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

// ── Font size adattiva ────────────────────────────────────────────────────────
function titleSize(text, base = 36, min = 24) {
  if (!text) return base
  const len = text.replace(/\n/g, '').length
  if (len > 70) return min
  if (len > 55) return Math.round(base * 0.80)
  if (len > 40) return Math.round(base * 0.90)
  return base
}

// ── Barra gradiente top ───────────────────────────────────────────────────────
function TopBar({ height = 6 }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      height,
      background: `linear-gradient(90deg, ${C.cyan} 0%, ${C.cyanLight} 60%, ${C.cyan} 100%)`,
    }} />
  )
}

// ── Logo ──────────────────────────────────────────────────────────────────────
function Logo({ invert = false, size = 48, bottom = 14, right = 18 }) {
  return (
    <img
      src="/logo.png"
      alt="Pagamee"
      crossOrigin="anonymous"
      style={{
        position:  'absolute',
        bottom, right,
        width: size, height: size,
        objectFit: 'contain',
        filter: invert ? 'brightness(0) invert(1)' : 'none',
        opacity: 0.9,
      }}
    />
  )
}

// ── Progress dots ─────────────────────────────────────────────────────────────
function Dots({ total, current, light = false }) {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{
          width:        i === current ? 20 : 6,
          height:       6,
          borderRadius: 3,
          background:   i === current
            ? (light ? C.amber : C.cyan)
            : (light ? 'rgba(255,255,255,0.2)' : C.border),
          flexShrink: 0,
          transition: 'width 0.3s',
        }} />
      ))}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// COVER
// ══════════════════════════════════════════════════════════════════════════════
function CoverSlide({ slide, index, total, slideRef }) {
  const fs = titleSize(slide.title, 36, 24)

  return (
    <div ref={slideRef} style={{
      width: SLIDE_SIZE, height: SLIDE_SIZE,
      background: `linear-gradient(160deg, ${C.navy} 0%, ${C.navyMid} 100%)`,
      position: 'relative', overflow: 'hidden', fontFamily: font, flexShrink: 0,
    }}>

      {/* Glow destro — elemento decorativo principale */}
      <div style={{
        position: 'absolute', top: -80, right: -100,
        width: 380, height: 380, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(0,180,216,0.22) 0%, transparent 68%)`,
        pointerEvents: 'none',
      }} />

      {/* Glow sinistro basso */}
      <div style={{
        position: 'absolute', bottom: -60, left: -80,
        width: 240, height: 240, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(0,180,216,0.10) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Accent line top */}
      <TopBar height={5} />

      {/* Header row */}
      <div style={{
        position: 'absolute', top: 18, left: 28, right: 28,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{
          fontSize: 10, fontWeight: 800, color: C.cyan,
          letterSpacing: 3, textTransform: 'uppercase',
        }}>
          PAGAMEE.IT
        </div>
        <div style={{
          fontSize: 10, fontWeight: 600,
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: 1,
        }}>
          {index + 1} / {total}
        </div>
      </div>

      {/* Contenuto principale — centrato verticalmente, allineato a sinistra */}
      <div style={{
        position: 'absolute', top: 44, left: 0, right: 0, bottom: 44,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 38px',
      }}>

        {/* Emoji */}
        {slide.emoji && (
          <div style={{ fontSize: 54, lineHeight: 1, marginBottom: 18 }}>
            {slide.emoji}
          </div>
        )}

        {/* Etichetta categoria */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          gap: 6, marginBottom: 16,
        }}>
          <div style={{
            width: 22, height: 3, borderRadius: 2,
            background: C.cyan,
          }} />
          <span style={{
            fontSize: 10, fontWeight: 800, color: C.cyan,
            letterSpacing: 2.5, textTransform: 'uppercase',
          }}>
            DIRITTO DEL LAVORO
          </span>
        </div>

        {/* Titolo */}
        <h1 style={{
          fontSize: fs,
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.18,
          margin: '0 0 16px',
          letterSpacing: -0.6,
          whiteSpace: 'pre-line',
        }}>
          {slide.title}
        </h1>

        {/* Sottotitolo */}
        {slide.subtitle && (
          <p style={{
            fontSize: 16,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.52)',
            lineHeight: 1.55,
            margin: 0,
          }}>
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Accent line bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 4,
        background: `linear-gradient(90deg, ${C.cyan}, ${C.blue} 50%, ${C.cyan})`,
      }} />

      <Logo invert size={46} bottom={12} right={18} />
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTENT
// ══════════════════════════════════════════════════════════════════════════════
function ContentSlide({ slide, index, total, slideRef }) {
  const hasHL  = !!(slide.highlight_number?.trim())
  const fs     = titleSize(slide.title, 28, 20)
  const bodyFs = hasHL ? 14 : 17

  return (
    <div ref={slideRef} style={{
      width: SLIDE_SIZE, height: SLIDE_SIZE,
      background: C.white,
      position: 'relative', overflow: 'hidden', fontFamily: font, flexShrink: 0,
    }}>

      <TopBar height={7} />

      {/* Numero slide — top right badge */}
      <div style={{
        position: 'absolute', top: 18, right: 24,
        fontSize: 9, fontWeight: 800,
        color: C.cyan, letterSpacing: 2,
      }}>
        {String(index + 1).padStart(2, '0')} /{String(total).padStart(2, '0')}
      </div>

      {/* Area contenuto — centrata verticalmente, allineata a sinistra */}
      <div style={{
        position: 'absolute',
        top: 28, left: 0, right: 0, bottom: 50,
        padding: '16px 36px 10px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>

        {/* Highlight number — elemento visivo principale */}
        {hasHL && (
          <div style={{
            background: C.bg,
            borderRadius: 16,
            padding: '16px 20px 12px',
            marginBottom: 18,
            borderLeft: `4px solid ${C.cyan}`,
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: slide.highlight_number.length > 7 ? 58 : 72,
              fontWeight: 900,
              color: C.cyan,
              lineHeight: 1,
              letterSpacing: -2,
            }}>
              {slide.highlight_number}
            </div>
            {slide.highlight_label && (
              <div style={{
                fontSize: 12, fontWeight: 600,
                color: C.mutedText, marginTop: 5,
                lineHeight: 1.3,
              }}>
                {slide.highlight_label}
              </div>
            )}
          </div>
        )}

        {/* Titolo con emoji inline */}
        <h2 style={{
          fontSize: fs,
          fontWeight: 900,
          color: C.navy,
          lineHeight: 1.2,
          margin: '0 0 14px',
          letterSpacing: -0.3,
          whiteSpace: 'pre-line',
        }}>
          {slide.emoji && !hasHL && (
            <span style={{ marginRight: 8, fontSize: fs * 0.9 }}>
              {slide.emoji}
            </span>
          )}
          {slide.title}
        </h2>

        {/* Body */}
        {slide.body && (
          <p style={{
            fontSize: bodyFs,
            fontWeight: 400,
            color: C.bodyText,
            lineHeight: 1.7,
            margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {slide.body}
          </p>
        )}
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 50,
        padding: '0 28px 0 34px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: `1px solid ${C.border}`,
        background: C.white,
      }}>
        <Dots total={total} current={index} />
        <Logo invert={false} size={40} bottom={5} right={18} />
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// CTA
// ══════════════════════════════════════════════════════════════════════════════
function CTASlide({ slide, index, total, slideRef }) {
  const fs = titleSize(slide.title, 34, 22)

  return (
    <div ref={slideRef} style={{
      width: SLIDE_SIZE, height: SLIDE_SIZE,
      background: `linear-gradient(150deg, #0A2540 0%, ${C.blue} 100%)`,
      position: 'relative', overflow: 'hidden', fontFamily: font, flexShrink: 0,
    }}>

      {/* Cerchio decorativo grande — bottom right */}
      <div style={{
        position: 'absolute', bottom: -110, right: -110,
        width: 340, height: 340, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(0,180,216,0.18) 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      {/* Cerchio piccolo — top left */}
      <div style={{
        position: 'absolute', top: -50, left: -50,
        width: 180, height: 180, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,193,7,0.07) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Accent line top */}
      <TopBar height={5} />

      {/* Contenuto centrato */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 44px 60px',
        textAlign: 'center',
      }}>

        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          marginBottom: 16,
        }}>
          <div style={{ width: 16, height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
          <span style={{
            fontSize: 9, fontWeight: 800,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: 3, textTransform: 'uppercase',
          }}>
            AGISCI ADESSO
          </span>
          <div style={{ width: 16, height: 2, background: 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
        </div>

        {/* Emoji */}
        {slide.emoji && (
          <div style={{ fontSize: 50, marginBottom: 14, lineHeight: 1 }}>
            {slide.emoji}
          </div>
        )}

        {/* Titolo */}
        <h2 style={{
          fontSize: fs,
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.18,
          letterSpacing: -0.5,
          margin: '0 0 16px',
          whiteSpace: 'pre-line',
        }}>
          {slide.title}
        </h2>

        {/* Body */}
        {slide.body && (
          <p style={{
            fontSize: 15, fontWeight: 400,
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.65,
            margin: '0 0 24px',
            maxWidth: 380,
          }}>
            {slide.body}
          </p>
        )}

        {/* CTA button */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '13px 36px',
          background: C.amber,
          color: C.navy,
          fontSize: 15, fontWeight: 800,
          borderRadius: 100,
          letterSpacing: -0.2,
          boxShadow: `0 8px 28px rgba(255,193,7,0.5)`,
        }}>
          <span>pagamee.it</span>
          <span style={{ fontSize: 16 }}>→</span>
        </div>

        {/* Tagline */}
        <div style={{
          marginTop: 14,
          fontSize: 11, fontWeight: 500,
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: 0.3,
        }}>
          Analisi gratuita · Zero anticipi · Solo successo
        </div>
      </div>

      {/* Progress dots */}
      <div style={{
        position: 'absolute', bottom: 18, left: 0, right: 0,
        display: 'flex', justifyContent: 'center',
      }}>
        <Dots total={total} current={index} light />
      </div>

      <Logo invert size={44} bottom={10} right={18} />
    </div>
  )
}

// ── Componente pubblico ───────────────────────────────────────────────────────
export default function SlideRenderer({ slide, index, total, slideRef }) {
  if (!slide) return null
  const props = { slide, index, total, slideRef }
  if (slide.type === 'cover') return <CoverSlide   {...props} />
  if (slide.type === 'cta')   return <CTASlide     {...props} />
  return                              <ContentSlide {...props} />
}
