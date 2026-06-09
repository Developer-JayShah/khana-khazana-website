import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const testimonials = [
  {
    name: "Arpit Patel",
    location: "Somerset, NJ",
    text: "Excellent, delicious food and super fast service. Every dish was full of flavor — highly recommend! Very well worth it.",
  },
  {
    name: "Kaushal Mehta",
    location: "New Jersey",
    text: "Absolutely amazing food with friendly service. The quality and taste are unmatched — from North Indian curries to Gujarati Kathiyawadi specialties.",
  },
  {
    name: "Shiv Kant Sharma",
    location: "New Jersey",
    text: "Amazing catering experience for our housewarming. The food was fresh, authentic, and tasted just like the restaurant. Highly recommended!",
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="bg-[var(--color-bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Customer Reviews
              </p>
              <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
                Loved by the<br />
                <em>Local Community</em>
              </h2>
              <div className="font-body mt-3 flex items-center gap-3 text-[var(--color-muted)]">
                <span className="text-xl text-yellow-400">★★★★★</span>
                <span className="text-sm font-semibold">4.7 on Google · 188 Reviews</span>
              </div>
            </div>
            <Link
              href="/testimonials"
              className="font-body shrink-0 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              All Reviews →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-900/10">
                {/* Quote mark */}
                <svg className="h-8 w-8 text-[var(--color-primary)]/20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="font-body mt-4 flex-1 text-base leading-7 text-[var(--color-muted)]">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
                  <div>
                    <p className="font-body font-semibold text-[var(--color-text)]">{review.name}</p>
                    <p className="font-body mt-0.5 text-xs text-[var(--color-muted)]">{review.location}</p>
                  </div>
                  <span className="text-sm text-yellow-400">★★★★★</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-[var(--color-primary)]">
            <div className="grid items-center gap-6 p-8 sm:grid-cols-2 sm:p-10">
              <div>
                <h3 className="text-3xl font-medium text-white sm:text-4xl">
                  Planning a<br /><em>Catering Event?</em>
                </h3>
                <p className="font-body mt-3 text-sm leading-6 text-white/80">
                  Vegetarian catering for weddings, birthdays, religious events, corporate
                  gatherings, and family functions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <Link
                  href="/catering"
                  className="font-body inline-block rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Start Catering Inquiry
                </Link>
                <Link
                  href="/menu"
                  className="font-body inline-block rounded-lg border border-white/40 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
