import Tags from "./Tags.jsx";

// Plain card (no mock-up) by default; pass `blocks` + `variant` for the visual card.
export default function ProjectCard({ kicker, title, desc, tags, variant = "", blocks, style }) {
  const isVisual = Array.isArray(blocks);
  const cls = ["project", isVisual && "visual", variant].filter(Boolean).join(" ");

  return (
    <article className={cls}>
      {isVisual && (
        <div className="mock">
          {blocks.map((b, i) => (
            <div key={i} className={`block ${b}`.trim()} />
          ))}
        </div>
      )}
      <div className="project-body" style={style}>
        <div className="kicker">{kicker}</div>
        <div className="project-title">{title}</div>
        <div className="project-desc">{desc}</div>
        <Tags items={tags} />
      </div>
    </article>
  );
}
