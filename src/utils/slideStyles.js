// ─── Design tokens Pagamee ───────────────────────────────────────────────────
export const COLORS = {
  primary:       '#00B4D8',   // cyan
  secondary:     '#0077B6',   // blue scuro
  accent:        '#FFC107',   // giallo/oro
  white:         '#FFFFFF',
  textMain:      '#1A1A2E',   // quasi nero
  textSecondary: '#6B7280',   // grigio
  bgAlt:         '#F0F9FF',   // azzurro chiarissimo
  border:        '#D4E8F5',
}

// Dimensione base delle slide (preview + sorgente per export)
export const SLIDE_SIZE = 540   // CSS px — export a 2× = 1080 × 1080

// TOV disponibili
export const TOV_OPTIONS = [
  {
    id: 'Educativo',
    label: 'Educativo',
    desc: 'Informativo e autorevole',
    emoji: '📚',
  },
  {
    id: 'Provocatorio',
    label: 'Provocatorio',
    desc: 'Diretto e sfidante',
    emoji: '⚡',
  },
  {
    id: 'Empatico',
    label: 'Empatico',
    desc: 'Vicino e storytelling',
    emoji: '🤝',
  },
  {
    id: 'Legale/Tecnico',
    label: 'Legale/Tecnico',
    desc: 'Formale e preciso',
    emoji: '⚖️',
  },
]
