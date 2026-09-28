import { about } from "../data/content.js";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about">
          <div className="about-grid">
            <div>
              <div className="kicker">{about.kicker}</div>
              <div className="quote">{about.quote}</div>
            </div>
            <div>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="mono" style={{ fontSize: 11, color: "#aeb5a0" }}>{about.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
