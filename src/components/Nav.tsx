import { useState } from 'react'
import './Nav.css'
import { profile } from '../data/portfolio'
import { applyTheme, type Theme } from '../theme'
import { MoonIcon, SunIcon } from './ThemeIcons'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function getCurrentTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export function Nav() {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme)

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <nav>
      <div className="nav-logo">{profile.initials}</div>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        type="button"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <SunIcon className="theme-toggle-icon" /> : <MoonIcon className="theme-toggle-icon" />}
      </button>
    </nav>
  )
}
