import React from 'react'

export default function DownloadBar({ onDownloadAll, downloading, slideCount }) {
  return (
    <div className="text-center space-y-3 py-2">

      <button
        onClick={onDownloadAll}
        disabled={downloading}
        className="inline-flex items-center justify-center gap-3 px-12 py-4 rounded-2xl font-bold text-base text-pagamee-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none hover:-translate-y-0.5 hover:shadow-xl"
        style={{
          background:  'linear-gradient(135deg, #FFC107, #FF9500)',
          boxShadow:   downloading ? 'none' : '0 8px 24px rgba(255,193,7,0.4)',
        }}
      >
        {downloading ? (
          <>
            <span
              className="inline-block w-5 h-5 rounded-full border-2 border-pagamee-dark/30 border-t-pagamee-dark animate-spin"
            />
            Export in corso… ({slideCount} slide)
          </>
        ) : (
          <>⬇️ &nbsp;Scarica Tutte le Slide</>
        )}
      </button>

      <p className="text-xs text-pagamee-gray">
        ZIP con <strong>{slideCount}</strong> immagini PNG · 1080 × 1080 px · Pronte per Instagram
      </p>

      <p className="text-[10px] text-pagamee-gray/60">
        Il download può richiedere qualche secondo per il rendering ad alta risoluzione
      </p>
    </div>
  )
}
