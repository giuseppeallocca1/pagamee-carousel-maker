import html2canvas from 'html2canvas'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

// ─── Attende font + immagini prima del render ─────────────────────────────────
async function waitForFonts() {
  if (document.fonts?.ready) await document.fonts.ready
}

async function waitForImages(el) {
  const imgs = Array.from(el.querySelectorAll('img'))
  await Promise.allSettled(
    imgs.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(res => { img.onload = res; img.onerror = res })
    )
  )
}

// ─── Cattura il nodo slide come canvas 1080×1080 ──────────────────────────────
// Strategia: clona il nodo, lo piazza temporaneamente a (0,0) visibile,
// html2canvas lo cattura pixel-perfect, poi lo rimuove.
async function captureSlide(slideEl) {
  await waitForFonts()
  await waitForImages(slideEl)

  // ── 1. Clone posizionato in alto a sinistra ──
  const clone = slideEl.cloneNode(true)
  Object.assign(clone.style, {
    position:      'fixed',
    top:           '0',
    left:          '0',
    width:         '540px',
    height:        '540px',
    zIndex:        '999999',
    pointerEvents: 'none',
    margin:        '0',
    padding:       '0',
    overflow:      'hidden',
  })
  document.body.appendChild(clone)

  // ── 2. Un tick di rendering prima di catturare ──
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))

  let canvas
  try {
    canvas = await html2canvas(clone, {
      scale:           2,           // 540 × 2 = 1080 px export
      useCORS:         true,
      allowTaint:      false,
      backgroundColor: null,        // preserva background CSS del nodo
      logging:         false,
      width:           540,
      height:          540,
      x:               0,
      y:               0,
      scrollX:         0,
      scrollY:         0,
      imageTimeout:    8000,
      onclone:         (_, el) => {
        // Rimuovi eventuali trasformazioni che potrebbero distorcere
        el.style.transform = 'none'
      },
    })
  } finally {
    // ── 3. Rimuovi sempre il clone, anche in caso di errore ──
    document.body.removeChild(clone)
  }

  return canvas
}

// ─── Canvas → Blob PNG ────────────────────────────────────────────────────────
function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('toBlob failed')), 'image/png', 1.0)
  })
}

// ─── Export singola slide ─────────────────────────────────────────────────────
export async function exportSingleSlide(wrapper, filename) {
  if (!wrapper) throw new Error('Elemento slide non trovato')
  // firstElementChild = il div 540×540 reale (SlideRenderer)
  const target = wrapper.firstElementChild ?? wrapper
  const canvas = await captureSlide(target)
  const blob   = await canvasToBlob(canvas)
  saveAs(blob, filename)
}

// ─── Export tutte le slide → ZIP ─────────────────────────────────────────────
export async function exportAllSlides(refs, count) {
  const zip = new JSZip()

  for (let i = 0; i < count; i++) {
    const wrapper = refs[i]
    if (!wrapper) continue
    const target = wrapper.firstElementChild ?? wrapper
    const canvas = await captureSlide(target)
    const blob   = await canvasToBlob(canvas)
    zip.file(`slide-${String(i + 1).padStart(2, '0')}.png`, blob)
  }

  const zipBlob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' })
  saveAs(zipBlob, 'pagamee-carosello.zip')
}
