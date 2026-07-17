import './Cta.css'
import { profile } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export function Cta() {
  const { ref, visible } = useFadeUp<HTMLElement>()

  return (
    <section className={`cta-section fade-up ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="section-label" style={{ justifyContent: 'center' }}>
        Open to Opportunities
      </div>
      <h2>
        Let's Build Something <em>Great</em>
      </h2>
      <p>
        Looking for a reliable Laravel expert for your next project? Available for remote
        freelance and part-time contracts.
      </p>
      <div className="cta-buttons">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="btn-ghost">
          {profile.phone}
        </a>
      </div>
    </section>
  )
}
