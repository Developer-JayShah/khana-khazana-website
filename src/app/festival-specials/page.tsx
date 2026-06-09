import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Festival Specials",
  description: "Seasonal and festival special vegetarian menus from Khana Khazana in Somerset, NJ — sweets, snacks, and festive dishes for holidays and occasions.",
  alternates: { canonical: "/festival-specials" },
};

const upcomingFestivals = ["Diwali", "Navratri", "Holi", "Janmashtami", "Ganesh Chaturthi", "Eid", "Christmas", "New Year"];

export default function FestivalSpecialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Festival Specials"
        title="Seasonal & Festival Menus"
        description="Special vegetarian menus crafted for festivals, holidays, and celebrations — updated seasonally."
      />

      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 text-center sm:p-12">
              <span className="text-5xl">🪔</span>
              <h2 className="mt-5 text-3xl font-medium sm:text-4xl">
                No Active Specials Right Now
              </h2>
              <p className="font-body mx-auto mt-4 max-w-md text-base text-[var(--color-muted)]">
                Our festival menus are updated seasonally. Check back during major
                Indian festivals and holidays for special dishes, sweets, and limited-time offerings.
              </p>

              <div className="mt-8">
                <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                  We celebrate
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {upcomingFestivals.map((f) => (
                    <span
                      key={f}
                      className="font-body rounded-full border border-orange-200 bg-white px-4 py-1.5 text-sm font-medium text-[var(--color-text)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <span className="text-2xl">📞</span>
                <h3 className="mt-3 text-xl font-medium">Ask About Upcoming Specials</h3>
                <p className="font-body mt-2 text-sm text-[var(--color-muted)]">
                  Call us or send a message to ask about our next festival menu or special event catering.
                </p>
                <a
                  href="tel:7323669116"
                  className="font-body mt-4 inline-block text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  732-366-9116 →
                </a>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <span className="text-2xl">🍽️</span>
                <h3 className="mt-3 text-xl font-medium">Festival Catering Available</h3>
                <p className="font-body mt-2 text-sm text-[var(--color-muted)]">
                  Planning a religious event or festive gathering? We offer full catering with live counters.
                </p>
                <Link
                  href="/catering"
                  className="font-body mt-4 inline-block text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  Catering Inquiry →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 text-center">
              <Link
                href="/menu"
                className="font-body inline-block rounded-lg bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Browse Our Full Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
