import { CONTACT_PHONE, CONTACT_TEL, TEAM } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-brand">
            <strong>Digital Map</strong>
            <p>Navigate your growth</p>
          </div>
          <a className="contact" href={CONTACT_TEL}>
            <span className="role">Contact Digital Map</span>
            <strong>{CONTACT_PHONE}</strong>
          </a>
        </div>

        <ul className="team">
          {TEAM.map((m) => (
            <li key={m.name}>
              <span className="role">{m.role}</span>
              <a
                className="linkedin-link"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn (opens in a new tab)`}
              >
                <strong>{m.name}</strong>
                <span className="linkedin-badge" aria-hidden="true">in</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="copyright">© 2026 Digital Map. All rights reserved.</div>
      </div>
    </footer>
  );
}
