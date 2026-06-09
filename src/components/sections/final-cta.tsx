import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7b2d00] via-[var(--color-primary)] to-[#e8600a]" />
      {/* Decorative circles */}
      <div className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute right-40 bottom-10 h-32 w-32 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-body inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
          Khana Khazana · Somerset, NJ
        </span>

        <h2 className="mt-6 text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
          Experience the Best of<br />
          <em>Indian Vegetarian Cuisine</em>
        </h2>

        <p className="font-body mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
          Visit us for dine-in or let us cater your next event. From family
          gatherings to corporate lunches — we bring authentic Indian flavors
          to every table.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="font-body rounded-lg bg-white px-8 py-4 text-sm font-bold text-[var(--color-primary)] transition hover:bg-white/90 hover:scale-[1.03]"
          >
            View Full Menu
          </Link>
          <Link
            href="/catering"
            className="font-body rounded-lg border border-white/50 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Catering Inquiry
          </Link>
        </div>

        <div className="font-body mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/60">
          <span>Tue – Sun: 11:00 AM – 9:30 PM</span>
          <span>·</span>
          <span>1760 Easton Ave, Somerset, NJ</span>
          <span>·</span>
          <a href="tel:7323669116" className="hover:text-white">732-366-9116</a>
        </div>
      </div>
    </section>
  );
}
