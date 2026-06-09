import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/reveal";

const items = [
  {
    title: "Raj Kachori",
    description: "A showstopper chaat — crispy shell loaded with yogurt, chutneys, sev, and toppings.",
    price: "$10.99",
    image: "/featured-1.jpg",
    badge: "Most Popular",
  },
  {
    title: "Pav Bhaji",
    description: "Rich, buttery bhaji served with soft toasted pav.",
    price: "$10.99",
    image: "/featured-2.jpg",
    badge: "Bestseller",
  },
  {
    title: "Veg Hakka Noodles",
    description: "Indo-Chinese stir-fried noodles with fresh vegetables.",
    price: "$12.99",
    image: "/featured-3.jpg",
    badge: "Hot Favorite",
  },
  {
    title: "Paneer Angara",
    description: "Smoky, bold paneer curry — our chef's signature dish.",
    price: "$16.99",
    image: "/featured-4.jpg",
    badge: "Chef Special",
  },
];

export default function FeaturedItems() {
  return (
    <section className="bg-[var(--color-bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Featured Dishes
              </p>
              <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
                Customer-Loved<br />
                <em>Favourites</em>
              </h2>
              <p className="font-body mt-3 max-w-md text-base text-[var(--color-muted)]">
                A selection of our most-ordered dishes — fresh, flavorful, and 100% vegetarian.
              </p>
            </div>
            <Link
              href="/menu"
              className="font-body shrink-0 rounded-lg border border-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
            >
              View Full Menu →
            </Link>
          </div>
        </Reveal>

        {/* Magazine layout */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">

          {/* Large feature card */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="group relative h-72 overflow-hidden rounded-2xl lg:h-full lg:min-h-[480px]">
              <Image
                src={items[0].image}
                alt={items[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <span className="font-body inline-block rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
                  {items[0].badge}
                </span>
                <h3 className="mt-2 text-2xl font-medium text-white sm:text-3xl">{items[0].title}</h3>
                <p className="font-body mt-1.5 text-sm text-white/75">{items[0].description}</p>
                <p className="font-body mt-3 text-xl font-bold text-[var(--color-accent)]">{items[0].price}</p>
              </div>
            </div>
          </Reveal>

          {/* 3 smaller cards */}
          <div className="flex flex-col gap-4">
            {items.slice(1).map((item, i) => (
              <Reveal key={item.title} delay={200 + i * 80}>
                <div className="group relative h-44 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="font-body inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.badge}
                    </span>
                    <div className="mt-1 flex items-end justify-between gap-2">
                      <h3 className="text-lg font-medium text-white leading-tight">{item.title}</h3>
                      <span className="font-body shrink-0 text-sm font-bold text-[var(--color-accent)]">{item.price}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
