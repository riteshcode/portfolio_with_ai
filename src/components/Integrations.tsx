import './Integrations.css'
import { integrations } from '../data/portfolio'
import { useFadeUp } from '../hooks/useFadeUp'
import { IntegrationIcon } from './IntegrationIcons'

export function Integrations() {
  const { ref, visible } = useFadeUp<HTMLElement>()

  return (
    <section
      className={`integrations-section fade-up ${visible ? 'visible' : ''}`}
      id="integrations"
      ref={ref}
    >
      <div className="section-label">Third-Party APIs</div>
      <h2>
        Integrations &amp; <em>Platforms</em>
      </h2>
      <div className="integrations-grid">
        {integrations.map((integration) => (
          <div className="integration-card" key={integration.name}>
            <div className="int-icon">
              <IntegrationIcon name={integration.name} />
            </div>
            <div className="int-name">{integration.name}</div>
            <div className="int-category">{integration.category}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
