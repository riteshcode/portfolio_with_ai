import './Hero.css'
import { contactItems, profile, stats } from '../data/portfolio'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow"></div>

      <div className="hero-left">
        <div className="hero-tag">{profile.tag}</div>
        <h1>
          RITESH<span>KUMAR</span>
        </h1>
        <p className="hero-sub">{profile.heroSub}</p>
        <div className="hero-cta">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            Get In Touch
          </a>
          <a href="#experience" className="btn-ghost">
            View Work
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-box" key={stat.label}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="contact-bar" id="contact">
          {contactItems.map((item) =>
            item.href ? (
              <a href={item.href} className="contact-item" key={item.label}>
                <span className="contact-icon">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ) : (
              <div className="contact-item" key={item.label}>
                <span className="contact-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
