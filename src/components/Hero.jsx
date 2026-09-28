export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">UI/UX · Frontend · Visual Design</div>
          <h1>Designing <em>useful</em> digital experiences.</h1>
          <p className="hero-copy">
            I'm Rajani Shrestha — a UI/UX and frontend developer who enjoys turning ideas into clean
            interfaces, thoughtful graphics and working web experiences.
          </p>
          <div className="actions">
            <a className="btn dark" href="#work">Explore my work ↓</a>
            <a className="btn light" href="#contact">Get in touch ↗</a>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit" />
          <div className="portrait" aria-label="Portrait placeholder" />
          <div className="leaf one">🌿</div>
          <div className="leaf two">🍃</div>
        </div>
      </div>
    </section>
  );
}
