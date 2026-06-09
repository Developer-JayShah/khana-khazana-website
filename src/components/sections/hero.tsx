import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[580px] w-full items-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Khana Khazana – Authentic Indian Vegetarian Restaurant in Somerset NJ"
        fill
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAAAAgQBAxExEiFx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAAMBAQAAAAAAAAAAAAAAAAACEQFB/9oADAMBAAIRAxEAPwCG5NdpLSbb8XbHa11TGvAADRaOeZw//9k="
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">

          <div className="hero-1 flex items-center gap-3">
            <div className="h-px w-12 bg-[var(--color-accent)]" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Somerset, New Jersey
            </span>
          </div>

          <h1 className="hero-2 mt-4 text-4xl font-medium leading-[1.08] text-white sm:mt-5 sm:text-6xl lg:text-[5.5rem]">
            Authentic Indian<br />
            <em className="text-[var(--color-accent)]">Vegetarian</em>{" "}
            Cuisine
          </h1>

          <p className="hero-3 font-body mt-4 max-w-lg text-sm leading-6 text-white/75 sm:mt-6 sm:text-lg sm:leading-8">
            Gujarati, Punjabi, Indo-Chinese & street food — with Jain and
            Swaminarayan options. Dine-in and catering available.
          </p>

          <div className="hero-4 mt-6 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="font-body rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-all duration-200 hover:bg-[var(--color-primary-dark)] hover:scale-[1.03] sm:px-7 sm:py-3.5"
            >
              Explore Menu
            </Link>
            <Link
              href="/catering"
              className="font-body rounded-lg border-2 border-white bg-transparent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[var(--color-text)] sm:px-7 sm:py-3.5"
            >
              Catering Inquiry
            </Link>
          </div>

          <div className="hero-5 mt-6 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
              <span className="text-xs text-yellow-400 sm:text-sm">★★★★★</span>
              <span className="font-body text-xs text-white/90 sm:text-sm">4.7 · 188 reviews</span>
            </div>
            <div className="font-body rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              100% Vegetarian
            </div>
            <div className="font-body rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              Jain & Swaminarayan Options
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-white/40">
          Scroll
        </span>
        <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
