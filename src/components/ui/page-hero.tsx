type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-12 sm:py-16">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-[var(--color-accent)]" />
          <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="font-body mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
}
