import { useEffect, useState } from 'react'

const THEMES = ['phosphor', 'harbor', 'daylight', 'graphite'] as const

type ThemeId = (typeof THEMES)[number]

const STORAGE_KEY = 'portfolio-theme'

const LABELS: Record<ThemeId, string> = {
  phosphor: 'Phosphor',
  harbor: 'Harbor',
  daylight: 'Daylight',
  graphite: 'Graphite',
}

function isThemeId(value: string | null): value is ThemeId {
  return THEMES.includes(value as ThemeId)
}

function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isThemeId(stored)) return stored
  } catch {
    /* ignore */
  }
  return 'phosphor'
}

function applyTheme(theme: ThemeId) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemePicker() {
  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof document === 'undefined') return 'phosphor'
    const current = document.documentElement.getAttribute('data-theme')
    return isThemeId(current) ? current : readStoredTheme()
  })

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return (
    <div className="theme-picker" role="group" aria-label="Themes">
      <span className="theme-picker-label">Themes</span>
      {THEMES.map((id) => (
        <button
          key={id}
          type="button"
          className="theme-picker-btn"
          aria-pressed={theme === id}
          onClick={() => setTheme(id)}
        >
          {LABELS[id]}
        </button>
      ))}
    </div>
  )
}
