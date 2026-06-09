const items = [
  "★ 4.7 Google Rating",
  "188+ Happy Customers",
  "100% Vegetarian",
  "Jain Options Available",
  "Swaminarayan Friendly",
  "Somerset, New Jersey",
  "Dine-In & Catering",
  "Live Food Counters",
  "Fresh Daily",
  "Fasting & Vrat Menus",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden py-4">
      <div className="marquee-track gap-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-body flex shrink-0 items-center gap-3 pr-10 text-sm font-medium text-[var(--color-muted)]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
