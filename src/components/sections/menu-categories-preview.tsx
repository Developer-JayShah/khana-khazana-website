import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const categories = [
  { title: "Gujarati", description: "Khaman, Khandvi, Kachori & homestyle farsan.", image: "/category-1.jpg" },
  { title: "Punjabi", description: "Rich paneer curries, dal makhani & Punjabi classics.", image: "/category-2.jpg" },
  { title: "Indo-Chinese", description: "Manchurian, hakka noodles & bold Indo-Chinese flavors.", image: "/category-3.jpg" },
  { title: "Street Food", description: "Pani Puri, Pav Bhaji, chaats & quick bites.", image: "/category-4.jpg" },
];

export default function MenuCategoriesPreview() {
  return (
    <section className="bg-[var(--color-bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Explore Our Menu
              </p>
              <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
                A World of<br />
                <em>Indian Flavours</em>
              </h2>
            </div>
            <Link
              href="/menu"
              className="font-body shrink-0 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              Browse Full Menu →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <Link
                href="/menu"
                className="group block overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-900/10"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} Indian food at Khana Khazana`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                  </div>
                </div>
                <div className="bg-[var(--color-surface)] px-5 py-4">
                  <p className="font-body text-sm leading-6 text-[var(--color-muted)]">{cat.description}</p>
                  <p className="font-body mt-3 text-xs font-semibold text-[var(--color-primary)] transition group-hover:underline">
                    View dishes →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
