import SectionHead from "./SectionHead.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { featuredProjects, developmentCard } from "../data/content.js";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead
          kicker="Selected work"
          title="A mix of design, code & real-world work."
          note="A portfolio built around the things I actually enjoy doing: shaping interfaces, building frontends and making digital communication look better."
        />
        <div className="projects">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}

          <article className="project">
            <div className="project-body" style={{ padding: 30 }}>
              <div className="kicker">{developmentCard.kicker}</div>
              <div className="project-title">{developmentCard.title}</div>
              <div className="project-desc">{developmentCard.desc}</div>
              <div className="tags">
                {developmentCard.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div
                style={{
                  marginTop: 60,
                  fontFamily: "'Playfair Display'",
                  fontSize: 60,
                  letterSpacing: "-.05em",
                  color: "var(--moss)",
                }}
              >
                {developmentCard.bigText}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
