import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos of Khana Khazana — our food, restaurant, and catering setups in Somerset, NJ.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Khana Khazana",
    description: "Photos of our Indian vegetarian food and restaurant in Somerset, NJ.",
    url: "/gallery",
  },
};

const gallery = [
  { src: "/featured-1.jpg", alt: "Raj Kachori – Khana Khazana", label: "Raj Kachori" },
  { src: "/featured-2.jpg", alt: "Pav Bhaji – Khana Khazana", label: "Pav Bhaji" },
  { src: "/featured-3.jpg", alt: "Veg Hakka Noodles – Khana Khazana", label: "Veg Hakka Noodles" },
  { src: "/Catering.jpg", alt: "Khana Khazana Catering Setup", label: "Catering Events" },
  { src: "/category-1.jpg", alt: "Gujarati Food – Khana Khazana", label: "Gujarati Specials" },
  { src: "/category-2.jpg", alt: "Punjabi Food – Khana Khazana", label: "Punjabi Curries" },
  { src: "/featured-4.jpg", alt: "Paneer Angara – Khana Khazana", label: "Paneer Angara" },
  { src: "/category-3.jpg", alt: "Indo-Chinese Food – Khana Khazana", label: "Indo-Chinese" },
  { src: "/category-4.jpg", alt: "Indian Street Food – Khana Khazana", label: "Street Food" },
  { src: "/about-preview.jpg", alt: "Inside Khana Khazana Restaurant", label: "Our Restaurant" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Look Inside Khana Khazana"
        description="From our kitchen to your plate — photos of our food, restaurant, and catering events."
      />

      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Masonry-style grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <Reveal key={item.src} delay={i * 50}>
                <div
                  className={`group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/10 ${
                    i === 0 || i === 3 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className={`relative w-full ${i === 0 || i === 3 ? "h-72 lg:h-64" : "h-64"}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-body text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
              <h2 className="text-2xl font-medium">Want to see more?</h2>
              <p className="font-body mt-2 text-sm text-[var(--color-muted)]">
                Visit us at 1760 Easton Ave, Somerset, NJ or follow us on social media for daily updates.
              </p>
              <a
                href={`tel:7323669116`}
                className="font-body mt-5 inline-block rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Call Us: 732-366-9116
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
