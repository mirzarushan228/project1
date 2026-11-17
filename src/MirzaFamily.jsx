import { Component } from 'react'
import './MirzaFamily.css'

class MirzaFamily extends Component {
  render() {
    return (
      <main className="family-page">
        <header className="family-header">
          <a className="family-brand" href="#home" aria-label="Mirza Family home">
            <span className="family-brand-mark" aria-hidden="true">M</span>
            <span>Mirza Family</span>
          </a>
          <a className="family-nav-link" href="#family">
            Our family
          </a>
        </header>

        <section className="family-hero" id="home">
          <div className="family-hero-copy">
            <p className="family-eyebrow">Together is our favorite place</p>
            <h1>Welcome to the Mirza Family</h1>
            <p className="family-intro">
              A little home for our stories, memories, and the people who make
              every moment special.
            </p>
            <a className="family-button" href="#family">
              Meet the family <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="family-art" aria-hidden="true">
            <span className="family-art-sun" />
            <span className="family-art-letter">M</span>
            <span className="family-art-caption">Rooted in love</span>
          </div>
        </section>

        <section className="family-section" id="family">
          <div className="family-section-heading">
            <p className="family-eyebrow">The people behind our story</p>
            <h2>Our family</h2>
          </div>
          <div className="family-empty-state">
            <span className="family-empty-icon" aria-hidden="true">✦</span>
            <h3>Every great story starts with its people.</h3>
            <p>
              Add your family members’ names and details here to make this page
              your own.
            </p>
          </div>
        </section>

        <footer className="family-footer">
          <span>Mirza Family</span>
          <span>Made with love</span>
        </footer>
      </main>
    )
  }
}

export default MirzaFamily
