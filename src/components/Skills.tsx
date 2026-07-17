import './Skills.css'
import { skillGroups } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export function Skills() {
  const { ref, visible } = useFadeUp<HTMLElement>()

  return (
    <section
      className={`skills-section fade-up ${visible ? 'visible' : ''}`}
      id="skills"
      ref={ref}
    >
      <div className="skills-intro">
        <div>
          <div className="section-label">Technical Stack</div>
          <h2>
            Full-Stack <em>Expertise</em>
          </h2>
          <p>
            From architecting robust Laravel backends to deploying on Linux servers — the complete
            picture of what I bring to every project.
          </p>
        </div>
        <div className="skills-categories">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span
                    className={`tag ${tag.highlight ? 'highlight' : ''}`}
                    key={tag.name}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
