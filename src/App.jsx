import React, { useState, useRef, useCallback, useEffect } from 'react'
import InputPanel   from './components/InputPanel'
import SlidePreview from './components/SlidePreview'
import EditPanel    from './components/EditPanel'
import DownloadBar  from './components/DownloadBar'
import { generateCarousel, modifySlides } from './utils/api'
import { exportAllSlides, exportSingleSlide } from './utils/exportSlides'

// ─── Piccolo hook Toast ───────────────────────────────────────────────────────
function useToast() {
  const [toast, setToast] = useState(null)
  const show = useCallback((msg, type = 'info') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }, [])
  return { toast, show }
}

// ─── Modale API key ───────────────────────────────────────────────────────────
function ApiKeyModal({ onSave }) {
  const [val, setVal] = useState('')
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full">
        <div className="text-2xl mb-1">🔑</div>
        <h2 className="text-xl font-black text-pagamee-dark mb-1">Anthropic API Key</h2>
        <p className="text-sm text-pagamee-gray mb-5">
          Inserisci la tua API key Anthropic. Viene salvata solo nel browser (localStorage), mai inviata ad altri server.
        </p>
        <input
          type="password"
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && val.trim() && onSave(val.trim())}
          placeholder="sk-ant-api03-..."
          autoFocus
          className="w-full px-4 py-3 border border-pagamee-border bg-pagamee-bg rounded-xl text-sm focus:outline-none focus:border-pagamee-cyan mb-4 transition-colors"
        />
        <button
          onClick={() => val.trim() && onSave(val.trim())}
          disabled={!val.trim()}
          className="w-full py-3 bg-pagamee-dark text-white font-bold rounded-xl hover:bg-[#0D0D1F] disabled:opacity-40 transition-colors"
        >
          Salva e continua
        </button>
        <p className="text-[10px] text-pagamee-gray/60 text-center mt-3">
          Ottieni la tua key su console.anthropic.com
        </p>
      </div>
    </div>
  )
}

