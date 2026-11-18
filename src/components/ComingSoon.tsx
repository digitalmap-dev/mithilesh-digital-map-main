/* eslint-disable @next/next/no-img-element */
import { CONTACT_PHONE, CONTACT_TEL } from "@/lib/site";

export default function ComingSoon() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <div className="eyebrow">Something new is on the way</div>
          <h1>
            Coming
            <br />
            <em>soon.</em>
          </h1>
          <p className="lead">
            We&apos;re building the new Digital Map website — a better way to
            navigate your growth. Stay tuned, and reach out to us anytime in
            the meantime.
          </p>
          <div className="cta-row">
            <a className="cta" href={CONTACT_TEL}>
              Call us · {CONTACT_PHONE} <span aria-hidden="true">↗</span>
            </a>
            <span className="cta-note">We&apos;d love to hear from you.</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img alt="" src="/digital-map-logo.png" />
        </div>
      </div>
    </section>
  );
}
