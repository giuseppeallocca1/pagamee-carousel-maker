// ─── SlideRenderer ────────────────────────────────────────────────────────────
// Renderizza una singola slide con CSS INLINE (necessario per html2canvas).
// NON usare classi Tailwind qui dentro — solo style={{}}.
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react'

export const SLIDE_SIZE = 540

const C = {
  primary:   '#00B4D8',
  secondary: '#0077B6',
  accent:    '#FFC107',
  dark:      '#1A1A2E',
  text:      '#3A4A6B',
  gray:      '#6B7280',
  white:     '#FFFFFF',
  bgAlt:     '#F0F9FF',
}

const font = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"

// ─── Progress dots ────────────────────────────────────────────────────────────
function Dots({ total, current, light = false }) {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width:        i === current ? 18 : 6,
            height:       6,
            borderRadius: 3,
            background:   i === current
              ? (light ? C.accent : C.primary)
              : (light ? 'rgba(255,255,255,0.25)' : '#E5E7EB'),
            transition: 'width 0.3s',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ invert = false, size = 52 }) {
  return (
    <img
      src="/logo.png"
      alt="Pagamee"
      crossOrigin="anonymous"
      style={{
        position:   'absolute',
        bottom:     14,
        right:      18,
        width:      size,
        height:     size,
        objectFit:  'contain',
        filter:     invert ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}

// ─── COVER ───────────────────────────────────────────────────────────────────
function CoverSlide({ slide, index, total, slideRef }) {
  return (
    <div
      ref={slideRef}
      style={{
        width:      SLIDE_SIZE,
        height:     SLIDE_SIZE,
        background: C.dark,
        position:   'relative',
        overflow:   'hidden',
        fontFamily: font,
        flexShrink: 0,
      }}
    >
      {/* Sfere decorative */}
      <div style={{
        position: 'absolute', width: 460, height: 460, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.28) 0%, transparent 68%)',
        top: -140, right: -120,
      }} />
      <div style={{
        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.14) 0%, transparent 70%)',
        bottom: 30, left: -60,
      }} />

      {/* Top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '22px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 11, fontWeight: 900, color: C.primary, letterSpacing: 2.5, textTransform: 'uppercase' }}>
          pagamee.it
        </span>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.3)' }}>
          {index + 1} / {total}
        </span>
      </div>

      {/* Body */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 32px 72px' }}>
        {slide.emoji && (
          <div style={{ fontSize: 58, lineHeight: 1, marginBottom: 14 }}>{slide.emoji}</div>
        )}

        <div style={{
          display: 'inline-block',
          padding: '4px 13px',
          background: C.primary,
          color: C.white,
          borderRadius: 100,
          fontSize: 9, fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: 2,
          marginBottom: 14,
        }}>
          CAROSELLO
        </div>

        <h1 style={{
          fontSize:      slide.title.length > 55 ? 24 : slide.title.length > 40 ? 27 : 31,
          fontWeight:    900,
          color:         C.white,
          lineHeight:    1.22,
          margin:        '0 0 10px',
          letterSpacing: -0.5,
        }}>
          {slide.title}
        </h1>

        {slide.subtitle && (
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.5, margin: 0 }}>
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Barra accent bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 4,
        background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
      }} />

      {/* Logo */}
      <Logo invert size={50} />
    </div>
  )
}

