// ─── Anthropic API ────────────────────────────────────────────────────────────
// In produzione (Vercel) usa il proxy /api/generate (la key sta nell'env server).
// In locale usa la chiamata diretta con la key da localStorage.
const IS_PROD  = import.meta.env.PROD
const API_URL  = IS_PROD ? '/api/generate' : 'https://api.anthropic.com/v1/messages'
const MODEL    = 'claude-sonnet-4-20250514'

// System prompt del copywriter Pagamee
const SYSTEM_PROMPT = `Sei il copywriter di Pagamee.it — piattaforma digitale italiana di recupero crediti di lavoro (stipendi non pagati, TFR, straordinari, ferie non godute). Il target sono lavoratori dipendenti italiani (operai, impiegati, lavoratori subordinati) che hanno subito ingiustizie dal datore di lavoro.

REGOLE DI COPYWRITING:
- Linguaggio semplice, mai legalese pesante
- Frasi brevi e impattanti (max 15 parole per frase nelle slide)
- Ogni slide deve avere UN solo concetto chiaro
- Usa numeri e dati concreti quando possibile
- La CTA finale deve sempre rimandare a pagamee.it
- Non usare mai "contattaci" generico — usa "Verifica gratis se hai diritto" o "Calcola quanto ti spetta"
- Il tono varia in base al TOV selezionato dall'utente

STRUTTURA CAROSELLO:
- Slide 1 (Cover): Hook forte — titolo provocatorio/curioso con emoji strategica. Sottotitolo opzionale di 1 riga.
- Slide 2 a N-1 (Contenuto): Ogni slide ha un titolo breve (max 6 parole) e un corpo testo (max 3 righe, ~80 caratteri per riga). Può includere un dato numerico evidenziato o un'icona emoji come visual anchor.
- Slide N (CTA finale): "Recupera ciò che ti spetta" o variante + URL pagamee.it + frase motivazionale breve.

Rispondi SOLO in JSON valido, senza markdown, senza code block. Formato esatto:
{
  "slides": [
    {
      "type": "cover",
      "title": "...",
      "subtitle": "...",
      "emoji": "..."
    },
    {
      "type": "content",
      "title": "...",
      "body": "...",
      "highlight_number": "...",
      "highlight_label": "...",
      "emoji": "..."
    },
    {
      "type": "cta",
      "title": "...",
      "body": "...",
      "emoji": "..."
    }
  ]
}`

// Istruzioni specifiche per ogni TOV
function getTOVInstructions(tov) {
  switch (tov) {
    case 'Provocatorio':
      return 'USA un tono diretto e sfidante. Inizia con domande retoriche o affermazioni che destabilizzano il lettore. Metti il lavoratore di fronte alla realtà scomoda. Es: "Sai quanto ti stanno rubando ogni mese?"'
    case 'Empatico':
      return 'Parla in prima persona del dolore del lavoratore. Usa storytelling. Mostra comprensione prima di proporre soluzioni. Tono caldo, vicino, da alleato. Es: "Sappiamo quanto fa male aspettare uno stipendio che non arriva."'
    case 'Legale/Tecnico':
      return 'Cita normative specifiche (art. 2119 Codice Civile, Statuto dei Lavoratori, CCNL). Usa linguaggio preciso ma comprensibile. Trasmetti autorevolezza e competenza legale.'
    default: // Educativo
      return 'Tono informativo, chiaro e autorevole. Educa il lettore in modo progressivo, slide dopo slide. Usa dati e numeri concreti per rafforzare ogni punto.'
  }
}

// ─── Chiamata API principale ──────────────────────────────────────────────────
export async function generateCarousel(theme, tov, numSlides, apiKey) {
  const contentSlides = numSlides - 2  // cover + CTA non contano

  const userMessage = `Genera un carosello Instagram di esattamente ${numSlides} slide sul tema: "${theme}".

Struttura obbligatoria:
- 1 slide di tipo "cover" (la prima)
- ${contentSlides} slide di tipo "content" (le centrali)
- 1 slide di tipo "cta" (l'ultima)

Tone of Voice: ${tov}
${getTOVInstructions(tov)}

IMPORTANTE: restituisci SOLO JSON valido, nessun markdown, nessun testo aggiuntivo.`

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: buildHeaders(apiKey),
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: 4096,
      system:     SYSTEM_PROMPT,
      messages:   [{ role: 'user', content: userMessage }],
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${response.status}`)
  }

  const data  = await response.json()
  const text  = data.content?.[0]?.text ?? ''

  return parseJSON(text)
}

// ─── Helper headers ───────────────────────────────────────────────────────────
function buildHeaders(apiKey) {
  if (IS_PROD) {
    // In produzione il proxy Vercel usa ANTHROPIC_API_KEY dal server — nessuna key client necessaria
    return { 'content-type': 'application/json' }
  }
  // Locale: chiamata diretta con key da localStorage
  return {
    'x-api-key':                                 apiKey,
    'anthropic-version':                         '2023-06-01',
    'content-type':                              'application/json',
    'anthropic-dangerous-direct-browser-access': 'true',
  }
}

// ─── Modifica AI del carosello esistente ─────────────────────────────────────
export async function modifySlides(slides, instruction, apiKey) {
  const userMessage = `Questo è il JSON attuale del carosello:
${JSON.stringify({ slides }, null, 2)}

Modifica richiesta: "${instruction}"

Applica la modifica e restituisci il JSON completo e aggiornato.
IMPORTANTE: restituisci SOLO JSON valido, nessun markdown, nessun testo aggiuntivo.`

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: buildHeaders(apiKey),
    body: JSON.stringify({
      model:      MODEL,
      max_tokens: 4096,
      system:     SYSTEM_PROMPT,
      messages:   [{ role: 'user', content: userMessage }],
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err?.error?.message || `HTTP ${response.status}`)
  }

  const data = await response.json()
  const text = data.content?.[0]?.text ?? ''

  return parseJSON(text)
}

// ─── Helper: estrae il JSON dalla risposta (gestisce eventuali backtick) ──────
function parseJSON(text) {
  // Rimuovi eventuali code block markdown
  const clean = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/gi, '')
    .trim()

  // Trova il primo oggetto JSON valido
  const match = clean.match(/\{[\s\S]*\}/)
  if (!match) throw new Error('Risposta non valida dall\'API: JSON non trovato')

  try {
    return JSON.parse(match[0])
  } catch {
    throw new Error('Risposta non valida dall\'API: JSON malformato')
  }
}
