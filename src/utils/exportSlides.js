import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

// ─── Attende che tutti i font siano caricati prima del render ─────────────────
async function waitForFonts() {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready
  }
}

// ─── Cattura un singolo elemento slide come Canvas 1080×1080 ─────────────────
async function captureSlide(element) {
  await waitForFonts()

  const canvas = await html2canvas(element, {
    scale:           2,          // 540 × 2 = 1080 px
    useCORS:         true,
    allowTaint:      false,
    backgroundColor: null,
    logging:         false,
    width:           540,
    height:          540,
    windowWidth:     540,
    windowHeight:    540,
    // Evita artefatti da scroll
    scrollX:         0,
    scrollY:         0,
  })

  return canvas
}

// ─── Converte un Canvas in Blob PNG ──────────────────────────────────────────
function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob)
      else reject(new Error('toBlob fallito'))
    }, 'image/png', 1.0)
  })
}

// ─── Scarica una singola slide ───────────────────────────────────────────────
export async function exportSingleSlide(element, filename) {
  if (!element) throw new Error('Elemento slide non trovato')

  // Prendiamo il primo figlio che è il div 540×540 reale
  const target = element.firstElementChild ?? element

  const canvas = await captureSlide(target)
  const blob   = await canvasToBlob(canvas)
  saveAs(blob, filename)
}

// ─── Scarica tutte le slide come ZIP ─────────────────────────────────────────
export async function exportAllSlides(refs, count) {
  const zip = new JSZip()

  for (let i = 0; i < count; i++) {
    const wrapper = refs[i]
    if (!wrapper) continue

    const target = wrapper.firstElementChild ?? wrapper

    const canvas = await captureSlide(target)
    const blob   = await canvasToBlob(canvas)
    const name   = `slide-${String(i + 1).padStart(2, '0')}.png`
    zip.file(name, blob)
  }

  const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' })
  saveAs(zipBlob, 'pagamee-carosello.zip')
}
