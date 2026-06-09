"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Khana Khazana"
            width={160}
            height={70}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--color-primary)] underline underline-offset-4 decoration-[var(--color-primary)] decoration-2"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/catering"
            className="font-body rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Catering Inquiry
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-muted)] transition hover:bg-[var(--color-bg)] hover:text-[var(--color-text)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu-enter border-t border-[var(--color-border)] bg-white md:hidden">
          <div className="flex flex-col px-4 py-4">
            {siteConfig.navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-body rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-[var(--color-primary)] underline underline-offset-4 decoration-[var(--color-primary)] decoration-2"
                      : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/catering"
              onClick={() => setOpen(false)}
              className="font-body mt-3 rounded-lg bg-[var(--color-primary)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
            >
              Catering Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
