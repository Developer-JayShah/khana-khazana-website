import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const highlights = [
  { label: "100% Vegetarian", body: "Every dish on our menu is prepared without meat — crafted for vegetarian traditions and preferences." },
  { label: "Jain & Swaminarayan", body: "Special dietary options available on request for Jain and Swaminarayan guests." },
  { label: "Catering Available", body: "Full-service catering for weddings, religious events, birthdays, and corporate gatherings." },
];

export default function AboutPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              About Khana Khazana
            </p>
            <h2 className="mt-3 text-4xl font-medium leading-tight sm:text-5xl">
              Somerset's Favorite<br />
              <em>Vegetarian Table</em>
            </h2>
            <p className="font-body mt-5 text-base leading-7 text-[var(--color-muted)]">
              Khana Khazana was born from a love of authentic Indian vegetarian
              cooking and a desire to bring those flavors to Somerset, New Jersey.
              Our menu weaves together Gujarati comfort food, Punjabi richness,
              Indo-Chinese boldness, and street-food nostalgia — all under one roof.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <div>
                    <p className="font-body font-semibold text-[var(--color-text)]">{h.label}</p>
                    <p className="font-body mt-1 text-sm leading-6 text-[var(--color-muted)]">{h.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="font-body mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              Our Story →
            </Link>
          </Reveal>

          {/* Image */}
          <Reveal delay={150}>
            <div className="group relative h-80 overflow-hidden rounded-3xl shadow-2xl shadow-orange-900/10 lg:h-[520px]">
              <Image
                src="/about-preview.jpg"
                alt="Inside Khana Khazana restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAACAgIDAAAAAAAAAAAAAAAAAgERBBITMUL/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AkzYl8leDaVpa7r0ABi//2Q=="
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-body text-sm font-bold text-[var(--color-text)]">4.7 ★ on Google</p>
                      <p className="font-body mt-0.5 text-xs text-[var(--color-muted)]">Rated by 188+ local customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
