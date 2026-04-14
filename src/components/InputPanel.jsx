import React from 'react'
import { TOV_OPTIONS } from '../utils/slideStyles'

export default function InputPanel({
  theme, setTheme,
  tov, setTov,
  numSlides, setNumSlides,
  onGenerate,
  loading,
}) {
  return (
    <div className="bg-white rounded-2xl border border-pagamee-border shadow-sm overflow-hidden">

      <div className="p-6 md:p-8 border-b border-pagamee-border">
        <p className="text-[10px] font-extrabold text-pagamee-cyan uppercase tracking-[2.5px] mb-6">
          Configura il carosello
        </p>

        {/* ── Tema ─────────────────────────────────────────────────────── */}
        <div className="mb-7">
          <label className="block text-sm font-bold text-pagamee-dark mb-2">
            🎯 Tema del Carosello
          </label>
          <textarea
            value={theme}
            onChange={e => setTheme(e.target.value)}
            placeholder="Es: 5 diritti che non sai di avere come lavoratore dipendente · Come recuperare il TFR non pagato · Straordinari non retribuiti: cosa fare subito"
            rows={3}
            className="w-full px-4 py-3 bg-pagamee-bg border border-pagamee-border rounded-xl text-sm text-pagamee-dark placeholder-pagamee-gray focus:outline-none focus:border-pagamee-cyan focus:bg-white transition-colors resize-none"
          />
          <p className="text-xs text-pagamee-gray mt-1.5">
            Descrivi l'argomento — l'AI genera contenuti ottimizzati per il brand Pagamee.
          </p>
        </div>

        {/* ── TOV ──────────────────────────────────────────────────────── */}
        <div className="mb-7">
          <label className="block text-sm font-bold text-pagamee-dark mb-3">
            🎙 Tone of Voice
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TOV_OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => setTov(opt.id)}
                className={`px-4 py-3 rounded-xl border text-left transition-all ${
                  tov === opt.id
                    ? 'bg-pagamee-cyan border-pagamee-cyan text-white shadow-md shadow-pagamee-cyan/20'
                    : 'bg-pagamee-bg border-pagamee-border text-pagamee-dark hover:border-pagamee-cyan/60'
                }`}
              >
                <div className={`text-sm font-bold leading-tight ${tov === opt.id ? 'text-white' : 'text-pagamee-dark'}`}>
                  {opt.emoji} {opt.label}
                </div>
                <div className={`text-xs mt-0.5 ${tov === opt.id ? 'text-white/75' : 'text-pagamee-gray'}`}>
                  {opt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Numero slide ─────────────────────────────────────────────── */}
        <div>
          <label className="block text-sm font-bold text-pagamee-dark mb-3">
            📊 Numero di Slide
          </label>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setNumSlides(n => Math.max(5, n - 1))}
              disabled={numSlides <= 5}
              className="w-11 h-11 rounded-full border border-pagamee-border bg-pagamee-bg flex items-center justify-center text-xl text-pagamee-dark hover:border-pagamee-cyan hover:text-pagamee-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              −
            </button>
            <div className="text-center">
              <div className="text-5xl font-black text-pagamee-dark tabular-nums leading-none">{numSlides}</div>
              <div className="text-[10px] text-pagamee-gray uppercase tracking-widest mt-1">slide</div>
            </div>
            <button
              onClick={() => setNumSlides(n => Math.min(10, n + 1))}
              disabled={numSlides >= 10}
              className="w-11 h-11 rounded-full border border-pagamee-border bg-pagamee-bg flex items-center justify-center text-xl text-pagamee-dark hover:border-pagamee-cyan hover:text-pagamee-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              +
            </button>
            <span className="text-xs text-pagamee-gray">(min 5 · max 10)</span>
          </div>
        </div>
      </div>

      {/* ── Bottone genera ───────────────────────────────────────────────── */}
      <div className="p-4 md:p-5">
        <button
          onClick={onGenerate}
          disabled={loading || !theme.trim()}
          className="w-full py-4 bg-pagamee-dark text-white font-bold text-base rounded-xl hover:bg-[#0D0D1F] disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pagamee-dark/20 active:translate-y-0"
        >
          {loading
            ? <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Generazione in corso…
              </span>
            : '✨  Genera Carosello'
          }
        </button>
      </div>
    </div>
  )
}
