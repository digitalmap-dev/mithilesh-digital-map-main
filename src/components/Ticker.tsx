const ITEMS = ["Digital Map", "Navigate your growth", "Coming soon"];

export default function Ticker() {
  return (
    <div className="ticker">
      <p>{ITEMS.join("  /  ")}</p>
    </div>
  );
}
