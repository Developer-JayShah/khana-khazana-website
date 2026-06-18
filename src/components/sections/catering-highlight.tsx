import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const occasions = ["Weddings", "Birthdays", "Corporate Events", "Baby Showers", "Religious Functions", "Family Gatherings", "Navratri / Vrat Fasting"];

export default function CateringHighlight() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <Reveal>
            <div className="group relative h-80 overflow-hidden rounded-3xl shadow-2xl shadow-orange-900/10 lg:h-[520px]">
              <Image
                src="/Catering.jpg"
                alt="Khana Khazana catering service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADEQQh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABkRAQACAwAAAAAAAAAAAAAAAAEAAhEhQf/aAAwDAQACEQMRAD8ApTtpDmtVLXIxUWE+EHBoyIiCSvTMUbn/2Q=="
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="font-body text-sm font-semibold text-[var(--color-text)]">
                    Live Counters Available
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150}>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Catering Services
            </p>
            <h2 className="mt-3 text-4xl font-medium leading-tight sm:text-5xl">
              Catering for<br />
              <em>Every Occasion</em>
            </h2>
            <p className="font-body mt-5 text-base leading-7 text-[var(--color-muted)]">
              From intimate family gatherings to grand weddings, Khana Khazana
              brings authentic Indian vegetarian flavors to your event — with
              customised menus, Jain options, fasting (vrat) menus, and live food counters.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {occasions.map((o) => (
                <span
                  key={o}
                  className="font-body rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-1.5 text-sm font-medium text-[var(--color-text)]"
                >
                  {o}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <p className="text-2xl font-medium text-[var(--color-primary)]">Live</p>
                <p className="font-body mt-1 text-sm text-[var(--color-muted)]">
                  Dosa, Chaat, Pav Bhaji & Pakoda counters
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <p className="text-2xl font-medium text-[var(--color-primary)]">Jain</p>
                <p className="font-body mt-1 text-sm text-[var(--color-muted)]">
                  Jain & Swaminarayan options on request
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <p className="text-2xl font-medium text-[var(--color-primary)]">Vrat/Fasting</p>
                <p className="font-body mt-1 text-sm text-[var(--color-muted)]">
                  Fasting menus for Navratri & other occasions
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/catering"
                className="font-body rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Catering Inquiry
              </Link>
              <Link
                href="/menu"
                className="font-body rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                View Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
