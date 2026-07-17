import './Education.css'
import { education } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export function Education() {
  const { ref, visible } = useFadeUp<HTMLElement>()

  return (
    <section
      className={`education-section fade-up ${visible ? 'visible' : ''}`}
      id="education"
      ref={ref}
    >
      <div className="section-label">Qualifications</div>
      <h2>
        Education &amp; <em>Background</em>
      </h2>
      <div className="edu-grid">
        {education.map((item) => (
          <div className="edu-card" key={item.degree}>
            <div className="edu-inst">{item.inst}</div>
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-year">{item.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
