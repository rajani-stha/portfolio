export default function SectionHead({ kicker, title, note }) {
  return (
    <div className="section-head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {note && <div className="section-note">{note}</div>}
    </div>
  );
}