// ─── CONTENT ─────────────────────────────────────────────────────────────────
function ContentSlide({ slide, index, total, slideRef }) {
  const hasHighlight = slide.highlight_number && slide.highlight_number.trim()
  const titleFontSize = slide.title.length > 45 ? 20 : slide.title.length > 30 ? 23 : 26

  return (
    <div
      ref={slideRef}
      style={{
        width:      SLIDE_SIZE,
        height:     SLIDE_SIZE,
        background: C.white,
        position:   'relative',
        overflow:   'hidden',
        fontFamily: font,
        flexShrink: 0,
      }}
    >
      {/* Accent top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 6,
        background: `linear-gradient(90deg, ${C.primary}, #00D8FF)`,
      }} />

      {/* Content area */}
      <div style={{ position: 'absolute', top: 26, left: 0, right: 0, bottom: 46, padding: '18px 32px 10px' }}>

        {/* Overline */}
        <div style={{ fontSize: 9, fontWeight: 900, color: C.primary, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 12 }}>
          pagamee.it
        </div>

        {/* Title */}
        <h2 style={{
          fontSize:      titleFontSize,
          fontWeight:    900,
          color:         C.dark,
          lineHeight:    1.22,
          margin:        '0 0 18px',
          letterSpacing: -0.3,
        }}>
          {slide.emoji && (
            <span style={{ marginRight: 8 }}>{slide.emoji}</span>
          )}
          {slide.title}
        </h2>

        {/* Highlight number */}
        {hasHighlight && (
          <div style={{ textAlign: 'center', margin: '12px 0 16px', padding: '14px 0', borderRadius: 16, background: C.bgAlt }}>
            <div style={{
              fontSize:      slide.highlight_number.length > 6 ? 60 : 76,
              fontWeight:    900,
              color:         C.primary,
              lineHeight:    1,
              letterSpacing: -2,
            }}>
              {slide.highlight_number}
            </div>
            {slide.highlight_label && (
              <div style={{ fontSize: 13, fontWeight: 600, color: C.gray, marginTop: 4 }}>
                {slide.highlight_label}
              </div>
            )}
          </div>
        )}

        {/* Body text */}
        {slide.body && (
          <div style={{
            fontSize:   hasHighlight ? 13 : 15,
            color:      C.text,
            lineHeight: 1.65,
            fontWeight: 500,
            whiteSpace: 'pre-line',
          }}>
            {slide.body}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        position:   'absolute', bottom: 0, left: 0, right: 0,
        padding:    '8px 28px 8px 32px',
        display:    'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop:  '1px solid rgba(0,0,0,0.06)',
        background: C.white,
        height:     46,
      }}>
        <Dots total={total} current={index} />
        <span style={{ fontSize: 9, fontWeight: 700, color: '#CBD5E1', paddingRight: 64 }}>
          {index + 1} / {total}
        </span>
      </div>

      {/* Logo */}
      <Logo invert={false} size={46} />
    </div>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTASlide({ slide, index, total, slideRef }) {
  return (
    <div
      ref={slideRef}
      style={{
        width:      SLIDE_SIZE,
        height:     SLIDE_SIZE,
        background: `linear-gradient(145deg, #0A2540 0%, ${C.secondary} 100%)`,
        position:   'relative',
        overflow:   'hidden',
        fontFamily: font,
        flexShrink: 0,
      }}
    >
      {/* Bagliore decorativo */}
      <div style={{
        position: 'absolute', bottom: -90, right: -90,
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,216,0.2) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', top: -60, left: -60,
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,193,7,0.08) 0%, transparent 70%)',
      }} />

      {/* Contenuto centrato */}
      <div style={{
        position:       'absolute', inset: 0,
        display:        'flex', flexDirection: 'column',
        alignItems:     'center', justifyContent: 'center',
        padding:        '40px 48px',
        textAlign:      'center',
      }}>
        <div style={{ fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 2.5, marginBottom: 14 }}>
          AGISCI ADESSO
        </div>

        {slide.emoji && (
          <div style={{ fontSize: 50, marginBottom: 12, lineHeight: 1 }}>{slide.emoji}</div>
        )}

        <h2 style={{
          fontSize:      slide.title.length > 45 ? 22 : slide.title.length > 30 ? 25 : 28,
          fontWeight:    900,
          color:         C.white,
          lineHeight:    1.22,
          letterSpacing: -0.5,
          margin:        '0 0 18px',
        }}>
          {slide.title}
        </h2>

        {slide.body && (
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, marginBottom: 26, maxWidth: 360 }}>
            {slide.body}
          </p>
        )}

        {/* CTA button */}
        <div style={{
          display:      'inline-block',
          padding:      '13px 36px',
          background:   C.accent,
          color:        C.dark,
          fontSize:     16,
          fontWeight:   800,
          borderRadius: 100,
          marginBottom: 12,
          boxShadow:    '0 6px 20px rgba(255,193,7,0.45)',
          letterSpacing: -0.2,
        }}>
          pagamee.it
        </div>

        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
          Analisi gratuita · Zero anticipi · Solo successo
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <Dots total={total} current={index} light />
      </div>

      {/* Logo */}
      <Logo invert size={50} />
    </div>
  )
}

// ─── Componente pubblico ──────────────────────────────────────────────────────
export default function SlideRenderer({ slide, index, total, slideRef }) {
  if (!slide) return null

  const props = { slide, index, total, slideRef }

  if (slide.type === 'cover')   return <CoverSlide   {...props} />
  if (slide.type === 'cta')     return <CTASlide     {...props} />
  return                               <ContentSlide {...props} />
}
