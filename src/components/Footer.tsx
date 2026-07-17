import './Footer.css'
import { profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">{profile.initials}</div>
      <div className="footer-text">
        {profile.name} · {profile.title} · {profile.location}
      </div>
      <div className="footer-text">© {new Date().getFullYear()}</div>
    </footer>
  )
}
