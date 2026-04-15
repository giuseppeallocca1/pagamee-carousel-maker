// ─── Generazione carousel — OpenRouter AI (creative, no template) ─────────────
// L'AI genera ogni carosello da zero: tema libero, storytelling originale.
// Il template engine viene usato SOLO se la rete è irraggiungibile.
import { generateFromTemplate } from './templates'

const OPENROUTER_KEY = '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'
const MODEL          = 'anthropic/claude-3-5-haiku'
const API_URL        = 'https://openrouter.ai/api/v1/chat/completions'

// ── Prompt creativo — nessun template, libertà totale ────────────────────────
function buildPrompt(theme, tov, numSlides) {
  const contentCount = numSlides - 2

  const tovGuide = {
    'Educativo':
      `Tono didattico e autorevole. Spiega, informa, educa.
       Usa dati concreti, statistiche, riferimenti normativi reali (se pertinenti).
       Il lettore impara qualcosa di utile ad ogni slide.`,

    'Provocatorio':
      `Tono diretto, scomodo, sfidante. Spacca lo scroll.
       Usa hook forti che provocano una reazione emotiva immediata.
       Metti in discussione abitudini, credenze o comportamenti del lettore.
       Ogni slide deve essere un piccolo pugno nello stomaco — costruttivo.`,

    'Empatico':
      `Tono umano, vicino, di ascolto. Parla al cuore prima che alla testa.
       Usa storytelling in prima o seconda persona.
       Il lettore deve sentirsi capito, non giudicato.
       Ogni slide è un passo verso una soluzione condivisa.`,

    'Legale/Tecnico':
      `Tono preciso, formale, autorevole. Cita articoli di legge reali italiani
       (Codice Civile, Statuto dei Lavoratori, D.Lgs., Corte di Cassazione, ecc.)
       quando pertinenti al tema. Usa terminologia tecnica corretta.
       Il lettore deve sentire che sta leggendo un esperto vero.`,
  }[tov] ?? 'Tono chiaro, diretto e utile al lettore.'

  return `Sei il miglior social media copywriter italiano.
Crei caroselli Instagram per Pagamee.it — una startup legale italiana che
recupera crediti lavorativi (stipendi, TFR, straordinari, ferie non pagate)
a success fee del 10%, zero anticipi, zero rischi per il lavoratore.

══════════════════════════════════════════
BRIEF CREATIVO
══════════════════════════════════════════

TEMA: "${theme}"
TONE OF VOICE: ${tov}
${tovGuide}

NUMERO SLIDE TOTALI: ${numSlides}
Struttura obbligatoria: 1 slide cover + ${contentCount} slide contenuto + 1 slide CTA finale.

══════════════════════════════════════════
LIBERTÀ CREATIVA
══════════════════════════════════════════

Non seguire schemi fissi. Parti dal tema e costruisci uno storytelling
originale e progressivo — ogni slide deve avanzare la narrazione,
sorprendere, creare tensione o curiosità verso la prossima.

Puoi scegliere liberamente:
- l'angolo narrativo (problema, soluzione, dati, storia, domanda retorica…)
- l'arco emotivo (paura → speranza, ignoranza → consapevolezza, rabbia → azione…)
- se usare o meno dati numerici (solo quando sono forti e pertinenti)
- il ritmo (slide veloci e d'impatto, o più espansive — in base al tema)

L'unica regola: nessuna slide deve sembrare uguale alle altre.
Ogni slide è un capitolo diverso della stessa storia.

══════════════════════════════════════════
REGOLE DI SCRITTURA
══════════════════════════════════════════

TITOLI:
- Massimo 50 caratteri totali
- Usa \\n per andare a capo e creare equilibrio visivo
- Devono fermare lo scroll anche da soli, senza leggere il corpo

BODY (testo corpo):
- Massimo 3 righe, separate da \\n
- Ogni riga breve e incisiva — non prose lunghe
- Deve amplificare il titolo, non ripeterlo

HIGHLIGHT NUMBER (opzionale, solo per contenuto):
- Usa SOLO se hai un dato numerico davvero d'impatto (percentuale, durata, importo, articolo di legge, statistica)
- highlight_number: il dato visivo grande (es. "94%", "5 anni", "€2.300", "Art. 18")
- highlight_label: descrizione breve del dato (max 60 caratteri)
- Se non hai un dato forte: ometti entrambi i campi

EMOJI:
- Cover: 1 emoji obbligatoria, pertinente al tema
- CTA: 1 emoji obbligatoria, energica e d'azione
- Content: opzionale — includi solo se aggiunge significato

══════════════════════════════════════════
OUTPUT — JSON PURO (NESSUN TESTO PRIMA O DOPO)
══════════════════════════════════════════

{
  "slides": [
    {
      "type": "cover",
      "emoji": "🔥",
      "title": "Titolo forte\\nche ferma lo scroll",
      "subtitle": "Sottotitolo che amplifica e contestualizza"
    },
    {
      "type": "content",
      "title": "Titolo slide contenuto",
      "body": "Prima riga impatto.\\nSeconda riga che approfondisce.\\nTerza riga che chiude il concetto.",
      "highlight_number": "5 anni",
      "highlight_label": "di crediti recuperabili — anche dopo aver lasciato"
    },
    {
      "type": "content",
      "emoji": "⚡",
      "title": "Slide senza highlight number",
      "body": "Riga uno.\\nRiga due.\\nRiga tre."
    },
    {
      "type": "cta",
      "emoji": "🚀",
      "title": "Titolo CTA\\nurto finale verso l'azione",
      "body": "Riga 1 motivante.\\nRiga 2 con la proposta concreta di Pagamee."
    }
  ]
}

Genera esattamente ${numSlides} slide: la prima di tipo "cover", le ultime di tipo "cta", tutte le altre di tipo "content".
Rispondi SOLO con il JSON — nessun testo aggiuntivo, nessuna spiegazione.`
}

// ── Chiamata OpenRouter ───────────────────────────────────────────────────────
async function callAI(theme, tov, numSlides) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_KEY}`,
      'Content-Type':  'application/json',
      'HTTP-Referer':  'https://pagamee.it',
      'X-Title':       'Pagamee Carousel Generator',
    },
    body: JSON.stringify({
      model:       MODEL,
      temperature: 0.9,   // più alta = più creatività
      max_tokens:  3000,
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
  if (!match) throw new Error('Risposta AI senza JSON')

  const parsed = JSON.parse(match[0])
  if (!Array.isArray(parsed.slides) || parsed.slides.length === 0)
    throw new Error('JSON non contiene slides')

  return parsed
}

// ── Export principale ─────────────────────────────────────────────────────────
export async function generateCarousel(theme, tov, numSlides) {
  try {
    return await callAI(theme, tov, numSlides)
  } catch (err) {
    console.warn('[Pagamee] AI fallita, uso template locale:', err.message)
    const result = generateFromTemplate(theme, tov, numSlides)
    return { ...result, _fallback: true }
  }
}
