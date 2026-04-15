import React, { useState, useRef, useCallback, useEffect } from 'react'
import InputPanel   from './components/InputPanel'
import SlidePreview from './components/SlidePreview'
import EditPanel    from './components/EditPanel'
import DownloadBar  from './components/DownloadBar'
import { generateCarousel } from './utils/api'
import { exportAllSlides, exportSingleSlide } from './utils/exportSlides'

const LS_KEY = 'pagamee_or_key'

function useToast() {
  const [toast, setToast] = useState(null)
  const show = useCallback((msg, type = 'info') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
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

  // ── API key — salvata in localStorage, mai nel codice ─────────────────────
  const [apiKey,      setApiKey]      = useState(() => localStorage.getItem(LS_KEY) ?? '')
  const [showKeyInput, setShowKeyInput] = useState(false)
  const [keyDraft,     setKeyDraft]    = useState('')

  useEffect(() => {
    if (!apiKey) setShowKeyInput(true)   // mostra il campo se non c'è ancora la chiave
  }, [apiKey])

  const saveKey = () => {
    const trimmed = keyDraft.trim()
    if (!trimmed) return
    localStorage.setItem(LS_KEY, trimmed)
    setApiKey(trimmed)
    setShowKeyInput(false)
    setKeyDraft('')
  }

  const clearKey = () => {
    localStorage.removeItem(LS_KEY)
    setApiKey('')
    setKeyDraft('')
    setShowKeyInput(true)
  }

  const slideRefs  = useRef([])
  const previewRef = useRef(null)
  const { toast, show: showToast } = useToast()

  // ── Genera ────────────────────────────────────────────────────────────────
  const handleGenerate = async () => {
    if (!theme.trim()) {
      showToast('Inserisci un tema per il carosello', 'error')
      return
    }
    if (!apiKey) {
      showToast('Inserisci la tua API key OpenRouter prima di generare', 'error')
      setShowKeyInput(true)
      return
    }
    setLoading(true)
    setSlides([])
    try {
      const data = await generateCarousel(theme, tov, numSlides, apiKey)
      if (data._fallback) showToast('⚠️ AI non raggiungibile — usa template locale', 'error')
      else                showToast('✨ Carosello generato dall\'AI!')
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
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
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

          {/* API Key badge / toggle */}
          <button
            onClick={() => { setShowKeyInput(v => !v); setKeyDraft('') }}
            className={`flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-colors ${
              apiKey
                ? 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100'
                : 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            <span>{apiKey ? '🔑 AI Attiva' : '⚠️ Configura API Key'}</span>
          </button>
        </div>

        {/* ── Banner inserimento API key ────────────────────────────── */}
        {showKeyInput && (
          <div className="border-t border-pagamee-border bg-pagamee-bg">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <p className="text-[11px] font-semibold text-pagamee-dark mb-2">
                🔑 OpenRouter API Key — salvata solo nel tuo browser, mai nel codice
              </p>
              <div className="flex gap-2 items-center flex-wrap">
                <input
                  type="password"
                  placeholder="sk-or-v1-…"
                  value={keyDraft}
                  onChange={e => setKeyDraft(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && saveKey()}
                  className="flex-1 min-w-0 px-3 py-2 text-sm bg-white border border-pagamee-border rounded-lg
                             focus:outline-none focus:border-pagamee-cyan transition-colors font-mono"
                />
                <button
                  onClick={saveKey}
                  disabled={!keyDraft.trim()}
                  className="px-4 py-2 bg-pagamee-cyan text-white text-sm font-bold rounded-lg
                             hover:bg-pagamee-cyan/90 disabled:opacity-40 transition-colors"
                >
                  Salva
                </button>
                {apiKey && (
                  <button
                    onClick={clearKey}
                    className="px-4 py-2 bg-white border border-pagamee-border text-sm font-semibold
                               text-pagamee-gray rounded-lg hover:border-red-300 hover:text-red-500 transition-colors"
                  >
                    Rimuovi
                  </button>
                )}
              </div>
              {apiKey && (
                <p className="text-[10px] text-green-600 font-semibold mt-1.5">
                  ✓ Chiave attiva: {apiKey.slice(0, 12)}…{apiKey.slice(-6)}
                </p>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ── Main ────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        <div className="text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-black text-pagamee-dark tracking-tight">
            Genera caroselli Instagram
          </h1>
          <p className="text-pagamee-gray mt-2 text-sm md:text-base">
            Brand Pagamee · Generazione AI · Export 1080×1080 px
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
