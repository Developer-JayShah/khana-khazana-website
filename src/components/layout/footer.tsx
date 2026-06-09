import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Festival Specials", href: "/festival-specials" },
  { label: "Catering Inquiry", href: "/catering" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Khana Khazana"
              width={160}
              height={70}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="font-body mt-4 text-sm leading-6 text-[var(--color-muted)]">
            Authentic Indian Vegetarian Cuisine in Somerset, NJ — with Jain &
            Swaminarayan options and catering for all occasions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-body text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-body text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            <li className="font-body">{siteConfig.address}</li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="font-body transition hover:text-[var(--color-primary)]">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="font-body transition hover:text-[var(--color-primary)]">
                {siteConfig.email}
              </a>
            </li>
            <li className="border-t border-[var(--color-border)] pt-3">
              <p className="font-body font-semibold text-[var(--color-text)]">Hours</p>
              <p className="font-body mt-1">{siteConfig.hours.display}</p>
              <p className="font-body mt-0.5 text-xs text-red-400">{siteConfig.hours.note}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          <p className="font-body text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} Khana Khazana. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/contact" className="font-body text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]">Contact</Link>
            <Link href="/blog" className="font-body text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]">Blog</Link>
            <Link href="/testimonials" className="font-body text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]">Reviews</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
