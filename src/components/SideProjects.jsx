import SectionHead from "./SectionHead.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { sideProjects } from "../data/content.js";

export default function SideProjects() {
  return (
    <section>
      <div className="wrap">
        <SectionHead kicker="Beyond client work" title="Projects that show how I learn." />
        <div className="projects">
          {sideProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
