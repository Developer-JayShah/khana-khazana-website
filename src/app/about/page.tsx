import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Khana Khazana — an authentic Indian vegetarian restaurant in Somerset, NJ serving Gujarati, Punjabi, and Indo-Chinese food with Jain and Swaminarayan options.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Khana Khazana",
    description: "Our story, our food, and what makes us Somerset's go-to vegetarian Indian restaurant.",
    url: "/about",
  },
};

const values = [
  {
    icon: "🌿",
    title: "100% Vegetarian",
    body: "Every dish is crafted without meat — made for vegetarian traditions, dietary preferences, and mindful eating.",
  },
  {
    icon: "🙏",
    title: "Jain & Swaminarayan",
    body: "We honor dietary traditions. Jain and Swaminarayan-friendly versions are available on request for most dishes.",
  },
  {
    icon: "🍽️",
    title: "Catering Services",
    body: "From intimate family dinners to large weddings and corporate events, we bring authentic Indian flavors to your occasion.",
  },
  {
    icon: "⭐",
    title: "Community Favourite",
    body: "Rated 4.7 on Google by 188+ local customers — we're proud to be Somerset's most-loved Indian vegetarian table.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Heart Behind Khana Khazana"
        description="A local vegetarian Indian restaurant built on authentic flavors, warm hospitality, and a passion for real home-style cooking."
      />

      {/* Story section */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <Reveal>
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Our Story
              </p>
              <h2 className="mt-3 text-4xl font-medium leading-tight sm:text-5xl">
                Born from a Love of<br /><em>Indian Home Cooking</em>
              </h2>
              <p className="font-body mt-5 text-base leading-7 text-[var(--color-muted)]">
                Khana Khazana was founded with a simple mission: to bring the
                warmth, color, and depth of authentic Indian vegetarian cooking
                to Somerset, New Jersey. What started as a passion for homestyle
                recipes has grown into a full restaurant and catering service
                loved by the local community.
              </p>
              <p className="font-body mt-4 text-base leading-7 text-[var(--color-muted)]">
                Our menu is a celebration of India's incredible regional diversity
                — from the tangy street food of Mumbai and the hearty curries of
                Punjab, to the delicate Gujarati farsan and bold Indo-Chinese
                favorites. Every dish is made fresh, with care, for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="font-body rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  View Our Menu
                </Link>
                <Link
                  href="/contact"
                  className="font-body rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative h-80 overflow-hidden rounded-3xl shadow-2xl shadow-orange-900/10 lg:h-[500px]">
                <Image
                  src="/about-preview.jpg"
                  alt="Inside Khana Khazana Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                    <p className="font-body text-sm font-bold text-[var(--color-text)]">★ 4.7 on Google</p>
                    <p className="font-body mt-0.5 text-xs text-[var(--color-muted)]">Rated by 188+ local customers in Somerset, NJ</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              What We Stand For
            </p>
            <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
              Our Values
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <span className="text-3xl">{v.icon}</span>
                  <h3 className="mt-4 text-xl font-medium">{v.title}</h3>
                  <p className="font-body mt-2 text-sm leading-6 text-[var(--color-muted)]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-surface)] py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Come Dine With Us
            </h2>
            <p className="font-body mt-4 text-base text-[var(--color-muted)]">
              Visit us at 1760 Easton Ave, Somerset, NJ — Tuesday through Sunday,
              11:00 AM to 9:30 PM. Or inquire about catering for your next event.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/catering"
                className="font-body rounded-lg bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Catering Inquiry
              </Link>
              <a
                href="tel:7323669116"
                className="font-body rounded-lg border border-[var(--color-border)] px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Call: 732-366-9116
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
