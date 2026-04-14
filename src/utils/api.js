// ─── Generazione carousel — nessuna API key richiesta ────────────────────────
// Usa il motore template interno (templates.js). Zero dipendenze esterne.
import { generateFromTemplate } from './templates'

export async function generateCarousel(theme, tov, numSlides) {
  // Simula un piccolo ritardo per dare feedback visivo del "pensiero"
  await new Promise(r => setTimeout(r, 600))
  return generateFromTemplate(theme, tov, numSlides)
}
