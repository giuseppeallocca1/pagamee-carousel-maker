// ─── Generazione carousel ─────────────────────────────────────────────────────
// In produzione (Vercel): chiama /api/generate (Edge function server-side).
// In locale (Vite dev):   fallback al template engine interno.
import { generateFromTemplate } from './templates'

const IS_DEV = import.meta.env.DEV

async function callServerProxy(theme, tov, numSlides) {
  const res = await fetch('/api/generate', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ theme, tov, numSlides }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error(err.error ?? `HTTP ${res.status}`)
  }

  const data = await res.json()
  if (!Array.isArray(data.slides)) throw new Error('Risposta senza slides')
  return data
}

export async function generateCarousel(theme, tov, numSlides) {
  // In locale Vite dev il proxy non è disponibile — usa template
  if (IS_DEV) {
    console.info('[Pagamee] Dev mode — uso template locale (proxy disponibile solo su Vercel)')
    const result = generateFromTemplate(theme, tov, numSlides)
    return { ...result, _fallback: true }
  }

  try {
    return await callServerProxy(theme, tov, numSlides)
  } catch (err) {
    console.warn('[Pagamee] Proxy fallito, uso template locale:', err.message)
    const result = generateFromTemplate(theme, tov, numSlides)
    return { ...result, _fallback: true }
  }
}
