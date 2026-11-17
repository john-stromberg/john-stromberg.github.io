import { HeroVisual } from './components/HeroVisual'
import {
  collections,
  featured,
  focusLanes,
  profile,
  standalone,
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
            <p>A flagship toolkit for asset-management and banking research.</p>
          </div>
          <article className="featured">
            <div className="featured-meta">
              <p className="kicker">Open source</p>
              <h3>
                <a href={featured.href} target="_blank" rel="noreferrer">
                  {featured.name}
                </a>
              </h3>
              <p className="stack">{featured.stack}</p>
            </div>
            <p className="featured-body">{featured.blurb}</p>
            <a
              className="text-link"
              href={featured.href}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </article>
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

        <section className="section" id="archive">
          <div className="section-head">
            <h2>Standalone / archive</h2>
            <p>Smaller utilities and preserved teaching material.</p>
          </div>
          <ul className="link-rows quiet">
            {standalone.map((item) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="row-name">{item.name}</span>
                  <span className="row-meta">
                    <span className="stack">{item.note}</span>
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
