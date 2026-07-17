import './Experience.css'
import { experiences } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'

export function Experience() {
  const { ref, visible } = useFadeUp<HTMLElement>()

  return (
    <section
      className={`experience-section fade-up ${visible ? 'visible' : ''}`}
      id="experience"
      ref={ref}
    >
      <div className="exp-header">
        <div>
          <div className="section-label">Career Timeline</div>
          <h2>
            Where I've <em>Worked</em>
          </h2>
        </div>
        <p>
          Building production-grade software for Australian and global clients, with a focus on
          scalability, clean code, and delivering business value.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="exp-card" key={exp.company}>
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">
                {exp.company}
                <br />
                {exp.location}
              </div>
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-location">{exp.stack}</div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-projects">
                {exp.projects.map((project) => (
                  <div className="project-item" key={project.name}>
                    <div className="project-name">{project.name}</div>
                    <div className="project-desc">{project.desc}</div>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        {project.link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
