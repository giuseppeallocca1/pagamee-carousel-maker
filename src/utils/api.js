// ─── Generazione carousel — OpenRouter AI ────────────────────────────────────
// Modello: claude-3-5-haiku via OpenRouter. Fallback: template interno.
import { generateFromTemplate } from './templates'

const OPENROUTER_KEY = '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'
const MODEL          = 'anthropic/claude-3-5-haiku'
const API_URL        = 'https://openrouter.ai/api/v1/chat/completions'

// ── Prompt builder ────────────────────────────────────────────────────────────
function buildPrompt(theme, tov, numSlides) {
  const contentCount = numSlides - 2   // cover + CTA = 2 slide fisse

  const tovDesc = {
    'Educativo':        'informativo, autorevole, chiaro — spiega i diritti con dati e sicurezza',
    'Provocatorio':     'diretto, sfidante, urgente — scuote lo scroll con hook forti e CTA aggressive',
    'Empatico':         'vicino, umano, storytelling — si mette nei panni del lavoratore con calore',
    'Legale/Tecnico':   'preciso, formale, con citazioni di articoli di legge italiani reali (c.c., c.p.c., Stat. Lav., CCNL)',
  }[tov] || 'informativo e diretto'

  return `Sei il miglior copywriter italiano specializzato in diritto del lavoro e social media marketing legale.
Lavori per Pagamee.it — startup italiana che recupera crediti lavorativi (stipendi, TFR, straordinari, ferie) a success fee del 10%, zero anticipi.

TEMA del carosello: "${theme}"
TONE OF VOICE: ${tov} — ${tovDesc}
NUMERO DI SLIDE TOTALI: ${numSlides} (1 cover + ${contentCount} contenuto + 1 CTA)

Crea un carosello Instagram con uno STORYTELLING PROGRESSIVO: ogni slide avanza la narrazione, nessun concetto si ripete.
Le slide di contenuto devono seguire un arco narrativo logico: problema → contesto → dati → soluzione → Pagamee.

REGOLE DI SCRITTURA:
- Titoli: max 50 caratteri, incisivi, con a capo \\n dove serve per equilibrio visivo
- Body: max 3 righe brevi, separate da \\n, impatto immediato
- Emoji: 1 sola, pertinente, obbligatoria per cover e CTA (opzionale per content)
- Highlight number: usa solo per dati forti (es. "5 anni", "10%", "€2.3Mld", "60 gg") — ometti se non c'è un dato davvero d'impatto
- Cita articoli di legge REALI: art. 2099 c.c., art. 429 c.p.c., L. 604/1966, D.Lgs. 66/2003, ecc.
- Tone: ${tov}

FORMATO RISPOSTA — JSON puro, nessun testo prima o dopo:
{
  "slides": [
    {
      "type": "cover",
      "emoji": "💰",
      "title": "Titolo forte\\nsu due righe",
      "subtitle": "Sottotitolo breve che amplia il titolo"
    },
    {
      "type": "content",
      "emoji": "📌",
      "title": "Titolo slide contenuto",
      "body": "Prima riga del testo.\\nSeconda riga.\\nTerza riga.",
      "highlight_number": "5 anni",
      "highlight_label": "descrizione breve del dato"
    },
    {
      "type": "cta",
      "emoji": "🚀",
      "title": "Titolo CTA\\nurto finale",
      "body": "Riga 1 del corpo CTA.\\nRiga 2."
    }
  ]
}

NOTA: le slide "content" possono avere highlight_number e highlight_label (entrambi o nessuno), oppure solo emoji nel titolo.
Genera esattamente ${numSlides} slide: 1 cover, ${contentCount} content, 1 cta.`
}

// ── Chiamata OpenRouter ───────────────────────────────────────────────────────
async function callAI(theme, tov, numSlides) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization':  `Bearer ${OPENROUTER_KEY}`,
      'Content-Type':   'application/json',
      'HTTP-Referer':   'https://pagamee.it',
      'X-Title':        'Pagamee Carousel Generator',
    },
    body: JSON.stringify({
      model:       MODEL,
      temperature: 0.82,
      max_tokens:  2400,
      messages: [{ role: 'user', content: buildPrompt(theme, tov, numSlides) }],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`OpenRouter ${res.status}: ${err}`)
  }

  const data    = await res.json()
  const content = data.choices?.[0]?.message?.content ?? ''

  // Estrai il JSON anche se l'AI aggiunge testo prima/dopo
  const match = content.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('Risposta AI non contiene JSON valido')

  const parsed = JSON.parse(match[0])
  if (!parsed.slides || !Array.isArray(parsed.slides)) throw new Error('JSON mancante di "slides"')

  return parsed
}

// ── Export principale ─────────────────────────────────────────────────────────
export async function generateCarousel(theme, tov, numSlides) {
  try {
    return await callAI(theme, tov, numSlides)
  } catch (err) {
    console.warn('AI generation failed, fallback to template:', err.message)
    // Fallback al motore template se la chiamata AI fallisce
    return generateFromTemplate(theme, tov, numSlides)
  }
}
