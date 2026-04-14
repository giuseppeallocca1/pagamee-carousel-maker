import React, { useEffect, useRef } from 'react'
import SlideRenderer, { SLIDE_SIZE } from './SlideRenderer'

// Dimensione preview visibile (px)
const PREVIEW_PX = 390

export default function SlidePreview({
  slides,
  currentSlide,
  setCurrentSlide,
  slideRefs,          // ref array in App — punta ai wrapper dei render nascosti
  onDownloadSingle,
}) {
  const scale        = PREVIEW_PX / SLIDE_SIZE
  const thumbsRef    = useRef(null)

  // Keyboard navigation
  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  setCurrentSlide(i => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setCurrentSlide(i => Math.min(slides.length - 1, i + 1))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [slides.length, setCurrentSlide])

  // Auto-scroll thumbnail attiva
  useEffect(() => {
    if (!thumbsRef.current) return
    const el = thumbsRef.current.children[currentSlide]
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [currentSlide])

  if (!slides.length) return null

  const slide = slides[currentSlide]

  return (
    <div className="bg-white rounded-2xl border border-pagamee-border shadow-sm p-6 md:p-8">

      {/* Header navigazione */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-pagamee-dark">Anteprima Carosello</h2>
          <p className="text-xs text-pagamee-gray mt-0.5">
            Tipo: <span className="font-semibold capitalize text-pagamee-cyan">{slide?.type}</span>
            {' · '}Usa ← → per navigare
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide(i => Math.max(0, i - 1))}
            disabled={currentSlide === 0}
            className="w-8 h-8 rounded-full border border-pagamee-border bg-pagamee-bg flex items-center justify-center text-sm hover:border-pagamee-cyan hover:text-pagamee-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            ←
          </button>
          <span className="text-xs font-bold text-pagamee-gray min-w-[40px] text-center tabular-nums">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={() => setCurrentSlide(i => Math.min(slides.length - 1, i + 1))}
            disabled={currentSlide === slides.length - 1}
            className="w-8 h-8 rounded-full border border-pagamee-border bg-pagamee-bg flex items-center justify-center text-sm hover:border-pagamee-cyan hover:text-pagamee-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* Slide principale (visual preview scalata) */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          {/* Contenitore scalato */}
          <div
            style={{
              width:        PREVIEW_PX,
              height:       PREVIEW_PX,
              overflow:     'hidden',
              borderRadius: 14,
              boxShadow:    '0 24px 64px rgba(13,27,53,0.18)',
              flexShrink:   0,
            }}
          >
            <div
              style={{
                transform:       `scale(${scale})`,
                transformOrigin: 'top left',
                width:           SLIDE_SIZE,
                height:          SLIDE_SIZE,
                pointerEvents:   'none',
              }}
            >
              <SlideRenderer
                slide={slide}
                index={currentSlide}
                total={slides.length}
              />
            </div>
          </div>

          {/* Bottone download singola slide */}
          <button
            onClick={() => onDownloadSingle(currentSlide)}
            title="Scarica questa slide"
            className="absolute top-2 right-2 w-9 h-9 bg-black/40 backdrop-blur-sm text-white rounded-xl flex items-center justify-center text-base hover:bg-black/65 transition-colors"
          >
            ⬇
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={thumbsRef}
        className="flex gap-2.5 overflow-x-auto pb-1"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#D4E8F5 transparent' }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            title={`Slide ${i + 1}: ${s.type}`}
            style={{
              flexShrink:  0,
              width:       68,
              height:      68,
              borderRadius: 9,
              overflow:    'hidden',
              border:      `2.5px solid ${i === currentSlide ? '#00B4D8' : 'transparent'}`,
              background:  s.type === 'cover' ? '#1A1A2E' : s.type === 'cta' ? '#0077B6' : '#fff',
              position:    'relative',
              transition:  'border-color 0.15s, transform 0.15s',
              transform:   i === currentSlide ? 'scale(1)' : 'scale(0.96)',
              cursor:      'pointer',
            }}
          >
            {/* Mini render scalato */}
            <div
              style={{
                transform:       `scale(${68 / SLIDE_SIZE})`,
                transformOrigin: 'top left',
                width:           SLIDE_SIZE,
                height:          SLIDE_SIZE,
                pointerEvents:   'none',
              }}
            >
              <SlideRenderer slide={s} index={i} total={slides.length} />
            </div>

            {/* Numero slide */}
            <div style={{
              position:   'absolute', bottom: 3, left: 0, right: 0,
              textAlign:  'center',
              fontSize:   8,
              fontWeight: 800,
              color:      s.type === 'content' ? '#6B7280' : 'rgba(255,255,255,0.5)',
              lineHeight: 1,
            }}>
              {i + 1}
            </div>
          </button>
        ))}
      </div>

      {/* ── Render nascosti per l'export (off-screen) ────────────────────── */}
      {/* Questi elementi sono nel DOM ma non visibili — html2canvas li cattura */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', left: -9999, top: 0, pointerEvents: 'none', zIndex: -1 }}
      >
        {slides.map((s, i) => (
          <div key={i} ref={el => { slideRefs.current[i] = el }}>
            <SlideRenderer
              slide={s}
              index={i}
              total={slides.length}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
