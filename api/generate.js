// ─── Vercel Edge Function — proxy OpenRouter server-side ─────────────────────
// La chiamata AI avviene sul server: nessun CORS, chiave non esposta nel bundle.

export const config = { runtime: 'edge' }

const OPENROUTER_KEY = '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'
const MODEL          = 'anthropic/claude-3-5-haiku'

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  })
}

function buildPrompt(theme, tov, numSlides) {
  const contentCount = numSlides - 2

  const tovGuide = {
    'Educativo':        'Tono didattico e autorevole. Spiega con dati concreti e riferimenti normativi reali.',
    'Provocatorio':     'Tono diretto e sfidante. Hook forti che provocano reazione emotiva immediata.',
    'Empatico':         'Tono umano e vicino. Storytelling in prima o seconda persona. Il lettore si sente capito.',
    'Legale/Tecnico':   'Tono preciso e formale. Cita articoli di legge italiani reali (c.c., c.p.c., Stat. Lav., D.Lgs.).',
  }[tov] ?? 'Tono chiaro e diretto.'

  return `Sei il miglior social media copywriter italiano specializzato in diritto del lavoro.
Crei caroselli Instagram per Pagamee.it — startup che recupera crediti lavorativi a success fee 10%, zero anticipi.

TEMA: "${theme}"
TONE OF VOICE: ${tov} — ${tovGuide}
SLIDE TOTALI: ${numSlides} (1 cover + ${contentCount} contenuto + 1 CTA)

Costruisci uno storytelling originale e progressivo. Ogni slide avanza la narrazione, nessun concetto si ripete.
Libertà creativa totale: scegli l'angolo narrativo, l'arco emotivo, il ritmo.

REGOLE:
- Titoli: max 50 caratteri, usa \\n per andare a capo e creare equilibrio visivo
- Body: max 3 righe separate da \\n, ogni riga breve e incisiva
- highlight_number + highlight_label: SOLO se hai un dato davvero forte (%, durata, importo, articolo legge)
- Emoji: obbligatoria su cover e CTA, opzionale su content

Rispondi SOLO con JSON puro — nessun testo prima o dopo:
{
  "slides": [
    { "type": "cover", "emoji": "🔥", "title": "Titolo\\nforte", "subtitle": "Sottotitolo" },
    { "type": "content", "title": "Titolo slide", "body": "Riga 1.\\nRiga 2.\\nRiga 3.", "highlight_number": "5 anni", "highlight_label": "descrizione del dato" },
    { "type": "content", "emoji": "⚡", "title": "Slide senza highlight", "body": "Riga 1.\\nRiga 2.\\nRiga 3." },
    { "type": "cta", "emoji": "🚀", "title": "CTA\\nfinale", "body": "Riga 1.\\nRiga 2." }
  ]
}

Genera esattamente ${numSlides} slide: prima "cover", ultima "cta", tutte le altre "content".`
}

export default async function handler(req) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })
  if (req.method !== 'POST')   return json({ error: 'Method not allowed' }, 405)

  let body
  try { body = await req.json() }
  catch { return json({ error: 'Body JSON non valido' }, 400) }

  const { theme, tov, numSlides } = body ?? {}
  if (!theme || !tov || !numSlides) return json({ error: 'Parametri mancanti' }, 400)

  try {
    const aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_KEY}`,
        'Content-Type':  'application/json',
        'HTTP-Referer':  'https://pagamee.it',
        'X-Title':       'Pagamee Carousel Generator',
      },
      body: JSON.stringify({
        model:       MODEL,
        temperature: 0.9,
        max_tokens:  3000,
        messages:    [{ role: 'user', content: buildPrompt(theme, tov, numSlides) }],
      }),
    })

    if (!aiRes.ok) {
      const err = await aiRes.text()
      return json({ error: `OpenRouter ${aiRes.status}: ${err}` }, 502)
    }

    const data    = await aiRes.json()
    const content = data.choices?.[0]?.message?.content ?? ''
    const match   = content.match(/\{[\s\S]*\}/)
    if (!match) return json({ error: 'AI response senza JSON' }, 502)

    return json(JSON.parse(match[0]))

  } catch (err) {
    return json({ error: err.message }, 500)
  }
}
