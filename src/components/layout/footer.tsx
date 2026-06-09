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
          {/* Social links */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition hover:border-[#1877F2] hover:text-[#1877F2]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
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
