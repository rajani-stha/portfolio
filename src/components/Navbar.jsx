import { navLinks } from "../data/content.js";

export default function Navbar() {
  return (
    <nav className="nav">
      <a className="brand" href="#top">Rajani<span>.</span></a>
      <div className="navlinks">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
      <a className="navcta" href="#contact">Let's talk ↗</a>
    </nav>
  );
}