// ─── App principale ───────────────────────────────────────────────────────────
export default function App() {
  // State globale
  const [slides,       setSlides]       = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading,      setLoading]      = useState(false)
  const [modifying,    setModifying]    = useState(false)
  const [downloading,  setDownloading]  = useState(false)

  // Form
  const [theme,     setTheme]     = useState('')
  const [tov,       setTov]       = useState('Educativo')
  const [numSlides, setNumSlides] = useState(7)

  // API Key
  const [apiKey,        setApiKey]        = useState(() => localStorage.getItem('pagamee_api_key') || '')
  const [showKeyModal,  setShowKeyModal]  = useState(false)
  const [showKeyInput,  setShowKeyInput]  = useState(false)
  const [keyDraft,      setKeyDraft]      = useState('')

  // Refs
  const slideRefs  = useRef([])   // punta ai wrapper dei render off-screen in SlidePreview
  const previewRef = useRef(null) // scroll target

  const { toast, show: showToast } = useToast()

  // ── Genera carosello ──────────────────────────────────────────────────────
  const handleGenerate = async () => {
    if (!theme.trim()) {
      showToast('Inserisci un tema per il carosello', 'error')
      return
    }

    // Legge sempre da localStorage per evitare stale closure dopo saveApiKey
    const key = apiKey || localStorage.getItem('pagamee_api_key') || ''
    if (!key) {
      setShowKeyModal(true)
      return
    }

    setLoading(true)
    setSlides([])

    try {
      const data = await generateCarousel(theme, tov, numSlides, key)
      if (!data?.slides?.length) throw new Error('Nessuna slide generata')

      setSlides(data.slides)
      setCurrentSlide(0)
      slideRefs.current = []

      // Scroll alla preview dopo un tick (render)
      setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    } catch (err) {
      console.error(err)
      const msg = err.message?.includes('401')
        ? 'API key non valida. Controllala e riprova.'
        : err.message?.includes('429')
        ? 'Rate limit raggiunto. Riprova tra qualche secondo.'
        : `Errore: ${err.message}`
      showToast(msg, 'error')
    } finally {
      setLoading(false)
    }
  }

  // ── Modifica AI ───────────────────────────────────────────────────────────
  const handleModifyAI = async instruction => {
    if (!instruction.trim()) return
    setModifying(true)
    try {
      const data = await modifySlides(slides, instruction, apiKey)
      if (data?.slides?.length) {
        setSlides(data.slides)
        showToast('Carosello aggiornato! ✨')
      }
    } catch (err) {
      console.error(err)
      showToast('Errore nella modifica. Riprova.', 'error')
    } finally {
      setModifying(false)
    }
  }

  // ── Editing inline ────────────────────────────────────────────────────────
  const handleUpdateSlide = useCallback((index, updatedSlide) => {
    setSlides(prev => prev.map((s, i) => i === index ? updatedSlide : s))
  }, [])

  // ── Download singola ──────────────────────────────────────────────────────
  const handleDownloadSingle = async index => {
    const wrapper = slideRefs.current[index]
    if (!wrapper) { showToast('Elemento non pronto. Riprova tra un secondo.', 'error'); return }
    try {
      await exportSingleSlide(wrapper, `slide-${String(index + 1).padStart(2, '0')}.png`)
      showToast(`Slide ${index + 1} scaricata! ⬇️`)
    } catch (err) {
      console.error(err)
      showToast('Errore nel download. Riprova.', 'error')
    }
  }

  // ── Download tutte ────────────────────────────────────────────────────────
  const handleDownloadAll = async () => {
    setDownloading(true)
    try {
      await exportAllSlides(slideRefs.current, slides.length)
      showToast(`ZIP con ${slides.length} slide scaricato! 🎉`)
    } catch (err) {
      console.error(err)
      showToast('Errore nel download ZIP. Riprova.', 'error')
    } finally {
      setDownloading(false)
    }
  }

  // ── Salva API key ─────────────────────────────────────────────────────────
  const saveApiKey = key => {
    setApiKey(key)
    localStorage.setItem('pagamee_api_key', key)
    setShowKeyModal(false)
    setShowKeyInput(false)
    showToast('API key salvata! Ora clicca "Genera Carosello" 🔑')
  }

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-pagamee-bg">

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-pagamee-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
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

          {/* API key toggle */}
          <button
            onClick={() => { setShowKeyInput(v => !v); setKeyDraft(apiKey) }}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              apiKey
                ? 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100'
                : 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            {apiKey ? '🔑 API key ✓' : '🔑 Imposta API key'}
          </button>
        </div>

        {/* API key inline editor */}
        {showKeyInput && (
          <div className="border-t border-pagamee-border bg-pagamee-bg">
            <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2">
              <input
                type="password"
                value={keyDraft}
                onChange={e => setKeyDraft(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && keyDraft.trim() && saveApiKey(keyDraft.trim())}
                placeholder="sk-ant-api03-…"
                autoFocus
                className="flex-1 px-3 py-2 text-sm border border-pagamee-border rounded-lg focus:outline-none focus:border-pagamee-cyan bg-white transition-colors"
              />
              <button
                onClick={() => keyDraft.trim() && saveApiKey(keyDraft.trim())}
                disabled={!keyDraft.trim()}
                className="px-4 py-2 bg-pagamee-cyan text-white text-sm font-bold rounded-lg hover:bg-pagamee-blue disabled:opacity-40 transition-colors"
              >
                Salva
              </button>
              <button
                onClick={() => setShowKeyInput(false)}
                className="px-3 py-2 text-sm text-pagamee-gray hover:text-pagamee-dark rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Main ──────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Hero */}
        <div className="text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-black text-pagamee-dark tracking-tight">
            Genera caroselli Instagram
          </h1>
          <p className="text-pagamee-gray mt-2 text-sm md:text-base">
            AI-powered · Brand Pagamee · Export 1080×1080 px
          </p>
        </div>

        {/* Form input */}
        <InputPanel
          theme={theme}         setTheme={setTheme}
          tov={tov}             setTov={setTov}
          numSlides={numSlides} setNumSlides={setNumSlides}
          onGenerate={handleGenerate}
          loading={loading}
        />

        {/* Preview + Edit + Download — visibili solo dopo la generazione */}
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
              onModifyAI={handleModifyAI}
              modifying={modifying}
            />

            <DownloadBar
              onDownloadAll={handleDownloadAll}
              downloading={downloading}
              slideCount={slides.length}
            />

            {/* Reset */}
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

      {/* ── Loading overlay ────────────────────────────────────────────── */}
      {loading && (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl max-w-xs w-full">
            <div className="w-14 h-14 border-4 border-pagamee-cyan/20 border-t-pagamee-cyan rounded-full animate-spin mx-auto mb-5" />
            <div className="font-black text-pagamee-dark text-xl mb-1">Generazione in corso…</div>
            <div className="text-pagamee-gray text-sm">L'AI sta scrivendo i contenuti del carosello.</div>
            <div className="text-pagamee-gray/60 text-xs mt-2">~15–30 secondi</div>
          </div>
        </div>
      )}

      {/* ── API key modal (primo accesso) ──────────────────────────────── */}
      {showKeyModal && <ApiKeyModal onSave={saveApiKey} />}

      {/* ── Toast ─────────────────────────────────────────────────────── */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl text-sm font-semibold shadow-xl animate-fade-in max-w-xs ${
            toast.type === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-pagamee-dark text-white'
          }`}
        >
          {toast.msg}
        </div>
      )}
    </div>
  )
}
