import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Indian vegetarian food stories, catering tips, and updates from Khana Khazana in Somerset, NJ.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Khana Khazana",
    description: "Food stories, catering tips, and local updates from Khana Khazana.",
    url: "/blog",
  },
  robots: { index: false, follow: false },
};

const posts = [
  {
    category: "Catering",
    title: "Indian Vegetarian Catering for Events in Somerset, NJ",
    excerpt:
      "Ideas and tips for planning vegetarian Indian catering for weddings, birthdays, religious functions, and corporate gatherings. Here's what to expect when you book with us.",
    readTime: "4 min read",
  },
  {
    category: "Food Guide",
    title: "Jain & Swaminarayan Food Options at Khana Khazana",
    excerpt:
      "Learn how Khana Khazana supports vegetarian traditions with Jain and Swaminarayan-friendly options available on request for suitable dishes.",
    readTime: "3 min read",
  },
  {
    category: "Menu Highlights",
    title: "Popular Indian Street Food Favourites to Try",
    excerpt:
      "Raj Kachori, Pav Bhaji, Pani Puri, and more — discover the customer-loved street food and chaat favorites from our Nashta Junction menu.",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Updates & Food Stories"
        description="Menu highlights, catering tips, and local updates from the Khana Khazana kitchen."
      />

      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-body inline-block rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-bold text-[var(--color-primary)]">
                      {post.category}
                    </span>
                    <span className="font-body text-xs text-[var(--color-muted)]">{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 flex-1 text-xl font-medium leading-snug text-[var(--color-text)] transition group-hover:text-[var(--color-primary)]">
                    {post.title}
                  </h2>
                  <p className="font-body mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                    <span className="font-body text-xs font-bold text-[var(--color-primary)]">
                      Coming Soon
                    </span>
                    <span className="font-body text-xs text-[var(--color-muted)]">Khana Khazana</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
              <h3 className="text-2xl font-medium">Want to stay updated?</h3>
              <p className="font-body mt-2 text-sm text-[var(--color-muted)]">
                New articles and menu updates are on the way. In the meantime, explore our full menu or inquire about catering.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/menu"
                  className="font-body rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  View Menu
                </Link>
                <Link
                  href="/catering"
                  className="font-body rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Catering Inquiry
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
