import { email } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div className="kicker">Have a project in mind?</div>
          <h2>Let's make something clear, useful and memorable.</h2>
          <p>
            Whether it starts as a Figma frame, a rough idea or a blank page, I enjoy turning it
            into something people can actually use.
          </p>
          <div className="actions">
            <a className="btn" href={`mailto:${email}`}>Email me ↗</a>
            <a className="btn" href="#work">See selected work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
