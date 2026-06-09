import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const posts = [
  {
    category: "Catering",
    title: "Indian Vegetarian Catering for Events in Somerset, NJ",
    excerpt: "Planning a family gathering, religious event, or corporate lunch? Explore vegetarian catering options from Khana Khazana.",
    href: "/blog",
  },
  {
    category: "Food Options",
    title: "Jain & Swaminarayan Food — What We Offer",
    excerpt: "Khana Khazana offers Jain and Swaminarayan-friendly options for selected menu items and catering needs.",
    href: "/blog",
  },
  {
    category: "Menu Highlights",
    title: "Popular Indian Street Food Favourites to Try",
    excerpt: "From Raj Kachori to Pav Bhaji — discover the customer-loved street food favorites from our vegetarian menu.",
    href: "/blog",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Latest Updates
              </p>
              <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
                From Our<br />
                <em>Kitchen & Catering</em>
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-body shrink-0 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Visit Blog →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 80}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-lg"
              >
                <span className="font-body inline-block self-start rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
                  {post.category}
                </span>
                <h3 className="mt-4 flex-1 text-xl font-medium leading-snug text-[var(--color-text)] transition group-hover:text-[var(--color-primary)]">
                  {post.title}
                </h3>
                <p className="font-body mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {post.excerpt}
                </p>
                <p className="font-body mt-5 text-xs font-bold text-[var(--color-primary)]">
                  Coming Soon
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
