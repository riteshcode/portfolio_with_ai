import './Marquee.css'
import { marqueeSkills } from '../data/portfolio'

export function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills]

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((skill, i) => (
          <div className="marquee-item" key={`${skill}-${i}`}>
            {skill} <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  )
}
