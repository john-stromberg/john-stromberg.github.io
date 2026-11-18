import { HeroVisual } from './components/HeroVisual'
import {
  collections,
  featuredProjects,
  focusLanes,
  profile,
} from './data'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className="hero">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-grid-drift" aria-hidden="true" />
        <div className="hero-frame">
          <nav className="topnav" aria-label="Primary">
            <a href="#focus">Focus</a>
            <a href="#work">Work</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>

          <div className="hero-copy">
            <h1 className="brand">{profile.name}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="lede">{profile.summary}</p>
            <div className="cta-row">
              <a className="btn primary" href="#work">
                Browse the work
              </a>
              <a
                className="btn ghost"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap" aria-hidden="true">
            <HeroVisual />
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="focus">
          <div className="section-head">
            <h2>Focus</h2>
            <p>Three lanes that show up across the research and product work.</p>
          </div>
          <div className="focus-lanes">
            {focusLanes.map((lane) => (
              <article key={lane.title} className="lane">
                <h3>{lane.title}</h3>
                <p>{lane.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <h2>Featured</h2>
            <p>Flagship toolkits for research, banking, and PE value creation.</p>
          </div>
          <div className="featured-list">
            {featuredProjects.map((project) => {
              const isPrivate = project.access === 'private'

              return (
                <article
                  key={project.name}
                  className={isPrivate ? 'featured featured-private' : 'featured'}
                >
                  <div className="featured-meta">
                    <p className="kicker">
                      {isPrivate ? 'Private project' : 'Open source'}
                    </p>
                    <h3>
                      {isPrivate ? (
                        project.name
                      ) : (
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.name}
                        </a>
                      )}
                    </h3>
                    <p className="stack">{project.stack}</p>
                  </div>

                  <div className="featured-main">
                    <p className="featured-body">{project.blurb}</p>
                    {isPrivate && 'highlights' in project ? (
                      <>
                        <ul className="featured-highlights">
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <svg
                          className="flow-diagram"
                          viewBox="0 0 320 40"
                          role="img"
                          aria-label="Diagnose, plan, then returns"
                        >
                          <title>Diagnose → Plan → Returns</title>
                          <rect
                            x="2"
                            y="8"
                            width="86"
                            height="24"
                            rx="3"
                            className="flow-node"
                          />
                          <text x="45" y="24" textAnchor="middle" className="flow-label">
                            Diagnose
                          </text>
                          <path
                            d="M96 20 H118"
                            className="flow-edge"
                            markerEnd="url(#flow-arrow)"
                          />
                          <rect
                            x="122"
                            y="8"
                            width="74"
                            height="24"
                            rx="3"
                            className="flow-node"
                          />
                          <text
                            x="159"
                            y="24"
                            textAnchor="middle"
                            className="flow-label"
                          >
                            Plan
                          </text>
                          <path
                            d="M204 20 H226"
                            className="flow-edge"
                            markerEnd="url(#flow-arrow)"
                          />
                          <rect
                            x="230"
                            y="8"
                            width="86"
                            height="24"
                            rx="3"
                            className="flow-node accent"
                          />
                          <text
                            x="273"
                            y="24"
                            textAnchor="middle"
                            className="flow-label"
                          >
                            Returns
                          </text>
                          <defs>
                            <marker
                              id="flow-arrow"
                              viewBox="0 0 10 10"
                              refX="8"
                              refY="5"
                              markerWidth="6"
                              markerHeight="6"
                              orient="auto-start-reverse"
                            >
                              <path d="M0 0 L10 5 L0 10 z" className="flow-arrowhead" />
                            </marker>
                          </defs>
                        </svg>
                      </>
                    ) : null}
                  </div>

                  {isPrivate ? (
                    <p className="source-note">Source available on request</p>
                  ) : (
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="section" id="collections">
          <div className="section-head">
            <h2>Project collections</h2>
            <p>Grouped repositories with live counts and stack notes.</p>
          </div>
          <ul className="link-rows">
            {collections.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="row-name">{item.name}</span>
                  <span className="row-meta">
                    <span className="count">{item.count}</span>
                    <span className="stack">{item.stack}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/john-stromberg
          </a>
          <span aria-hidden="true"> · </span>
          <a href={profile.site} target="_blank" rel="noreferrer">
            john-stromberg.github.io
          </a>
        </p>
      </footer>
    </div>
  )
}
