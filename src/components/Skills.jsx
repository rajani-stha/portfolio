import SectionHead from "./SectionHead.jsx";
import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead kicker="Toolkit" title="What I bring to a project." />
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
