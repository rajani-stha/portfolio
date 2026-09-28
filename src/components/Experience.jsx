import SectionHead from "./SectionHead.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead kicker="Experience" title="The path so far." />
        <div className="timeline">
          <div />
          <div>
            {experience.map((r) => (
              <div className="role" key={r.title}>
                <div className="date">{r.date}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
