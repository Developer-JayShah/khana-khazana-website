import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what customers say about Khana Khazana — 4.7 stars on Google with 188 reviews. Real feedback on our food, service, and catering.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Reviews | Khana Khazana",
    description: "4.7 stars on Google — read real customer reviews for Khana Khazana in Somerset, NJ.",
    url: "/testimonials",
  },
};

const reviews = [
  {
    name: "Arpit Patel",
    location: "Somerset, NJ",
    text: "Excellent, delicious food and super fast service. Every single dish was full of authentic flavor — highly recommend! Very well worth it.",
  },
  {
    name: "Kaushal Mehta",
    location: "New Jersey",
    text: "Absolutely amazing food with incredibly friendly service. The quality and taste are unmatched — from North Indian curries to Gujarati Kathiyawadi specialties. A must-visit!",
  },
  {
    name: "Shiv Kant Sharma",
    location: "New Jersey",
    text: "Amazing catering experience for our housewarming ceremony. The food was fresh, authentic, and tasted just like the restaurant. The team was professional and responsive.",
  },
  {
    name: "Priya Shah",
    location: "Somerset, NJ",
    text: "The Jain options were perfect for our family gathering. Everything was clearly prepared with care. Pani Puri and Chole Bhature were outstanding!",
  },
  {
    name: "Rajesh Nair",
    location: "New Jersey",
    text: "Best Indian vegetarian food in all of New Jersey. The Paneer Angara and Khazana Biryani are absolutely divine. We come here every week!",
  },
  {
    name: "Meera Desai",
    location: "New Jersey",
    text: "Catered our daughter's birthday with live chaat and dosa counters. The food was a huge hit — every guest complimented the quality. 10/10 would book again.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Customers Say"
        description="Real reviews from the Somerset, NJ community — rated 4.7 stars on Google with 188+ reviews."
      />

      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Rating summary */}
          <Reveal>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-end gap-3">
                    <span className="font-display text-6xl font-medium text-[var(--color-primary)]">4.7</span>
                    <div className="mb-2">
                      <div className="text-2xl text-yellow-400">★★★★★</div>
                      <p className="font-body text-sm text-[var(--color-muted)]">Based on 188 Google reviews</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps?cid=10667964267493057222&hl=en#lrd=0x89c3c100431e613f:0x940c38fae07be2c6,3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body shrink-0 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Leave a Google Review →
                </a>
              </div>
            </div>
          </Reveal>

          {/* Reviews grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 70}>
                <div className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <svg className="h-7 w-7 text-[var(--color-primary)]/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-body mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
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

          {/* CTA */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden rounded-3xl bg-[var(--color-primary)] p-8 text-center sm:p-10">
              <h3 className="text-3xl font-medium text-white sm:text-4xl">
                Planning a <em>Catering Event?</em>
              </h3>
              <p className="font-body mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80">
                Join hundreds of satisfied customers who've trusted Khana Khazana to cater their weddings,
                birthdays, religious ceremonies, and corporate events.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/catering"
                  className="font-body rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Catering Inquiry
                </Link>
                <Link
                  href="/menu"
                  className="font-body rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
