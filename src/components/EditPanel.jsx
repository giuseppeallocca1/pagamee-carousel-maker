import React, { useState, useEffect } from 'react'

export default function EditPanel({
  slide,
  slideIndex,
  onUpdateSlide,
  onModifyAI,
  modifying,
}) {
  const [local, setLocal]       = useState(slide)
  const [aiPrompt, setAiPrompt] = useState('')

  // Sincronizza quando cambia slide o quando arriva una modifica AI
  useEffect(() => {
    setLocal(slide)
  }, [slide, slideIndex])

  const update = (field, value) => {
    const updated = { ...local, [field]: value }
    setLocal(updated)
    onUpdateSlide(slideIndex, updated)
  }

  const handleAI = async () => {
    if (!aiPrompt.trim() || modifying) return
    await onModifyAI(aiPrompt)
    setAiPrompt('')
  }

  if (!slide) return null

  const isContent = slide.type === 'content'
  const isCover   = slide.type === 'cover'

  return (
    <div className="bg-white rounded-2xl border border-pagamee-border shadow-sm p-6 md:p-8">
      <p className="text-[10px] font-extrabold text-pagamee-cyan uppercase tracking-[2.5px] mb-5">
        ✏️ Modifica — Slide {slideIndex + 1} ({slide.type})
      </p>

      <div className="space-y-3 mb-7">

        {/* Titolo — sempre presente */}
        <Field label="Titolo">
          <input
            type="text"
            value={local?.title ?? ''}
            onChange={e => update('title', e.target.value)}
          />
        </Field>

        {/* Sottotitolo — solo cover */}
        {isCover && (
          <Field label="Sottotitolo (opzionale)">
            <input
              type="text"
              value={local?.subtitle ?? ''}
              onChange={e => update('subtitle', e.target.value)}
              placeholder="Una riga di sottotitolo…"
            />
          </Field>
        )}

        {/* Body — content e cta */}
        {!isCover && (
          <Field label="Testo corpo">
            <textarea
              value={local?.body ?? ''}
              onChange={e => update('body', e.target.value)}
              rows={3}
            />
          </Field>
        )}

        {/* Highlight — solo content */}
        {isContent && (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Numero highlight (opz.)">
              <input
                type="text"
                value={local?.highlight_number ?? ''}
                onChange={e => update('highlight_number', e.target.value)}
                placeholder="€2.3Mld"
              />
            </Field>
            <Field label="Label highlight (opz.)">
              <input
                type="text"
                value={local?.highlight_label ?? ''}
                onChange={e => update('highlight_label', e.target.value)}
                placeholder="recuperati per i lavoratori"
              />
            </Field>
          </div>
        )}

        {/* Emoji */}
        <Field label="Emoji (opz.)">
          <input
            type="text"
            value={local?.emoji ?? ''}
            onChange={e => update('emoji', e.target.value)}
            placeholder="📌"
            className="!w-20"
          />
        </Field>
      </div>

      {/* ── Modifica con AI ─────────────────────────────────────────────── */}
      <div className="border-t border-pagamee-border pt-5">
        <p className="text-xs font-bold text-pagamee-dark mb-2">
          🤖 Modifica tutto il carosello con AI
        </p>
        <p className="text-xs text-pagamee-gray mb-3">
          Es: "rendi la slide 3 più breve" · "aggiungi un dato numerico nella slide 2" · "tono più urgente ovunque"
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={aiPrompt}
            onChange={e => setAiPrompt(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAI()}
            placeholder={`Cosa vuoi cambiare?`}
            disabled={modifying}
            className="flex-1 px-3 py-2.5 bg-pagamee-bg border border-pagamee-border rounded-xl text-sm text-pagamee-dark placeholder-pagamee-gray focus:outline-none focus:border-pagamee-cyan transition-colors disabled:opacity-50"
          />
          <button
            onClick={handleAI}
            disabled={modifying || !aiPrompt.trim()}
            className="px-5 py-2.5 bg-pagamee-cyan text-white text-sm font-bold rounded-xl hover:bg-pagamee-blue disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap flex items-center gap-2"
          >
            {modifying
              ? <><span className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> In corso…</>
              : 'Applica ✨'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Campo di editing generico ────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-pagamee-dark mb-1">{label}</label>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: [
            'w-full px-3 py-2 bg-pagamee-bg border border-pagamee-border rounded-lg',
            'text-sm text-pagamee-dark placeholder-pagamee-gray',
            'focus:outline-none focus:border-pagamee-cyan focus:bg-white transition-colors',
            child.props.className ?? '',
          ].join(' '),
        })
      )}
    </div>
  )
}
