/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="wrap top">
        <Link className="brand" href="/">
          <img alt="Digital Map – Navigate your growth" src="/digital-map-logo.png" />
        </Link>
        <span className="badge">Coming soon</span>
      </div>
    </header>
  );
}
