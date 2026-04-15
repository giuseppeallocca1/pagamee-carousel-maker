import React, { useState, useRef, useCallback } from 'react'
import InputPanel   from './components/InputPanel'
import SlidePreview from './components/SlidePreview'
import EditPanel    from './components/EditPanel'
import DownloadBar  from './components/DownloadBar'
import { generateCarousel } from './utils/api'
import { exportAllSlides, exportSingleSlide } from './utils/exportSlides'

function useToast() {
  const [toast, setToast] = useState(null)
  const show = useCallback((msg, type = 'info') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }, [])
  return { toast, show }
}

export default function App() {
  const [slides,       setSlides]       = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading,      setLoading]      = useState(false)
  const [downloading,  setDownloading]  = useState(false)

  const [theme,     setTheme]     = useState('')
  const [tov,       setTov]       = useState('Educativo')
  const [numSlides, setNumSlides] = useState(7)

  const slideRefs  = useRef([])
  const previewRef = useRef(null)

  const { toast, show: showToast } = useToast()

  // ── Genera ────────────────────────────────────────────────────────────────
  const handleGenerate = async () => {
    if (!theme.trim()) {
      showToast('Inserisci un tema per il carosello', 'error')
      return
    }
    setLoading(true)
    setSlides([])
    try {
      const data = await generateCarousel(theme, tov, numSlides)
      setSlides(data.slides)
      setCurrentSlide(0)
      slideRefs.current = []
      setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } catch (err) {
      showToast('Errore nella generazione. Riprova.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateSlide = useCallback((index, updated) => {
    setSlides(prev => prev.map((s, i) => i === index ? updated : s))
  }, [])

  const handleDownloadSingle = async index => {
    const wrapper = slideRefs.current[index]
    if (!wrapper) { showToast('Elemento non pronto. Riprova.', 'error'); return }
    try {
      await exportSingleSlide(wrapper, `slide-${String(index + 1).padStart(2, '0')}.png`)
      showToast(`Slide ${index + 1} scaricata! ⬇️`)
    } catch { showToast('Errore nel download.', 'error') }
  }

  const handleDownloadAll = async () => {
    setDownloading(true)
    try {
      await exportAllSlides(slideRefs.current, slides.length)
      showToast(`ZIP con ${slides.length} slide scaricato! 🎉`)
    } catch { showToast('Errore nel download ZIP.', 'error') }
    finally { setDownloading(false) }
  }

  return (
    <div className="min-h-screen bg-pagamee-bg">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-pagamee-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Pagamee"
            className="h-8 w-auto"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <div>
            <div className="font-black text-pagamee-dark text-base leading-none">Pagamee</div>
            <div className="text-[9px] font-bold text-pagamee-gray uppercase tracking-[2px]">
              Carousel Generator
            </div>
          </div>
        </div>
      </header>

      {/* ── Main ────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        <div className="text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-black text-pagamee-dark tracking-tight">
            Genera caroselli Instagram
          </h1>
          <p className="text-pagamee-gray mt-2 text-sm md:text-base">
            Brand Pagamee · Export 1080×1080 px · Istantaneo
          </p>
        </div>

        <InputPanel
          theme={theme}         setTheme={setTheme}
          tov={tov}             setTov={setTov}
          numSlides={numSlides} setNumSlides={setNumSlides}
          onGenerate={handleGenerate}
          loading={loading}
        />

        {slides.length > 0 && (
          <div ref={previewRef} className="space-y-5 scroll-mt-20">
            <SlidePreview
              slides={slides}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideRefs={slideRefs}
              onDownloadSingle={handleDownloadSingle}
            />
            <EditPanel
              slide={slides[currentSlide]}
              slideIndex={currentSlide}
              onUpdateSlide={handleUpdateSlide}
            />
            <DownloadBar
              onDownloadAll={handleDownloadAll}
              downloading={downloading}
              slideCount={slides.length}
            />
            <div className="text-center pb-8">
              <button
                onClick={() => { setSlides([]); setTheme(''); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="text-sm text-pagamee-gray hover:text-pagamee-dark transition-colors underline underline-offset-2"
              >
                ← Nuovo carosello
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl max-w-xs w-full">
            <div className="w-14 h-14 border-4 border-pagamee-cyan/20 border-t-pagamee-cyan rounded-full animate-spin mx-auto mb-5" />
            <div className="font-black text-pagamee-dark text-xl mb-1">Generazione AI in corso…</div>
            <div className="text-pagamee-gray text-sm">Claude sta scrivendo i tuoi contenuti.</div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl text-sm font-semibold shadow-xl animate-fade-in max-w-xs ${
          toast.type === 'error' ? 'bg-red-600 text-white' : 'bg-pagamee-dark text-white'
        }`}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}
