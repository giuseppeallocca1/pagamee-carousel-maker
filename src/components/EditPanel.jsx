import React, { useState, useEffect } from 'react'

export default function EditPanel({ slide, slideIndex, onUpdateSlide }) {
  const [local, setLocal] = useState(slide)

  useEffect(() => { setLocal(slide) }, [slide, slideIndex])

  const update = (field, value) => {
    const updated = { ...local, [field]: value }
    setLocal(updated)
    onUpdateSlide(slideIndex, updated)
  }

  if (!slide) return null

  const isContent = slide.type === 'content'
  const isCover   = slide.type === 'cover'

  return (
    <div className="bg-white rounded-2xl border border-pagamee-border shadow-sm p-6 md:p-8">
      <p className="text-[10px] font-extrabold text-pagamee-cyan uppercase tracking-[2.5px] mb-5">
        ✏️ Modifica — Slide {slideIndex + 1} ({slide.type})
      </p>

      <div className="space-y-3">

        <Field label="Titolo">
          <input type="text" value={local?.title ?? ''} onChange={e => update('title', e.target.value)} />
        </Field>

        {isCover && (
          <Field label="Sottotitolo">
            <input type="text" value={local?.subtitle ?? ''} onChange={e => update('subtitle', e.target.value)} placeholder="Opzionale…" />
          </Field>
        )}

        {!isCover && (
          <Field label="Corpo testo">
            <textarea value={local?.body ?? ''} onChange={e => update('body', e.target.value)} rows={3} />
          </Field>
        )}

        {isContent && (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Numero highlight">
              <input type="text" value={local?.highlight_number ?? ''} onChange={e => update('highlight_number', e.target.value)} placeholder="€2.3Mld" />
            </Field>
            <Field label="Label highlight">
              <input type="text" value={local?.highlight_label ?? ''} onChange={e => update('highlight_label', e.target.value)} placeholder="recuperati…" />
            </Field>
          </div>
        )}

        <Field label="Emoji">
          <input type="text" value={local?.emoji ?? ''} onChange={e => update('emoji', e.target.value)} placeholder="📌" className="!w-20" />
        </Field>

      </div>
    </div>
  )
}

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
